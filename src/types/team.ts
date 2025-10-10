// Team Member Types

export interface TeamMember {
	id: string
	name: string
	role: string
	bio?: string
	avatar: string
	email?: string
	social?: SocialLinks
	skills?: string[]
	joinedDate?: string
}

export interface SocialLinks {
	linkedin?: string
	github?: string
	twitter?: string
	website?: string
}
