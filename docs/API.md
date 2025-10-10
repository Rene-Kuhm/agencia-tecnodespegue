# 📚 API Documentation - Componentes y Módulos

Documentación completa de la API de componentes, hooks, tipos y constantes del proyecto.

---

## 📋 Índice

- [Hooks Personalizados](#-hooks-personalizados)
- [Componentes UI](#-componentes-ui)
- [Constantes](#-constantes)
- [Tipos TypeScript](#-tipos-typescript)
- [Utilidades](#-utilidades)

---

## 🪝 Hooks Personalizados

### `useMediaQuery`

Detecta si una media query CSS coincide con el viewport actual.

**Ubicación:** `src/hooks/use-media-query.ts`

**Firma:**
```typescript
function useMediaQuery(query: string): boolean
```

**Parámetros:**

| Nombre | Tipo | Descripción |
|--------|------|-------------|
| `query` | `string` | Media query CSS válida (ej: `"(max-width: 768px)"`) |

**Retorna:** `boolean` - `true` si la media query coincide, `false` en caso contrario

**Ejemplo de Uso:**
```typescript
import { useMediaQuery } from "@/hooks"

function ResponsiveComponent() {
  const isMobile = useMediaQuery("(max-width: 768px)")
  const isTablet = useMediaQuery("(min-width: 769px) and (max-width: 1024px)")
  const isDesktop = useMediaQuery("(min-width: 1025px)")
  const prefersReducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)")

  if (isMobile) {
    return <MobileLayout />
  }

  if (isTablet) {
    return <TabletLayout />
  }

  return <DesktopLayout />
}
```

**Notas:**
- El hook usa `window.matchMedia` internamente
- Actualiza automáticamente cuando cambia el tamaño de la ventana
- No causa re-renders innecesarios
- Compatible con Server Side Rendering (SSR)

---

### `useScrollPosition`

Rastrea la posición actual del scroll en la página.

**Ubicación:** `src/hooks/use-scroll-position.ts`

**Firma:**
```typescript
function useScrollPosition(): { x: number; y: number }
```

**Retorna:**

| Propiedad | Tipo | Descripción |
|-----------|------|-------------|
| `x` | `number` | Posición horizontal del scroll (en pixels) |
| `y` | `number` | Posición vertical del scroll (en pixels) |

**Ejemplo de Uso:**
```typescript
import { useScrollPosition } from "@/hooks"

function StickyNavbar() {
  const { y } = useScrollPosition()
  const isScrolled = y > 100

  return (
    <nav className={cn(
      "fixed top-0 w-full transition-all",
      isScrolled && "bg-background shadow-lg"
    )}>
      <div className="container">
        Scroll: {y}px
      </div>
    </nav>
  )
}

// Ejemplo: Botón "Back to Top"
function BackToTop() {
  const { y } = useScrollPosition()
  const showButton = y > 500

  if (!showButton) return null

  return (
    <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
      ↑ Volver arriba
    </button>
  )
}
```

**Notas:**
- Usa `passive: true` para mejor performance
- Debounce incorporado para evitar re-renders excesivos
- Compatible con scroll horizontal y vertical

---

### `useIntersectionObserver`

Detecta cuando un elemento entra en el viewport. Útil para animaciones on-scroll y lazy loading.

**Ubicación:** `src/hooks/use-intersection-observer.ts`

**Firma:**
```typescript
function useIntersectionObserver<T extends Element = HTMLDivElement>(
  options?: UseIntersectionObserverOptions
): [React.RefObject<T | null>, boolean]
```

**Opciones:**

| Opción | Tipo | Default | Descripción |
|--------|------|---------|-------------|
| `threshold` | `number \| number[]` | `0` | % del elemento visible (0-1) |
| `root` | `Element \| null` | `null` | Elemento contenedor |
| `rootMargin` | `string` | `"0px"` | Margen del viewport |
| `freezeOnceVisible` | `boolean` | `false` | Dejar de observar después de visible |

**Retorna:** `[ref, isVisible]`

| Elemento | Tipo | Descripción |
|----------|------|-------------|
| `ref` | `React.RefObject<T \| null>` | Ref para asignar al elemento |
| `isVisible` | `boolean` | `true` si el elemento está visible |

**Ejemplo de Uso:**
```typescript
import { useIntersectionObserver } from "@/hooks"

// Ejemplo 1: Animación básica
function FadeInSection({ children }: { children: React.ReactNode }) {
  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0.3,
    freezeOnceVisible: true,
  })

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-1000",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      )}
    >
      {children}
    </div>
  )
}

// Ejemplo 2: Lazy loading de imágenes
function LazyImage({ src, alt }: { src: string; alt: string }) {
  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0,
    rootMargin: "100px", // Cargar 100px antes de ser visible
    freezeOnceVisible: true,
  })

  return (
    <img
      ref={ref}
      src={isVisible ? src : "/placeholder.png"}
      alt={alt}
      loading="lazy"
    />
  )
}

// Ejemplo 3: Contador animado
function AnimatedCounter({ target }: { target: number }) {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.5 })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isVisible) return

    const duration = 2000
    const steps = 60
    const increment = target / steps

    const timer = setInterval(() => {
      setCount((prev) => {
        const next = prev + increment
        return next >= target ? target : next
      })
    }, duration / steps)

    return () => clearInterval(timer)
  }, [isVisible, target])

  return <div ref={ref}>{Math.floor(count)}</div>
}
```

**Notas:**
- Usa la API nativa `IntersectionObserver`
- Limpia automáticamente los observadores
- Soporta múltiples thresholds: `[0, 0.25, 0.5, 0.75, 1]`

---

### `useMounted`

Previene errores de hidratación en componentes client-side.

**Ubicación:** `src/hooks/use-mounted.ts`

**Firma:**
```typescript
function useMounted(): boolean
```

**Retorna:** `boolean` - `true` cuando el componente está montado en el cliente

**Ejemplo de Uso:**
```typescript
import { useMounted } from "@/hooks"

// Ejemplo 1: Evitar errores de hidratación
function WindowWidth() {
  const mounted = useMounted()

  if (!mounted) {
    return <div>Loading...</div>
  }

  // Este código solo se ejecuta en el cliente
  return <div>Width: {window.innerWidth}px</div>
}

// Ejemplo 2: Theming con next-themes
function ThemeToggle() {
  const mounted = useMounted()
  const { theme, setTheme } = useTheme()

  // Evita flash de contenido sin tema
  if (!mounted) {
    return <div className="w-10 h-10" />
  }

  return (
    <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      {theme === "dark" ? "🌙" : "☀️"}
    </button>
  )
}

// Ejemplo 3: Componentes que dependen del navegador
function BrowserOnlyFeature() {
  const mounted = useMounted()

  if (!mounted) {
    return null
  }

  // Usa APIs del navegador sin problemas
  const userAgent = navigator.userAgent
  const cookiesEnabled = navigator.cookieEnabled

  return (
    <div>
      <p>User Agent: {userAgent}</p>
      <p>Cookies: {cookiesEnabled ? "Habilitadas" : "Deshabilitadas"}</p>
    </div>
  )
}
```

**Casos de Uso:**
- ✅ Componentes que usan `window`, `document`, `navigator`
- ✅ next-themes o cualquier librería con estado client-side
- ✅ Evitar discrepancias entre SSR y cliente
- ✅ Animaciones que se activan en el cliente

---

## 🧩 Componentes UI

### `Button`

Botón versátil con múltiples variantes y tamaños.

**Ubicación:** `src/components/ui/button.tsx`

**Props:**

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `variant` | `"default" \| "destructive" \| "outline" \| "secondary" \| "ghost" \| "link"` | `"default"` | Estilo visual del botón |
| `size` | `"default" \| "sm" \| "lg" \| "icon"` | `"default"` | Tamaño del botón |
| `asChild` | `boolean` | `false` | Renderiza como hijo (para usar con Link) |
| ...rest | `ButtonHTMLAttributes` | - | Props estándar de `<button>` |

**Ejemplo:**
```tsx
import { Button } from "@/components/ui/button"

// Variantes
<Button>Default</Button>
<Button variant="destructive">Eliminar</Button>
<Button variant="outline">Cancelar</Button>
<Button variant="ghost">Cerrar</Button>
<Button variant="link">Ver más</Button>

// Tamaños
<Button size="sm">Pequeño</Button>
<Button size="default">Normal</Button>
<Button size="lg">Grande</Button>
<Button size="icon"><IconPlus /></Button>

// Con Next.js Link
<Button asChild>
  <Link href="/about">Sobre Nosotros</Link>
</Button>

// Disabled
<Button disabled>No disponible</Button>
```

---

### `Card`

Contenedor de contenido con header, contenido y footer opcionales.

**Ubicación:** `src/components/ui/card.tsx`

**Componentes:**
- `Card` - Contenedor principal
- `CardHeader` - Encabezado opcional
- `CardTitle` - Título del card
- `CardDescription` - Descripción del card
- `CardContent` - Contenido principal
- `CardFooter` - Footer opcional

**Ejemplo:**
```tsx
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card"

<Card>
  <CardHeader>
    <CardTitle>Título del Card</CardTitle>
    <CardDescription>Descripción breve</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Contenido principal del card</p>
  </CardContent>
  <CardFooter>
    <Button>Acción</Button>
  </CardFooter>
</Card>
```

---

### `Input`

Campo de entrada de texto estilizado y accesible.

**Ubicación:** `src/components/ui/input.tsx`

**Props:** Extiende `InputHTMLAttributes<HTMLInputElement>`

**Ejemplo:**
```tsx
import { Input } from "@/components/ui/input"

// Básico
<Input type="text" placeholder="Nombre" />

// Con label
<div>
  <label htmlFor="email">Email</label>
  <Input id="email" type="email" placeholder="tu@email.com" />
</div>

// Tipos especiales
<Input type="password" placeholder="Contraseña" />
<Input type="email" placeholder="Email" />
<Input type="number" placeholder="Edad" />
<Input type="tel" placeholder="Teléfono" />
```

---

## 📊 Constantes

### `SITE_CONFIG`

Configuración global del sitio.

**Ubicación:** `src/constants/site.ts`

**Propiedades:**

| Propiedad | Tipo | Descripción |
|-----------|------|-------------|
| `name` | `string` | Nombre corto del sitio |
| `title` | `string` | Título completo para SEO |
| `description` | `string` | Descripción meta |
| `url` | `string` | URL base (desde env) |
| `ogImage` | `string` | Imagen Open Graph |
| `author` | `string` | Autor del sitio |
| `keywords` | `string[]` | Keywords SEO |

**Ejemplo:**
```typescript
import { SITE_CONFIG } from "@/constants"

// En metadata
export const metadata = {
  title: SITE_CONFIG.title,
  description: SITE_CONFIG.description,
}

// En componentes
<h1>{SITE_CONFIG.name}</h1>
<link rel="canonical" href={SITE_CONFIG.url} />
```

---

### `SOCIAL_LINKS`

Enlaces de redes sociales.

**Ubicación:** `src/constants/site.ts`

**Ejemplo:**
```typescript
import { SOCIAL_LINKS } from "@/constants"

<nav>
  <a href={SOCIAL_LINKS.facebook}>Facebook</a>
  <a href={SOCIAL_LINKS.twitter}>Twitter</a>
  <a href={SOCIAL_LINKS.linkedin}>LinkedIn</a>
  <a href={SOCIAL_LINKS.instagram}>Instagram</a>
  <a href={SOCIAL_LINKS.github}>GitHub</a>
</nav>
```

---

### `NAV_ITEMS`

Items de navegación del sitio.

**Ubicación:** `src/constants/navigation.ts`

**Tipo:**
```typescript
interface NavItem {
  label: string
  href: string
  description?: string
}
```

**Ejemplo:**
```typescript
import { NAV_ITEMS } from "@/constants"

<nav>
  {NAV_ITEMS.map((item) => (
    <Link key={item.href} href={item.href}>
      {item.label}
    </Link>
  ))}
</nav>
```

---

## 📝 Tipos TypeScript

### Tipos Comunes

**Ubicación:** `src/types/common.ts`

```typescript
// Props con children
type WithChildren<T = object> = T & {
  children: React.ReactNode
}

// Props con className
type WithClassName<T = object> = T & {
  className?: string
}

// Props base para componentes
interface BaseComponent {
  id?: string
  className?: string
  "data-testid"?: string
}
```

**Uso:**
```typescript
import type { WithChildren, WithClassName } from "@/types"

type CardProps = WithChildren<WithClassName<{
  title: string
  variant?: "default" | "bordered"
}>>
```

---

### Tipos de Portfolio

**Ubicación:** `src/types/portfolio.ts`

```typescript
interface Project {
  id: string
  title: string
  description: string
  image: string
  category: ProjectCategory
  tags: string[]
  url?: string
  featured?: boolean
}

type ProjectCategory =
  | "web"
  | "mobile"
  | "design"
  | "ecommerce"
  | "saas"
```

---

## 🔧 Utilidades

### `cn()`

Combina clases de Tailwind CSS de manera segura.

**Ubicación:** `src/lib/utils.ts`

**Firma:**
```typescript
function cn(...inputs: ClassValue[]): string
```

**Ejemplo:**
```typescript
import { cn } from "@/lib/utils"

// Combinar clases
cn("px-4 py-2", "bg-blue-500")
// → "px-4 py-2 bg-blue-500"

// Con condicionales
cn("px-4", isActive && "bg-blue-500")
// → "px-4 bg-blue-500" (si isActive es true)

// Merge de clases conflictivas
cn("p-4", "px-8")
// → "py-4 px-8" (tailwind-merge previene conflictos)

// En componentes
function Button({ className, ...props }) {
  return (
    <button
      className={cn(
        "px-4 py-2 rounded-md font-medium",
        "hover:opacity-80 transition-opacity",
        className
      )}
      {...props}
    />
  )
}
```

---

## 🎯 Mejores Prácticas

### 1. Imports Organizados

```typescript
// ✅ Bueno - Agrupados y ordenados
import { useState } from "react"
import type { Project } from "@/types"
import { SITE_CONFIG } from "@/constants"
import { Button } from "@/components/ui/button"
import { useMediaQuery } from "@/hooks"
import { cn } from "@/lib/utils"

// ❌ Malo - Desordenados
import { cn } from "@/lib/utils"
import { useState } from "react"
import { Button } from "@/components/ui/button"
```

### 2. Usar Barrel Exports

```typescript
// ✅ Bueno
import { useMediaQuery, useScrollPosition } from "@/hooks"
import { SITE_CONFIG, NAV_ITEMS } from "@/constants"
import type { Project, TeamMember } from "@/types"

// ❌ Malo
import { useMediaQuery } from "@/hooks/use-media-query"
import { useScrollPosition } from "@/hooks/use-scroll-position"
```

### 3. Tipos Explícitos

```typescript
// ✅ Bueno
const projects: Project[] = []
const config: typeof SITE_CONFIG = SITE_CONFIG

// ❌ Malo
const projects = []  // any[]
```

---

## 📖 Referencias Externas

- [React Documentation](https://react.dev)
- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS](https://tailwindcss.com)
- [Radix UI](https://radix-ui.com)

---

<div align="center">

**Documentación actualizada** - Última actualización: 2025-10-10

[← Volver al README](../README.md)

</div>
