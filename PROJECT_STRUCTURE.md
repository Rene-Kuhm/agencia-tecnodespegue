# TecnoDespegue - Estructura del Proyecto

## Descripción
Sitio web profesional para TecnoDespegue, una agencia de desarrollo web, programación y freelance. Desarrollado con Next.js 15, React 19, TypeScript, Tailwind CSS y shadcn/ui.

## Tecnologías Principales
- **Framework**: Next.js 15 con App Router
- **UI Library**: React 19
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS v4
- **Componentes**: shadcn/ui con Radix UI
- **Iconos**: Lucide React
- **Notificaciones**: Sonner (toast)
- **Linter**: Biome

## Estructura de Carpetas

```
agencia-tecnodespegue/
├── src/
│   ├── app/                          # App Router de Next.js
│   │   ├── layout.tsx               # Layout principal con Navbar, Footer y Toaster
│   │   ├── page.tsx                 # Página de inicio (Home)
│   │   └── globals.css              # Estilos globales y variables CSS
│   │
│   ├── components/
│   │   ├── layout/                  # Componentes de layout
│   │   │   ├── navbar.tsx          # Navbar responsive con menú móvil
│   │   │   └── footer.tsx          # Footer con newsletter y redes sociales
│   │   │
│   │   ├── sections/               # Secciones de página
│   │   │   └── newsletter.tsx      # Componente de suscripción a newsletter
│   │   │
│   │   └── ui/                     # Componentes UI de shadcn
│   │       ├── avatar.tsx
│   │       ├── badge.tsx
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── input.tsx
│   │       ├── separator.tsx
│   │       └── sonner.tsx
│   │
│   └── lib/
│       └── utils.ts                # Utilidades (cn helper)
│
├── package.json
├── tsconfig.json
└── tailwind.config.ts
```

## Características Implementadas

### 1. Navbar (src/components/layout/navbar.tsx)
- Logo con ícono de cohete y gradiente
- Links de navegación: Inicio, Servicios, Portafolio, Nosotros, Contacto
- Botón CTA "Contratar" con gradiente
- Menú móvil responsive con animación
- Sticky positioning con backdrop blur
- Estado activo/inactivo del menú móvil

### 2. Footer (src/components/layout/footer.tsx)
- Sección de newsletter integrada con formulario
- Links organizados en 4 columnas:
  - Información de la empresa
  - Enlaces rápidos
  - Servicios
  - Contacto
- Iconos de redes sociales (Facebook, Twitter, Instagram, LinkedIn, GitHub)
- Copyright y separadores visuales
- Toast notifications con sonner

### 3. Newsletter (src/components/sections/newsletter.tsx)
- Diseño destacado con card y gradientes
- Formulario de suscripción con validación
- Estado de carga durante el envío
- Notificación de éxito con toast
- Sección de beneficios (3 columnas)
- Diseño responsive

### 4. Página de Inicio (src/app/page.tsx)
Secciones implementadas:

#### Hero Section
- Título grande con gradiente de texto
- Badge "Agencia Digital Premium"
- Descripción atractiva
- Dos CTAs: "Comenzar Proyecto" y "Ver Portafolio"
- Indicadores de confianza (100+ proyectos, satisfacción garantizada, soporte 24/7)
- Fondo con gradiente animado

#### Stats Section
- 4 métricas principales con iconos:
  - 150+ Proyectos Completados
  - 80+ Clientes Felices
  - 5+ Años de Experiencia
  - 98% Tasa de Satisfacción
- Íconos con gradientes circulares
- Números destacados con gradiente

#### Services Section
- 3 tarjetas de servicios principales:
  - Desarrollo Web (Next.js, React, TypeScript)
  - Diseño UX/UI (Prototipos, Design Systems)
  - Consultoría Digital (Estrategia, Marketing)
- Hover effects con animación
- Listas de características con checkmarks

#### Portfolio Preview
- 3 proyectos destacados con cards:
  - TechStore Online (E-commerce)
  - TaskFlow Pro (SaaS)
  - FitLife App (Startup)
- Diseño de card con gradientes y badges
- Botón para ver todos los proyectos

#### Testimonials Section
- 3 testimonios de clientes
- Avatares con gradientes
- Estrellas de calificación (5/5)
- Información del cliente y empresa

