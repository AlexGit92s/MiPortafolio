// Site configuration
export const siteConfig = {
  title: 'Alexander Silva | Facilitador de Soluciones Digitales',
  description: 'Transformo ideas en soluciones digitales de alto impacto desde Tegucigalpa, Honduras. Desarrollo web, apps móviles, automatización y estrategia digital con tecnologías de vanguardia.',
  url: 'https://mi-portafolio-red-six.vercel.app',
  author: 'Alexander Silva',
  email: 'alexander92911@gmail.com',
  phone: '+504 9450 0775',
  location: 'Tegucigalpa, Honduras',
  web3forms: {
    accessKey: 'TU_ACCESS_KEY_AQUI', // ← Obtén gratis en https://web3forms.com/
  },
  social: {
    github: 'https://github.com/AlexGit92s',
    linkedin: 'https://linkedin.com/in/tu-perfil',
    twitter: 'https://x.com/Alex92silva',
  },
};

// Navigation
export const navLinks = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Habilidades', href: '#skills' },
  { label: 'Contacto', href: '#contacto' },
];

// Services data
export const services = [
  {
    icon: 'code',
    title: 'Desarrollo Web Full-Stack',
    description: 'Aplicaciones web robustas y escalables con Next.js, React, Laravel y bases de datos PostgreSQL/MySQL.',
    techs: ['Next.js 16', 'React 19', 'Laravel 12', 'TypeScript', 'Tailwind CSS'],
    gradient: 'from-primary-500 to-blue-600',
  },
  {
    icon: 'gear',
    title: 'ERPs & Sistemas a Medida',
    description: 'Sistemas de gestión empresarial: créditos, cobranza, inventarios, contratos y pagos con lógica de negocio compleja.',
    techs: ['Laravel', 'Livewire 3', 'MySQL', 'Spatie Permissions', 'Activity Log'],
    gradient: 'from-orange-500 to-red-600',
  },
  {
    icon: 'rocket',
    title: 'Plataformas SaaS',
    description: 'SaaS multi-tenant con suscripciones, pagos Stripe, módulos activables, invitaciones de equipo y APIs REST.',
    techs: ['NestJS 11', 'Next.js', 'PostgreSQL', 'Prisma', 'Stripe', 'Docker'],
    gradient: 'from-green-500 to-emerald-600',
  },
  {
    icon: 'mobile',
    title: 'Dashboards & Analytics',
    description: 'Paneles administrativos con gráficos en tiempo real, autenticación segura y gestión completa de datos.',
    techs: ['Supabase', 'Recharts', 'Zustand', 'shadcn/ui', 'Row Level Security'],
    gradient: 'from-accent-500 to-purple-600',
  },
  {
    icon: 'search',
    title: 'SEO & Performance',
    description: 'Sitios optimizados con SSR/SSG, Core Web Vitals, meta tags completos y Schema.org para máximo posicionamiento.',
    techs: ['Next.js SSR', 'Sitemap', 'Open Graph', 'Schema.org', 'Lighthouse 95+'],
    gradient: 'from-cyan-500 to-teal-600',
  },
  {
    icon: 'shield',
    title: 'Seguridad & DevOps',
    description: 'CSP, HSTS, autenticación OAuth, Row Level Security, rate limiting y despliegue automatizado con Docker.',
    techs: ['Supabase RLS', 'OAuth', 'Docker', 'Redis', 'Security Headers', 'Stripe'],
    gradient: 'from-pink-500 to-rose-600',
  },
];

