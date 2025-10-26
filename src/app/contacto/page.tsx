"use client"

import {
	CheckCircle2,
	Clock,
	Mail,
	MapPin,
	MessageSquare,
	Phone,
	Send,
	Sparkles,
} from "lucide-react"
import { useState } from "react"
import { toast } from "sonner"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export default function ContactoPage() {
	const [isLoading, setIsLoading] = useState(false)
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		company: "",
		service: "",
		budget: "",
		message: "",
	})

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
	) => {
		const { name, value } = e.target
		setFormData((prev) => ({ ...prev, [name]: value }))
	}

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		setIsLoading(true)

		try {
			const response = await fetch("/api/contact", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					name: formData.name,
					email: formData.email,
					phone: formData.phone || undefined,
					subject: `${formData.service || "Consulta General"} - ${formData.company || "Sin empresa"}`,
					message: `Servicio: ${formData.service}\nPresupuesto: ${formData.budget || "No especificado"}\nEmpresa: ${formData.company || "No especificada"}\n\n${formData.message}`,
				}),
			})

			const data = await response.json()

			if (!response.ok) {
				throw new Error(data.error || "Error al enviar el mensaje")
			}

			toast.success("¡Mensaje enviado!", {
				description: "Hemos recibido tu consulta. Te contactaremos pronto por email.",
				duration: 5000,
			})

			// Limpiar formulario
			setFormData({
				name: "",
				email: "",
				phone: "",
				company: "",
				service: "",
				budget: "",
				message: "",
			})
		} catch (error) {
			console.error("Error al enviar formulario:", error)
			toast.error("Error al enviar el mensaje", {
				description: error instanceof Error ? error.message : "Intenta de nuevo más tarde",
			})
		} finally {
			setIsLoading(false)
		}
	}

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
							Hablemos
						</Badge>

						<h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
							¿Tienes un Proyecto
							<span className="block mt-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
								en Mente?
							</span>
						</h1>

						<p className="text-muted-foreground text-lg md:text-xl max-w-[700px]">
							Estamos listos para escucharte. Cuéntanos sobre tu proyecto y descubre cómo podemos
							ayudarte a alcanzar tus objetivos digitales.
						</p>
					</div>
				</div>
			</section>

			{/* Contact Info Cards */}
			<section className="w-full py-12 md:py-16 bg-muted/50 border-y">
				<div className="container px-4 md:px-6">
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
						{[
							{
								icon: Mail,
								title: "Email",
								value: "contacto@tecnodespegue.com",
								color: "from-blue-500 to-blue-600",
							},
							{
								icon: Phone,
								title: "Teléfono",
								value: "+54 (2334) 409838",
								color: "from-purple-500 to-purple-600",
							},
							{
								icon: MapPin,
								title: "Ubicación",
								value: "Eduardo Castex (LP), Argentina",
								color: "from-pink-500 to-pink-600",
							},
							{
								icon: Clock,
								title: "Horario",
								value: "Lun - Vie: 9AM - 6PM",
								color: "from-orange-500 to-orange-600",
							},
						].map((info) => (
							<Card
								key={info.title}
								className="group hover:shadow-xl transition-all border-2 hover:border-primary/50"
							>
								<CardHeader className="text-center pb-3">
									<div
										className={`p-3 w-fit mx-auto rounded-lg bg-gradient-to-br ${info.color} mb-3 group-hover:scale-110 transition-transform`}
									>
										<info.icon className="w-6 h-6 text-white" />
									</div>
									<CardTitle className="text-base">{info.title}</CardTitle>
								</CardHeader>
								<CardContent className="text-center pb-6">
									<p className="text-sm text-muted-foreground">{info.value}</p>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* Contact Form */}
			<section className="w-full py-16 md:py-24 lg:py-32">
				<div className="container px-4 md:px-6">
					<div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
						{/* Form */}
						<div>
							<div className="mb-8">
								<Badge variant="outline" className="mb-4">
									Formulario de Contacto
								</Badge>
								<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
									Solicita una Consulta Gratuita
								</h2>
								<p className="text-muted-foreground text-lg">
									Completa el formulario y nos pondremos en contacto contigo en menos de 24 horas.
								</p>
							</div>

							<form onSubmit={handleSubmit} className="space-y-6">
								{/* Name */}
								<div className="space-y-2">
									<label
										htmlFor="name"
										className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
									>
										Nombre Completo *
									</label>
									<Input
										id="name"
										name="name"
										type="text"
										placeholder="Juan Pérez"
										value={formData.name}
										onChange={handleChange}
										required
										className="h-11"
									/>
								</div>

								{/* Email */}
								<div className="space-y-2">
									<label htmlFor="email" className="text-sm font-medium leading-none">
										Email *
									</label>
									<Input
										id="email"
										name="email"
										type="email"
										placeholder="juan@empresa.com"
										value={formData.email}
										onChange={handleChange}
										required
										className="h-11"
									/>
								</div>

								{/* Phone & Company */}
								<div className="grid md:grid-cols-2 gap-4">
									<div className="space-y-2">
										<label htmlFor="phone" className="text-sm font-medium">
											Teléfono
										</label>
										<Input
											id="phone"
											name="phone"
											type="tel"
											placeholder="+52 555 123 4567"
											value={formData.phone}
											onChange={handleChange}
											className="h-11"
										/>
									</div>
									<div className="space-y-2">
										<label htmlFor="company" className="text-sm font-medium">
											Empresa
										</label>
										<Input
											id="company"
											name="company"
											type="text"
											placeholder="Mi Empresa S.A."
											value={formData.company}
											onChange={handleChange}
											className="h-11"
										/>
									</div>
								</div>

								{/* Service & Budget */}
								<div className="grid md:grid-cols-2 gap-4">
									<div className="space-y-2">
										<label htmlFor="service" className="text-sm font-medium">
											Servicio de Interés *
										</label>
										<select
											id="service"
											name="service"
											value={formData.service}
											onChange={handleChange}
											required
											className="flex h-11 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
										>
											<option value="">Selecciona un servicio</option>
											<option value="desarrollo-web">Desarrollo Web</option>
											<option value="diseno-ux-ui">Diseño UX/UI</option>
											<option value="consultoria">Consultoría Digital</option>
											<option value="ecommerce">E-commerce</option>
											<option value="app-movil">Aplicación Móvil</option>
											<option value="otro">Otro</option>
										</select>
									</div>
									<div className="space-y-2">
										<label htmlFor="budget" className="text-sm font-medium">
											Presupuesto Estimado
										</label>
										<select
											id="budget"
											name="budget"
											value={formData.budget}
											onChange={handleChange}
											className="flex h-11 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
										>
											<option value="">Selecciona rango</option>
											<option value="5k-10k">$5,000 - $10,000</option>
											<option value="10k-25k">$10,000 - $25,000</option>
											<option value="25k-50k">$25,000 - $50,000</option>
											<option value="50k+">$50,000+</option>
										</select>
									</div>
								</div>

								{/* Message */}
								<div className="space-y-2">
									<label htmlFor="message" className="text-sm font-medium">
										Cuéntanos sobre tu proyecto *
									</label>
									<textarea
										id="message"
										name="message"
										placeholder="Describe tu proyecto, objetivos y cualquier detalle relevante..."
										value={formData.message}
										onChange={handleChange}
										required
										rows={5}
										className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
									/>
								</div>

								{/* Submit Button */}
								<Button
									type="submit"
									size="lg"
									disabled={isLoading}
									className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg text-white"
								>
									{isLoading ? (
										<>
											<span className="animate-spin mr-2">⏳</span>
											Enviando...
										</>
									) : (
										<>
											Enviar Mensaje
											<Send className="ml-2 h-4 w-4" />
										</>
									)}
								</Button>

								<p className="text-xs text-muted-foreground text-center">
									Al enviar este formulario, aceptas nuestra política de privacidad y términos de
									servicio.
								</p>
							</form>
						</div>

						{/* Info Cards */}
						<div className="space-y-6">
							<Card className="border-2">
								<CardHeader>
									<div className="p-3 w-fit rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 mb-4">
										<MessageSquare className="h-8 w-8 text-white" />
									</div>
									<CardTitle className="text-2xl">¿Por Qué Contactarnos?</CardTitle>
								</CardHeader>
								<CardContent>
									<ul className="space-y-3">
										{[
											"Consulta inicial gratuita sin compromiso",
											"Respuesta garantizada en menos de 24 horas",
											"Propuesta personalizada para tu proyecto",
											"Asesoramiento técnico de expertos",
											"Presupuesto transparente y detallado",
										].map((item) => (
											<li key={item} className="flex items-start gap-3">
												<CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
												<span className="text-muted-foreground">{item}</span>
											</li>
										))}
									</ul>
								</CardContent>
							</Card>

							<Card className="border-2 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white">
								<CardHeader>
									<CardTitle className="text-2xl text-white">
										¿Prefieres hablar directamente?
									</CardTitle>
									<CardDescription className="text-white/80">
										Agenda una videollamada con nuestro equipo
									</CardDescription>
								</CardHeader>
								<CardContent>
									<p className="text-white/90 mb-4">
										Si prefieres una conversación más directa, podemos agendar una videollamada de
										30 minutos para conocer tu proyecto en detalle.
									</p>
									<Button
										size="lg"
										variant="secondary"
										className="w-full bg-white text-purple-600 hover:bg-white/90"
									>
										Agendar Videollamada
									</Button>
								</CardContent>
							</Card>

							<Card className="border-2">
								<CardHeader>
									<CardTitle className="text-xl">Proceso de Contacto</CardTitle>
								</CardHeader>
								<CardContent>
									<div className="space-y-4">
										{[
											{
												step: "1",
												title: "Envías el formulario",
												desc: "Nos cuentas sobre tu proyecto",
											},
											{
												step: "2",
												title: "Primera llamada",
												desc: "Conversamos en menos de 24h",
											},
											{
												step: "3",
												title: "Propuesta",
												desc: "Recibe cotización detallada",
											},
											{
												step: "4",
												title: "¡A trabajar!",
												desc: "Comenzamos tu proyecto",
											},
										].map((phase) => (
											<div key={phase.step} className="flex gap-4">
												<div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-white flex items-center justify-center font-bold text-sm">
													{phase.step}
												</div>
												<div>
													<p className="font-semibold">{phase.title}</p>
													<p className="text-sm text-muted-foreground">{phase.desc}</p>
												</div>
											</div>
										))}
									</div>
								</CardContent>
							</Card>
						</div>
					</div>
				</div>
			</section>

			{/* FAQ Section */}
			<section className="w-full py-16 md:py-24 bg-muted/50">
				<div className="container px-4 md:px-6">
					<div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
						<Badge variant="outline" className="px-4 py-1.5">
							Preguntas Frecuentes
						</Badge>
						<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
							¿Tienes Dudas?
						</h2>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-5xl mx-auto">
						{[
							{
								q: "¿Cuánto tiempo toma un proyecto típico?",
								a: "Depende de la complejidad, pero la mayoría de proyectos toman entre 6-12 semanas desde el inicio hasta el lanzamiento.",
							},
							{
								q: "¿Ofrecen soporte post-lanzamiento?",
								a: "Sí, todos nuestros proyectos incluyen soporte técnico y mantenimiento durante los primeros 3 meses sin costo adicional.",
							},
							{
								q: "¿Trabajan con startups?",
								a: "¡Absolutamente! Tenemos planes especiales para startups y ofrecemos opciones de pago flexibles.",
							},
							{
								q: "¿Cómo manejan los pagos?",
								a: "Trabajamos con un sistema de hitos: 30% inicial, 40% en desarrollo y 30% al finalizar. Aceptamos transferencias y tarjetas.",
							},
						].map((faq, index) => (
							<Card key={index} className="border-2">
								<CardHeader>
									<CardTitle className="text-lg">{faq.q}</CardTitle>
								</CardHeader>
								<CardContent>
									<p className="text-muted-foreground">{faq.a}</p>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</section>
		</div>
	)
}
