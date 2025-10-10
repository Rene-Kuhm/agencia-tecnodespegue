# 🚀 Agencia TecnoDespegue

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-15.5.4-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.1.0-61dafb?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8?style=for-the-badge&logo=tailwind-css)

**Sitio web corporativo profesional construido con las tecnologías más modernas del ecosistema React**

[Demo en vivo](#) • [Documentación](#-documentación) • [Reportar Bug](#)

</div>

---

## 📋 Tabla de Contenidos

- [Características](#-características)
- [Stack Tecnológico](#-stack-tecnológico)
- [Inicio Rápido](#-inicio-rápido)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Comandos Disponibles](#-comandos-disponibles)
- [Variables de Entorno](#-variables-de-entorno)
- [Hooks Personalizados](#-hooks-personalizados)
- [Componentes](#-componentes)
- [Constantes y Tipos](#-constantes-y-tipos)
- [SEO y Performance](#-seo-y-performance)
- [Deployment](#-deployment)
- [Contribuir](#-contribuir)
- [Licencia](#-licencia)

---

## ✨ Características

### Funcionalidades Principales
- ⚡ **Next.js 15** con App Router y React Server Components
- 🎨 **Tailwind CSS v4** con sistema de diseño personalizado
- 🧩 **shadcn/ui** - Componentes UI accesibles y reutilizables
- 📱 **Responsive Design** - Mobile-first y totalmente adaptable
- 🌙 **Dark Mode** - Tema oscuro inmersivo con next-themes
- ⚙️ **TypeScript** - Type safety completo en todo el proyecto
- 🚀 **Turbopack** - Bundler ultra-rápido para desarrollo
- 🔍 **Biome** - Linting y formateo 10x más rápido que ESLint/Prettier

### Optimizaciones
- 🎯 **SEO Optimizado** - Metadata completa, sitemap dinámico, robots.txt
- 📊 **Performance** - Lazy loading, code splitting, optimización de assets
- ♿ **Accesibilidad** - Componentes accesibles con ARIA labels
- 🎭 **Animaciones** - Efectos suaves con CSS y React
- 🔒 **Type Safe** - Sin errores de TypeScript
- 📦 **Bundle Optimizado** - ~150KB First Load JS

### Funcionalidades del Sitio
- 🏠 Página de inicio con hero y secciones destacadas
- 💼 Portafolio de proyectos con filtros
- 👥 Página de equipo con perfiles
- 📧 Formulario de contacto funcional
- 🛠️ Página de servicios detallada
- 📰 Newsletter integrado

---

## 🛠️ Stack Tecnológico

### Core
| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| [Next.js](https://nextjs.org) | 15.5.4 | Framework React full-stack |
| [React](https://react.dev) | 19.1.0 | Library UI |
| [TypeScript](https://typescriptlang.org) | 5.x | Lenguaje tipado |
| [Tailwind CSS](https://tailwindcss.com) | 4.0 | Framework CSS utility-first |

### UI & Styling
| Tecnología | Propósito |
|------------|-----------|
| [shadcn/ui](https://ui.shadcn.com) | Componentes UI base |
| [Radix UI](https://radix-ui.com) | Primitivas accesibles |
| [Lucide Icons](https://lucide.dev) | Librería de iconos |
| [next-themes](https://github.com/pacocoursey/next-themes) | Gestión de temas |
| [OKLCH Colors](https://oklch.com) | Sistema de colores moderno |

### Developer Tools
| Tecnología | Propósito |
|------------|-----------|
| [Biome](https://biomejs.dev) | Linter y formatter |
| [Turbopack](https://turbo.build) | Bundler de desarrollo |
| [clsx](https://github.com/lukeed/clsx) | Utilidad para clases CSS |
| [tailwind-merge](https://github.com/dcastil/tailwind-merge) | Merge de clases Tailwind |

---

## 🚀 Inicio Rápido

### Prerequisitos

Asegúrate de tener instalado:
- **Node.js** >= 18.17.0
- **npm** >= 9.0.0 (o pnpm/yarn)
- **Git**

### Instalación

1. **Clona el repositorio**
   ```bash
   git clone https://github.com/tu-usuario/agencia-tecnodespegue.git
   cd agencia-tecnodespegue
   ```

2. **Instala las dependencias**
   ```bash
   npm install
   ```

3. **Configura las variables de entorno**
   ```bash
   cp .env.example .env.local
   ```

   Edita `.env.local` con tus valores:
   ```env
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   NEXT_PUBLIC_SITE_NAME=TecnoDespegue
   ```

4. **Inicia el servidor de desarrollo**
   ```bash
   npm run dev
   ```

5. **Abre tu navegador**

   Visita [http://localhost:3000](http://localhost:3000)

### Verificación de Instalación

```bash
# Verificar tipos TypeScript
npm run type-check

# Ejecutar linter
npm run lint

# Ejecutar todos los checks
npm run check
```

---

## 📁 Estructura del Proyecto

```
agencia-tecnodespegue/
│
├── public/                      # Assets estáticos
│   ├── favicon.svg             # Favicon del sitio
│   ├── robots.txt              # SEO: Configuración de crawlers
│   ├── portfolio/              # Imágenes de proyectos
│   └── team/                   # Fotos del equipo
│
├── src/
│   ├── app/                    # 📄 App Router (Next.js 15)
│   │   ├── (routes)/
│   │   │   ├── contacto/       # Página de contacto
│   │   │   ├── nosotros/       # Página sobre nosotros
│   │   │   ├── portafolio/     # Galería de proyectos
│   │   │   └── servicios/      # Servicios ofrecidos
│   │   ├── layout.tsx          # Layout raíz con metadata
│   │   ├── page.tsx            # Página de inicio
│   │   ├── globals.css         # Estilos globales + Tailwind
│   │   ├── sitemap.ts          # Sitemap dinámico (SEO)
│   │   └── manifest.ts         # PWA Manifest
│   │
│   ├── components/             # 🧩 Componentes React
│   │   ├── ui/                 # Componentes base (shadcn/ui)
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── input.tsx
│   │   │   └── ...
│   │   ├── layout/             # Componentes de layout
│   │   │   ├── navbar.tsx      # Navegación principal
│   │   │   └── footer.tsx      # Footer del sitio
│   │   ├── sections/           # Secciones de páginas
│   │   │   ├── tech-carousel.tsx
│   │   │   ├── team-section.tsx
│   │   │   └── newsletter.tsx
│   │   └── effects/            # Efectos visuales
│   │       ├── cursor-follower.tsx
│   │       └── scroll-reveal.tsx
│   │
│   ├── hooks/                  # 🪝 Custom React Hooks
│   │   ├── use-media-query.ts      # Detección de breakpoints
│   │   ├── use-scroll-position.ts  # Posición del scroll
│   │   ├── use-intersection-observer.ts  # Viewport detection
│   │   ├── use-mounted.ts          # Client-side mounting
│   │   └── index.ts                # Barrel export
│   │
│   ├── constants/              # 📊 Constantes de la aplicación
│   │   ├── site.ts             # Config del sitio y redes sociales
│   │   ├── navigation.ts       # Items de navegación
│   │   ├── services.ts         # Servicios y tecnologías
│   │   └── index.ts            # Barrel export
│   │
│   ├── types/                  # 📝 Definiciones TypeScript
│   │   ├── common.ts           # Tipos reutilizables
│   │   ├── portfolio.ts        # Tipos de proyectos
│   │   ├── team.ts             # Tipos de equipo
│   │   ├── contact.ts          # Tipos de formularios
│   │   └── index.ts            # Barrel export
│   │
│   └── lib/                    # 🔧 Utilidades
│       └── utils.ts            # Helper functions (cn, etc.)
│
├── .env.example                # Template de variables de entorno
├── .gitignore                  # Archivos ignorados por Git
├── biome.json                  # Configuración de Biome
├── components.json             # Configuración de shadcn/ui
├── next.config.ts              # Configuración de Next.js
├── package.json                # Dependencias y scripts
├── postcss.config.mjs          # Configuración de PostCSS
├── tsconfig.json               # Configuración de TypeScript
├── README.md                   # Este archivo
├── MEJORAS_REALIZADAS.md       # Log de mejoras
└── PROJECT_STRUCTURE.md        # Estructura detallada
```

---

## 🎮 Comandos Disponibles

### Desarrollo

```bash
# Inicia el servidor de desarrollo con Turbopack
npm run dev

# El sitio estará disponible en http://localhost:3000
# Hot reload activado automáticamente
```

### Producción

```bash
# Construye la aplicación optimizada para producción
npm run build

# Inicia el servidor de producción
npm run start

# Preview de la build en http://localhost:3000
```

### Code Quality

```bash
# Ejecuta Biome para verificar el código
npm run lint

# Ejecuta Biome y corrige problemas automáticamente
npm run lint:fix

# Formatea todo el código con Biome
npm run format

# Verifica tipos TypeScript sin generar archivos
npm run type-check

# Ejecuta lint + fix + type-check en un solo comando
npm run check
```

### Scripts Personalizados

| Script | Descripción |
|--------|-------------|
| `dev` | Desarrollo con Turbopack (hot reload) |
| `build` | Build optimizado para producción |
| `start` | Servidor de producción |
| `lint` | Analiza código con Biome |
| `lint:fix` | Analiza y corrige automáticamente |
| `format` | Formatea todo el código |
| `type-check` | Verifica tipos TypeScript |
| `check` | Ejecuta todos los checks de calidad |

---

## 🔐 Variables de Entorno

### Configuración Requerida

Crea un archivo `.env.local` basado en `.env.example`:

```env
# ============================================
# CONFIGURACIÓN DEL SITIO
# ============================================
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME=TecnoDespegue

# ============================================
# ANALYTICS (Opcional)
# ============================================
# NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
# NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX

# ============================================
# FORMULARIO DE CONTACTO (Opcional)
# ============================================
# EMAIL_FROM=noreply@tecnodespegue.com
# EMAIL_TO=contacto@tecnodespegue.com
# RESEND_API_KEY=re_xxxxxxxxxxxx

# ============================================
# REDES SOCIALES
# ============================================
NEXT_PUBLIC_FACEBOOK_URL=https://facebook.com/tecnodespegue
NEXT_PUBLIC_TWITTER_URL=https://twitter.com/tecnodespegue
NEXT_PUBLIC_LINKEDIN_URL=https://linkedin.com/company/tecnodespegue
NEXT_PUBLIC_INSTAGRAM_URL=https://instagram.com/tecnodespegue
```

### Variables Disponibles

| Variable | Tipo | Descripción | Requerida |
|----------|------|-------------|-----------|
| `NEXT_PUBLIC_SITE_URL` | string | URL base del sitio | ✅ Sí |
| `NEXT_PUBLIC_SITE_NAME` | string | Nombre del sitio | ✅ Sí |
| `NEXT_PUBLIC_GA_ID` | string | Google Analytics ID | ❌ No |
| `NEXT_PUBLIC_GTM_ID` | string | Google Tag Manager ID | ❌ No |
| `EMAIL_FROM` | string | Email remitente | ❌ No |
| `RESEND_API_KEY` | string | API Key de Resend | ❌ No |

> **Nota:** Las variables con prefijo `NEXT_PUBLIC_` están disponibles en el cliente.

---

## 🪝 Hooks Personalizados

El proyecto incluye 4 custom hooks optimizados para casos de uso comunes:

### `useMediaQuery`

Detecta si una media query CSS coincide con el viewport actual.

```typescript
import { useMediaQuery } from "@/hooks"

function MyComponent() {
  const isMobile = useMediaQuery("(max-width: 768px)")
  const isDesktop = useMediaQuery("(min-width: 1024px)")
  const isDarkMode = useMediaQuery("(prefers-color-scheme: dark)")

  return (
    <div>
      {isMobile ? <MobileNav /> : <DesktopNav />}
    </div>
  )
}
```

**Parámetros:**
- `query: string` - Media query CSS válida

**Returns:** `boolean` - `true` si la query coincide

---

### `useScrollPosition`

Rastrea la posición actual del scroll en la página.

```typescript
import { useScrollPosition } from "@/hooks"

function ScrollIndicator() {
  const { y } = useScrollPosition()
  const isScrolled = y > 100

  return (
    <nav className={isScrolled ? "shadow-lg" : ""}>
      Scroll: {y}px
    </nav>
  )
}
```

**Returns:** `{ x: number, y: number }` - Coordenadas del scroll

---

### `useIntersectionObserver`

Detecta cuando un elemento entra en el viewport (útil para animaciones).

```typescript
import { useIntersectionObserver } from "@/hooks"

function AnimatedSection() {
  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0.5,  // 50% del elemento visible
    freezeOnceVisible: true  // No observar después de ser visible
  })

  return (
    <div ref={ref} className={isVisible ? "animate-fade-in" : "opacity-0"}>
      ¡Este contenido se anima al entrar en vista!
    </div>
  )
}
```

**Parámetros:**
- `threshold?: number` - % visible requerido (0-1)
- `root?: Element` - Elemento contenedor
- `rootMargin?: string` - Margen del viewport
- `freezeOnceVisible?: boolean` - Dejar de observar después de visible

**Returns:** `[ref, isVisible]`

---

### `useMounted`

Previene errores de hidratación en componentes client-side.

```typescript
import { useMounted } from "@/hooks"

function ClientOnlyComponent() {
  const mounted = useMounted()

  if (!mounted) return null

  // Este código solo se ejecuta en el cliente
  return <div>{window.innerWidth}px</div>
}
```

**Returns:** `boolean` - `true` cuando el componente está montado

---

## 🧩 Componentes

### Componentes UI (shadcn/ui)

Todos los componentes UI están basados en Radix UI y son completamente accesibles:

- `Button` - Botones con múltiples variantes
- `Card` - Tarjetas con header, content y footer
- `Input` - Campos de entrada de texto
- `Avatar` - Avatares de usuario
- `Badge` - Etiquetas y badges
- `Separator` - Separadores visuales
- `Sonner` - Sistema de toasts/notificaciones

### Componentes de Layout

- **Navbar** (`components/layout/navbar.tsx`)
  - Navegación responsive
  - Menu mobile con hamburger
  - Links activos con Next.js Link

- **Footer** (`components/layout/footer.tsx`)
  - Enlaces rápidos organizados
  - Redes sociales
  - Copyright y legal

### Componentes de Secciones

- **TechCarousel** - Carrusel infinito de tecnologías
- **TeamSection** - Grid de miembros del equipo
- **Newsletter** - Formulario de suscripción

### Componentes de Efectos

- **CursorFollower** - Cursor personalizado que sigue el mouse
- **ScrollReveal** - Wrapper para animaciones on-scroll

---

## 📊 Constantes y Tipos

### Constantes (`src/constants/`)

#### Site Configuration
```typescript
import { SITE_CONFIG, SOCIAL_LINKS, CONTACT_INFO } from "@/constants"

console.log(SITE_CONFIG.name)  // "TecnoDespegue"
console.log(SITE_CONFIG.description)
console.log(SOCIAL_LINKS.linkedin)
console.log(CONTACT_INFO.email)
```

#### Navigation
```typescript
import { NAV_ITEMS, FOOTER_LINKS } from "@/constants"

// Items del menú principal
NAV_ITEMS.map(item => (
  <Link href={item.href}>{item.label}</Link>
))

// Enlaces del footer por categoría
FOOTER_LINKS.company
FOOTER_LINKS.support
FOOTER_LINKS.legal
```

#### Services
```typescript
import { SERVICES, TECHNOLOGIES } from "@/constants"

// Lista de servicios ofrecidos
SERVICES.forEach(service => {
  console.log(service.title)
  console.log(service.features)
})

// Stack tecnológico
TECHNOLOGIES  // ["Next.js", "React", "TypeScript", ...]
```

### Tipos TypeScript (`src/types/`)

#### Common Types
```typescript
import type { WithChildren, WithClassName, PropsWithBase } from "@/types"

// Props con children
type ButtonProps = WithChildren<{ onClick: () => void }>

// Props con className
type CardProps = WithClassName<{ title: string }>

// Props con id, className y data-testid
type ComponentProps = PropsWithBase<{ variant: "primary" | "secondary" }>
```

#### Portfolio Types
```typescript
import type { Project, ProjectCategory, Testimonial } from "@/types"

const project: Project = {
  id: "proyecto-1",
  title: "E-commerce App",
  description: "Tienda online completa",
  category: "ecommerce",
  tags: ["Next.js", "Stripe"],
  image: "/portfolio/proyecto-1.jpg"
}
```

#### Team Types
```typescript
import type { TeamMember, SocialLinks } from "@/types"

const member: TeamMember = {
  id: "juan-perez",
  name: "Juan Pérez",
  role: "Full Stack Developer",
  avatar: "/team/juan.jpg",
  social: {
    linkedin: "https://linkedin.com/in/juan-perez",
    github: "https://github.com/jperez"
  }
}
```

#### Contact Types
```typescript
import type { ContactFormData, ContactFormState } from "@/types"

const formData: ContactFormData = {
  name: "Juan Pérez",
  email: "juan@example.com",
  subject: "Consulta sobre servicios",
  message: "Me gustaría más información",
  budget: "medium",
  preferredContact: "email"
}
```

---

## 🎯 SEO y Performance

### Metadata Optimizada

Cada página incluye metadata completa:

```typescript
// app/page.tsx
export const metadata = {
  title: "Inicio - TecnoDespegue",
  description: "Descripción optimizada para SEO",
  openGraph: {
    images: ["/og-image.png"],
  },
}
```

### Sitemap Dinámico

El sitemap se genera automáticamente en cada build:
- **URL:** `/sitemap.xml`
- **Actualización:** Automática
- **Frecuencia:** Configurable por ruta

### robots.txt

Configurado para permitir todos los crawlers:
- **URL:** `/robots.txt`
- **Sitemap:** Referencia incluida

### PWA Manifest

El sitio es instalable como PWA:
- **URL:** `/manifest.webmanifest`
- **Íconos:** Configurados
- **Tema:** Dark mode

### Performance

Build de producción optimizado:
- ✅ First Load JS: ~150KB
- ✅ Static Generation: 11 rutas
- ✅ Image Optimization: Automática
- ✅ Code Splitting: Por ruta
- ✅ CSS: Minificado y optimizado

---

## 🚢 Deployment

### Vercel (Recomendado)

1. **Push a GitHub**
   ```bash
   git push origin main
   ```

2. **Conecta con Vercel**
   - Ve a [vercel.com](https://vercel.com)
   - Importa tu repositorio
   - Vercel detectará Next.js automáticamente

3. **Configura variables de entorno**
   - Agrega las variables en el dashboard de Vercel
   - Despliega

### Netlify

1. **Build Command:** `npm run build`
2. **Publish Directory:** `.next`
3. **Variables de entorno:** Configura en Netlify dashboard

### Docker

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
CMD ["npm", "start"]
```

### Otras Plataformas

El proyecto es compatible con:
- Railway
- Render
- AWS Amplify
- Google Cloud Run
- Cualquier hosting con soporte para Node.js

---

## 🤝 Contribuir

¡Las contribuciones son bienvenidas! Por favor lee [CONTRIBUTING.md](CONTRIBUTING.md) para detalles.

### Proceso de Contribución

1. **Fork el proyecto**
2. **Crea una rama** (`git checkout -b feature/AmazingFeature`)
3. **Commit tus cambios** (`git commit -m 'Add: nueva característica'`)
4. **Push a la rama** (`git push origin feature/AmazingFeature`)
5. **Abre un Pull Request**

### Estándares de Código

- ✅ TypeScript strict mode
- ✅ Biome para linting y formateo
- ✅ Commits semánticos (feat, fix, docs, etc.)
- ✅ Tests para nuevas funcionalidades
- ✅ Documentación actualizada

### Reportar Bugs

Usa GitHub Issues con la plantilla de bug report.

---

## 📄 Licencia

Este proyecto es privado y pertenece a **Agencia TecnoDespegue**.

Todos los derechos reservados © 2025 TecnoDespegue

---

## 📞 Soporte

¿Necesitas ayuda? Contáctanos:

- 📧 Email: contacto@tecnodespegue.com
- 💬 Website: [tecnodespegue.com](https://tecnodespegue.com)
- 🐦 Twitter: [@tecnodespegue](https://twitter.com/tecnodespegue)

---

<div align="center">

**Hecho con ❤️ por el equipo de TecnoDespegue**

[⬆ Volver arriba](#-agencia-tecnodespegue)

</div>
