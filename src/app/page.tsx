import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Newsletter } from "@/components/sections/newsletter"
import {
	ArrowRight,
	Code2,
	Rocket,
	Users,
	Zap,
	Award,
	TrendingUp,
	Star,
	CheckCircle2,
	Sparkles,
	Globe,
	Smartphone,
	Palette,
} from "lucide-react"
import Link from "next/link"

export default function Home() {
	return (
		<div className="flex flex-col">
			{/* Hero Section */}
			<section className="relative w-full py-20 md:py-32 lg:py-40 overflow-hidden">
				{/* Animated Background Gradient */}
				<div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 animate-gradient" />
				<div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />

				<div className="container px-4 md:px-6 relative">
					<div className="flex flex-col items-center space-y-8 text-center">
						<Badge className="px-4 py-1.5 text-sm font-medium bg-gradient-to-r from-blue-600 to-purple-600 border-0 text-white">
							<Sparkles className="w-4 h-4 mr-2" />
							Agencia Digital Premium
						</Badge>

						<div className="space-y-4 max-w-4xl">
							<h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
								Impulsa tu Negocio con
								<span className="block mt-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
									TecnoDespegue
								</span>
							</h1>
							<p className="mx-auto max-w-[700px] text-muted-foreground text-lg md:text-xl">
								Transformamos ideas en experiencias digitales excepcionales.
								Desarrollo web, diseño UX/UI y soluciones tecnológicas a
								medida para hacer crecer tu empresa.
							</p>
						</div>

						<div className="flex flex-col sm:flex-row gap-4">
							<Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all text-white">
								<Link href="/contacto">
									Comenzar Proyecto
									<ArrowRight className="ml-2 h-5 w-5" />
								</Link>
							</Button>
							<Button asChild variant="outline" size="lg" className="border-2 hover:bg-muted">
								<Link href="/portafolio">Ver Portafolio</Link>
							</Button>
						</div>

						{/* Trust Indicators */}
						<div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 pt-8 text-xs sm:text-sm text-muted-foreground">
							<div className="flex items-center gap-2">
								<CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0" />
								<span>100+ Proyectos</span>
							</div>
							<div className="flex items-center gap-2">
								<CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0" />
								<span>Satisfacción 100%</span>
							</div>
							<div className="flex items-center gap-2">
								<CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0" />
								<span>Soporte 24/7</span>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Stats Section */}
			<section className="w-full py-12 md:py-20 bg-muted/50 border-y">
				<div className="container px-4 md:px-6">
					<div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
						<div className="flex flex-col items-center text-center space-y-2">
							<div className="p-2 sm:p-3 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 mb-2">
								<Award className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
							</div>
							<div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
								150+
							</div>
							<p className="text-xs sm:text-sm text-muted-foreground">
								Proyectos Completados
							</p>
						</div>

						<div className="flex flex-col items-center text-center space-y-2">
							<div className="p-2 sm:p-3 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 mb-2">
								<Users className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
							</div>
							<div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
								80+
							</div>
							<p className="text-xs sm:text-sm text-muted-foreground">Clientes Felices</p>
						</div>

						<div className="flex flex-col items-center text-center space-y-2">
							<div className="p-2 sm:p-3 rounded-full bg-gradient-to-br from-pink-500 to-pink-600 mb-2">
								<TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
							</div>
							<div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
								5+
							</div>
							<p className="text-xs sm:text-sm text-muted-foreground">Años de Experiencia</p>
						</div>

						<div className="flex flex-col items-center text-center space-y-2">
							<div className="p-2 sm:p-3 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 mb-2">
								<Zap className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
							</div>
							<div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
								98%
							</div>
							<p className="text-xs sm:text-sm text-muted-foreground">
								Tasa de Satisfacción
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Services Section */}
			<section className="w-full py-16 md:py-24 lg:py-32">
				<div className="container px-4 md:px-6">
					<div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
						<Badge variant="outline" className="px-4 py-1.5">
							Servicios Premium
						</Badge>
						<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
							Soluciones Integrales
						</h2>
						<p className="max-w-[900px] text-muted-foreground md:text-xl">
							Ofrecemos un ecosistema completo de servicios digitales para
							impulsar tu negocio
						</p>
					</div>

					<div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-3">
						<Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-500/50">
							<CardHeader>
								<div className="p-3 w-fit rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 mb-4 group-hover:scale-110 transition-transform">
									<Code2 className="h-8 w-8 text-white" />
								</div>
								<CardTitle className="text-2xl">Desarrollo Web</CardTitle>
								<CardDescription className="text-base">
									Aplicaciones web modernas, rápidas y escalables con las
									últimas tecnologías
								</CardDescription>
							</CardHeader>
							<CardContent>
								<ul className="space-y-2 text-sm text-muted-foreground">
									<li className="flex items-center gap-2">
										<CheckCircle2 className="w-4 h-4 text-green-600" />
										Next.js, React, TypeScript
									</li>
									<li className="flex items-center gap-2">
										<CheckCircle2 className="w-4 h-4 text-green-600" />
										Arquitectura escalable
									</li>
									<li className="flex items-center gap-2">
										<CheckCircle2 className="w-4 h-4 text-green-600" />
										SEO optimizado
									</li>
									<li className="flex items-center gap-2">
										<CheckCircle2 className="w-4 h-4 text-green-600" />
										Performance garantizado
									</li>
								</ul>
							</CardContent>
						</Card>

						<Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-purple-500/50">
							<CardHeader>
								<div className="p-3 w-fit rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 mb-4 group-hover:scale-110 transition-transform">
									<Palette className="h-8 w-8 text-white" />
								</div>
								<CardTitle className="text-2xl">Diseño UX/UI</CardTitle>
								<CardDescription className="text-base">
									Experiencias de usuario excepcionales y diseños que
									convierten
								</CardDescription>
							</CardHeader>
							<CardContent>
								<ul className="space-y-2 text-sm text-muted-foreground">
									<li className="flex items-center gap-2">
										<CheckCircle2 className="w-4 h-4 text-green-600" />
										Diseño centrado en el usuario
									</li>
									<li className="flex items-center gap-2">
										<CheckCircle2 className="w-4 h-4 text-green-600" />
										Prototipos interactivos
									</li>
									<li className="flex items-center gap-2">
										<CheckCircle2 className="w-4 h-4 text-green-600" />
										Design systems
									</li>
									<li className="flex items-center gap-2">
										<CheckCircle2 className="w-4 h-4 text-green-600" />
										Responsive design
									</li>
								</ul>
							</CardContent>
						</Card>

						<Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-pink-500/50">
							<CardHeader>
								<div className="p-3 w-fit rounded-lg bg-gradient-to-br from-pink-500 to-pink-600 mb-4 group-hover:scale-110 transition-transform">
									<Rocket className="h-8 w-8 text-white" />
								</div>
								<CardTitle className="text-2xl">Consultoría Digital</CardTitle>
								<CardDescription className="text-base">
									Estrategias digitales personalizadas para hacer crecer tu
									negocio
								</CardDescription>
							</CardHeader>
							<CardContent>
								<ul className="space-y-2 text-sm text-muted-foreground">
									<li className="flex items-center gap-2">
										<CheckCircle2 className="w-4 h-4 text-green-600" />
										Estrategia de crecimiento
									</li>
									<li className="flex items-center gap-2">
										<CheckCircle2 className="w-4 h-4 text-green-600" />
										Marketing digital
									</li>
									<li className="flex items-center gap-2">
										<CheckCircle2 className="w-4 h-4 text-green-600" />
										Analytics y métricas
									</li>
									<li className="flex items-center gap-2">
										<CheckCircle2 className="w-4 h-4 text-green-600" />
										Optimización continua
									</li>
								</ul>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>

			{/* Portfolio Preview Section */}
			<section className="w-full py-16 md:py-24 lg:py-32 bg-muted/50">
				<div className="container px-4 md:px-6">
					<div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
						<Badge variant="outline" className="px-4 py-1.5">
							Nuestro Trabajo
						</Badge>
						<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
							Proyectos Destacados
						</h2>
						<p className="max-w-[900px] text-muted-foreground md:text-xl">
							Algunos de los proyectos que hemos desarrollado para nuestros
							clientes
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
						<Card className="group overflow-hidden hover:shadow-2xl transition-all duration-300">
							<div className="aspect-video bg-gradient-to-br from-blue-500 to-blue-700 relative overflow-hidden">
								<div className="absolute inset-0 flex items-center justify-center">
									<Globe className="w-20 h-20 text-white/20" />
								</div>
								<div className="absolute top-4 left-4">
									<Badge className="bg-white/90 text-blue-700">E-commerce</Badge>
								</div>
							</div>
							<CardHeader>
								<CardTitle>TechStore Online</CardTitle>
								<CardDescription>
									Tienda online completa con gestión de inventario y
									pagos integrados
								</CardDescription>
							</CardHeader>
						</Card>

						<Card className="group overflow-hidden hover:shadow-2xl transition-all duration-300">
							<div className="aspect-video bg-gradient-to-br from-purple-500 to-purple-700 relative overflow-hidden">
								<div className="absolute inset-0 flex items-center justify-center">
									<Smartphone className="w-20 h-20 text-white/20" />
								</div>
								<div className="absolute top-4 left-4">
									<Badge className="bg-white/90 text-purple-700">SaaS</Badge>
								</div>
							</div>
							<CardHeader>
								<CardTitle>TaskFlow Pro</CardTitle>
								<CardDescription>
									Plataforma de gestión de proyectos con colaboración en
									tiempo real
								</CardDescription>
							</CardHeader>
						</Card>

						<Card className="group overflow-hidden hover:shadow-2xl transition-all duration-300">
							<div className="aspect-video bg-gradient-to-br from-pink-500 to-pink-700 relative overflow-hidden">
								<div className="absolute inset-0 flex items-center justify-center">
									<Rocket className="w-20 h-20 text-white/20" />
								</div>
								<div className="absolute top-4 left-4">
									<Badge className="bg-white/90 text-pink-700">Startup</Badge>
								</div>
							</div>
							<CardHeader>
								<CardTitle>FitLife App</CardTitle>
								<CardDescription>
									App de fitness con seguimiento personalizado y
									comunidad activa
								</CardDescription>
							</CardHeader>
						</Card>
					</div>

					<div className="flex justify-center mt-10">
						<Button asChild size="lg" variant="outline" className="border-2">
							<Link href="/portafolio">
								Ver Todos los Proyectos
								<ArrowRight className="ml-2 h-4 w-4" />
							</Link>
						</Button>
					</div>
				</div>
			</section>

			{/* Testimonials Section */}
			<section className="w-full py-16 md:py-24 lg:py-32">
				<div className="container px-4 md:px-6">
					<div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
						<Badge variant="outline" className="px-4 py-1.5">
							Testimonios
						</Badge>
						<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
							Lo que Dicen Nuestros Clientes
						</h2>
						<p className="max-w-[900px] text-muted-foreground md:text-xl">
							La satisfacción de nuestros clientes es nuestra mayor recompensa
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
						<Card className="border-2">
							<CardHeader>
								<div className="flex items-center gap-4">
									<Avatar className="w-12 h-12">
										<AvatarImage src="/avatars/01.png" />
										<AvatarFallback className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
											MC
										</AvatarFallback>
									</Avatar>
									<div>
										<p className="font-semibold">María Contreras</p>
										<p className="text-sm text-muted-foreground">CEO, TechStart</p>
									</div>
								</div>
							</CardHeader>
							<CardContent>
								<div className="flex gap-1 mb-3">
									{[...Array(5)].map((_, i) => (
										<Star
											key={i}
											className="w-4 h-4 fill-yellow-400 text-yellow-400"
										/>
									))}
								</div>
								<p className="text-sm text-muted-foreground">
									&ldquo;Excelente trabajo. Superaron nuestras expectativas en
									todos los aspectos. El equipo es muy profesional y
									responde rápidamente.&rdquo;
								</p>
							</CardContent>
						</Card>

						<Card className="border-2">
							<CardHeader>
								<div className="flex items-center gap-4">
									<Avatar className="w-12 h-12">
										<AvatarImage src="/avatars/02.png" />
										<AvatarFallback className="bg-gradient-to-br from-purple-500 to-purple-600 text-white">
											JR
										</AvatarFallback>
									</Avatar>
									<div>
										<p className="font-semibold">Juan Rodríguez</p>
										<p className="text-sm text-muted-foreground">
											Founder, eShop
										</p>
									</div>
								</div>
							</CardHeader>
							<CardContent>
								<div className="flex gap-1 mb-3">
									{[...Array(5)].map((_, i) => (
										<Star
											key={i}
											className="w-4 h-4 fill-yellow-400 text-yellow-400"
										/>
									))}
								</div>
								<p className="text-sm text-muted-foreground">
									&ldquo;Nuestra tienda online ha triplicado sus ventas desde
									que trabajamos con TecnoDespegue. Altamente
									recomendados.&rdquo;
								</p>
							</CardContent>
						</Card>

						<Card className="border-2">
							<CardHeader>
								<div className="flex items-center gap-4">
									<Avatar className="w-12 h-12">
										<AvatarImage src="/avatars/03.png" />
										<AvatarFallback className="bg-gradient-to-br from-pink-500 to-pink-600 text-white">
											AS
										</AvatarFallback>
									</Avatar>
									<div>
										<p className="font-semibold">Ana Sánchez</p>
										<p className="text-sm text-muted-foreground">
											Director, FitLife
										</p>
									</div>
								</div>
							</CardHeader>
							<CardContent>
								<div className="flex gap-1 mb-3">
									{[...Array(5)].map((_, i) => (
										<Star
											key={i}
											className="w-4 h-4 fill-yellow-400 text-yellow-400"
										/>
									))}
								</div>
								<p className="text-sm text-muted-foreground">
									&ldquo;La app que desarrollaron es increíble. Nuestros usuarios
									están encantados con la experiencia y facilidad de uso.&rdquo;
								</p>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>

			{/* Newsletter Section */}
			<Newsletter />

			{/* CTA Section */}
			<section className="w-full py-16 md:py-24 lg:py-32 relative overflow-hidden">
				<div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600" />
				<div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />

				<div className="container px-4 md:px-6 relative">
					<div className="flex flex-col items-center justify-center space-y-6 text-center text-white">
						<Badge className="px-4 py-1.5 bg-white/20 backdrop-blur border-white/30 text-white">
							Comienza Hoy
						</Badge>
						<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
							¿Listo para Despegar?
						</h2>
						<p className="mx-auto max-w-[600px] text-white/90 text-lg md:text-xl">
							Transforma tu visión en realidad. Contáctanos hoy y descubre
							cómo podemos llevar tu negocio al siguiente nivel.
						</p>
						<div className="flex flex-col sm:flex-row gap-4">
							<Button
								asChild
								size="lg"
								className="bg-white text-purple-600 hover:bg-white/90 shadow-xl"
							>
								<Link href="/contacto">
									Solicitar Consulta Gratis
									<ArrowRight className="ml-2 h-5 w-5" />
								</Link>
							</Button>
							<Button
								asChild
								size="lg"
								variant="outline"
								className="border-2 border-white text-white hover:bg-white/10 backdrop-blur"
							>
								<Link href="/servicios">Explorar Servicios</Link>
							</Button>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}
