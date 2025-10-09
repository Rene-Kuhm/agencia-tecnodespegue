"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Sparkles } from "lucide-react"
import { toast } from "sonner"

export function Newsletter() {
	const [email, setEmail] = useState("")
	const [isLoading, setIsLoading] = useState(false)

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		if (!email) return

		setIsLoading(true)

		// Simulate API call
		await new Promise((resolve) => setTimeout(resolve, 1000))

		toast.success("Te has suscrito exitosamente!", {
			description: `Se ha enviado un email de confirmacion a ${email}`,
			duration: 5000,
		})

		setEmail("")
		setIsLoading(false)
	}

	return (
		<section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
			{/* Background Gradient */}
			<div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10" />

			<div className="container px-4 md:px-6 relative">
				<Card className="max-w-3xl mx-auto border-2 shadow-2xl bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
					<CardHeader className="text-center space-y-2 pb-6">
						<div className="flex justify-center mb-4">
							<div className="p-3 rounded-full bg-gradient-to-br from-blue-500 to-purple-600">
								<Sparkles className="w-8 h-8 text-white" />
							</div>
						</div>
						<CardTitle className="text-3xl md:text-4xl font-bold">
							Unete a Nuestra Comunidad
						</CardTitle>
						<CardDescription className="text-base md:text-lg">
							Recibe contenido exclusivo, tips de desarrollo y las ultimas
							tendencias tecnologicas directamente en tu bandeja de entrada.
						</CardDescription>
					</CardHeader>
					<CardContent>
						<form onSubmit={handleSubmit} className="space-y-4">
							<div className="flex flex-col sm:flex-row gap-3">
								<div className="flex-1 relative">
									<Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
									<Input
										type="email"
										placeholder="tu@email.com"
										value={email}
										onChange={(e) => setEmail(e.target.value)}
										required
										className="pl-10 h-12"
										disabled={isLoading}
									/>
								</div>
								<Button
									type="submit"
									size="lg"
									disabled={isLoading}
									className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 h-12 px-8"
								>
									{isLoading ? "Suscribiendo..." : "Suscribirse"}
								</Button>
							</div>
							<p className="text-xs text-center text-muted-foreground">
								Al suscribirte, aceptas recibir correos electronicos de
								TecnoDespegue. Puedes darte de baja en cualquier momento.
							</p>
						</form>

						{/* Benefits */}
						<div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
							<div className="p-4 rounded-lg bg-muted/50">
								<p className="font-semibold text-sm">Contenido Exclusivo</p>
								<p className="text-xs text-muted-foreground mt-1">
									Tips y recursos
								</p>
							</div>
							<div className="p-4 rounded-lg bg-muted/50">
								<p className="font-semibold text-sm">Ofertas Especiales</p>
								<p className="text-xs text-muted-foreground mt-1">
									Descuentos unicos
								</p>
							</div>
							<div className="p-4 rounded-lg bg-muted/50">
								<p className="font-semibold text-sm">Sin Spam</p>
								<p className="text-xs text-muted-foreground mt-1">
									Solo lo mejor
								</p>
							</div>
						</div>
					</CardContent>
				</Card>
			</div>
		</section>
	)
}
