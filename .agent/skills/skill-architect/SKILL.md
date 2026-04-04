---
name: skill-architect
description: Genera skills completos a partir de descripciones en lenguaje natural. El usuario dice qué necesita y este skill crea el SKILL.md profesional.
license: MIT
---

# Skill Architect

## Activación

Activar cuando el usuario pida crear un skill nuevo, generar un SKILL.md, o describa lo que quiere que la IA haga en un proyecto.

**Triggers:**
- "Crea un skill para..."
- "Genera instrucciones para..."
- "Necesito que la IA sepa cómo hacer X en este proyecto"
- "Escribe un SKILL.md que..."

## Proceso de Generación

### Paso 1: Entender la petición

Analizar lo que el usuario necesita:
- ¿Qué tecnología/herramienta es?
- ¿Qué problema resuelve?
- ¿Cuáles son las reglas no negociables?
- ¿Hay código existente que deba respetar?

### Paso 2: Detectar contexto del proyecto

Antes de generar, identificar:
- **Framework principal** — ¿Laravel, Django, NestJS, Rails, etc.?
- **Lenguaje** — ¿PHP, Python, TypeScript, Ruby?
- **Testing** — ¿Pest, Jest, Pytest, RSpec?
- **Estilos** — ¿Tailwind, styled-components, Sass?
- **Database** — ¿PostgreSQL, MySQL, MongoDB, SQLite?
- **Estructura** — ¿Módulos, monolito, microservicios?

Si el contexto no está claro, **preguntar al usuario** antes de generar.

### Paso 3: Generar el SKILL.md

Crear un archivo con esta estructura:

```yaml
---
name: {nombre-kebab-case}
description: {Descripción clara de QUÉ hace y CUÁNDO usarlo}
license: MIT
---

# {Título legible}

## Activación

Activar cuando:
- {Trigger 1}
- {Trigger 2}
- {Trigger 3}

## Reglas No Negociables

- ❌ {Regla crítica: qué NUNCA hacer}
- ❌ {Otra regla crítica}
- ✅ {Regla positiva: qué SIEMPRE hacer}
- ✅ {Otra regla positiva}

## Guías de Implementación

### {Sección 1: el tema principal}

{Instrucciones específicas, no genéricas. Incluir código real.}

{Ejemplo:}
\`\`\`{lenguaje}
// Código ejemplo contextual al proyecto
\`\`\`

### {Sección 2: patrones comunes}

{Patrones que se repiten en este tipo de trabajo}

### {Sección 3: errores frecuentes}

{Errores que la IA debe evitar específicamente}

## Estructura de Archivos

\`\`\`
ruta/del/proyecto/
├── archivo-existente1.{ext}
├── archivo-existente2.{ext}
└── donde/va/lo-nuevo/
    └── archivo-nuevo.{ext}
\`\`\`

## Checklist de Calidad

Antes de dar por terminado el trabajo:
- [ ] {Check 1: algo verificable}
- [ ] {Check 2: algo verificable}
- [ ] {Check 3: algo verificable}
- [ ] {Check 4: tests pasan}
- [ ] {Check 5: no breaking changes}

## Referencias del Proyecto

- {Ruta a archivos relevantes existentes}
- {Convención de nombres específica}
- {Patrón arquitectónico que sigue el proyecto}
```

### Paso 4: Validar el SKILL.md generado

Verificar que el skill generado cumple:

| Criterio | Descripción |
|----------|-------------|
| **Específico** | No genérico — menciona archivos, rutas, patrones reales del proyecto |
| **Accionable** | La IA puede seguir las instrucciones sin ambigüedad |
| **Con contexto** | Incluye paths, convenciones, y estructura del proyecto real |
| **Con ejemplos** | Tiene código que se parece al código existente del proyecto |
| **Con límites** | Dice claramente qué NO hacer |
| **Sin duplicación** | No repite skills que ya existen en `.agent/skills/` o `.claude/skills/` |

## Ejemplos de Generación

### Ejemplo 1: Petición simple

**Usuario:** "Crea un skill para que la IA sepa cómo crear migraciones en este proyecto"

**Skill Architect genera:**
```yaml
---
name: database-migrations
description: Guía para crear y ejecutar migraciones de base de datos de forma segura.
---

# Database Migrations

## Activación
- Cuando crear nueva tabla o columna
- Cuando modificar esquema existente
- Cuando rollback o reset de migraciones

## Reglas No Negociables
- ❌ NUNCA modificar migraciones ya ejecutadas en producción
- ❌ NUNCA usar DROP sin backup previo
- ✅ SIEMPRE probar `migrate:rollback` en local antes de deploy
- ✅ SIEMPRE incluir down() reversible
```

### Ejemplo 2: Petición compleja

**Usuario:** "Necesito un skill que le diga a la IA cómo manejar la facturación en PDF con las reglas fiscales de este país"

**Skill Architect genera:** Un SKILL.md completo con:
- Reglas fiscales específicas
- Formato de PDF requerido
- Datos obligatorios por ley
- Librería exacta que usa el proyecto
- Rutas a templates existentes
- Tests que deben pasar

### Ejemplo 3: Petición de seguridad

**Usuario:** "Crea un skill para que la IA nunca exponga datos sensibles en logs ni errores"

**Skill Architect genera:** Un SKILL.md con:
- Qué datos son sensibles en ESTE proyecto
- Cómo sanitizar logs
- Patrón de error handling
- Middlewares existentes
- Variables de .env que nunca loguear

## Cuando Falta Información

Si la petición del usuario es ambigua o falta contexto:

1. **Preguntar** — "¿Qué framework usa el proyecto?" "¿Qué librería de testing?"
2. **Ofrecer opciones** — "¿Prefieres Pest o PHPUnit?" "¿Tailwind v3 o v4?"
3. **Proponer default** — "Asumo Laravel + Pest + Tailwind, ¿correcto?"

NUNCA generar un skill genérico sin contexto — siempre adaptar al proyecto real.
