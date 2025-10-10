import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { Footer } from "@/components/layout/footer"
import { Navbar } from "@/components/layout/navbar"
import { Toaster } from "@/components/ui/sonner"

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
})

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
})

export const metadata: Metadata = {
	title: "TecnoDespegue - Agencia de Desarrollo Web y Programación",
	description:
		"Impulsamos tu negocio hacia el futuro con soluciones tecnológicas innovadoras. Desarrollo web, diseño UX/UI y consultoría digital.",
	icons: {
		icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
		apple: "/favicon.svg",
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="es">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				<Navbar />
				<main className="min-h-screen">{children}</main>
				<Footer />
				<Toaster />
			</body>
		</html>
	)
}
