# 🚀 Mi Portafolio — Landing Page Profesional

> Landing page de alto rendimiento para ofrecer servicios como Facilitador de Soluciones Digitales

## 🎯 Tecnologías (Framework-Agnostic, No Version Lock-in)

| Tecnología | Rol | Por qué |
|---|---|---|
| **Astro** | Framework principal | HTML estático, SEO perfecto, framework-agnostic |
| **Tailwind CSS** | Estilos | Utility-first, personalizable, sin lock-in |
| **SkillGenerator** | Skills IA | Genera SKILL.md para Claude Code |

**Ventaja clave:** Astro genera **HTML estático puro**. No estás atado a ninguna versión. El output es HTML + CSS + JS vanilla que funciona para siempre.

## ✨ Características

### Efectos Visuales y Animaciones
- ✅ **Floating particles** animados en el hero
- ✅ **Gradient orbs** con blur y movimiento
- ✅ **Morphing shapes** con border-radius animation
- ✅ **Glass morphism** cards con backdrop-blur
- ✅ **Shine effect** en hover de proyectos
- ✅ **Scroll-triggered animations** con Intersection Observer
- ✅ **Smooth gradient text** animations
- ✅ **Glow borders** en hover
- ✅ **Grid background** pattern
- ✅ **Noise texture** overlay

### SEO (Optimización Completa)
- ✅ **Meta tags** completos (title, description, canonical, robots)
- ✅ **Open Graph** (Facebook, LinkedIn)
- ✅ **Twitter Cards**
- ✅ **Schema.org JSON-LD** (Person, Service, FAQPage, WebSite)
- ✅ **Semantic HTML5** (`<main>`, `<nav>`, `<article>`, `<section>`)
- ✅ **robots.txt** configurado
- ✅ **sitemap** (generado automáticamente al agregar páginas)
- ✅ **PWA manifest** para instalabilidad
- ✅ **Core Web Vitals** optimizados (LCP, FID, CLS)

### Performance
- ✅ **Static Site Generation** = HTML puro, no hay servidor
- ✅ **Zero JS innecesario** = solo lo que se usa
- ✅ **Font preloading** optimizado
- ✅ **DNS prefetch** para dominios externos
- ✅ **CSS crítico** inline

## 📁 Estruct del Proyecto

```
mi-portafolio/
├── src/
│   ├── components/
│   │   ├── SEO.astro            # Meta tags + Schema.org
│   │   ├── Header.astro         # Navbar responsive
│   │   ├── Footer.astro         # Footer con redes sociales
│   │   ├── HeroSection.astro    # Sección principal
│   │   ├── ServicesSection.astro # Servicios ofrecidos
│   │   ├── ProjectsSection.astro # Portafolio de proyectos
│   │   ├── SkillsSection.astro   # Stack tecnológico + testimonios
│   │   └── ContactSection.astro  # Formulario de contacto
│   ├── config/
│   │   └── site.ts              # TODOS los datos del sitio
│   ├── layouts/
│   │   └── BaseLayout.astro     # Layout base con SEO
│   ├── pages/
│   │   └── index.astro          # Página principal
│   └── styles/
│       └── global.css           # Tailwind + custom CSS
├── public/
│   ├── favicon.svg              # Favicon
│   ├── manifest.json            # PWA manifest
│   └── robots.txt               # Robots de rastreo
├── .agent/skills/               # Skills de IA generadas
│   ├── astro/SKILL.md
│   ├── tailwindcss-development/SKILL.md
│   ├── performance-optimization/SKILL.md
│   ├── frontend-design/SKILL.md
│   ├── backend-security/SKILL.md
│   └── skill-architect/SKILL.md
├── astro.config.mjs             # Configuración Astro
├── tailwind.config.js           # Configuración Tailwind
├── package.json
└── SEO-GUIDE.md                 # Guía completa de SEO
```

## 🚀 Inicio Rápido

```bash
# Instalar dependencias
npm install

# Modo desarrollo (hot reload)
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview
```

## 🎨 Personalización

### 1. Datos del sitio
Edita `src/config/site.ts`:
```ts
export const siteConfig = {
  title: 'Tu Nombre | Tu Título',
  description: 'Tu descripción',
  url: 'https://tu-dominio.com',
  email: 'tu@email.com',
  // ... más
};
```

### 2. Colores
Edita `tailwind.config.js` → `theme.extend.colors`

### 3. Proyectos
Edita `src/config/site.ts` → `projects`

### 4. Servicios
Edita `src/config/site.ts` → `services`

### 5. Skills/Tecnologías
Edita `src/config/site.ts` → `skillCategories`

## 🌐 Deploy

### Vercel (Recomendado)
```bash
npm i -g vercel
vercel
```

### Netlify
```bash
npm run build
# Subir la carpeta dist/ a Netlify
```

### GitHub Pages
```bash
npm run build
# Push dist/ a la rama gh-pages
```

### Laragon (Local)
El build genera HTML estático en `dist/`. Puedes copiarlo a cualquier servidor web.

## 📊 SEO Checklist

Ver [`SEO-GUIDE.md`](./SEO-GUIDE.md) para la guía completa que incluye:

- Explicación detallada de SEO
- Keywords strategy
- Herramientas gratuitas
- Checklist pre/post lanzamiento
- Estrategia de contenidos
- Link building
- Core Web Vitals
- Errores comunes a evitar

## 🔧 Skills de IA Generadas

Este proyecto incluye 6 skills generadas con SkillGenerator para asistir en desarrollo futuro:

| Skill | Propósito |
|---|---|
| **astro** | Mejores prácticas de Astro |
| **tailwindcss-development** | Patrones de Tailwind CSS |
| **performance-optimization** | Optimización de rendimiento |
| **frontend-design** | Diseño frontend y UX |
| **backend-security** | Seguridad en aplicaciones web |
| **skill-architect** | Crear nuevas skills |

## 📱 Responsive

El sitio es **100% responsive**:
- **Mobile:** 320px+
- **Tablet:** 768px+
- **Desktop:** 1024px+
- **Wide:** 1280px+

## ♈ Accesibilidad

- Semantic HTML5
- ARIA labels en botones y navegación
- Keyboard navigation
- Color contrast WCAG AA
- Focus states visibles

## 📄 Licencia

MIT — Haz lo que quieras con esto.

---

> **Hecho con ♥ y código limpio**
