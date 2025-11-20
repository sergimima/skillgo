# Skill & Go

**El Duolingo para vendedores** - Plataforma gamificada de formación para equipos de ventas.

## 🚀 Tech Stack

- **Vite** - Build tool
- **React 18** - UI Framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **shadcn/ui** - UI Components
- **react-i18next** - Internationalization (ES/EN)
- **EmailJS** - Contact form

## 🛠️ Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🌍 Environment Variables

Create a `.env` file in the root:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

## 🚢 Deployment

### Production Build

```bash
npm run build
```

The `dist/` folder contains the static files ready to deploy.

### PM2 (Recommended)

```bash
npm install -g serve
pm2 start serve --name skillgo -- -s dist -l 8080
pm2 save
```

## 📝 License

© 2024 Skill & Go. All rights reserved.
