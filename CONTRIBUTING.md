# 🤝 Guía de Contribución - Agencia TecnoDespegue

¡Gracias por tu interés en contribuir a este proyecto! Esta guía te ayudará a empezar.

---

## 📋 Tabla de Contenidos

- [Código de Conducta](#-código-de-conducta)
- [¿Cómo Puedo Contribuir?](#-cómo-puedo-contribuir)
- [Configuración del Entorno](#-configuración-del-entorno)
- [Workflow de Desarrollo](#-workflow-de-desarrollo)
- [Estándares de Código](#-estándares-de-código)
- [Guía de Commits](#-guía-de-commits)
- [Pull Requests](#-pull-requests)
- [Reportar Bugs](#-reportar-bugs)
- [Solicitar Features](#-solicitar-features)

---

## 📜 Código de Conducta

Este proyecto y todos sus participantes se rigen por un código de conducta. Al participar, se espera que mantengas este código. Por favor reporta comportamientos inaceptables a contacto@tecnodespegue.com.

### Nuestros Principios

- **Respeto:** Trata a todos con respeto y profesionalismo
- **Inclusividad:** Acogemos contribuciones de todos
- **Colaboración:** Trabaja de manera constructiva con otros
- **Calidad:** Prioriza la calidad sobre la cantidad

---

## 🎯 ¿Cómo Puedo Contribuir?

Hay muchas formas de contribuir a este proyecto:

### 1. Reportar Bugs 🐛

¿Encontraste un bug? Abre un [Issue](https://github.com/tu-usuario/agencia-tecnodespegue/issues) con la etiqueta `bug`.

### 2. Sugerir Mejoras 💡

¿Tienes ideas para mejorar el proyecto? Abre un [Issue](https://github.com/tu-usuario/agencia-tecnodespegue/issues) con la etiqueta `enhancement`.

### 3. Mejorar Documentación 📝

La documentación siempre puede mejorar. Las contribuciones pueden incluir:
- Corregir errores tipográficos
- Agregar ejemplos de código
- Mejorar explicaciones
- Traducir documentación

### 4. Escribir Código 💻

Contribuye con código para:
- Implementar nuevas features
- Corregir bugs
- Mejorar performance
- Refactorizar código existente
- Agregar tests

---

## 🛠️ Configuración del Entorno

### Prerequisitos

Asegúrate de tener instalado:

```bash
node -v  # v18.17.0 o superior
npm -v   # v9.0.0 o superior
git --version
```

### Setup Inicial

1. **Fork el repositorio**

   Haz clic en el botón "Fork" en GitHub

2. **Clona tu fork**

   ```bash
   git clone https://github.com/TU-USUARIO/agencia-tecnodespegue.git
   cd agencia-tecnodespegue
   ```

3. **Agrega el repositorio original como upstream**

   ```bash
   git remote add upstream https://github.com/USUARIO-ORIGINAL/agencia-tecnodespegue.git
   ```

4. **Instala dependencias**

   ```bash
   npm install
   ```

5. **Configura variables de entorno**

   ```bash
   cp .env.example .env.local
   # Edita .env.local con tus valores
   ```

6. **Inicia el servidor de desarrollo**

   ```bash
   npm run dev
   ```

7. **Verifica que todo funcione**

   ```bash
   npm run check  # Ejecuta lint + type-check
   npm run build  # Verifica que el build funcione
   ```

---

## 🔄 Workflow de Desarrollo

### 1. Sincroniza tu Fork

Antes de empezar, asegúrate de tener la última versión:

```bash
git checkout main
git fetch upstream
git merge upstream/main
git push origin main
```

### 2. Crea una Rama

Crea una rama para tu feature o fix:

```bash
# Para features
git checkout -b feature/nombre-descriptivo

# Para fixes
git checkout -b fix/descripcion-del-bug

# Para docs
git checkout -b docs/descripcion-de-la-mejora
```

**Convención de nombres de ramas:**
- `feature/` - Nuevas funcionalidades
- `fix/` - Corrección de bugs
- `docs/` - Cambios en documentación
- `refactor/` - Refactorización de código
- `test/` - Agregar o modificar tests
- `chore/` - Tareas de mantenimiento

### 3. Desarrolla tu Cambio

Haz tus cambios siguiendo los [estándares de código](#-estándares-de-código).

```bash
# Verifica el código mientras desarrollas
npm run lint       # Linting
npm run type-check # Verificación de tipos
npm run check      # Todo lo anterior
```

### 4. Haz Commits

Sigue la [guía de commits](#-guía-de-commits):

```bash
git add .
git commit -m "feat: agregar componente de búsqueda"
```

### 5. Push a tu Fork

```bash
git push origin feature/nombre-descriptivo
```

### 6. Abre un Pull Request

Ve a GitHub y abre un Pull Request desde tu rama hacia `main` del repositorio original.

---

## 📏 Estándares de Código

### TypeScript

- ✅ **Usa TypeScript strict mode**
- ✅ **No uses `any`** - Usa tipos específicos
- ✅ **Evita `as`** - Prefiere type guards
- ✅ **Exports nombrados** - No default exports

```typescript
// ✅ Bueno
export function Button({ children }: { children: React.ReactNode }) {
  return <button>{children}</button>
}

// ❌ Malo
export default function Button({ children }: any) {
  return <button>{children}</button>
}
```

### React

- ✅ **Componentes funcionales** con hooks
- ✅ **Props tipadas** con TypeScript
- ✅ **Nombra handlers** con `handle*`
- ✅ **Client Components** solo cuando sea necesario

```typescript
// ✅ Bueno
"use client"  // Solo si necesitas interactividad

interface ButtonProps {
  onClick: () => void
  children: React.ReactNode
}

export function Button({ onClick, children }: ButtonProps) {
  const handleClick = () => {
    console.log("Clicked!")
    onClick()
  }

  return <button onClick={handleClick}>{children}</button>
}

// ❌ Malo - sin tipos, sin "use client" cuando es necesario
function Button({ onClick, children }) {
  return <button onClick={onClick}>{children}</button>
}
```

### Estilos

- ✅ **Tailwind CSS** para estilos
- ✅ **Usa `cn()`** para composición de clases
- ✅ **Mobile-first** responsive design
- ✅ **Clases ordenadas**: layout → spacing → sizing → colors → typography

```tsx
// ✅ Bueno
<div className={cn(
  "flex flex-col gap-4",  // layout
  "p-4 md:p-8",           // spacing
  "w-full max-w-md",      // sizing
  "bg-card",              // colors
  "text-lg font-semibold", // typography
  className
)}>

// ❌ Malo - clases desordenadas
<div className="text-lg w-full p-4 bg-card flex">
```

### Naming Conventions

| Tipo | Convención | Ejemplo |
|------|------------|---------|
| Componentes | PascalCase | `UserProfile.tsx` |
| Hooks | camelCase con `use` | `useMediaQuery.ts` |
| Utilidades | camelCase | `formatDate.ts` |
| Constantes | UPPER_SNAKE_CASE | `MAX_RETRIES` |
| Tipos/Interfaces | PascalCase | `UserProfile`, `ButtonProps` |
| Archivos | kebab-case | `user-profile.tsx` |

### Estructura de Archivos

```typescript
// 1. Imports de librerías
import { useState } from "react"
import { useRouter } from "next/navigation"

// 2. Imports de tipos
import type { User } from "@/types"

// 3. Imports de constantes
import { SITE_CONFIG } from "@/constants"

// 4. Imports de componentes
import { Button } from "@/components/ui/button"

// 5. Imports de hooks
import { useMediaQuery } from "@/hooks"

// 6. Imports de utilidades
import { cn } from "@/lib/utils"

// 7. Definición de tipos locales
interface ComponentProps {
  // ...
}

// 8. Componente
export function Component({ ... }: ComponentProps) {
  // ...
}
```

### Biome (Linter y Formatter)

El proyecto usa Biome para linting y formateo automático:

```bash
# Verificar código
npm run lint

# Corregir automáticamente
npm run lint:fix

# Solo formatear
npm run format
```

**Configuración en `biome.json`:**
- Indentación: Tabs (2 espacios)
- Comillas: Dobles
- Semicolons: AsNeeded
- Line width: 100

---

## 📝 Guía de Commits

Usamos [Conventional Commits](https://www.conventionalcommits.org/) para mensajes de commit claros y consistentes.

### Formato

```
<tipo>(<scope>): <descripción>

[cuerpo opcional]

[footer opcional]
```

### Tipos

| Tipo | Descripción | Ejemplo |
|------|-------------|---------|
| `feat` | Nueva funcionalidad | `feat(auth): agregar login con Google` |
| `fix` | Corrección de bug | `fix(navbar): corregir menu mobile` |
| `docs` | Solo documentación | `docs(readme): actualizar guía de instalación` |
| `style` | Cambios de formato | `style: aplicar formato con Biome` |
| `refactor` | Refactorización | `refactor(hooks): simplificar useMediaQuery` |
| `perf` | Mejoras de performance | `perf: optimizar imágenes del hero` |
| `test` | Agregar/modificar tests | `test(button): agregar tests unitarios` |
| `chore` | Tareas de mantenimiento | `chore: actualizar dependencias` |

### Scope (Opcional)

El scope especifica qué parte del código fue afectada:

- `auth` - Autenticación
- `ui` - Componentes UI
- `api` - API routes
- `hooks` - Custom hooks
- `types` - Definiciones de tipos
- `docs` - Documentación

### Ejemplos

```bash
# Feature nueva
git commit -m "feat(contact): agregar validación de formulario"

# Bug fix
git commit -m "fix(navbar): resolver overflow en mobile"

# Documentación
git commit -m "docs(hooks): agregar ejemplos de uso"

# Refactor
git commit -m "refactor(constants): reorganizar exports"

# Con cuerpo descriptivo
git commit -m "feat(portfolio): agregar filtro por categoría

- Implementar filtrado de proyectos
- Agregar UI de filtros
- Actualizar tipos TypeScript"
```

### ❌ Ejemplos Malos

```bash
git commit -m "changes"
git commit -m "fix stuff"
git commit -m "WIP"
git commit -m "final version"
```

---

## 🔀 Pull Requests

### Antes de Abrir un PR

1. ✅ Asegúrate de que pasan todos los checks:
   ```bash
   npm run check
   npm run build
   ```

2. ✅ Tus commits siguen la convención
3. ✅ Tu código está actualizado con `main`
4. ✅ Agregaste tests si es aplicable
5. ✅ Actualizaste la documentación si es necesario

### Plantilla de PR

```markdown
## Descripción

Breve descripción de los cambios.

## Tipo de cambio

- [ ] Bug fix
- [ ] Nueva feature
- [ ] Breaking change
- [ ] Documentación

## ¿Cómo testearlo?

Pasos para verificar los cambios:
1. ...
2. ...

## Checklist

- [ ] Mi código sigue los estándares del proyecto
- [ ] He realizado una auto-revisión de mi código
- [ ] He agregado comentarios en código complejo
- [ ] He actualizado la documentación
- [ ] Mis cambios no generan nuevas advertencias
- [ ] He agregado tests que prueban mi fix/feature
- [ ] Los tests nuevos y existentes pasan
```

### Revisión de Código

Tu PR será revisado por los maintainers. Ellos podrían:

- ✅ **Aprobar** - Tu PR será merged
- 💬 **Comentar** - Sugerencias de mejora
- ❌ **Solicitar cambios** - Cambios requeridos

**Sé receptivo al feedback y haz los cambios solicitados.**

---

## 🐛 Reportar Bugs

### Antes de Reportar

1. ✅ Busca en [Issues existentes](https://github.com/tu-usuario/agencia-tecnodespegue/issues)
2. ✅ Asegúrate de estar usando la última versión
3. ✅ Reproduce el bug en modo producción

### Plantilla de Bug Report

```markdown
## Descripción del Bug

Descripción clara y concisa del bug.

## Pasos para Reproducir

1. Ve a '...'
2. Haz clic en '...'
3. Scroll hasta '...'
4. Ver error

## Comportamiento Esperado

Qué debería pasar.

## Comportamiento Actual

Qué está pasando realmente.

## Screenshots

Si aplica, agrega screenshots.

## Entorno

- OS: [e.g. Windows 11]
- Browser: [e.g. Chrome 120]
- Node Version: [e.g. 18.17.0]
- Next.js Version: [e.g. 15.5.4]

## Contexto Adicional

Cualquier información adicional relevante.
```

---

## 💡 Solicitar Features

### Plantilla de Feature Request

```markdown
## Resumen del Feature

Descripción breve del feature propuesto.

## Problema que Resuelve

¿Qué problema resuelve este feature?

## Solución Propuesta

Describe cómo debería funcionar.

## Alternativas Consideradas

¿Qué otras soluciones consideraste?

## Impacto

¿Cómo mejorará esto el proyecto?

## Notas Adicionales

Cualquier información adicional.
```

---

## 🧪 Testing

### Ejecutar Tests

```bash
# Ejecutar todos los tests
npm run test

# Ejecutar con coverage
npm run test:coverage

# Watch mode
npm run test:watch
```

### Escribir Tests

```typescript
import { render, screen } from "@testing-library/react"
import { Button } from "./button"

describe("Button", () => {
  it("renderiza correctamente", () => {
    render(<Button>Clic</Button>)
    expect(screen.getByRole("button")).toHaveTextContent("Clic")
  })

  it("ejecuta onClick cuando se hace clic", () => {
    const handleClick = vi.fn()
    render(<Button onClick={handleClick}>Clic</Button>)

    screen.getByRole("button").click()
    expect(handleClick).toHaveBeenCalledOnce()
  })
})
```

---

## 📚 Recursos

- [Documentación de Next.js](https://nextjs.org/docs)
- [Documentación de React](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Biome Documentation](https://biomejs.dev)
- [Conventional Commits](https://www.conventionalcommits.org/)

---

## 🙏 Agradecimientos

¡Gracias por contribuir a Agencia TecnoDespegue! Tu ayuda hace que este proyecto sea mejor para todos.

### Colaboradores Principales

Ver [CONTRIBUTORS.md](./CONTRIBUTORS.md) para la lista de colaboradores.

---

## ❓ Preguntas

¿Tienes preguntas? No dudes en:

- 📧 Enviar un email a contacto@tecnodespegue.com
- 💬 Abrir un [Discussion](https://github.com/tu-usuario/agencia-tecnodespegue/discussions)
- 🐛 Abrir un [Issue](https://github.com/tu-usuario/agencia-tecnodespegue/issues)

---

<div align="center">

**¡Gracias por hacer de este proyecto algo especial!** ❤️

</div>
