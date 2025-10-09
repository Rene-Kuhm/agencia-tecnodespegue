# Agencia TecnoDespegue

Sitio web corporativo de Agencia TecnoDespegue, construido con las tecnologías más modernas.

## Stack Tecnológico

- **Framework**: Next.js 15 (App Router)
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS v4
- **Componentes UI**: shadcn/ui
- **Linter/Formatter**: Biome
- **Bundler**: Turbopack

## Características

- ⚡ Next.js 15 con App Router y Server Components
- 🎨 Tailwind CSS v4 con configuración optimizada
- 🧩 Componentes reutilizables con shadcn/ui
- 📱 Diseño responsive y mobile-first
- 🌙 Modo oscuro incluido
- ⚙️ TypeScript para type safety
- 🚀 Optimizado con Turbopack
- 🔍 Biome para linting y formateo rápido

## Estructura del Proyecto

```
src/
├── app/                 # Rutas de la aplicación (App Router)
│   ├── contacto/       # Página de contacto
│   ├── nosotros/       # Página sobre nosotros
│   ├── portafolio/     # Página de portafolio
│   ├── servicios/      # Página de servicios
│   ├── layout.tsx      # Layout principal
│   ├── page.tsx        # Página de inicio
│   └── globals.css     # Estilos globales
├── components/         # Componentes React
│   ├── ui/            # Componentes de shadcn/ui
│   ├── layout/        # Componentes de layout
│   └── sections/      # Secciones de páginas
├── lib/               # Utilidades y helpers
├── hooks/             # Custom React hooks
├── types/             # Definiciones de tipos TypeScript
└── constants/         # Constantes de la aplicación
```

## Comandos Disponibles

```bash
# Desarrollo
npm run dev          # Inicia el servidor de desarrollo con Turbopack

# Producción
npm run build        # Construye la aplicación para producción
npm run start        # Inicia el servidor de producción

# Code Quality
npm run lint         # Ejecuta Biome para verificar el código
npm run lint:fix     # Ejecuta Biome y corrige automáticamente
npm run format       # Formatea el código con Biome
npm run check        # Ejecuta lint + fix + verificación de tipos
npm run type-check   # Verifica tipos de TypeScript
```

## Instalación

1. Clona el repositorio
2. Instala las dependencias:

```bash
npm install
```

3. Inicia el servidor de desarrollo:

```bash
npm run dev
```

4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador

## Scripts de Desarrollo

- `dev`: Inicia el servidor de desarrollo con Turbopack (hot reload)
- `build`: Construye la aplicación optimizada para producción
- `start`: Inicia el servidor de producción
- `lint`: Analiza el código con Biome
- `lint:fix`: Analiza y corrige automáticamente problemas
- `format`: Formatea todo el código
- `check`: Ejecuta todos los checks (lint + tipos)

## Tecnologías Adicionales

- **React 19**: Última versión de React
- **CSS Variables**: Para theming personalizable
- **OKLCH Colors**: Sistema de colores moderno
- **clsx & tailwind-merge**: Para composición de clases optimizada
- **Lucide Icons**: Iconos modernos y ligeros

## Configuración de Biome

El proyecto usa Biome en lugar de ESLint + Prettier para mejor rendimiento:

- Formateo automático de código
- Linting con reglas recomendadas
- Organización automática de imports
- Verificación de tipos integrada

## Deploy

La aplicación está lista para ser desplegada en:

- **Vercel** (recomendado)
- **Netlify**
- **Railway**
- Cualquier plataforma que soporte Node.js

## Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## Licencia

Este proyecto es privado y pertenece a Agencia TecnoDespegue.
