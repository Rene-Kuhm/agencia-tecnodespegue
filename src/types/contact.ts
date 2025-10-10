// Contact and Form Types

export interface ContactFormData {
	name: string
	email: string
	phone?: string
	company?: string
	subject: string
	message: string
	budget?: BudgetRange
	preferredContact?: ContactMethod
}

export type BudgetRange = "small" | "medium" | "large" | "enterprise" | "not-sure"

export type ContactMethod = "email" | "phone" | "whatsapp"

export interface ContactFormErrors {
	name?: string
	email?: string
	phone?: string
	subject?: string
	message?: string
}

export interface ContactFormState {
	data: Partial<ContactFormData>
	errors: ContactFormErrors
	isSubmitting: boolean
	isSuccess: boolean
	isError: boolean
	errorMessage?: string
}

export interface NewsletterFormData {
	email: string
	name?: string
}
