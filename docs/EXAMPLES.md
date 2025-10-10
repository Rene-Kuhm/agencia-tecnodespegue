# 💡 Guía de Ejemplos y Patrones

Ejemplos prácticos y patrones comunes para desarrollar con este proyecto.

---

## 📋 Índice

- [Crear una Nueva Página](#-crear-una-nueva-página)
- [Crear un Nuevo Componente](#-crear-un-nuevo-componente)
- [Usar Hooks Personalizados](#-usar-hooks-personalizados)
- [Trabajar con Formularios](#-trabajar-con-formularios)
- [Animaciones y Efectos](#-animaciones-y-efectos)
- [SEO y Metadata](#-seo-y-metadata)
- [Patrones Comunes](#-patrones-comunes)

---

## 📄 Crear una Nueva Página

### Página Básica

```tsx
// src/app/nueva-pagina/page.tsx
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Nueva Página",
  description: "Descripción de la nueva página",
}

export default function NuevaPaginaPage() {
  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold">Nueva Página</h1>
      <p className="mt-4 text-muted-foreground">
        Contenido de la página
      </p>
    </div>
  )
}
```

### Página con Secciones

```tsx
// src/app/servicios-premium/page.tsx
import type { Metadata } from "next"
import { Hero } from "@/components/sections/hero"
import { Features } from "@/components/sections/features"
import { Pricing } from "@/components/sections/pricing"
import { CTA } from "@/components/sections/cta"

export const metadata: Metadata = {
  title: "Servicios Premium",
  description: "Servicios exclusivos para empresas",
  openGraph: {
    images: ["/og-servicios-premium.png"],
  },
}

export default function ServiciosPremiumPage() {
  return (
    <>
      <Hero
        title="Servicios Premium"
        subtitle="Soluciones empresariales de alto impacto"
        cta={{ text: "Contactar", href: "/contacto" }}
      />

      <Features />

      <Pricing tier="premium" />

      <CTA
        title="¿Listo para empezar?"
        description="Agenda una consulta gratuita con nuestro equipo"
        buttonText="Agendar Consulta"
        buttonHref="/contacto"
      />
    </>
  )
}
```

### Página con Loading y Error

```tsx
// src/app/blog/loading.tsx
export default function BlogLoading() {
  return (
    <div className="container py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="animate-pulse">
            <div className="h-48 bg-muted rounded-lg" />
            <div className="mt-4 h-6 bg-muted rounded w-3/4" />
            <div className="mt-2 h-4 bg-muted rounded w-full" />
          </div>
        ))}
      </div>
    </div>
  )
}

// src/app/blog/error.tsx
"use client"

export default function BlogError({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  return (
    <div className="container py-12 text-center">
      <h2 className="text-2xl font-bold">Algo salió mal</h2>
      <p className="mt-2 text-muted-foreground">{error.message}</p>
      <button
        onClick={reset}
        className="mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-md"
      >
        Intentar de nuevo
      </button>
    </div>
  )
}
```

---

## 🧩 Crear un Nuevo Componente

### Componente Simple

```tsx
// src/components/pricing-card.tsx
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"

interface PricingCardProps {
  title: string
  price: number
  features: string[]
  highlighted?: boolean
}

export function PricingCard({ title, price, features, highlighted }: PricingCardProps) {
  return (
    <Card className={highlighted ? "border-primary shadow-lg" : undefined}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <p className="text-3xl font-bold">${price}/mes</p>
      </CardHeader>

      <CardContent>
        <ul className="space-y-2">
          {features.map((feature) => (
            <li key={feature} className="flex items-start gap-2">
              <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>

      <CardFooter>
        <Button className="w-full" variant={highlighted ? "default" : "outline"}>
          Elegir Plan
        </Button>
      </CardFooter>
    </Card>
  )
}
```

### Componente con Estado

```tsx
// src/components/counter-button.tsx
"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Minus, Plus } from "lucide-react"

interface CounterButtonProps {
  min?: number
  max?: number
  initialValue?: number
  onChange?: (value: number) => void
}

export function CounterButton({
  min = 0,
  max = 100,
  initialValue = 0,
  onChange,
}: CounterButtonProps) {
  const [count, setCount] = useState(initialValue)

  const handleIncrement = () => {
    if (count < max) {
      const newValue = count + 1
      setCount(newValue)
      onChange?.(newValue)
    }
  }

  const handleDecrement = () => {
    if (count > min) {
      const newValue = count - 1
      setCount(newValue)
      onChange?.(newValue)
    }
  }

  return (
    <div className="flex items-center gap-2">
      <Button
        size="icon"
        variant="outline"
        onClick={handleDecrement}
        disabled={count <= min}
      >
        <Minus className="h-4 w-4" />
      </Button>

      <span className="w-12 text-center font-semibold">{count}</span>

      <Button
        size="icon"
        variant="outline"
        onClick={handleIncrement}
        disabled={count >= max}
      >
        <Plus className="h-4 w-4" />
      </Button>
    </div>
  )
}
```

---

## 🪝 Usar Hooks Personalizados

### Navbar Responsive

```tsx
// src/components/layout/navbar.tsx
"use client"

import { useState } from "react"
import Link from "next/link"
import { useMediaQuery } from "@/hooks"
import { NAV_ITEMS } from "@/constants"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const isDesktop = useMediaQuery("(min-width: 1024px)")

  // Auto-cerrar menu mobile cuando se vuelve desktop
  useEffect(() => {
    if (isDesktop && mobileMenuOpen) {
      setMobileMenuOpen(false)
    }
  }, [isDesktop, mobileMenuOpen])

  return (
    <nav className="sticky top-0 z-50 bg-background border-b">
      <div className="container flex items-center justify-between h-16">
        <Link href="/" className="font-bold text-xl">
          Logo
        </Link>

        {/* Desktop Menu */}
        {isDesktop && (
          <ul className="flex items-center gap-6">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        )}

        {/* Mobile Toggle */}
        {!isDesktop && (
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </Button>
        )}
      </div>

      {/* Mobile Menu */}
      {!isDesktop && mobileMenuOpen && (
        <div className="border-t bg-background">
          <ul className="container py-4 space-y-2">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}
```

### Animación On-Scroll

```tsx
// src/components/sections/features.tsx
"use client"

import { useIntersectionObserver } from "@/hooks"
import { Card } from "@/components/ui/card"

const features = [
  { title: "Rápido", description: "Carga instantánea" },
  { title: "Seguro", description: "Máxima protección" },
  { title: "Escalable", description: "Crece contigo" },
]

export function Features() {
  return (
    <section className="container py-20">
      <h2 className="text-3xl font-bold text-center mb-12">
        Características
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <AnimatedCard key={feature.title} {...feature} delay={index * 100} />
        ))}
      </div>
    </section>
  )
}

function AnimatedCard({
  title,
  description,
  delay = 0,
}: {
  title: string
  description: string
  delay?: number
}) {
  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0.3,
    freezeOnceVisible: true,
  })

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn(
        "transition-all duration-700",
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10"
      )}
    >
      <Card className="p-6 hover-lift">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </Card>
    </div>
  )
}
```

---

## 📝 Trabajar con Formularios

### Formulario Básico

```tsx
// src/components/newsletter-form.tsx
"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { toast } from "sonner"

export function NewsletterForm() {
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error("Por favor ingresa un email válido")
      return
    }

    setLoading(true)

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })

      if (response.ok) {
        toast.success("¡Suscripción exitosa!")
        setEmail("")
      } else {
        throw new Error()
      }
    } catch (error) {
      toast.error("Error al suscribirse. Intenta de nuevo.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <Input
        type="email"
        placeholder="tu@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={loading}
      />
      <Button type="submit" disabled={loading}>
        {loading ? "Enviando..." : "Suscribirse"}
      </Button>
    </form>
  )
}
```

### Formulario Complejo con Validación

```tsx
// src/components/contact-form.tsx
"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { toast } from "sonner"
import type { ContactFormData, ContactFormErrors } from "@/types"

export function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [errors, setErrors] = useState<ContactFormErrors>({})
  const [loading, setLoading] = useState(false)

  const validate = (): boolean => {
    const newErrors: ContactFormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = "El nombre es requerido"
    }

    if (!formData.email.trim()) {
      newErrors.email = "El email es requerido"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email inválido"
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "El asunto es requerido"
    }

    if (!formData.message.trim()) {
      newErrors.message = "El mensaje es requerido"
    } else if (formData.message.length < 10) {
      newErrors.message = "El mensaje debe tener al menos 10 caracteres"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validate()) {
      toast.error("Por favor corrige los errores")
      return
    }

    setLoading(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        toast.success("Mensaje enviado exitosamente")
        setFormData({ name: "", email: "", subject: "", message: "" })
        setErrors({})
      } else {
        throw new Error()
      }
    } catch (error) {
      toast.error("Error al enviar el mensaje")
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name">Nombre *</label>
        <Input
          id="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          disabled={loading}
        />
        {errors.name && <p className="text-sm text-destructive mt-1">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="email">Email *</label>
        <Input
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          disabled={loading}
        />
        {errors.email && <p className="text-sm text-destructive mt-1">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="subject">Asunto *</label>
        <Input
          id="subject"
          value={formData.subject}
          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
          disabled={loading}
        />
        {errors.subject && <p className="text-sm text-destructive mt-1">{errors.subject}</p>}
      </div>

      <div>
        <label htmlFor="message">Mensaje *</label>
        <textarea
          id="message"
          rows={5}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          disabled={loading}
          className="w-full px-3 py-2 border rounded-md"
        />
        {errors.message && <p className="text-sm text-destructive mt-1">{errors.message}</p>}
      </div>

      <Button type="submit" disabled={loading} className="w-full">
        {loading ? "Enviando..." : "Enviar Mensaje"}
      </Button>
    </form>
  )
}
```

---

## 🎯 SEO y Metadata

### Metadata Dinámica

```tsx
// src/app/blog/[slug]/page.tsx
import { notFound } from "next/navigation"
import type { Metadata } from "next"

interface Props {
  params: { slug: string }
}

// Generar metadata dinámicamente
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPost(params.slug)

  if (!post) {
    return {
      title: "Post No Encontrado",
    }
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author.name],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
    },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const post = await getPost(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <article className="container max-w-3xl py-12">
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </article>
  )
}
```

---

## 🎨 Patrones Comunes

### Loading State

```tsx
"use client"

import { useState, useEffect } from "react"

function DataList() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch("/api/data")
      .then((res) => res.json())
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false))
  }, [])

  if (loading) {
    return <div>Cargando...</div>
  }

  if (error) {
    return <div>Error: {error.message}</div>
  }

  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  )
}
```

### Debounced Search

```tsx
"use client"

import { useState, useEffect } from "react"
import { Input } from "@/components/ui/button"

function SearchBox() {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState([])

  useEffect(() => {
    const timer = setTimeout(() => {
      if (query.trim()) {
        fetch(`/api/search?q=${query}`)
          .then((res) => res.json())
          .then(setResults)
      } else {
        setResults([])
      }
    }, 300) // Debounce 300ms

    return () => clearTimeout(timer)
  }, [query])

  return (
    <div>
      <Input
        type="search"
        placeholder="Buscar..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {results.length > 0 && (
        <ul className="mt-2">
          {results.map((result) => (
            <li key={result.id}>{result.title}</li>
          ))}
        </ul>
      )}
    </div>
  )
}
```

---

<div align="center">

**¿Necesitas más ejemplos?** Abre un [Issue](https://github.com/tu-usuario/agencia-tecnodespegue/issues) 💡

[← Volver al README](../README.md) • [Ver API](./API.md)

</div>
