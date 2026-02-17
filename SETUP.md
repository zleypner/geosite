# Guía de Configuración - HSGAC INTERNACIONAL

## Pasos para Ejecutar el Proyecto

### 1. Instalar Dependencias

```bash
cd web2/4-free/geosite
npm install
```

Si hay errores de permisos:
```bash
npm install --legacy-peer-deps
```

### 2. Verificar Archivos de Configuración

Asegúrate de que estos archivos existan:
- ✅ `package.json`
- ✅ `tsconfig.json`
- ✅ `next.config.js`
- ✅ `tailwind.config.ts`
- ✅ `postcss.config.js`
- ✅ `.eslintrc.json`
- ✅ `next-env.d.ts`

### 3. Ejecutar en Desarrollo

```bash
npm run dev
```

El sitio estará disponible en: http://localhost:3000

### 4. Si Hay Errores

#### Error: Module not found
```bash
rm -rf .next node_modules
npm install
```

#### Error: TypeScript errors
```bash
npx tsc --noEmit
```

#### Error: Tailwind not working
Verifica que `app/globals.css` tenga:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Estructura de Archivos

```
geosite/
├── app/
│   ├── layout.tsx      ✅
│   ├── page.tsx        ✅
│   └── globals.css     ✅
├── components/
│   ├── Navbar.tsx      ✅ (tiene 'use client')
│   ├── Hero.tsx        ✅ (tiene 'use client')
│   ├── About.tsx       ✅
│   ├── Services.tsx    ✅
│   ├── Training.tsx    ✅
│   ├── Principles.tsx  ✅
│   ├── Contact.tsx     ✅ (tiene 'use client')
│   └── Footer.tsx      ✅
└── public/
    └── assets/
        └── images/     (coloca hero-bg.jpg aquí)
```

## Verificación Rápida

Todos los componentes están correctamente configurados:
- ✅ Todos tienen `export default`
- ✅ Componentes con hooks tienen `'use client'`
- ✅ Imports usan el alias `@/components/...`
- ✅ TypeScript configurado correctamente
- ✅ Tailwind CSS configurado

## Notas Importantes

1. **Imagen del Hero**: Coloca `hero-bg.jpg` en `public/assets/images/` (opcional, funciona sin ella)

2. **Dependencias Requeridas**:
   - Node.js 18+
   - npm o yarn

3. **Puerto**: Por defecto usa el puerto 3000. Si está ocupado:
   ```bash
   npm run dev -- -p 3001
   ```
