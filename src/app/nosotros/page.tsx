import { Button } from "@/components/ui/button"
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
	Users,
	Target,
	Heart,
	Zap,
	Award,
	Globe,
	Code2,
	Palette,
	Rocket,
	TrendingUp,
	Clock,
	Shield,
	Star,
	Sparkles,
	ArrowRight,
	Linkedin,
	Github,
	Twitter,
} from "lucide-react"
import Link from "next/link"

export const metadata = {
	title: "Nosotros | Agencia TecnoDespegue",
	description:
		"Conoce al equipo detrás de TecnoDespegue. Nuestra misión, valores y las personas que hacen posible tu éxito digital.",
}

const team = [
	{
		name: "Carlos Mendoza",
		role: "CEO & Founder",
		avatar: "CM",
		description:
			"Experto en estrategia digital con 10+ años de experiencia liderando proyectos tecnológicos.",
		gradient: "from-blue-500 to-blue-600",
		social: {
			linkedin: "#",
			twitter: "#",
			github: "#",
		},
	},
	{
		name: "Laura Sánchez",
		role: "CTO",
		avatar: "LS",
		description:
			"Arquitecta de software especializada en soluciones escalables y alta performance.",
		gradient: "from-purple-500 to-purple-600",
		social: {
			linkedin: "#",
			twitter: "#",
			github: "#",
		},
	},
	{
		name: "Diego Torres",
		role: "Lead Developer",
		avatar: "DT",
		description:
			"Full-stack developer apasionado por crear experiencias web excepcionales.",
		gradient: "from-pink-500 to-pink-600",
		social: {
			linkedin: "#",
			twitter: "#",
			github: "#",
		},
	},
	{
		name: "Ana Martínez",
		role: "UX/UI Designer",
		avatar: "AM",
		description:
			"Diseñadora con enfoque en experiencias centradas en el usuario y diseño visual impactante.",
		gradient: "from-orange-500 to-orange-600",
		social: {
			linkedin: "#",
			twitter: "#",
			github: "#",
		},
	},
	{
		name: "Roberto Gómez",
		role: "Frontend Developer",
		avatar: "RG",
		description:
			"Especialista en React y Next.js, creando interfaces rápidas y accesibles.",
		gradient: "from-green-500 to-green-600",
		social: {
			linkedin: "#",
			twitter: "#",
			github: "#",
		},
	},
	{
		name: "María López",
		role: "Project Manager",
		avatar: "ML",
		description:
			"Gestiona proyectos con metodologías ágiles asegurando entregas puntuales y calidad.",
		gradient: "from-red-500 to-red-600",
		social: {
			linkedin: "#",
			twitter: "#",
			github: "#",
		},
	},
]

