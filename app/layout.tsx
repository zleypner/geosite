import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'HSGAC INTERNACIONAL S.A. - Servicios Contables y Financieros',
  description: 'Servicios contables, financieros y capacitaciones empresariales con estándares profesionales de excelencia. Acompañamos a organizaciones y emprendedores en el orden financiero, el cumplimiento normativo y la toma de decisiones estratégicas.',
  keywords: 'contabilidad, servicios financieros, capacitación empresarial, asesoría contable, Costa Rica',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
