# 📧 Configuración de Email con Gmail

Guía completa para configurar el envío de emails desde el formulario de contacto y newsletter usando Gmail.

---

## 📋 Tabla de Contenidos

- [Prerequisitos](#-prerequisitos)
- [Paso 1: Configurar Gmail](#-paso-1-configurar-gmail)
- [Paso 2: Configurar Variables de Entorno](#-paso-2-configurar-variables-de-entorno)
- [Paso 3: Probar la Configuración](#-paso-3-probar-la-configuración)
- [Solución de Problemas](#-solución-de-problemas)
- [Alternativas a Gmail](#-alternativas-a-gmail)

---

## ✅ Prerequisitos

- Una cuenta de Gmail activa
- Node.js y el proyecto instalado
- Acceso a la configuración de seguridad de tu cuenta Google

---

## 🔧 Paso 1: Configurar Gmail

### 1.1 Activar Verificación en 2 Pasos

1. Ve a tu cuenta de Google: [https://myaccount.google.com/security](https://myaccount.google.com/security)

2. En la sección **"Cómo inicias sesión en Google"**, busca **"Verificación en 2 pasos"**

3. Haz clic en **"Verificación en 2 pasos"** y sigue las instrucciones para activarla

   > **Nota:** La verificación en 2 pasos es OBLIGATORIA para generar contraseñas de aplicaciones

### 1.2 Generar Contraseña de Aplicación

1. Una vez activada la verificación en 2 pasos, vuelve a [https://myaccount.google.com/security](https://myaccount.google.com/security)

2. Busca la sección **"Cómo inicias sesión en Google"**

3. Haz clic en **"Contraseñas de aplicaciones"**

   ![Contraseñas de aplicaciones](https://support.google.com/accounts/answer/185833?hl=es)

4. Es posible que te pida tu contraseña de Google nuevamente

5. En "Seleccionar app", elige **"Correo"**

6. En "Seleccionar dispositivo", elige **"Otro (nombre personalizado)"**

7. Escribe un nombre descriptivo, por ejemplo: **"TecnoDespegue Website"**

8. Haz clic en **"Generar"**

9. Google mostrará una contraseña de 16 caracteres como: `xxxx xxxx xxxx xxxx`

   ⚠️ **IMPORTANTE:**
   - Copia esta contraseña INMEDIATAMENTE
   - No la compartas con nadie
   - La necesitarás en el siguiente paso
   - No podrás verla de nuevo (tendrás que generar una nueva si la pierdes)

---

## ⚙️ Paso 2: Configurar Variables de Entorno

### 2.1 Crear Archivo .env.local

1. En la raíz del proyecto, crea un archivo llamado `.env.local` (si no existe)

   ```bash
   # Desde la raíz del proyecto
   touch .env.local
   ```

2. Abre el archivo `.env.local` y agrega las siguientes variables:

   ```env
   # ============================================
   # EMAIL CONFIGURATION (Gmail)
   # ============================================
   GMAIL_USER=tu-email@gmail.com
   GMAIL_APP_PASSWORD=xxxx xxxx xxxx xxxx

   # Site Configuration (requerido para URLs en emails)
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   NEXT_PUBLIC_SITE_NAME=TecnoDespegue
   ```

### 2.2 Reemplazar los Valores

- **GMAIL_USER**: Tu dirección de email de Gmail completa
  ```env
  GMAIL_USER=contacto@gmail.com
  ```

- **GMAIL_APP_PASSWORD**: La contraseña de 16 caracteres que generaste
  ```env
  GMAIL_APP_PASSWORD=abcd efgh ijkl mnop
  ```

  > **Nota:** Puedes escribir la contraseña con o sin espacios, ambos funcionan

### 2.3 Verificar que .env.local está en .gitignore

Asegúrate de que el archivo `.env.local` esté listado en `.gitignore` para no subirlo a Git:

```bash
# .gitignore
.env*
```

---

## 🧪 Paso 3: Probar la Configuración

### 3.1 Reiniciar el Servidor de Desarrollo

Las variables de entorno solo se cargan al iniciar el servidor, así que reinícialo:

```bash
# Detén el servidor (Ctrl + C)
# Inicia nuevamente
npm run dev
```

### 3.2 Probar el Newsletter

1. Abre tu navegador en [http://localhost:3000](http://localhost:3000)

2. Busca el formulario de newsletter (generalmente en el footer o página de inicio)

3. Ingresa un email de prueba (puede ser el tuyo)

4. Haz clic en **"Suscribirse"**

5. Deberías ver:
   - ✅ Mensaje de éxito en la UI
   - ✅ Email de bienvenida en la bandeja del email que pusiste
   - ✅ Notificación en tu email de Gmail (configurado en GMAIL_USER)

### 3.3 Probar el Formulario de Contacto

1. Ve a [http://localhost:3000/contacto](http://localhost:3000/contacto)

2. Completa el formulario:
   - Nombre completo
   - Email
   - Servicio de interés
   - Mensaje

3. Haz clic en **"Enviar Mensaje"**

4. Deberías recibir:
   - ✅ Email de confirmación en el email que pusiste en el formulario
   - ✅ Email con los detalles del contacto en tu Gmail (GMAIL_USER)

### 3.4 Revisar Logs

Si algo no funciona, revisa la consola del servidor para ver errores:

```bash
# En la terminal donde corre npm run dev
# Busca mensajes como:
Error en suscripción al newsletter: ...
Error en formulario de contacto: ...
```

---

## 🚨 Solución de Problemas

### Error: "GMAIL_USER y GMAIL_APP_PASSWORD deben estar configurados"

**Problema:** Las variables de entorno no están configuradas correctamente.

**Solución:**
1. Verifica que el archivo `.env.local` exista en la raíz del proyecto
2. Verifica que las variables estén escritas correctamente (sin espacios extra)
3. Reinicia el servidor de desarrollo

### Error: "Invalid login"

**Problema:** La contraseña de aplicación es incorrecta.

**Solución:**
1. Genera una nueva contraseña de aplicación siguiendo el [Paso 1.2](#12-generar-contraseña-de-aplicación)
2. Actualiza `GMAIL_APP_PASSWORD` en `.env.local`
3. Reinicia el servidor

### No llegan los emails

**Problema:** Los emails pueden estar en spam o la configuración es incorrecta.

**Solución:**
1. Revisa la carpeta de **Spam** en tu email
2. Verifica que `GMAIL_USER` sea tu email de Gmail correcto
3. Verifica que la verificación en 2 pasos esté activada
4. Revisa los logs del servidor para errores
5. Intenta enviar un email de prueba manualmente usando la contraseña de aplicación

### Los emails se envían pero con formato incorrecto

**Problema:** Las variables `NEXT_PUBLIC_SITE_URL` o `NEXT_PUBLIC_SITE_NAME` no están configuradas.

**Solución:**
1. Agrega estas variables a `.env.local`:
   ```env
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   NEXT_PUBLIC_SITE_NAME=TecnoDespegue
   ```
2. Reinicia el servidor

---

## 🔄 Alternativas a Gmail

Si prefieres usar otros servicios de email, aquí están las alternativas:

### Opción 1: Resend (Recomendado para Producción)

```bash
npm install resend
```

```env
RESEND_API_KEY=re_xxxxxxxxxxxxx
```

[Documentación de Resend](https://resend.com/docs)

### Opción 2: SendGrid

```bash
npm install @sendgrid/mail
```

```env
SENDGRID_API_KEY=SG.xxxxxxxxxxxxx
```

[Documentación de SendGrid](https://sendgrid.com/docs)

### Opción 3: Mailgun

```bash
npm install mailgun.js form-data
```

```env
MAILGUN_API_KEY=xxxxxxxxxxxxx
MAILGUN_DOMAIN=yourdomain.com
```

[Documentación de Mailgun](https://documentation.mailgun.com)

---

## 📊 Configuración para Producción

### Vercel

1. Ve a tu proyecto en Vercel Dashboard

2. Settings → Environment Variables

3. Agrega las variables:
   ```
   GMAIL_USER=tu-email@gmail.com
   GMAIL_APP_PASSWORD=xxxx xxxx xxxx xxxx
   NEXT_PUBLIC_SITE_URL=https://tudominio.com
   NEXT_PUBLIC_SITE_NAME=TecnoDespegue
   ```

4. Redeploy el proyecto

### Netlify

1. Site settings → Build & deploy → Environment

2. Agrega las mismas variables que en Vercel

3. Rebuild el sitio

---

## 🔐 Mejores Prácticas de Seguridad

1. ✅ **NUNCA** subas el archivo `.env.local` a Git
2. ✅ Usa contraseñas de aplicación, no tu contraseña de Gmail
3. ✅ Revoca contraseñas de aplicación que no uses
4. ✅ Usa emails diferentes para desarrollo y producción si es posible
5. ✅ Monitorea el uso de tu cuenta de Gmail
6. ✅ Considera usar servicios profesionales como Resend para producción

---

## 📚 Referencias

- [Contraseñas de aplicaciones de Google](https://support.google.com/accounts/answer/185833?hl=es)
- [Nodemailer Documentation](https://nodemailer.com/about/)
- [Next.js Environment Variables](https://nextjs.org/docs/basic-features/environment-variables)

---

## ❓ Preguntas Frecuentes

### ¿Puedo usar un email que no sea Gmail?

Sí, pero deberás modificar la configuración del transporter en `src/lib/email.ts`. Gmail es el más fácil de configurar.

### ¿Hay límites de envío?

Gmail tiene un límite de aproximadamente 500 emails por día para cuentas gratuitas. Para producción, se recomienda usar servicios como Resend.

### ¿Los emails se ven bien en todos los clientes?

Sí, los templates HTML están optimizados para la mayoría de clientes de email (Gmail, Outlook, Apple Mail, etc.)

### ¿Puedo personalizar los templates de email?

Sí, puedes modificar las funciones en `src/lib/email.ts`:
- `getNewsletterWelcomeEmailHtml()`
- `getContactFormNotificationHtml()`
- `getContactFormConfirmationHtml()`

---

<div align="center">

**¿Necesitas ayuda?** Abre un [Issue](https://github.com/tu-usuario/agencia-tecnodespegue/issues)

[← Volver a la documentación](./README.md)

</div>