export default function NosotrosPage() {
	return (
		<div className="flex flex-col">
			{/* Hero Section */}
			<section className="relative w-full py-20 md:py-32 overflow-hidden">
				<div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 animate-gradient" />
				<div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />

				<div className="container px-4 md:px-6 relative">
					<div className="flex flex-col items-center space-y-6 text-center max-w-4xl mx-auto">
						<Badge className="px-4 py-1.5 text-sm font-medium bg-gradient-to-r from-blue-600 to-purple-600 border-0 text-white">
							<Sparkles className="w-4 h-4 mr-2" />
							Sobre Nosotros
						</Badge>

						<h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
							Impulsamos tu
							<span className="block mt-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
								Transformación Digital
							</span>
						</h1>

						<p className="text-muted-foreground text-lg md:text-xl max-w-[700px]">
							Somos un equipo apasionado de expertos en tecnología dedicados a
							crear soluciones digitales que transforman negocios y mejoran
							vidas.
						</p>
					</div>
				</div>
			</section>

			{/* Mission & Vision */}
			<section className="w-full py-16 md:py-24">
				<div className="container px-4 md:px-6">
					<div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
						<Card className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-blue-500/50">
							<CardHeader>
								<div className="p-4 w-fit rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 mb-4 group-hover:scale-110 transition-transform">
									<Target className="h-10 w-10 text-white" />
								</div>
								<CardTitle className="text-3xl">Nuestra Misión</CardTitle>
							</CardHeader>
							<CardContent>
								<p className="text-muted-foreground text-lg leading-relaxed">
									Transformar ideas innovadoras en soluciones digitales
									excepcionales que impulsen el crecimiento de nuestros
									clientes. Nos comprometemos a entregar productos de alta
									calidad que superen expectativas y generen valor real.
								</p>
							</CardContent>
						</Card>

						<Card className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-purple-500/50">
							<CardHeader>
								<div className="p-4 w-fit rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 mb-4 group-hover:scale-110 transition-transform">
									<Rocket className="h-10 w-10 text-white" />
								</div>
								<CardTitle className="text-3xl">Nuestra Visión</CardTitle>
							</CardHeader>
							<CardContent>
								<p className="text-muted-foreground text-lg leading-relaxed">
									Ser la agencia digital líder reconocida por nuestra
									excelencia técnica, innovación constante y compromiso con el
									éxito de nuestros clientes. Queremos ser el socio estratégico
									preferido para la transformación digital.
								</p>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>

			{/* Values */}
			<section className="w-full py-16 md:py-24 bg-muted/50">
				<div className="container px-4 md:px-6">
					<div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
						<Badge variant="outline" className="px-4 py-1.5">
							Nuestros Valores
						</Badge>
						<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
							Lo Que Nos Define
						</h2>
						<p className="max-w-[900px] text-muted-foreground md:text-xl">
							Valores que guían cada decisión y proyecto que realizamos
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
						{[
							{
								icon: Zap,
								title: "Innovación",
								description:
									"Adoptamos las últimas tecnologías y metodologías para crear soluciones de vanguardia.",
								color: "from-yellow-500 to-orange-600",
							},
							{
								icon: Heart,
								title: "Pasión",
								description:
									"Amamos lo que hacemos y eso se refleja en cada línea de código y diseño que creamos.",
								color: "from-red-500 to-pink-600",
							},
							{
								icon: Award,
								title: "Excelencia",
								description:
									"Nos esforzamos por superar estándares y entregar trabajos de la más alta calidad.",
								color: "from-blue-500 to-cyan-600",
							},
							{
								icon: Users,
								title: "Colaboración",
								description:
									"Trabajamos de cerca con nuestros clientes como verdaderos socios estratégicos.",
								color: "from-purple-500 to-pink-600",
							},
							{
								icon: Clock,
								title: "Compromiso",
								description:
									"Cumplimos nuestras promesas y plazos, manteniendo siempre la transparencia.",
								color: "from-green-500 to-emerald-600",
							},
							{
								icon: Shield,
								title: "Confianza",
								description:
									"Construimos relaciones duraderas basadas en la honestidad y resultados comprobables.",
								color: "from-indigo-500 to-purple-600",
							},
						].map((value) => (
							<Card
								key={value.title}
								className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50"
							>
								<CardHeader>
									<div
										className={`p-3 w-fit rounded-lg bg-gradient-to-br ${value.color} mb-4 group-hover:scale-110 transition-transform`}
									>
										<value.icon className="h-8 w-8 text-white" />
									</div>
									<CardTitle className="text-2xl">{value.title}</CardTitle>
									<CardDescription className="text-base">
										{value.description}
									</CardDescription>
								</CardHeader>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* Stats */}
			<section className="w-full py-16 md:py-24">
				<div className="container px-4 md:px-6">
					<div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
						<Badge variant="outline" className="px-4 py-1.5">
							Nuestros Números
						</Badge>
						<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
							Resultados Que Hablan Por Sí Solos
						</h2>
					</div>

					<div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">
						{[
							{
								icon: Code2,
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
								value: "5+",
								label: "Años de Experiencia",
								color: "from-pink-500 to-pink-600",
							},
							{
								icon: Star,
								value: "98%",
								label: "Tasa de Satisfacción",
								color: "from-orange-500 to-orange-600",
							},
						].map((stat) => (
							<div
								key={stat.label}
								className="flex flex-col items-center text-center space-y-2 sm:space-y-3"
							>
								<div
									className={`p-3 sm:p-4 rounded-full bg-gradient-to-br ${stat.color} mb-2`}
								>
									<stat.icon className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white" />
								</div>
								<div className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
									{stat.value}
								</div>
								<p className="text-xs sm:text-sm text-muted-foreground">{stat.label}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Team */}
			<section className="w-full py-16 md:py-24 lg:py-32 bg-muted/50">
				<div className="container px-4 md:px-6">
					<div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
						<Badge variant="outline" className="px-4 py-1.5">
							Nuestro Equipo
						</Badge>
						<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
							Conoce a Los Expertos
						</h2>
						<p className="max-w-[900px] text-muted-foreground md:text-xl">
							Un equipo multidisciplinario de profesionales apasionados por la
							tecnología
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
						{team.map((member) => (
							<Card
								key={member.name}
								className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/50"
							>
								<CardHeader className="text-center">
									<div className="flex justify-center mb-4">
										<Avatar className="w-24 h-24 ring-4 ring-muted group-hover:ring-primary/50 transition-all">
											<AvatarImage src={`/team/${member.avatar}.jpg`} />
											<AvatarFallback
												className={`bg-gradient-to-br ${member.gradient} text-white text-2xl font-bold`}
											>
												{member.avatar}
											</AvatarFallback>
										</Avatar>
									</div>
									<CardTitle className="text-2xl">{member.name}</CardTitle>
									<div className="text-sm font-medium text-primary">
										{member.role}
									</div>
								</CardHeader>
								<CardContent>
									<p className="text-muted-foreground text-center mb-4">
										{member.description}
									</p>
									<div className="flex justify-center gap-3">
										<Button
											variant="ghost"
											size="icon"
											className="hover:bg-blue-500/10 hover:text-blue-600"
											asChild
										>
											<Link href={member.social.linkedin}>
												<Linkedin className="w-4 h-4" />
											</Link>
										</Button>
										<Button
											variant="ghost"
											size="icon"
											className="hover:bg-gray-800/10 hover:text-gray-800 dark:hover:text-white"
											asChild
										>
											<Link href={member.social.github}>
												<Github className="w-4 h-4" />
											</Link>
										</Button>
										<Button
											variant="ghost"
											size="icon"
											className="hover:bg-blue-400/10 hover:text-blue-400"
											asChild
										>
											<Link href={member.social.twitter}>
												<Twitter className="w-4 h-4" />
											</Link>
										</Button>
									</div>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* Why Choose Us */}
			<section className="w-full py-16 md:py-24">
				<div className="container px-4 md:px-6">
					<div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
						<Badge variant="outline" className="px-4 py-1.5">
							¿Por Qué Elegirnos?
						</Badge>
						<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
							La Diferencia TecnoDespegue
						</h2>
					</div>

					<div className="grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
						{[
							{
								icon: Code2,
								title: "Tecnología de Vanguardia",
								description:
									"Utilizamos las últimas tecnologías y mejores prácticas de la industria para garantizar soluciones modernas y escalables.",
							},
							{
								icon: Palette,
								title: "Diseño Excepcional",
								description:
									"Cada proyecto es diseñado pensando en la experiencia del usuario, combinando estética con funcionalidad perfectamente.",
							},
							{
								icon: Globe,
								title: "Enfoque en Resultados",
								description:
									"No solo entregamos código, entregamos soluciones que generan ROI medible y crecimiento tangible para tu negocio.",
							},
						].map((benefit) => (
							<Card
								key={benefit.title}
								className="group hover:shadow-xl transition-all border-2 hover:border-primary/50"
							>
								<CardHeader>
									<div className="p-3 w-fit rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 mb-4 group-hover:scale-110 transition-transform">
										<benefit.icon className="h-8 w-8 text-white" />
									</div>
									<CardTitle className="text-2xl">{benefit.title}</CardTitle>
									<CardDescription className="text-base">
										{benefit.description}
									</CardDescription>
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
							¿Listo para Trabajar con Nosotros?
						</h2>
						<p className="text-white/90 text-lg md:text-xl">
							Únete a más de 80 empresas que han transformado su presencia
							digital con TecnoDespegue.
						</p>
						<div className="flex flex-col sm:flex-row gap-4">
							<Button
								asChild
								size="lg"
								className="bg-white text-purple-600 hover:bg-white/90 shadow-xl"
							>
								<Link href="/contacto">
									Comenzar Proyecto
									<ArrowRight className="ml-2 h-5 w-5" />
								</Link>
							</Button>
							<Button
								asChild
								size="lg"
								variant="outline"
								className="border-2 border-white text-white hover:bg-white/10 backdrop-blur"
							>
								<Link href="/portafolio">Ver Portafolio</Link>
							</Button>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}
