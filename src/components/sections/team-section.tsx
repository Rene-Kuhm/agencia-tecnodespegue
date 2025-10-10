"use client"

import { Github, Globe, Linkedin, Mail } from "lucide-react"
import Image from "next/image"
import { ScrollReveal } from "@/components/effects/scroll-reveal"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

// Información del equipo
const teamMembers = [
	{
		name: "René Kuhm",
		role: "FullStack Developer",
		bio: "Experto en desarrollo web moderno con especialización en React, Next.js y tecnologías cloud. Apasionado por crear soluciones innovadoras y escalables.",
		image: "/team/IMG_0278.PNG",
		skills: [
			"React & Next.js",
			"TypeScript",
			"Node.js",
			"Cloud Architecture",
			"UI/UX Design",
			"DevOps",
		],
		social: {
			github: "https://github.com/renekuhm",
			linkedin: "https://linkedin.com/in/renekuhm",
			email: "rene@tecnodespegue.com",
			website: "https://tecnodespegue.com",
		},
		color: "from-blue-500 to-purple-600",
	},
]

export function TeamSection() {
	return (
		<section className="w-full py-16 md:py-24 lg:py-32 bg-muted/30">
			<div className="container px-4 md:px-6">
				<ScrollReveal direction="up" delay={100}>
					<div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
						<Badge variant="outline" className="px-4 py-1.5">
							Nuestro Equipo
						</Badge>
						<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
							Conoce al Experto
						</h2>
						<p className="max-w-[900px] text-muted-foreground md:text-xl">
							Desarrollador FullStack con experiencia en tecnologías de vanguardia, dedicado a
							transformar ideas en realidad digital
						</p>
					</div>
				</ScrollReveal>

				<div className="max-w-4xl mx-auto">
					{teamMembers.map((member, index) => (
						<ScrollReveal key={member.name} direction="up" delay={200 + index * 100}>
							<Card className="neumorphic-card border-0 overflow-hidden group">
								{/* Fondo con gradiente */}
								<div
									className={`absolute inset-0 bg-gradient-to-br ${member.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
								/>

								<div className="relative grid md:grid-cols-2 gap-8 p-8">
									{/* Columna Izquierda - Foto */}
									<div className="flex flex-col items-center md:items-start space-y-6">
										{/* Foto del perfil */}
										<div className="relative w-64 h-64 md:w-full md:h-80">
											<div
												className={`absolute inset-0 bg-gradient-to-br ${member.color} rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500`}
											/>
											<div className="relative w-full h-full rounded-2xl overflow-hidden border-4 border-background shadow-2xl group-hover:scale-105 transition-transform duration-500">
												<Image
													src={member.image}
													alt={member.name}
													fill
													className="object-cover"
													sizes="(max-width: 768px) 256px, 400px"
													priority
												/>
											</div>
										</div>

										{/* Redes sociales */}
										<div className="flex flex-wrap gap-3 justify-center md:justify-start w-full">
											{member.social.github && (
												<a
													href={member.social.github}
													target="_blank"
													rel="noopener noreferrer"
													className="neumorphic-button p-3 rounded-xl hover:scale-110 transition-all group/icon"
													aria-label="GitHub"
												>
													<Github className="w-5 h-5 text-muted-foreground group-hover/icon:text-foreground transition-colors" />
												</a>
											)}
											{member.social.linkedin && (
												<a
													href={member.social.linkedin}
													target="_blank"
													rel="noopener noreferrer"
													className="neumorphic-button p-3 rounded-xl hover:scale-110 transition-all group/icon"
													aria-label="LinkedIn"
												>
													<Linkedin className="w-5 h-5 text-muted-foreground group-hover/icon:text-blue-600 transition-colors" />
												</a>
											)}
											{member.social.email && (
												<a
													href={`mailto:${member.social.email}`}
													className="neumorphic-button p-3 rounded-xl hover:scale-110 transition-all group/icon"
													aria-label="Email"
												>
													<Mail className="w-5 h-5 text-muted-foreground group-hover/icon:text-purple-600 transition-colors" />
												</a>
											)}
											{member.social.website && (
												<a
													href={member.social.website}
													target="_blank"
													rel="noopener noreferrer"
													className="neumorphic-button p-3 rounded-xl hover:scale-110 transition-all group/icon"
													aria-label="Website"
												>
													<Globe className="w-5 h-5 text-muted-foreground group-hover/icon:text-green-600 transition-colors" />
												</a>
											)}
										</div>
									</div>

									{/* Columna Derecha - Información */}
									<div className="flex flex-col justify-center space-y-6">
										<CardHeader className="p-0">
											<div className="space-y-3">
												<h3 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
													{member.name}
												</h3>
												<Badge
													className={`bg-gradient-to-r ${member.color} text-white border-0 px-4 py-1.5 text-sm font-medium`}
												>
													{member.role}
												</Badge>
											</div>
										</CardHeader>

										<CardContent className="p-0 space-y-6">
											{/* Biografía */}
											<p className="text-muted-foreground leading-relaxed">{member.bio}</p>

											{/* Habilidades */}
											<div className="space-y-3">
												<h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">
													Especialidades
												</h4>
												<div className="flex flex-wrap gap-2">
													{member.skills.map((skill) => (
														<Badge
															key={skill}
															variant="secondary"
															className="px-3 py-1 hover:scale-105 transition-transform cursor-default"
														>
															{skill}
														</Badge>
													))}
												</div>
											</div>

											{/* Estadísticas rápidas */}
											<div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
												<div className="text-center">
													<div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
														5+
													</div>
													<div className="text-xs text-muted-foreground">Años Exp.</div>
												</div>
												<div className="text-center">
													<div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
														100+
													</div>
													<div className="text-xs text-muted-foreground">Proyectos</div>
												</div>
												<div className="text-center">
													<div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
														20+
													</div>
													<div className="text-xs text-muted-foreground">Tecnologías</div>
												</div>
											</div>
										</CardContent>
									</div>
								</div>

								{/* Efecto de brillo en hover */}
								<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
									<div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
								</div>
							</Card>
						</ScrollReveal>
					))}
				</div>

				{/* Call to action */}
				<ScrollReveal direction="up" delay={400}>
					<div className="mt-16 text-center">
						<p className="text-muted-foreground max-w-2xl mx-auto">
							¿Tienes un proyecto en mente? Trabajemos juntos para hacer realidad tu visión digital.
						</p>
					</div>
				</ScrollReveal>
			</div>
		</section>
	)
}
