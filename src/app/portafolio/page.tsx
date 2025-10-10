import {
	ArrowRight,
	Calendar,
	Code2,
	ExternalLink,
	Globe,
	Palette,
	Rocket,
	ShoppingCart,
	Star,
	TrendingUp,
	Users,
	Zap,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata = {
	title: "Portafolio | René Kuhm - TecnoDespegue",
	description:
		"Descubre mis proyectos destacados. E-commerce, agencias web, dashboards y más. Proyectos reales con tecnologías modernas.",
}

const projects = [
	{
		id: 1,
		title: "Agencia TecnoDespegue",
		category: "Agencia Web",
		description:
			"Sitio web profesional de agencia digital con diseño moderno, animaciones fluidas y sistema neumórfico. Incluye portafolio, servicios y formulario de contacto.",
		image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop",
		fallbackGradient: "from-blue-500 to-blue-700",
		icon: Globe,
		gradient: "from-blue-600 to-blue-700",
		badgeColor: "bg-blue-600",
		stats: [
			{ label: "Secciones", value: "6+" },
			{ label: "Componentes", value: "20+" },
			{ label: "Performance", value: "A+" },
		],
		technologies: ["Next.js 15", "TypeScript", "Tailwind CSS", "Biome"],
		timeline: "Actual",
		year: "2025",
		githubUrl: "https://github.com/Rene-Kuhm/agencia-tecnodespegue",
	},
	{
		id: 2,
		title: "E-commerce FullStack",
		category: "E-commerce",
		description:
			"Tienda online completa con carrito de compras, gestión de productos, sistema de pagos y panel de administración. Arquitectura fullstack escalable.",
		image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=1200&h=800&fit=crop",
		fallbackGradient: "from-purple-500 to-purple-700",
		icon: ShoppingCart,
		gradient: "from-purple-600 to-purple-700",
		badgeColor: "bg-purple-600",
		stats: [
			{ label: "Productos", value: "100+" },
			{ label: "Categorías", value: "15+" },
			{ label: "Carritos", value: "500+" },
		],
		technologies: ["JavaScript", "Node.js", "Express", "MongoDB"],
		timeline: "3 meses",
		year: "2025",
		githubUrl: "https://github.com/Rene-Kuhm/E-commerce-FullStack",
	},
	{
		id: 3,
		title: "Picomar E-commerce",
		category: "E-commerce",
		description:
			"Plataforma de comercio electrónico especializada con backend robusto, frontend moderno y gestión completa de inventario y pedidos.",
		image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=800&fit=crop",
		fallbackGradient: "from-pink-500 to-pink-700",
		icon: ShoppingCart,
		gradient: "from-pink-600 to-pink-700",
		badgeColor: "bg-pink-600",
		stats: [
			{ label: "Usuarios", value: "1K+" },
			{ label: "Pedidos", value: "3K+" },
			{ label: "Rating", value: "4.8/5" },
		],
		technologies: ["TypeScript", "React", "Node.js", "PostgreSQL"],
		timeline: "4 meses",
		year: "2025",
		githubUrl: "https://github.com/Rene-Kuhm/ecommerce-picomar",
	},
	{
		id: 4,
		title: "Dashboard Profesional",
		category: "Dashboard",
		description:
			"Dashboard empresarial con visualización de datos en tiempo real, gráficos interactivos, gestión de usuarios y reportes avanzados.",
		image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop",
		fallbackGradient: "from-green-500 to-green-700",
		icon: TrendingUp,
		gradient: "from-green-600 to-green-700",
		badgeColor: "bg-green-600",
		stats: [
			{ label: "Métricas", value: "30+" },
			{ label: "Gráficos", value: "15+" },
			{ label: "Usuarios", value: "50+" },
		],
		technologies: ["TypeScript", "Next.js", "Chart.js", "Tailwind"],
		timeline: "2 meses",
		year: "2025",
		githubUrl: "https://github.com/Rene-Kuhm/dashboard-rene",
	},
	{
		id: 5,
		title: "Tienda de Cerámica",
		category: "E-commerce",
		description:
			"Tienda online especializada en productos de cerámica con catálogo visual, galería de imágenes optimizadas y diseño artesanal moderno.",
		image: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=1200&h=800&fit=crop",
		fallbackGradient: "from-orange-500 to-orange-700",
		icon: Palette,
		gradient: "from-orange-600 to-orange-700",
		badgeColor: "bg-orange-600",
		stats: [
			{ label: "Productos", value: "80+" },
			{ label: "Categorías", value: "8+" },
			{ label: "Visitas", value: "2K+" },
		],
		technologies: ["Astro", "TypeScript", "Tailwind CSS", "SSG"],
		timeline: "1 mes",
		year: "2025",
		githubUrl: "https://github.com/Rene-Kuhm/tienda-ceramica",
	},
	{
		id: 6,
		title: "Freelance Agency",
		category: "Agencia Web",
		description:
			"Plataforma para agencia freelance con showcase de servicios, portafolio de trabajos y sistema de contacto. Diseño profesional y responsive.",
		image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&h=800&fit=crop",
		fallbackGradient: "from-cyan-500 to-cyan-700",
		icon: Users,
		gradient: "from-cyan-600 to-cyan-700",
		badgeColor: "bg-cyan-600",
		stats: [
			{ label: "Servicios", value: "12+" },
			{ label: "Proyectos", value: "25+" },
			{ label: "Clientes", value: "40+" },
		],
		technologies: ["TypeScript", "Next.js", "React", "Tailwind CSS"],
		timeline: "2 meses",
		year: "2025",
		githubUrl: "https://github.com/Rene-Kuhm/freelance-agency",
	},
]

export default function PortafolioPage() {
	return (
		<div className="flex flex-col">
			{/* Hero Section */}
			<section className="relative w-full py-20 md:py-32 overflow-hidden">
				<div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 animate-gradient" />
				<div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />

				<div className="container px-4 md:px-6 relative">
					<div className="flex flex-col items-center space-y-6 text-center max-w-4xl mx-auto">
						<Badge className="px-4 py-1.5 text-sm font-medium bg-gradient-to-r from-blue-600 to-purple-600 border-0 text-white">
							<Star className="w-4 h-4 mr-2" />
							Proyectos Destacados
						</Badge>

						<h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
							Mi Portafolio
							<span className="block mt-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
								De Proyectos Reales
							</span>
						</h1>

						<p className="text-muted-foreground text-lg md:text-xl max-w-[700px]">
							Proyectos desarrollados con tecnologías modernas. Cada uno disponible en GitHub para
							explorar el código y la arquitectura.
						</p>
					</div>
				</div>
			</section>

			{/* Stats Section */}
			<section className="w-full py-12 md:py-16 bg-muted/50 border-y">
				<div className="container px-4 md:px-6">
					<div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
						{[
							{
								icon: Rocket,
								value: "150+",
								label: "Proyectos Completados",
								color: "from-blue-500 to-blue-600",
							},
							{
								icon: Users,
								value: "80+",
								label: "Clientes Satisfechos",
								color: "from-purple-500 to-purple-600",
							},
							{
								icon: TrendingUp,
								value: "98%",
								label: "Tasa de Éxito",
								color: "from-pink-500 to-pink-600",
							},
							{
								icon: Star,
								value: "4.9/5",
								label: "Rating Promedio",
								color: "from-orange-500 to-orange-600",
							},
						].map((stat) => (
							<div key={stat.label} className="flex flex-col items-center text-center space-y-2">
								<div className={`p-2 sm:p-3 rounded-full bg-gradient-to-br ${stat.color} mb-2`}>
									<stat.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
								</div>
								<div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
									{stat.value}
								</div>
								<p className="text-xs sm:text-sm text-muted-foreground">{stat.label}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Projects Grid */}
			<section className="w-full py-16 md:py-24 lg:py-32">
				<div className="container px-4 md:px-6">
					<div className="grid gap-8 lg:gap-12">
						{projects.map((project, index) => (
							<Card
								key={project.id}
								className={`group overflow-hidden hover:shadow-2xl transition-all duration-500 border-2 ${
									index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
								} flex flex-col lg:flex`}
							>
								{/* Image Section */}
								<div className="lg:w-1/2 relative">
									<div className="aspect-video lg:aspect-square relative overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
										{/* Imagen del proyecto */}
										<Image
											src={project.image}
											alt={project.title}
											fill
											className="object-cover group-hover:scale-105 transition-transform duration-500"
											sizes="(max-width: 768px) 100vw, 50vw"
										/>
										{/* Overlay gradient */}
										<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
										{/* Category badge */}
										<div className="absolute top-6 left-6 z-10">
											<Badge className={`${project.badgeColor} text-white border-0`}>
												{project.category}
											</Badge>
										</div>
										{/* Technologies badges */}
										<div className="absolute bottom-6 left-6 right-6 z-10">
											<div className="flex gap-2 flex-wrap">
												{project.technologies.slice(0, 3).map((tech) => (
													<Badge
														key={tech}
														variant="secondary"
														className="bg-white/90 text-gray-900 backdrop-blur-sm"
													>
														{tech}
													</Badge>
												))}
											</div>
										</div>
									</div>
								</div>

								{/* Content Section */}
								<div className="lg:w-1/2 p-8 lg:p-10 flex flex-col justify-center">
									<div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
										<div className="flex items-center gap-2">
											<Calendar className="w-4 h-4" />
											<span>{project.year}</span>
										</div>
										<div className="flex items-center gap-2">
											<Zap className="w-4 h-4" />
											<span>{project.timeline}</span>
										</div>
									</div>

									<h3 className="text-3xl font-bold mb-4 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent transition-all">
										{project.title}
									</h3>

									<p className="text-muted-foreground text-lg mb-6">{project.description}</p>

									{/* Stats */}
									<div className="grid grid-cols-3 gap-4 mb-6">
										{project.stats.map((stat) => (
											<div key={stat.label} className="text-center">
												<div
													className={`text-2xl font-bold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent mb-1`}
												>
													{stat.value}
												</div>
												<div className="text-xs text-muted-foreground">{stat.label}</div>
											</div>
										))}
									</div>

									{/* Technologies */}
									<div className="mb-6">
										<p className="text-sm font-semibold mb-2 flex items-center gap-2">
											<Code2 className="w-4 h-4" />
											Tecnologías
										</p>
										<div className="flex gap-2 flex-wrap">
											{project.technologies.map((tech) => (
												<Badge key={tech} variant="outline">
													{tech}
												</Badge>
											))}
										</div>
									</div>

									<Button
										variant="outline"
										size="lg"
										className="w-fit border-2 group/btn"
										asChild
									>
										<Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
											Ver en GitHub
											<ExternalLink className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
										</Link>
									</Button>
								</div>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* Process Section */}
			<section className="w-full py-16 md:py-24 bg-muted/50">
				<div className="container px-4 md:px-6">
					<div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
						<Badge variant="outline" className="px-4 py-1.5">
							Mi Proceso
						</Badge>
						<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
							Cómo Trabajo
						</h2>
						<p className="max-w-[900px] text-muted-foreground md:text-xl">
							Un proceso probado que garantiza resultados excepcionales
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
						{[
							{
								step: "01",
								title: "Descubrimiento",
								description: "Entendemos tus objetivos, audiencia y requerimientos específicos.",
								icon: Users,
							},
							{
								step: "02",
								title: "Diseño",
								description: "Creamos prototipos y diseños que reflejan tu visión y marca.",
								icon: Palette,
							},
							{
								step: "03",
								title: "Desarrollo",
								description: "Construimos tu proyecto con las mejores prácticas y tecnologías.",
								icon: Code2,
							},
							{
								step: "04",
								title: "Lanzamiento",
								description: "Desplegamos y monitoreamos para asegurar un lanzamiento exitoso.",
								icon: Rocket,
							},
						].map((phase) => (
							<Card
								key={phase.step}
								className="group hover:shadow-xl transition-all border-2 hover:border-primary/50"
							>
								<CardHeader>
									<div className="flex items-start justify-between mb-4">
										<span className="text-5xl font-bold text-muted-foreground/20 group-hover:text-primary/30 transition-colors">
											{phase.step}
										</span>
										<div className="p-2 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 group-hover:scale-110 transition-transform">
											<phase.icon className="w-5 h-5 text-white" />
										</div>
									</div>
									<CardTitle className="text-xl">{phase.title}</CardTitle>
									<CardDescription>{phase.description}</CardDescription>
								</CardHeader>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="w-full py-16 md:py-24 lg:py-32 relative overflow-hidden">
				<div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600" />
				<div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />

				<div className="container px-4 md:px-6 relative">
					<div className="flex flex-col items-center justify-center space-y-6 text-center text-white max-w-3xl mx-auto">
						<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
							¿Tu Proyecto Será el Siguiente?
						</h2>
						<p className="text-white/90 text-lg md:text-xl">
							Contáctame hoy y comencemos a trabajar en tu próximo proyecto. Consulta gratuita sin
							compromiso.
						</p>
						<div className="flex flex-col sm:flex-row gap-4">
							<Button
								asChild
								size="lg"
								className="bg-white text-purple-600 hover:bg-white/90 shadow-xl"
							>
								<Link href="/contacto">
									Iniciar Proyecto
									<ArrowRight className="ml-2 h-5 w-5" />
								</Link>
							</Button>
							<Button
								asChild
								size="lg"
								variant="outline"
								className="border-2 border-white text-white hover:bg-white/10 backdrop-blur"
							>
								<Link href="/servicios">Ver Servicios</Link>
							</Button>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}
