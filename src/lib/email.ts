/**
 * Email Configuration and Utilities
 *
 * Configuración para envío de emails usando Gmail con Nodemailer
 */

import nodemailer from "nodemailer"
import type { Transporter } from "nodemailer"

/**
 * Configuración del transporter de email
 *
 * Usa Gmail como servicio SMTP. Necesita:
 * - GMAIL_USER: Email de Gmail (ej: tumail@gmail.com)
 * - GMAIL_APP_PASSWORD: Contraseña de aplicación de Gmail
 *
 * Para obtener una contraseña de aplicación:
 * 1. Ve a https://myaccount.google.com/security
 * 2. Activa verificación en 2 pasos
 * 3. Ve a "Contraseñas de aplicaciones"
 * 4. Genera una nueva contraseña para "Correo"
 */
export function createEmailTransporter(): Transporter {
	const gmailUser = process.env.GMAIL_USER
	const gmailAppPassword = process.env.GMAIL_APP_PASSWORD

	if (!gmailUser || !gmailAppPassword) {
		throw new Error(
			"GMAIL_USER y GMAIL_APP_PASSWORD deben estar configurados en .env.local",
		)
	}

	return nodemailer.createTransport({
		service: "gmail",
		auth: {
			user: gmailUser,
			pass: gmailAppPassword,
		},
	})
}

/**
 * Envía un email usando el transporter configurado
 */
export async function sendEmail({
	to,
	subject,
	html,
	text,
}: {
	to: string
	subject: string
	html: string
	text?: string
}) {
	const transporter = createEmailTransporter()

	const mailOptions = {
		from: `"${process.env.NEXT_PUBLIC_SITE_NAME || "TecnoDespegue"}" <${process.env.GMAIL_USER}>`,
		to,
		subject,
		html,
		text: text || html.replace(/<[^>]*>/g, ""), // Fallback: strip HTML tags
	}

	const info = await transporter.sendMail(mailOptions)

	return {
		success: true,
		messageId: info.messageId,
	}
}

/**
 * Template HTML para email de bienvenida al newsletter
 */
export function getNewsletterWelcomeEmailHtml(email: string): string {
	return `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Bienvenido a TecnoDespegue</title>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;">
  <table role="presentation" style="width: 100%; border-collapse: collapse;">
    <tr>
      <td align="center" style="padding: 40px 0;">
        <table role="presentation" style="width: 600px; border-collapse: collapse; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 28px;">¡Bienvenido a TecnoDespegue!</h1>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="padding: 40px 30px;">
              <p style="margin: 0 0 20px; font-size: 16px; line-height: 1.6; color: #333333;">
                Hola,
              </p>
              <p style="margin: 0 0 20px; font-size: 16px; line-height: 1.6; color: #333333;">
                ¡Gracias por suscribirte a nuestro newsletter! Estamos emocionados de tenerte con nosotros.
              </p>
              <p style="margin: 0 0 20px; font-size: 16px; line-height: 1.6; color: #333333;">
                A partir de ahora recibirás:
              </p>
              <ul style="margin: 0 0 20px; padding-left: 20px; font-size: 16px; line-height: 1.6; color: #333333;">
                <li>Noticias sobre tecnología web</li>
                <li>Consejos de desarrollo</li>
                <li>Actualizaciones de nuestros proyectos</li>
                <li>Ofertas exclusivas</li>
              </ul>
              <p style="margin: 0 0 20px; font-size: 16px; line-height: 1.6; color: #333333;">
                Si tienes alguna pregunta, no dudes en contactarnos.
              </p>
              <div style="text-align: center; margin: 30px 0;">
                <a href="${process.env.NEXT_PUBLIC_SITE_URL || "https://tecnodespegue.com"}" style="display: inline-block; padding: 12px 30px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: #ffffff; text-decoration: none; border-radius: 5px; font-weight: bold;">
                  Visitar nuestro sitio
                </a>
              </div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f8f9fa; padding: 30px; text-align: center; border-top: 1px solid #e9ecef;">
              <p style="margin: 0 0 10px; font-size: 14px; color: #6c757d;">
                © ${new Date().getFullYear()} TecnoDespegue. Todos los derechos reservados.
              </p>
              <p style="margin: 0; font-size: 12px; color: #adb5bd;">
                Recibiste este email porque te suscribiste a nuestro newsletter.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `
}

/**
 * Template HTML para notificación de nuevo mensaje de contacto
 */
