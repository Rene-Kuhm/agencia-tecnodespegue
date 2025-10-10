// Navigation Constants

export interface NavItem {
	label: string
	href: string
	description?: string
}

export const NAV_ITEMS: NavItem[] = [
	{
		label: "Inicio",
		href: "/",
		description: "Página principal",
	},
	{
		label: "Servicios",
		href: "/servicios",
		description: "Nuestros servicios de desarrollo y diseño",
	},
	{
		label: "Nosotros",
		href: "/nosotros",
		description: "Conoce nuestro equipo y misión",
	},
	{
		label: "Portafolio",
		href: "/portafolio",
		description: "Proyectos y casos de éxito",
	},
	{
		label: "Contacto",
		href: "/contacto",
		description: "Contáctanos para tu próximo proyecto",
	},
] as const

export const FOOTER_LINKS = {
	company: [
		{ label: "Sobre Nosotros", href: "/nosotros" },
		{ label: "Servicios", href: "/servicios" },
		{ label: "Portafolio", href: "/portafolio" },
		{ label: "Blog", href: "/blog" },
	],
	support: [
		{ label: "Contacto", href: "/contacto" },
		{ label: "FAQ", href: "/faq" },
		{ label: "Soporte", href: "/soporte" },
	],
	legal: [
		{ label: "Términos de Servicio", href: "/terminos" },
		{ label: "Política de Privacidad", href: "/privacidad" },
	],
} as const
