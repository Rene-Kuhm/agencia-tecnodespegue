// Common TypeScript Types

export type WithChildren<T = object> = T & {
	children: React.ReactNode
}

export type WithClassName<T = object> = T & {
	className?: string
}

export type WithOptionalChildren<T = object> = T & {
	children?: React.ReactNode
}

export interface BaseComponent {
	id?: string
	className?: string
	"data-testid"?: string
}

export type PropsWithBase<T = object> = T & BaseComponent
