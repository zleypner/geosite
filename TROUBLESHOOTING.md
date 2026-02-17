# Troubleshooting Guide

## Errores Comunes y Soluciones

### 1. Error: Cannot find module '@/components/...'

**Solución:**
- Verifica que `tsconfig.json` tenga el path alias correcto: `"@/*": ["./*"]`
- Reinicia el servidor de TypeScript en tu IDE
- Ejecuta: `rm -rf .next node_modules && npm install`

### 2. Error: Module not found

**Solución:**
- Asegúrate de haber ejecutado `npm install`
- Verifica que todas las dependencias estén en `package.json`

### 3. Error: 'use client' directive

**Solución:**
- Los componentes que usan hooks (`useState`, `useEffect`) o APIs del navegador (`document`, `window`) deben tener `'use client'` al inicio
- Ya está implementado en: `Navbar.tsx`, `Hero.tsx`, `Contact.tsx`

### 4. Error: Tailwind CSS no funciona

**Solución:**
- Verifica que `tailwind.config.ts` esté configurado correctamente
- Asegúrate de que `postcss.config.js` existe
- Verifica que `globals.css` importa Tailwind: `@tailwind base; @tailwind components; @tailwind utilities;`

### 5. Error al ejecutar `npm install`

**Solución:**
- Si hay errores de permisos, intenta: `sudo npm install` (macOS/Linux)
- O usa: `npm install --legacy-peer-deps`
- Verifica que Node.js esté actualizado: `node --version` (debe ser 18+)

### 6. Error: Port 3000 already in use

**Solución:**
- Cambia el puerto: `npm run dev -- -p 3001`
- O mata el proceso: `lsof -ti:3000 | xargs kill`

## Verificación Rápida

1. ✅ `package.json` existe y tiene todas las dependencias
2. ✅ `tsconfig.json` tiene el path alias `@/*`
3. ✅ `next.config.js` está configurado
4. ✅ `tailwind.config.ts` existe
5. ✅ `postcss.config.js` existe
6. ✅ Todos los componentes tienen exports default
7. ✅ Componentes con hooks tienen `'use client'`

## Comandos Útiles

```bash
# Limpiar e instalar
rm -rf .next node_modules package-lock.json
npm install

# Ejecutar en desarrollo
npm run dev

# Verificar tipos TypeScript
npx tsc --noEmit

# Verificar linting
npm run lint
```
