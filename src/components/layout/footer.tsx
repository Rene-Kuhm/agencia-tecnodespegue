"use client"

import { Facebook, Github, Instagram, Linkedin, Mail, Rocket, Youtube } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { SOCIAL_LINKS } from "@/constants"

export function Footer() {
	const [email, setEmail] = useState("")

	const handleNewsletterSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		if (email) {
			toast.success("Gracias por suscribirte!", {
				description: "Te enviaremos las ultimas novedades a tu correo.",
			})
			setEmail("")
		}
	}

	return (
		<footer className="w-full border-t bg-muted/50">
			<div className="container px-4 md:px-6 py-12 md:py-16">
				{/* Newsletter Section */}
				<div className="mb-12 max-w-2xl mx-auto text-center">
					<h3 className="text-2xl font-bold mb-2">Mantente Actualizado</h3>
					<p className="text-muted-foreground mb-6">
						Suscribete a nuestro newsletter para recibir las ultimas noticias y ofertas especiales
					</p>
					<form
						onSubmit={handleNewsletterSubmit}
						className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto"
					>
						<Input
							type="email"
							placeholder="tu@email.com"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
							className="flex-1"
						/>
						<Button
							type="submit"
							className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
						>
							<Mail className="w-4 h-4 mr-2" />
							Suscribirse
						</Button>
					</form>
				</div>

				<Separator className="mb-12" />

				{/* Footer Links */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
					{/* Company Info */}
					<div className="space-y-4 sm:col-span-2 lg:col-span-1">
						<Link href="/" className="flex items-center space-x-2 group">
							<div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600">
								<Rocket className="w-6 h-6 text-white" />
							</div>
							<span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
								TecnoDespegue
							</span>
						</Link>
						<p className="text-sm text-muted-foreground">
							Impulsamos tu negocio hacia el futuro con soluciones tecnologicas innovadoras.
						</p>
					</div>

					{/* Quick Links */}
					<div>
						<h4 className="font-semibold mb-4">Enlaces Rapidos</h4>
						<ul className="space-y-2 text-sm">
							<li>
								<Link
									href="/"
									className="text-muted-foreground hover:text-foreground transition-colors"
								>
									Inicio
								</Link>
							</li>
							<li>
								<Link
									href="/servicios"
									className="text-muted-foreground hover:text-foreground transition-colors"
								>
									Servicios
								</Link>
							</li>
							<li>
								<Link
									href="/portafolio"
									className="text-muted-foreground hover:text-foreground transition-colors"
								>
									Portafolio
								</Link>
							</li>
							<li>
								<Link
									href="/nosotros"
									className="text-muted-foreground hover:text-foreground transition-colors"
								>
									Nosotros
								</Link>
							</li>
						</ul>
					</div>

					{/* Services */}
					<div>
						<h4 className="font-semibold mb-4">Servicios</h4>
						<ul className="space-y-2 text-sm">
							<li>
								<Link
									href="/servicios#desarrollo-web"
									className="text-muted-foreground hover:text-foreground transition-colors"
								>
									Desarrollo Web
								</Link>
							</li>
							<li>
								<Link
									href="/servicios#diseno-ux"
									className="text-muted-foreground hover:text-foreground transition-colors"
								>
									Diseno UX/UI
								</Link>
							</li>
							<li>
								<Link
									href="/servicios#consultoria"
									className="text-muted-foreground hover:text-foreground transition-colors"
								>
									Consultoria Digital
								</Link>
							</li>
							<li>
								<Link
									href="/servicios#freelance"
									className="text-muted-foreground hover:text-foreground transition-colors"
								>
									Freelance
								</Link>
							</li>
						</ul>
					</div>

					{/* Contact */}
					<div>
						<h4 className="font-semibold mb-4">Contacto</h4>
						<ul className="space-y-2 text-sm text-muted-foreground">
							<li>renekuhm2@gmail.com</li>
							<li>+54 (2334) 409838</li>
							<li>Eduardo Castex (LP), Argentina</li>
						</ul>
					</div>
				</div>

				<Separator className="mb-8" />

				{/* Bottom Bar */}
				<div className="flex flex-col md:flex-row justify-between items-center gap-4">
					<p className="text-sm text-muted-foreground">
						© 2025 TecnoDespegue. Todos los derechos reservados.
					</p>

					{/* Social Links */}
					<div className="flex items-center space-x-4">
						<Link
							href={SOCIAL_LINKS.facebook}
							target="_blank"
							rel="noopener noreferrer"
							className="text-muted-foreground hover:text-foreground transition-colors"
							aria-label="Facebook"
						>
							<Facebook className="w-5 h-5" />
						</Link>
						<Link
							href={SOCIAL_LINKS.linkedin}
							target="_blank"
							rel="noopener noreferrer"
							className="text-muted-foreground hover:text-foreground transition-colors"
							aria-label="LinkedIn"
						>
							<Linkedin className="w-5 h-5" />
						</Link>
						<Link
							href={SOCIAL_LINKS.instagram}
							target="_blank"
							rel="noopener noreferrer"
							className="text-muted-foreground hover:text-foreground transition-colors"
							aria-label="Instagram"
						>
							<Instagram className="w-5 h-5" />
						</Link>
						<Link
							href={SOCIAL_LINKS.youtube}
							target="_blank"
							rel="noopener noreferrer"
							className="text-muted-foreground hover:text-foreground transition-colors"
							aria-label="YouTube"
						>
							<Youtube className="w-5 h-5" />
						</Link>
						<Link
							href={SOCIAL_LINKS.github}
							target="_blank"
							rel="noopener noreferrer"
							className="text-muted-foreground hover:text-foreground transition-colors"
							aria-label="GitHub"
						>
							<Github className="w-5 h-5" />
						</Link>
					</div>
				</div>
			</div>
		</footer>
	)
}
