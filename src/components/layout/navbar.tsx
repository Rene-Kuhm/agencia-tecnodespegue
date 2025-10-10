"use client"

import { Menu, Rocket, X } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	const navLinks = [
		{ href: "/", label: "Inicio" },
		{ href: "/servicios", label: "Servicios" },
		{ href: "/portafolio", label: "Portafolio" },
		{ href: "/nosotros", label: "Nosotros" },
		{ href: "/contacto", label: "Contacto" },
	]

	return (
		<nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="container flex h-16 items-center justify-between px-4 md:px-6">
				{/* Logo */}
				<Link href="/" className="flex items-center space-x-2 group">
					<div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 group-hover:from-blue-600 group-hover:to-purple-700 transition-all duration-300">
						<Rocket className="w-6 h-6 text-white" />
					</div>
					<span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
						TecnoDespegue
					</span>
				</Link>

				{/* Desktop Navigation */}
				<div className="hidden md:flex items-center space-x-8">
					{navLinks.map((link) => (
						<Link
							key={link.href}
							href={link.href}
							className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
						>
							{link.label}
						</Link>
					))}
				</div>

				{/* CTA Button - Desktop */}
				<div className="hidden md:flex items-center space-x-4">
					<Button
						asChild
						className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
					>
						<Link href="/contacto">Contratar</Link>
					</Button>
				</div>

				{/* Mobile Menu Button */}
				<button
					type="button"
					className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
					onClick={() => setIsMenuOpen(!isMenuOpen)}
					aria-label="Toggle menu"
				>
					{isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
				</button>
			</div>

			{/* Mobile Menu */}
			{isMenuOpen && (
				<div className="md:hidden border-t">
					<div className="container px-4 py-4 space-y-3">
						{navLinks.map((link) => (
							<Link
								key={link.href}
								href={link.href}
								className="block py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
								onClick={() => setIsMenuOpen(false)}
							>
								{link.label}
							</Link>
						))}
						<div className="pt-2">
							<Button
								asChild
								className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
							>
								<Link href="/contacto">Contratar</Link>
							</Button>
						</div>
					</div>
				</div>
			)}
		</nav>
	)
}
