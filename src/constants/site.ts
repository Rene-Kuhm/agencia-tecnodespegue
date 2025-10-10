/**
 * Site Configuration Constants
 *
 * Configuración global del sitio web que incluye metadata, SEO,
 * y enlaces de redes sociales.
 *
 * @module constants/site
 */

/**
 * Configuración principal del sitio
 *
 * @constant
 * @type {Object}
 * @property {string} name - Nombre corto del sitio
 * @property {string} title - Título completo para SEO
 * @property {string} description - Descripción meta para SEO
 * @property {string} url - URL base del sitio (desde env o fallback)
 * @property {string} ogImage - Ruta de la imagen Open Graph
 * @property {string} author - Autor/propietario del sitio
 * @property {string[]} keywords - Palabras clave para SEO
 *
 * @example
 * import { SITE_CONFIG } from "@/constants"
 *
 * console.log(SITE_CONFIG.name) // "TecnoDespegue"
 * console.log(SITE_CONFIG.url)  // "https://tecnodespegue.com"
 */
export const SITE_CONFIG = {
	name: "TecnoDespegue",
	title: "TecnoDespegue - Agencia de Desarrollo Web y Programación",
	description:
		"Impulsamos tu negocio hacia el futuro con soluciones tecnológicas innovadoras. Desarrollo web, diseño UX/UI y consultoría digital.",
	url: process.env.NEXT_PUBLIC_SITE_URL || "https://tecnodespegue.com",
	ogImage: "/og-image.png",
	author: "TecnoDespegue Team",
	keywords: [
		"desarrollo web",
		"programación",
		"diseño UX/UI",
		"consultoría digital",
		"Next.js",
		"React",
		"TypeScript",
		"agencia digital",
	],
} as const

/**
 * Enlaces de redes sociales
 *
 * @constant
 * @type {Object}
 * @property {string} facebook - URL de Facebook (desde env o fallback)
 * @property {string} twitter - URL de Twitter/X (desde env o fallback)
 * @property {string} linkedin - URL de LinkedIn (desde env o fallback)
 * @property {string} instagram - URL de Instagram (desde env o fallback)
 * @property {string} github - URL de GitHub
 *
 * @example
 * import { SOCIAL_LINKS } from "@/constants"
 *
 * <a href={SOCIAL_LINKS.linkedin}>LinkedIn</a>
 * <a href={SOCIAL_LINKS.github}>GitHub</a>
 */
export const SOCIAL_LINKS = {
	facebook: process.env.NEXT_PUBLIC_FACEBOOK_URL || "https://facebook.com/tecnodespegue",
	twitter: process.env.NEXT_PUBLIC_TWITTER_URL || "https://twitter.com/tecnodespegue",
	linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL || "https://linkedin.com/company/tecnodespegue",
	instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL || "https://instagram.com/tecnodespegue",
	github: "https://github.com/tecnodespegue",
} as const

/**
 * Información de contacto
 *
 * @constant
 * @type {Object}
 * @property {string} email - Email de contacto principal
 * @property {string} phone - Número de teléfono
 * @property {string} address - Dirección física
 *
 * @example
 * import { CONTACT_INFO } from "@/constants"
 *
 * <a href={`mailto:${CONTACT_INFO.email}`}>Email</a>
 * <a href={`tel:${CONTACT_INFO.phone}`}>Llamar</a>
 */
export const CONTACT_INFO = {
	email: "contacto@tecnodespegue.com",
	phone: "+1 (555) 123-4567",
	address: "Ciudad, País",
} as const
