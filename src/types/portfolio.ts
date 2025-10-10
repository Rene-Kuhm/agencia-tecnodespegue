// Portfolio and Project Types

export interface Project {
	id: string
	title: string
	description: string
	longDescription?: string
	image: string
	category: ProjectCategory
	tags: string[]
	url?: string
	github?: string
	featured?: boolean
	date?: string
	client?: string
	testimonial?: Testimonial
}

export type ProjectCategory =
	| "web"
	| "mobile"
	| "design"
	| "ecommerce"
	| "saas"
	| "corporate"
	| "other"

export interface Testimonial {
	author: string
	role: string
	company: string
	content: string
	avatar?: string
	rating?: number
}

export interface PortfolioFilter {
	category?: ProjectCategory | "all"
	tags?: string[]
	featured?: boolean
}
