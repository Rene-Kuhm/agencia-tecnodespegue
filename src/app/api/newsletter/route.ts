/**
 * API Route: Newsletter Subscription
 *
 * POST /api/newsletter
 * Maneja las suscripciones al newsletter
 */

import { NextResponse } from "next/server"
import { sendEmail, getNewsletterWelcomeEmailHtml } from "@/lib/email"

export async function POST(request: Request) {
	try {
		const body = await request.json()
		const { email, name } = body

		// Validación
		if (!email || typeof email !== "string") {
			return NextResponse.json({ error: "Email es requerido" }, { status: 400 })
		}

		// Validar formato de email
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
		if (!emailRegex.test(email)) {
			return NextResponse.json({ error: "Email inválido" }, { status: 400 })
		}

		// Enviar email de bienvenida al suscriptor
		await sendEmail({
			to: email,
			subject: "¡Bienvenido a TecnoDespegue! 🚀",
			html: getNewsletterWelcomeEmailHtml(email),
		})

		// Enviar notificación al admin (opcional)
		const adminEmail = process.env.GMAIL_USER
		if (adminEmail) {
			await sendEmail({
				to: adminEmail,
				subject: `Nueva suscripción al newsletter: ${email}`,
				html: `
          <h2>Nueva Suscripción</h2>
          <p><strong>Email:</strong> ${email}</p>
          ${name ? `<p><strong>Nombre:</strong> ${name}</p>` : ""}
          <p><strong>Fecha:</strong> ${new Date().toLocaleString("es-ES")}</p>
        `,
			})
		}

		return NextResponse.json({
			success: true,
			message: "Suscripción exitosa. Revisa tu email.",
		})
	} catch (error) {
		console.error("Error en suscripción al newsletter:", error)

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
				error: "Error al procesar la suscripción. Intenta de nuevo más tarde.",
			},
			{ status: 500 },
		)
	}
}