// Projects data
export const projects = [
  {
    title: 'Alvarez Metalworks',
    description: 'Sitio web + dashboard administrativo para empresa de estructuras metálicas industriales. Portal de clientes con autenticación, gráficos de analytics y gestión de proyectos.',
    image: '/projects/alvarez-metalworks.webp',
    tags: ['Next.js 16', 'TypeScript', 'Supabase', 'Tailwind CSS 4', 'shadcn/ui', 'Zustand', 'Recharts'],
    url: 'https://alvarez-metalworks.vercel.app/',
    featured: true,
    gradient: 'from-blue-600 to-cyan-600',
  },
  {
    title: 'Los Primos — ERP Completo',
    description: 'ERP completo para grupo empresarial hondureño: Laravel backend con gestión de créditos, contratos, cobranza y pagos. Frontend Next.js con catálogo de productos, calculadora de crédito y tienda online.',
    image: '/projects/los-primos.webp',
    tags: ['Laravel 12', 'Next.js 16', 'Livewire 3', 'MySQL', 'Tailwind CSS', 'React 19', 'Framer Motion'],
    url: 'https://los-primos-web.vercel.app/',
    featured: true,
    gradient: 'from-orange-600 to-red-600',
  },
  {
    title: 'Inversiones Reyes',
    description: 'Plataforma de servicios técnicos empresariales: mantenimiento UPS, infraestructura de servidores y cableado estructurado. Panel admin con RLS, roles y gestión de contenido.',
    image: '/projects/inversiones-reyes.webp',
    tags: ['Next.js 16', 'TypeScript', 'Supabase', 'Tailwind 4', 'shadcn/ui', 'Cloudinary', 'Framer Motion'],
    url: 'https://inversiones-reyes.vercel.app/',
    featured: true,
    gradient: 'from-green-600 to-emerald-600',
  },
  {
    title: 'SkillGenerator CLI',
    description: 'Herramienta CLI TypeScript para generar, adaptar y desplegar skills de IA para Claude Code. Detecta stacks tecnológicos y genera documentación automática.',
    image: '/projects/skill-generator.webp',
    tags: ['TypeScript', 'CLI', 'Node.js', 'Template Engine'],
    url: 'https://github.com/AlexGit92s/SkillGenerator',
    featured: false,
    gradient: 'from-purple-600 to-pink-600',
  },
  {
    title: 'MyConta — SaaS Contable',
    description: 'Plataforma SaaS multi-tenant de contabilidad: planes de suscripción, pagos con Stripe, módulos activables, invitaciones de equipo, OAuth Google y API documentada con Swagger.',
    image: '/projects/saas-platform.webp',
    tags: ['NestJS 11', 'Next.js 16', 'PostgreSQL', 'Prisma', 'Redis', 'Stripe', 'Docker', 'React Query'],
    url: '#',
    featured: false,
    gradient: 'from-yellow-600 to-orange-600',
  },
  {
    title: 'Front Los Primos',
    description: 'Frontend e-commerce del ERP Los Primos: catálogo con filtros, calculadora de crédito a medida, galería de productos y diseño mobile-first optimizado.',
    image: '/projects/front-los-primos.webp',
    tags: ['Next.js 16', 'React 19', 'Tailwind CSS 4', 'Framer Motion', 'Lucide React'],
    url: 'https://los-primos-web.vercel.app/',
    featured: false,
    gradient: 'from-teal-600 to-blue-600',
  },
];

// Skills/Technologies
export const skillCategories = [
  {
    name: 'Frontend',
    skills: ['Next.js 16', 'React 19', 'TypeScript 5', 'Tailwind CSS 4', 'Framer Motion', 'shadcn/ui', 'Radix UI', 'Recharts'],
  },
  {
    name: 'Backend',
    skills: ['Laravel 12', 'NestJS 11', 'Livewire 3', 'PHP 8.2+', 'Node.js', 'REST APIs', 'Express', 'API RESTful'],
  },
  {
    name: 'Bases de Datos',
    skills: ['PostgreSQL', 'MySQL', 'Supabase', 'Redis 7', 'Prisma ORM', 'Eloquent ORM', 'Row Level Security'],
  },
  {
    name: 'DevOps & Infra',
    skills: ['Docker', 'Docker Compose', 'Vercel', 'Supabase', 'Cloudinary', 'Nginx', 'CI/CD', 'Health Checks'],
  },
  {
    name: 'Seguridad & Auth',
    skills: ['Supabase RLS', 'OAuth Google', 'JWT', 'Spatie Permissions', 'CSP Headers', 'HSTS', 'Rate Limiting'],
  },
  {
    name: 'Pagos & SaaS',
    skills: ['Stripe', 'Multi-tenant', 'Suscripciones', 'Trial System', 'Module Gating', 'Team Invitations', 'Swagger'],
  },
];

// Testimonials
export const testimonials = [
  {
    name: 'Carlos Alvarez',
    role: 'CEO, Alvarez Metalworks',
    content: 'El dashboard y portal de clientes transformaron completamente nuestra operación. Ahora gestionamos proyectos y consultas con total transparencia.',
    avatar: '/testimonials/carlos.webp',
    rating: 5,
  },
  {
    name: 'Director Los Primos',
    role: 'Grupo Empresarial, Honduras',
    content: 'El ERP maneja créditos, cobranza e inventarios de forma impecable. La calculadora de crédito online aumentó nuestras solicitudes un 300%.',
    avatar: '/testimonials/los-primos.webp',
    rating: 5,
  },
  {
    name: 'Roberto Reyes',
    role: 'CTO, Inversiones Reyes',
    content: 'La plataforma de servicios técnicos superó nuestras expectativas. El panel admin con roles y RLS nos da control total sobre el contenido.',
    avatar: '/testimonials/roberto.webp',
    rating: 5,
  },
];

// Stats
export const stats = [
  { value: '4+', label: 'Proyectos en Producción' },
  { value: '3', label: 'Clientes Activos' },
  { value: '8+', label: 'Tecnologías Dominadas' },
  { value: '100%', label: 'Proyectos Entregados' },
];