#### Newsletter Section
- Componente importado y reutilizable
- Diseño integrado con el resto de la página

#### CTA Final
- Fondo con gradiente completo
- Texto en blanco para contraste
- Dos botones de acción
- Diseño impactante para conversión

### 5. Layout Principal (src/app/layout.tsx)
- Integración de Navbar, Footer y Toaster
- Fuentes personalizadas (Geist Sans y Geist Mono)
- Metadata SEO optimizada
- Idioma en español

## Características de Diseño

### Gradientes
- Paleta de colores: azul, púrpura, rosa
- Gradientes en botones principales
- Gradientes en textos destacados
- Animación de gradiente en hero section

### Responsividad
- Mobile-first approach
- Breakpoints de Tailwind (sm, md, lg, xl)
- Menú móvil colapsable en navbar
- Grid responsive en todas las secciones
- Columnas que se adaptan al tamaño de pantalla

### Animaciones
- Hover effects en cards y botones
- Transiciones suaves (transition-all, duration-300)
- Animación de gradiente personalizada (animate-gradient)
- Scale effects en iconos de servicios
- Shadow effects en hover

### Accesibilidad
- Etiquetas semánticas HTML
- aria-label en botones de menú
- Alt text en avatares (fallback)
- Contraste adecuado de colores
- Focus states visibles

## Componentes de UI (shadcn/ui)

Todos los componentes están configurados con:
- Variantes personalizables (VariantProps)
- Estilos con Tailwind CSS
- Integración con Radix UI para accesibilidad
- Soporte para dark mode (preparado)

## Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Inicia servidor de desarrollo con Turbopack

# Producción
npm run build        # Crea build de producción
npm run start        # Inicia servidor de producción

# Linting y Formato
npm run lint         # Ejecuta Biome linter
npm run lint:fix     # Corrige automáticamente errores
npm run format       # Formatea código con Biome
npm run check        # Lint + Type checking

# Type Checking
npm run type-check   # Verifica tipos con TypeScript
```

## Paleta de Colores

### Gradientes Principales
- **Azul a Púrpura**: `from-blue-600 to-purple-600`
- **Azul a Púrpura a Rosa**: `from-blue-600 via-purple-600 to-pink-600`
- **Fondos claros**: Variantes con opacidad `/20` para fondos sutiles

### Colores de Estado
- **Verde**: Checkmarks y success states (`text-green-600`)
- **Amarillo**: Estrellas de rating (`fill-yellow-400`)
- **Muted**: Texto secundario (`text-muted-foreground`)

## Próximos Pasos Sugeridos

1. **Crear páginas adicionales**:
   - `/servicios` - Detalle de servicios
   - `/portafolio` - Galería completa de proyectos
   - `/nosotros` - Sobre la empresa y equipo
   - `/contacto` - Formulario de contacto

2. **Funcionalidades**:
   - Integrar newsletter con API real (ej: Mailchimp, SendGrid)
   - Implementar formulario de contacto funcional
   - Agregar CMS para gestionar contenido (ej: Sanity, Contentful)
   - Implementar dark mode toggle

3. **Optimizaciones**:
   - Agregar imágenes reales de proyectos
   - Implementar lazy loading de imágenes
   - Agregar meta tags Open Graph
   - Configurar sitemap.xml y robots.txt

4. **SEO**:
   - Agregar schema markup (JSON-LD)
   - Optimizar metadata por página
   - Implementar páginas de blog
   - Configurar Google Analytics

## Notas Técnicas

- El proyecto usa **Next.js 15** con App Router
- **Turbopack** está habilitado para builds más rápidos
- Todos los componentes client-side están marcados con `"use client"`
- Las animaciones CSS están definidas en `globals.css`
- El proyecto está configurado para producción y listo para deploy

## Deploy

El proyecto puede ser desplegado en:
- **Vercel** (recomendado para Next.js)
- **Netlify**
- **AWS Amplify**
- Cualquier hosting que soporte Node.js

```bash
# Build de producción
npm run build

# El output estará en .next/
```

---

Desarrollado con Next.js 15, React 19, TypeScript, Tailwind CSS y shadcn/ui
