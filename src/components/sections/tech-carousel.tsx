"use client"

import { ScrollReveal } from "@/components/effects/scroll-reveal"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"

// Definición de tecnologías con sus respectivos colores y categorías
const technologies = [
	// Frontend
	{ name: "React", category: "Frontend", color: "from-blue-400 to-blue-600", icon: "⚛️" },
	{ name: "Next.js", category: "Frontend", color: "from-gray-800 to-black", icon: "▲" },
	{ name: "TypeScript", category: "Frontend", color: "from-blue-500 to-blue-700", icon: "TS" },
	{ name: "Tailwind CSS", category: "Frontend", color: "from-cyan-400 to-cyan-600", icon: "🎨" },
	{ name: "Vue.js", category: "Frontend", color: "from-green-400 to-green-600", icon: "V" },

	// Backend
	{ name: "Node.js", category: "Backend", color: "from-green-500 to-green-700", icon: "⬢" },
	{ name: "Python", category: "Backend", color: "from-yellow-400 to-blue-600", icon: "🐍" },
	{ name: "PostgreSQL", category: "Backend", color: "from-blue-600 to-blue-800", icon: "🐘" },
	{ name: "MongoDB", category: "Backend", color: "from-green-600 to-green-800", icon: "🍃" },
	{ name: "GraphQL", category: "Backend", color: "from-pink-500 to-purple-600", icon: "◆" },

	// Cloud & DevOps
	{ name: "AWS", category: "Cloud", color: "from-orange-500 to-orange-700", icon: "☁️" },
	{ name: "Docker", category: "DevOps", color: "from-blue-400 to-blue-600", icon: "🐳" },
	{ name: "Kubernetes", category: "DevOps", color: "from-blue-500 to-blue-700", icon: "☸️" },
	{ name: "Vercel", category: "Cloud", color: "from-gray-900 to-black", icon: "▲" },
	{ name: "GitHub", category: "DevOps", color: "from-gray-700 to-gray-900", icon: "🐙" },

	// Mobile & Desktop
	{ name: "React Native", category: "Mobile", color: "from-blue-400 to-purple-600", icon: "📱" },
	{ name: "Electron", category: "Desktop", color: "from-cyan-400 to-blue-600", icon: "⚡" },

	// Tools & Others
	{ name: "Figma", category: "Design", color: "from-purple-500 to-pink-500", icon: "🎨" },
	{ name: "Prisma", category: "Backend", color: "from-gray-600 to-gray-800", icon: "◭" },
	{ name: "Redis", category: "Backend", color: "from-red-500 to-red-700", icon: "◆" },
]

export function TechCarousel() {
	// Duplicamos el array para crear el efecto de loop infinito
	const duplicatedTechs = [...technologies, ...technologies]

	return (
		<section className="w-full py-16 md:py-24 lg:py-32 overflow-hidden bg-muted/30">
			<div className="container px-4 md:px-6">
				<ScrollReveal direction="up" delay={100}>
					<div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
						<Badge variant="outline" className="px-4 py-1.5">
							Tecnologías
						</Badge>
						<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
							Stack Tecnológico de Vanguardia
						</h2>
						<p className="max-w-[900px] text-muted-foreground md:text-xl">
							Trabajamos con las tecnologías más modernas y robustas del mercado para garantizar
							soluciones de alta calidad
						</p>
					</div>
				</ScrollReveal>

				{/* Carrusel infinito */}
				<div className="relative">
					{/* Gradientes de fade en los bordes */}
					<div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
					<div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

					{/* Contenedor del carrusel */}
					<div className="overflow-hidden">
						<div className="flex gap-6 animate-infinite-scroll hover:pause-animation">
							{duplicatedTechs.map((tech, index) => (
								<Card
									key={`${tech.name}-${index}`}
									className="flex-shrink-0 w-48 h-48 neumorphic-card border-0 group cursor-pointer relative overflow-hidden"
								>
									{/* Fondo con gradiente de color de la tecnología */}
									<div
										className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
									/>

									{/* Contenido de la tarjeta */}
									<div className="relative h-full flex flex-col items-center justify-center p-6 gap-4">
										{/* Icono/Logo */}
										<div
											className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${tech.color} flex items-center justify-center text-4xl font-bold text-white shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
										>
											{tech.icon}
										</div>

										{/* Nombre de la tecnología */}
										<div className="text-center">
											<h3 className="font-bold text-lg mb-1 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
												{tech.name}
											</h3>
											<Badge variant="outline" className="text-xs font-medium">
												{tech.category}
											</Badge>
										</div>
									</div>

									{/* Efecto de brillo en hover */}
									<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
										<div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
									</div>
								</Card>
							))}
						</div>
					</div>
				</div>

				{/* Categorías de tecnologías */}
				<ScrollReveal direction="up" delay={200}>
					<div className="mt-16 flex flex-wrap items-center justify-center gap-3">
						<span className="text-sm text-muted-foreground font-medium">Especialidades:</span>
						{["Frontend", "Backend", "Cloud", "DevOps", "Mobile", "Design"].map((category) => (
							<Badge
								key={category}
								variant="secondary"
								className="px-4 py-1.5 hover:scale-105 transition-transform cursor-pointer"
							>
								{category}
							</Badge>
						))}
					</div>
				</ScrollReveal>

				{/* Estadística de tecnologías */}
				<ScrollReveal direction="up" delay={300}>
					<div className="mt-12 text-center">
						<p className="text-sm text-muted-foreground">
							Dominamos más de{" "}
							<span className="font-bold text-2xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
								{technologies.length}+
							</span>{" "}
							tecnologías para crear soluciones completas y escalables
						</p>
					</div>
				</ScrollReveal>
			</div>
		</section>
	)
}
