import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { Footer } from "@/components/layout/footer"
import { Navbar } from "@/components/layout/navbar"
import { Toaster } from "@/components/ui/sonner"
import { SITE_CONFIG } from "@/constants"

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
})

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
})

export const metadata: Metadata = {
	metadataBase: new URL(SITE_CONFIG.url),
	title: {
		default: SITE_CONFIG.title,
		template: `%s | ${SITE_CONFIG.name}`,
	},
	description: SITE_CONFIG.description,
	keywords: [...SITE_CONFIG.keywords],
	authors: [{ name: SITE_CONFIG.author }],
	creator: SITE_CONFIG.author,
	openGraph: {
		type: "website",
		locale: "es_ES",
		url: SITE_CONFIG.url,
		title: SITE_CONFIG.title,
		description: SITE_CONFIG.description,
		siteName: SITE_CONFIG.name,
		images: [
			{
				url: SITE_CONFIG.ogImage,
				width: 1200,
				height: 630,
				alt: SITE_CONFIG.name,
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: SITE_CONFIG.title,
		description: SITE_CONFIG.description,
		images: [SITE_CONFIG.ogImage],
		creator: "@tecnodespegue",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	icons: {
		icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
		apple: "/favicon.svg",
	},
	manifest: "/manifest.webmanifest",
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
