# Configuración de EmailJS para el Formulario de Contacto

El formulario de contacto está configurado para enviar emails a **mvalles@vottun.com** usando EmailJS.

## Pasos para configurar EmailJS:

### 1. Crear cuenta en EmailJS
1. Ve a [https://www.emailjs.com/](https://www.emailjs.com/)
2. Crea una cuenta gratuita (el plan gratuito permite 200 emails/mes)

### 2. Configurar un servicio de email
1. En el dashboard de EmailJS, ve a **Email Services**
2. Haz clic en **Add New Service**
3. Elige tu proveedor de email (Gmail, Outlook, etc.) o usa **EmailJS** (para pruebas)
4. Sigue las instrucciones para conectar tu cuenta de email
5. **Copia el Service ID** (lo necesitarás después)

### 3. Crear una plantilla de email
1. Ve a **Email Templates**
2. Haz clic en **Create New Template**
3. Configura la plantilla con estos campos:
   - **To Email**: `mvalles@vottun.com` (o usa `{{to_email}}` si quieres que sea dinámico)
   - **From Name**: `{{from_name}}`
   - **From Email**: `{{from_email}}`
   - **Subject**: `Nueva solicitud de demo - Skill & Go`
   - **Content** (ejemplo):
     ```
     Has recibido una nueva solicitud de demo gratuita desde Skill & Go.
     
     Nombre: {{from_name}}
     Email: {{from_email}}
     Empresa: {{company}}
     
     Mensaje:
     {{message}}
     ```

4. **Copia el Template ID** (lo necesitarás después)

### 4. Obtener tu Public Key
1. Ve a **Account** → **General**
2. Encuentra tu **Public Key** y cópiala

### 5. Configurar las variables de entorno
1. Crea un archivo `.env` en la raíz del proyecto (al mismo nivel que `package.json`)

2. Agrega las siguientes variables con tus valores:
   ```
   VITE_EMAILJS_SERVICE_ID=tu_service_id_aqui
   VITE_EMAILJS_TEMPLATE_ID=tu_template_id_aqui
   VITE_EMAILJS_PUBLIC_KEY=tu_public_key_aqui
   ```

   **Ejemplo:**
   ```
   VITE_EMAILJS_SERVICE_ID=service_abc123
   VITE_EMAILJS_TEMPLATE_ID=template_xyz789
   VITE_EMAILJS_PUBLIC_KEY=abcdefghijklmnop
   ```

### 6. Reiniciar el servidor de desarrollo
Después de configurar las variables de entorno, reinicia el servidor:
```bash
npm run dev
```

## Notas importantes:
- El archivo `.env` NO debe subirse a Git (ya debería estar en `.gitignore`)
- El plan gratuito de EmailJS permite 200 emails por mes
- Los emails se enviarán directamente a `mvalles@vottun.com`
- Si necesitas cambiar el email de destino, edita la constante `RECIPIENT_EMAIL` en `src/components/Contact.tsx`

## Prueba el formulario
Una vez configurado, puedes probar el formulario y deberías recibir el email en `mvalles@vottun.com`.

