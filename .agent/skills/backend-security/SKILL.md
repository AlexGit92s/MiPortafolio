---
name: backend-security
description: Backend security hardening — data integrity, zero exposure, no data leaks to attackers, secure APIs, input validation, and defense in depth.
license: MIT
---

# Backend Security Hardening

## Project Context
- **Framework**: {{FRAMEWORK}}
- **Language**: {{LANGUAGE}}
- **Database**: Not specified
- **Project Path**: C:\laragon\www\mi-portafolio

## Core Principle

**Zero Trust Backend**: Every request is potentially malicious. Every response must leak zero data. Every error must be sanitized.

---

## 1. Input Validation & Sanitization

### Rule: Never Trust Any Input
- Validate ALL inputs at the boundary (controllers, API endpoints)
- Whitelist, don't blacklist — define what's ALLOWED, not what's blocked
- Validate type, length, format, and range for every field

### Patterns
```
# Always:
- Strings: trim + max length + allowed chars
- Numbers: type check + min/max range
- IDs: validate format (UUID, integer) before DB query
- Files: check MIME type, not just extension
- URLs: validate scheme + host whitelist
```

### ❌ NEVER
```php
// NEVER use raw input in queries
User::where('email', request('email'))->first();

// NEVER trust client-supplied IDs for authorization
$record = Model::find(request('id'));

// NEVER echo raw input in responses
return response(['error' => request('message')]);
```

### ✅ ALWAYS
```php
// Validate first, then use
$data = $request->validate([
    'email' => 'required|email|max:255',
    'role'  => 'required|in:admin,user,manager', // whitelist
]);

// Authorize after validation
$record = Model::findOrFail($data['id']);
$this->authorize('view', $record);

// Return safe responses
return response(['message' => 'Updated successfully']);
```

---

## 2. Data Exposure Prevention

### Rule: API Responses Must Leak Zero Internal Data

### Mass Assignment Protection
```
- Define $fillable on all models (not $guarded = [])
- NEVER pass $request->all() to create() or update()
- Use explicit field assignment or DTOs
```

### Response Sanitization
```
- Use API Resources / Transformers to control output
- NEVER return model instances directly from endpoints
- Strip: internal IDs, passwords, hashes, tokens, metadata
- Explicitly define what fields are exposed
```

### ❌ NEVER
```php
// NEVER return raw models
return response()->json($user);

// NEVER expose internal state
return response()->json([
    'user' => $user,
    'debug' => config('app.debug'),
    'sql' => DB::getQueryLog(),
]);

// NEVER leak stack traces
catch (\Exception $e) {
    return response(['error' => $e->getMessage(), 'trace' => $e->getTraceAsString()]);
}
```

### ✅ ALWAYS
```php
// Use resources
return new UserResource($user);

// Safe error responses
catch (\Exception $e) {
    Log::error($e->getMessage()); // log internally
    return response()->json([
        'message' => 'An error occurred. Reference: ' . $referenceId
    ], 500);
}

// Paginated responses with no extras
return response()->json([
    'data' => $items->items(),
    'meta' => ['total' => $items->total(), 'page' => $items->currentPage()]
]);
```

---

## 3. Authentication & Authorization

### Rule: Authn First, Then Authz, Then Action

### Every Endpoint Must:
1. **Authenticate** — Who is this?
2. **Authorize** — Can they do this?
3. **Validate** — Is the input correct?
4. **Execute** — Only then, do the action

### ❌ NEVER
- Bypass auth middleware on any route
- Use `auth()->check()` without handling the unauthenticated case
- Authorize based on client-supplied role/permission fields
- Allow IDOR (Insecure Direct Object Reference) — always check ownership

### ✅ ALWAYS
```php
// Route protection
Route::middleware(['auth:sanctum', 'verified'])->group(function () {
    Route::post('/contracts/{contract}/approve', [ContractController::class, 'approve']);
});

// Controller authorization
public function approve(Request $request, Contract $contract)
{
    $this->authorize('approve', $contract); // checks ownership + permissions
    // ... action
}

// Scope queries to authenticated user's data
$contracts = $request->user()->contracts()->where('status', 'pending')->get();
```

---

## 4. SQL Injection & Query Safety

### Rule: Parameterized Queries Always

### Protection Layers:
- ORM (Eloquent, Prisma, SQLAlchemy) — handles parameterization
- Query Builder — also safe if used correctly
- Raw queries — **NEVER** with user input

### ❌ NEVER
```php
// NEVER string concatenation in queries
DB::select("SELECT * FROM users WHERE email = '" . $input . "'");

// NEVER raw where clauses with input
Model::whereRaw("status = '{$request->status}'")->get();
```

### ✅ ALWAYS
```php
// ORM (safest)
User::where('email', $input)->first();

// Parameterized raw queries
DB::select('SELECT * FROM users WHERE email = ?', [$input]);
```

---

## 5. Error Handling & Logging

### Rule: Log Everything Internally, Expose Nothing

