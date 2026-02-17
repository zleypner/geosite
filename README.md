# HSGAC INTERNACIONAL S.A. - Sitio Web Corporativo

Sitio web corporativo profesional para HSGAC INTERNACIONAL S.A., especializado en servicios contables, financieros y capacitaciones empresariales.

## 🚀 Tecnologías

- **Next.js 14+** (App Router)
- **React 18**
- **TypeScript**
- **Tailwind CSS**
- **Lucide Icons**

## 📦 Instalación

```bash
npm install
```

## 🏃 Desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 🏗️ Estructura del Proyecto

```
geosite/
├── app/
│   ├── layout.tsx      # Layout principal con metadata SEO
│   ├── page.tsx        # Página principal (landing page)
│   └── globals.css     # Estilos globales y Tailwind
├── components/
│   ├── Navbar.tsx      # Barra de navegación
│   ├── Hero.tsx        # Sección hero con CTAs
│   ├── About.tsx       # Sobre nosotros
│   ├── Services.tsx    # Servicios contables y financieros
│   ├── Training.tsx    # Capacitaciones empresariales
│   ├── Principles.tsx # Principios corporativos
│   ├── Contact.tsx     # Formulario de contacto
│   └── Footer.tsx     # Pie de página
└── public/
    └── assets/
        └── images/     # Imágenes del sitio
```

## 🎨 Identidad Visual

- **Verde oscuro corporativo**: `#1a4d3a` / `#0d2818`
- **Dorado elegante**: `#d4af37`
- **Tipografía**: Serif para títulos, Sans-serif para cuerpo

## 📸 Imágenes

Coloca la imagen de fondo del hero en:
```
public/assets/images/hero-bg.jpg
```

El componente Hero está configurado para usar esta imagen. Si no está disponible, se mostrará un fondo sólido con overlay.

## ✅ Características

- ✅ Diseño responsive (desktop-first, mobile clean)
- ✅ Navegación suave entre secciones
- ✅ Formulario de contacto con validación
- ✅ SEO básico configurado
- ✅ Accesibilidad mejorada
- ✅ Código tipado con TypeScript

## 📝 Notas

- El formulario de contacto actualmente solo muestra una alerta. Para producción, conectar con un backend o servicio de email.
- Las imágenes deben ser proporcionadas y colocadas en la carpeta `public/assets/images/`.
