/**
 * API Route: Contact Form
 *
 * POST /api/contact
 * Maneja los envíos del formulario de contacto
 */

import { NextResponse } from "next/server"
import {
	sendEmail,
	getContactFormNotificationHtml,
	getContactFormConfirmationHtml,
} from "@/lib/email"

export async function POST(request: Request) {
	try {
		const body = await request.json()
		const { name, email, phone, subject, message } = body

		// Validaciones
		if (!name || typeof name !== "string" || name.trim().length === 0) {
			return NextResponse.json({ error: "Nombre es requerido" }, { status: 400 })
		}

		if (!email || typeof email !== "string") {
			return NextResponse.json({ error: "Email es requerido" }, { status: 400 })
		}

		// Validar formato de email
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
		if (!emailRegex.test(email)) {
			return NextResponse.json({ error: "Email inválido" }, { status: 400 })
		}

		if (!subject || typeof subject !== "string" || subject.trim().length === 0) {
			return NextResponse.json({ error: "Asunto es requerido" }, { status: 400 })
		}

		if (!message || typeof message !== "string" || message.trim().length < 10) {
			return NextResponse.json(
				{ error: "Mensaje debe tener al menos 10 caracteres" },
				{ status: 400 },
			)
		}

		// Validar teléfono si se proporciona
		if (phone && typeof phone !== "string") {
			return NextResponse.json({ error: "Teléfono inválido" }, { status: 400 })
		}

		// 1. Enviar notificación al admin/empresa
		const adminEmail = process.env.GMAIL_USER
		if (!adminEmail) {
			throw new Error("GMAIL_USER no está configurado")
		}

		await sendEmail({
			to: adminEmail,
			subject: `Nuevo contacto: ${subject}`,
			html: getContactFormNotificationHtml({
				name: name.trim(),
				email: email.trim(),
				phone: phone?.trim(),
				subject: subject.trim(),
				message: message.trim(),
			}),
		})

		// 2. Enviar confirmación al usuario
		await sendEmail({
			to: email.trim(),
			subject: "Hemos recibido tu mensaje - TecnoDespegue",
			html: getContactFormConfirmationHtml(name.trim()),
		})

		return NextResponse.json({
			success: true,
			message: "Mensaje enviado exitosamente. Te responderemos pronto.",
		})
	} catch (error) {
		console.error("Error en formulario de contacto:", error)

		// Manejo de errores específicos
		if (error instanceof Error) {
			if (error.message.includes("GMAIL_USER") || error.message.includes("GMAIL_APP_PASSWORD")) {
				return NextResponse.json(
					{
						error: "Servicio de email no configurado. Contacta al administrador.",
					},
					{ status: 500 },
				)
			}
		}

		return NextResponse.json(
			{
				error: "Error al enviar el mensaje. Intenta de nuevo más tarde.",
			},
			{ status: 500 },
		)
	}
}
