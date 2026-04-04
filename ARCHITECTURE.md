# 🏗️ Arquitectura del Proyecto

## Flujo de Construcción

```
┌─────────────────────────────────────────────────────────────────┐
│                     DESARROLLO                                  │
│                                                                 │
│  src/config/site.ts  ──→  Datos centralizados                  │
│                            ├── Site config                      │
│                            ├── Services                         │
│                            ├── Projects                         │
│                            ├── Skills                           │
│                            └── Testimonials                     │
│                                                                 │
│  src/components/*.astro  ──→  Componentes UI                   │
│                            ├── SEO.astro (meta + schema)        │
│                            ├── Header.astro (nav responsive)    │
│                            ├── HeroSection.astro                │
│                            ├── ServicesSection.astro            │
│                            ├── ProjectsSection.astro            │
│                            ├── SkillsSection.astro              │
│                            ├── ContactSection.astro             │
│                            └── Footer.astro                     │
│                                                                 │
│  src/layouts/BaseLayout.astro  ──→  Layout global               │
│  src/styles/global.css         ──→  Tailwind + custom           │
│                                                                 │
└─────────────────────────────┬───────────────────────────────────┘
                              │
                    npm run build
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                     BUILD OUTPUT                                │
│                                                                 │
│  dist/                                                          │
│  ├── index.html          ← HTML estático puro                  │
│  ├── _astro/             ← CSS + JS optimizado                 │
│  ├── favicon.svg         ← Assets públicos                     │
│  ├── manifest.json       ← PWA                                 │
│  └── robots.txt          ← SEO                                 │
│                                                                 │
│  Resultado: HTML + CSS + JS vanilla (SIN framework lock-in)    │
└─────────────────────────────┬───────────────────────────────────┘
                              │
                    Deploy a cualquier hosting
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                     PRODUCCIÓN                                  │
│                                                                 │
│  Vercel / Netlify / GitHub Pages / Cualquier servidor web       │
│                                                                 │
│  El output es HTML estático:                                    │
│  - No requiere Node.js en el servidor                          │
│  - No se rompe con actualizaciones de framework                │
│  - Funciona para siempre                                       │
│  - Carga instantánea (< 1s)                                     │
│  - SEO perfecto (Google lee HTML directamente)                 │
└─────────────────────────────────────────────────────────────────┘
```

## Secciones de la Landing Page

```
┌────────────────────────────────────────────┐
│  HEADER (fijo)                             │
│  Logo + Nav + CTA                          │
├────────────────────────────────────────────┤
│  HERO SECTION                              │
│  - Título gradient animado                 │
│  - Subtitle con keywords destacadas        │
│  - CTA buttons                             │
│  - Stats (50+ proyectos, 30+ clientes)     │
│  - Partículas flotantes                    │
│  - Gradient orbs animados                  │
├────────────────────────────────────────────┤
│  SERVICIOS (6 cards)                       │
│  - Desarrollo Web Full-Stack               │
│  - Apps Móviles                            │
│  - Optimización de Performance             │
│  - SEO & Marketing Digital                 │
│  - Automatización & DevOps                 │
│  - Seguridad Web                           │
├────────────────────────────────────────────┤
│  PROYECTOS                                 │
│  - 3 featured (layout horizontal alterno)  │
│  - 3 grid (cards con hover effects)        │
│  - Shine effect en hover                   │
│  - Morphing shapes                         │
├────────────────────────────────────────────┤
│  SKILLS + TESTIMONIOS                      │
│  - 6 categorías de tecnologías             │
│  - 3 testimonios con estrellas             │
│  - Skill tags con hover effects            │
├────────────────────────────────────────────┤
│  CONTACTO                                  │
│  - Info de contacto                        │
│  - Redes sociales                          │
│  - Formulario                              │
├────────────────────────────────────────────┤
│  FOOTER                                    │
│  - Brand + descripción                     │
│  - Links de navegación                     │
│  - Contacto                                │
│  - Social links                            │
└────────────────────────────────────────────┘
```

## SEO Implementation Flow

```
┌────────────────────────────────────────────┐
│  SEO.astro Component                       │
│                                            │
│  ├── Meta Tags                             │
│  │   ├── title                             │
│  │   ├── description                       │
│  │   ├── canonical                         │
│  │   └── robots                            │
│  │                                         │
│  ├── Open Graph                            │
│  │   ├── og:title                          │
│  │   ├── og:description                    │
│  │   ├── og:image (1200x630)               │
│  │   └── og:locale                         │
│  │                                         │
│  ├── Twitter Cards                         │
│  │   ├── twitter:card                      │
│  │   ├── twitter:title                     │
│  │   └── twitter:image                     │
│  │                                         │
│  └── Schema.org JSON-LD                    │
│      ├── Person                            │
│      ├── Service                           │
│      ├── FAQPage                           │
│      └── WebSite                           │
└────────────────────────────────────────────┘
```

## Por qué Astro = No Lock-in

```
Astro NO es como React/Vue/Angular donde:
❌ El output depende del framework en runtime
❌ Necesitas Node.js en el servidor
❌ Actualizar puede romper todo

Astro GENERA:
✅ HTML estático puro (funciona para siempre)
✅ CSS optimizado (Tailwind → solo lo que usas)
✅ JS solo donde se necesita (islands architecture)

El output es 100% portable:
- Puedes migrar a cualquier hosting
- No necesitas mantener Astro actualizado
- El HTML generado funciona siempre
- Google lo lee perfectamente (es HTML!)
```
