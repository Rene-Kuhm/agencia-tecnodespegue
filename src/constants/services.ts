// Services and Technologies Constants

export interface Service {
	id: string
	title: string
	description: string
	icon?: string
	features?: string[]
}

export const SERVICES: Service[] = [
	{
		id: "web-development",
		title: "Desarrollo Web",
		description: "Aplicaciones web modernas y escalables con las últimas tecnologías",
		features: [
			"Next.js & React",
			"TypeScript",
			"API REST & GraphQL",
			"Optimización SEO",
		],
	},
	{
		id: "mobile-development",
		title: "Desarrollo Mobile",
		description: "Aplicaciones móviles nativas y multiplataforma",
		features: ["React Native", "Flutter", "iOS & Android", "App Store Deploy"],
	},
	{
		id: "ui-ux-design",
		title: "Diseño UX/UI",
		description: "Experiencias de usuario intuitivas y diseños atractivos",
		features: ["Diseño de interfaces", "Prototipos", "Design Systems", "User Research"],
	},
	{
		id: "consulting",
		title: "Consultoría Digital",
		description: "Estrategia y optimización de tu presencia digital",
		features: [
			"Auditoría técnica",
			"Arquitectura de software",
			"Performance",
			"Escalabilidad",
		],
	},
] as const

export const TECHNOLOGIES = [
	"Next.js",
	"React",
	"TypeScript",
	"Node.js",
	"Tailwind CSS",
	"PostgreSQL",
	"MongoDB",
	"GraphQL",
	"AWS",
	"Docker",
	"Vercel",
	"Figma",
] as const

export type Technology = (typeof TECHNOLOGIES)[number]