### Error Response Strategy:
| Error Type | Log | Expose |
|-----------|-----|--------|
| Validation | No | Field-specific messages |
| Auth failure | Yes (user + IP) | "Unauthorized" |
| Not found | No | "Resource not found" |
| Server error | Yes (full trace) | Generic message + reference ID |
| Rate limit | Yes (IP + endpoint) | "Too many requests" |

### ❌ NEVER
```php
// NEVER expose stack traces
throw new \Exception($e->getMessage());

// NEVER log sensitive data
Log::info('User login', ['user' => $user, 'password' => $password]);

// NEVER return framework debug in production
'exception' => $e,
'trace' => $e->getTraceAsString(),
```

### ✅ ALWAYS
```php
// Safe error handler
catch (\Throwable $e) {
    $ref = Str::uuid()->toString();
    Log::error("[$ref] " . $e->getMessage(), [
        'trace' => $e->getTraceAsString(),
        'user_id' => auth()->id(),
        'ip' => request()->ip(),
        'url' => request()->fullUrl(),
    ]);
    return response()->json([
        'message' => 'Internal error. Reference: ' . $ref
    ], 500);
}
```

---

## 6. Rate Limiting & Abuse Prevention

### Rule: Every Endpoint Must Have Limits

| Endpoint Type | Limit | Window |
|--------------|-------|--------|
| Login/Auth | 5 attempts | 1 minute |
| API read | 60 requests | 1 minute |
| API write | 20 requests | 1 minute |
| File upload | 10 requests | 1 minute |
| Password reset | 3 attempts | 15 minutes |

### Implement:
- Rate limiting per user + per IP
- Exponential backoff on failures
- Account lockout after repeated failures
- CAPTCHA after suspicious activity

---

## 7. File Upload Security

### Rule: Every Upload Is an Attack Vector

### Validations:
- MIME type verification (server-side, not client)
- File size limits
- Filename sanitization (strip special chars, use UUIDs)
- Store outside webroot
- Scan for malicious content if possible

### ❌ NEVER
- Store uploads in `public/` with original filenames
- Allow executable file types
- Trust `$_FILES` or `Content-Type` header from client
- Display uploaded files directly (serve through controller with proper headers)

---

## 8. Headers & CORS

### Required Security Headers:
```
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
X-XSS-Protection: 0
Referrer-Policy: strict-origin-when-cross-origin
Content-Security-Policy: default-src 'self'
Strict-Transport-Security: max-age=31536000; includeSubDomains
```

### CORS:
- **NEVER** use `*` for `Access-Control-Allow-Origin` in production
- Whitelist specific origins
- Restrict allowed methods
- Disable credentials for public endpoints

---

## 9. Secrets & Configuration

### Rule: Zero Secrets in Code

- `.env` files — NEVER committed to git
- API keys — use environment variables or secret managers
- Database credentials — never hardcoded
- Encryption keys — rotate periodically
- JWT secrets — minimum 32 characters, rotate on breach

### .gitignore Must Include:
```
.env
.env.*
storage/logs/*
storage/app/private/*
*.key
*.pem
```

---

## 10. Audit Trail

### Rule: Every State Change Is Logged

Log these events with: user ID, timestamp, IP, action, before/after state:
- Authentication events (login, logout, failed attempts)
- Authorization changes (role changes, permission grants)
- Data mutations (create, update, delete on sensitive models)
- File operations (upload, delete)
- Configuration changes

### Log Format:
```json
{
  "event": "contract_approved",
  "user_id": 42,
  "ip": "192.168.1.1",
  "timestamp": "2025-01-15T10:30:00Z",
  "resource": "contracts/123",
  "before": { "status": "pending" },
  "after": { "status": "approved" }
}
```

---

## Common Pitfalls

- ❌ Returning full model instances from API endpoints
- ❌ Exposing stack traces or query logs in responses
- ❌ Using `$request->all()` for mass assignment
- ❌ Missing authorization checks on related resources (IDOR)
- ❌ Logging passwords, tokens, or PII
- ❌ No rate limiting on auth endpoints
- ❌ Trusting client-supplied role/permission fields
- ❌ Storing uploads with original filenames in public directories
- ❌ CORS with `*` wildcard in production
- ❌ `.env` files in git history

---

## Checklist Before Deploy

- [ ] All endpoints validate input
- [ ] All endpoints authorize access
- [ ] API responses use resources/transformers
- [ ] No raw model returns from controllers
- [ ] Error responses expose zero internals
- [ ] Rate limiting on all endpoints
- [ ] Security headers configured
- [ ] CORS restricted to specific origins
- [ ] No secrets in code or git history
- [ ] Audit logging on state changes
- [ ] File uploads validated and stored safely
- [ ] Database queries use parameterized statements
- [ ] `.env` in `.gitignore`
- [ ] Debug mode OFF in production

## When to Use
- Before any production deployment
- During code review of backend changes
- When adding new API endpoints
- When modifying auth logic
- When handling file uploads
- When exposing data via APIs
- When reviewing error handling