export function getContactFormNotificationHtml({
	name,
	email,
	phone,
	subject,
	message,
}: {
	name: string
	email: string
	phone?: string
	subject: string
	message: string
}): string {
	return `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Nuevo mensaje de contacto</title>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;">
  <table role="presentation" style="width: 100%; border-collapse: collapse;">
    <tr>
      <td align="center" style="padding: 40px 0;">
        <table role="presentation" style="width: 600px; border-collapse: collapse; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          <!-- Header -->
          <tr>
            <td style="background-color: #0f172a; padding: 30px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 24px;">📧 Nuevo Mensaje de Contacto</h1>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="padding: 30px;">
              <table role="presentation" style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">
                    <strong style="color: #374151;">Nombre:</strong>
                    <p style="margin: 5px 0 0; color: #1f2937;">${name}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">
                    <strong style="color: #374151;">Email:</strong>
                    <p style="margin: 5px 0 0; color: #1f2937;">
                      <a href="mailto:${email}" style="color: #3b82f6; text-decoration: none;">${email}</a>
                    </p>
                  </td>
                </tr>
                ${
									phone
										? `
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">
                    <strong style="color: #374151;">Teléfono:</strong>
                    <p style="margin: 5px 0 0; color: #1f2937;">
                      <a href="tel:${phone}" style="color: #3b82f6; text-decoration: none;">${phone}</a>
                    </p>
                  </td>
                </tr>
                `
										: ""
								}
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">
                    <strong style="color: #374151;">Asunto:</strong>
                    <p style="margin: 5px 0 0; color: #1f2937;">${subject}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 0;">
                    <strong style="color: #374151;">Mensaje:</strong>
                    <div style="margin: 10px 0 0; padding: 15px; background-color: #f9fafb; border-left: 4px solid #3b82f6; border-radius: 4px;">
                      <p style="margin: 0; color: #1f2937; line-height: 1.6; white-space: pre-wrap;">${message}</p>
                    </div>
                  </td>
                </tr>
              </table>

              <div style="margin-top: 30px; padding: 15px; background-color: #eff6ff; border-radius: 4px;">
                <p style="margin: 0; font-size: 14px; color: #1e40af;">
                  💡 <strong>Tip:</strong> Responde a este mensaje lo antes posible para mejorar la satisfacción del cliente.
                </p>
              </div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f8f9fa; padding: 20px; text-align: center; border-top: 1px solid #e9ecef;">
              <p style="margin: 0; font-size: 12px; color: #6c757d;">
                Este email fue generado automáticamente desde el formulario de contacto.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `
}

/**
 * Template HTML para email de confirmación al usuario que envió el formulario
 */
export function getContactFormConfirmationHtml(name: string): string {
	return `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mensaje recibido</title>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;">
  <table role="presentation" style="width: 100%; border-collapse: collapse;">
    <tr>
      <td align="center" style="padding: 40px 0;">
        <table role="presentation" style="width: 600px; border-collapse: collapse; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #10b981 0%, #059669 100%); padding: 40px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 28px;">✅ ¡Mensaje Recibido!</h1>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="padding: 40px 30px;">
              <p style="margin: 0 0 20px; font-size: 16px; line-height: 1.6; color: #333333;">
                Hola <strong>${name}</strong>,
              </p>
              <p style="margin: 0 0 20px; font-size: 16px; line-height: 1.6; color: #333333;">
                Gracias por contactarnos. Hemos recibido tu mensaje y nos pondremos en contacto contigo lo antes posible.
              </p>
              <p style="margin: 0 0 20px; font-size: 16px; line-height: 1.6; color: #333333;">
                Nuestro equipo revisará tu consulta y te responderemos en un plazo de 24-48 horas hábiles.
              </p>
              <div style="margin: 30px 0; padding: 20px; background-color: #ecfdf5; border-left: 4px solid #10b981; border-radius: 4px;">
                <p style="margin: 0; font-size: 14px; color: #065f46; line-height: 1.6;">
                  <strong>⏰ Tiempo de respuesta estimado:</strong><br>
                  24-48 horas hábiles
                </p>
              </div>
              <p style="margin: 0 0 20px; font-size: 16px; line-height: 1.6; color: #333333;">
                Mientras tanto, puedes explorar nuestro sitio web o seguirnos en nuestras redes sociales.
              </p>
              <div style="text-align: center; margin: 30px 0;">
                <a href="${process.env.NEXT_PUBLIC_SITE_URL || "https://tecnodespegue.com"}" style="display: inline-block; padding: 12px 30px; background: linear-gradient(135deg, #10b981 0%, #059669 100%); color: #ffffff; text-decoration: none; border-radius: 5px; font-weight: bold; margin-right: 10px;">
                  Visitar sitio web
                </a>
              </div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f8f9fa; padding: 30px; text-align: center; border-top: 1px solid #e9ecef;">
              <p style="margin: 0 0 10px; font-size: 14px; color: #6c757d;">
                © ${new Date().getFullYear()} TecnoDespegue. Todos los derechos reservados.
              </p>
              <p style="margin: 0; font-size: 12px; color: #adb5bd;">
                Si no enviaste este mensaje, por favor ignora este email.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `
}
