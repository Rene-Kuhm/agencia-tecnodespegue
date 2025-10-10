import {
	ArrowRight,
	CheckCircle2,
	Cloud,
	Code2,
	Database,
	Globe,
	LineChart,
	Megaphone,
	Palette,
	Rocket,
	Search,
	Shield,
	ShoppingCart,
	Smartphone,
	Zap,
} from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata = {
	title: "Servicios | Agencia TecnoDespegue",
	description:
		"Descubre nuestros servicios de desarrollo web, diseño UX/UI, consultoría digital y más. Soluciones tecnológicas a medida para tu negocio.",
}

export default function ServiciosPage() {
	return (
		<div className="flex flex-col">
			{/* Hero Section */}
			<section className="relative w-full py-20 md:py-32 overflow-hidden">
				<div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 animate-gradient" />
				<div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />

				<div className="container px-4 md:px-6 relative">
					<div className="flex flex-col items-center space-y-6 text-center max-w-4xl mx-auto">
						<Badge className="px-4 py-1.5 text-sm font-medium bg-gradient-to-r from-blue-600 to-purple-600 border-0 text-white">
							<Zap className="w-4 h-4 mr-2" />
							Servicios Premium
						</Badge>

						<h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
							Soluciones Digitales
							<span className="block mt-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
								Que Transforman Negocios
							</span>
						</h1>

						<p className="text-muted-foreground text-lg md:text-xl max-w-[700px]">
							Ofrecemos un ecosistema completo de servicios digitales diseñados para impulsar tu
							negocio al siguiente nivel con tecnología de vanguardia.
						</p>

						<Button
							asChild
							size="lg"
							className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg text-white"
						>
							<Link href="/contacto">
								Solicitar Consulta Gratis
								<ArrowRight className="ml-2 h-5 w-5" />
							</Link>
						</Button>
					</div>
				</div>
			</section>

			{/* Main Services */}
			<section className="w-full py-16 md:py-24 lg:py-32">
				<div className="container px-4 md:px-6">
					<div className="grid gap-12 lg:gap-16">
						{/* Desarrollo Web */}
						<div className="grid lg:grid-cols-2 gap-8 items-center">
							<div className="order-2 lg:order-1">
								<div className="p-4 w-fit rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 mb-6">
									<Code2 className="h-12 w-12 text-white" />
								</div>
								<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
									Desarrollo Web
								</h2>
								<p className="text-muted-foreground text-lg mb-6">
									Creamos aplicaciones web modernas, rápidas y escalables utilizando las últimas
									tecnologías del mercado. Desde landing pages hasta plataformas empresariales
									complejas.
								</p>
								<ul className="space-y-3 mb-6">
									{[
										"Next.js, React y TypeScript",
										"Arquitectura escalable y mantenible",
										"SEO optimizado desde el inicio",
										"Performance y velocidad garantizados",
										"Responsive design en todos los dispositivos",
										"Integración con APIs y servicios",
									].map((item) => (
										<li key={item} className="flex items-center gap-3">
											<CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
											<span>{item}</span>
										</li>
									))}
								</ul>
								<Button asChild variant="outline" size="lg">
									<Link href="/contacto">Solicitar Presupuesto</Link>
								</Button>
							</div>
							<div className="order-1 lg:order-2">
								<Card className="border-2 hover:border-blue-500/50 transition-all">
									<CardContent className="p-8">
										<div className="grid grid-cols-2 gap-4">
											{[
												{ icon: Globe, label: "Web Apps" },
												{ icon: Smartphone, label: "PWAs" },
												{ icon: Database, label: "APIs" },
												{ icon: Cloud, label: "Cloud Deploy" },
											].map((tech) => (
												<div
													key={tech.label}
													className="flex flex-col items-center justify-center p-6 rounded-lg bg-muted hover:bg-muted/70 transition-colors"
												>
													<tech.icon className="w-8 h-8 mb-2 text-blue-600" />
													<span className="text-sm font-medium">{tech.label}</span>
												</div>
											))}
										</div>
									</CardContent>
								</Card>
							</div>
						</div>

						{/* Diseño UX/UI */}
						<div className="grid lg:grid-cols-2 gap-8 items-center">
							<div>
								<Card className="border-2 hover:border-purple-500/50 transition-all">
									<CardContent className="p-8">
										<div className="grid grid-cols-2 gap-4">
											{[
												{ label: "Prototipado", value: "100%" },
												{ label: "User Testing", value: "100%" },
												{ label: "Design Systems", value: "100%" },
												{ label: "Responsive", value: "100%" },
											].map((stat) => (
												<div
													key={stat.label}
													className="flex flex-col items-center justify-center p-6 rounded-lg bg-muted"
												>
													<span className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-1">
														{stat.value}
													</span>
													<span className="text-sm text-muted-foreground">{stat.label}</span>
												</div>
											))}
										</div>
									</CardContent>
								</Card>
							</div>
							<div>
								<div className="p-4 w-fit rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 mb-6">
									<Palette className="h-12 w-12 text-white" />
								</div>
								<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
									Diseño UX/UI
								</h2>
								<p className="text-muted-foreground text-lg mb-6">
									Diseñamos experiencias de usuario excepcionales que no solo se ven bien, sino que
									convierten visitantes en clientes. Cada píxel cuenta.
								</p>
								<ul className="space-y-3 mb-6">
									{[
										"Investigación y análisis de usuarios",
										"Wireframes y prototipos interactivos",
										"Design systems escalables",
										"UI moderna y atractiva",
										"Testing con usuarios reales",
										"Iteración basada en datos",
									].map((item) => (
										<li key={item} className="flex items-center gap-3">
											<CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
											<span>{item}</span>
										</li>
									))}
								</ul>
								<Button asChild variant="outline" size="lg">
									<Link href="/contacto">Solicitar Presupuesto</Link>
								</Button>
							</div>
						</div>

						{/* Consultoría Digital */}
						<div className="grid lg:grid-cols-2 gap-8 items-center">
							<div className="order-2 lg:order-1">
								<div className="p-4 w-fit rounded-lg bg-gradient-to-br from-pink-500 to-pink-600 mb-6">
									<Rocket className="h-12 w-12 text-white" />
								</div>
								<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
									Consultoría Digital
								</h2>
								<p className="text-muted-foreground text-lg mb-6">
									Te ayudamos a definir y ejecutar estrategias digitales que generen resultados
									medibles. Desde la planificación hasta la optimización continua.
								</p>
								<ul className="space-y-3 mb-6">
									{[
										"Estrategia de transformación digital",
										"Auditoría técnica y de UX",
										"Marketing digital y growth hacking",
										"Analytics y métricas de negocio",
										"Optimización de conversión (CRO)",
										"Roadmap tecnológico personalizado",
									].map((item) => (
										<li key={item} className="flex items-center gap-3">
											<CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
											<span>{item}</span>
										</li>
									))}
								</ul>
								<Button asChild variant="outline" size="lg">
									<Link href="/contacto">Solicitar Presupuesto</Link>
								</Button>
							</div>
							<div className="order-1 lg:order-2">
								<Card className="border-2 hover:border-pink-500/50 transition-all">
									<CardContent className="p-8">
										<div className="grid grid-cols-2 gap-4">
											{[
												{ icon: LineChart, label: "Analytics" },
												{ icon: Search, label: "SEO/SEM" },
												{ icon: Megaphone, label: "Marketing" },
												{ icon: Shield, label: "Seguridad" },
											].map((service) => (
												<div
													key={service.label}
													className="flex flex-col items-center justify-center p-6 rounded-lg bg-muted hover:bg-muted/70 transition-colors"
												>
													<service.icon className="w-8 h-8 mb-2 text-pink-600" />
													<span className="text-sm font-medium">{service.label}</span>
												</div>
											))}
										</div>
									</CardContent>
								</Card>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Additional Services */}
			<section className="w-full py-16 md:py-24 bg-muted/50">
				<div className="container px-4 md:px-6">
					<div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
						<Badge variant="outline" className="px-4 py-1.5">
							Más Servicios
						</Badge>
						<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
							Servicios Complementarios
						</h2>
						<p className="max-w-[900px] text-muted-foreground md:text-xl">
							Servicios adicionales para completar tu presencia digital
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
						{[
							{
								icon: ShoppingCart,
								title: "E-commerce",
								description:
									"Tiendas online completas con gestión de inventario, pagos y envíos integrados.",
							},
							{
								icon: Smartphone,
								title: "Aplicaciones Móviles",
								description:
									"Apps nativas y PWAs para iOS y Android con experiencia de usuario excepcional.",
							},
							{
								icon: Cloud,
								title: "Cloud & DevOps",
								description: "Infraestructura escalable en la nube con CI/CD y monitoreo continuo.",
							},
							{
								icon: Search,
								title: "SEO & SEM",
								description:
									"Optimización para motores de búsqueda y campañas de publicidad digital efectivas.",
							},
							{
								icon: Database,
								title: "Backend & APIs",
								description:
									"Desarrollo de APIs REST y GraphQL escalables y seguras para tus aplicaciones.",
							},
							{
								icon: Shield,
								title: "Seguridad Web",
								description:
									"Auditorías de seguridad, implementación de HTTPS, protección contra ataques.",
							},
						].map((service) => (
							<Card
								key={service.title}
								className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50"
							>
								<CardHeader>
									<div className="p-3 w-fit rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 mb-4 group-hover:scale-110 transition-transform">
										<service.icon className="h-6 w-6 text-white" />
									</div>
									<CardTitle>{service.title}</CardTitle>
									<CardDescription className="text-base">{service.description}</CardDescription>
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
							¿Listo para Comenzar tu Proyecto?
						</h2>
						<p className="text-white/90 text-lg md:text-xl">
							Agenda una consulta gratuita y descubre cómo podemos ayudarte a alcanzar tus objetivos
							digitales.
						</p>
						<div className="flex flex-col sm:flex-row gap-4">
							<Button
								asChild
								size="lg"
								className="bg-white text-purple-600 hover:bg-white/90 shadow-xl"
							>
								<Link href="/contacto">
									Contactar Ahora
									<ArrowRight className="ml-2 h-5 w-5" />
								</Link>
							</Button>
							<Button
								asChild
								size="lg"
								variant="outline"
								className="border-2 border-white text-white hover:bg-white/10 backdrop-blur"
							>
								<Link href="/portafolio">Ver Trabajos</Link>
							</Button>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}
