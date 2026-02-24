import type { Metadata, Viewport } from 'next'
import './globals.css'
import WhatsAppButton from '@/components/WhatsAppButton'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export const metadata: Metadata = {
  title: 'HSGAC INTERNACIONAL S.A. - Servicios Contables y Financieros',
  description: 'Servicios contables, financieros y capacitaciones empresariales con estándares profesionales de excelencia. Acompañamos a organizaciones y emprendedores en el orden financiero, el cumplimiento normativo y la toma de decisiones estratégicas.',
  keywords: 'contabilidad, servicios financieros, capacitación empresarial, asesoría contable, Costa Rica',
  icons: {
    icon: '/assets/favicon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className="overflow-x-hidden">
        {children}
        <WhatsAppButton />
      </body>
    </html>
  )
}
