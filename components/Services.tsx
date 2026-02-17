import {
  BookOpen,
  Calculator,
  FileCheck,
  Settings,
  FileText,
  Building2,
  Wallet,
  Receipt,
  Package,
  Scale,
  BarChart3,
  TrendingUp,
  Users,
  FileSignature,
  ClipboardList,
  Search,
  FileBarChart,
} from 'lucide-react'

const services = [
  {
    icon: BookOpen,
    title: 'Actualización de libros legales',
  },
  {
    icon: Calculator,
    title: 'Asesoría contable para empresas y emprendedores',
  },
  {
    icon: FileCheck,
    title: 'Auditoría administrativa y revisión de procesos internos',
  },
  {
    icon: Settings,
    title: 'Cálculo de aguinaldo y liquidaciones laborales',
  },
  {
    icon: FileText,
    title: 'Catálogo de cuentas',
  },
  {
    icon: Building2,
    title: 'Conciliación de cuentas bancarias',
  },
  {
    icon: Wallet,
    title: 'Consultoría financiera y control de gastos',
  },
  {
    icon: Receipt,
    title: 'Contabilidad general y registros contables',
  },
  {
    icon: Package,
    title: 'Costeo de importaciones',
  },
  {
    icon: Scale,
    title: 'Declaraciones tributarias y cumplimiento fiscal',
  },
  {
    icon: BarChart3,
    title: 'Elaboración de estados financieros',
  },
  {
    icon: TrendingUp,
    title: 'Flujo de caja proyectado',
  },
  {
    icon: Users,
    title: 'Gestión de planillas, provisiones y cargas sociales',
  },
  {
    icon: FileSignature,
    title: 'Inscripción de contribuyente',
  },
  {
    icon: ClipboardList,
    title: 'Levantamiento e inventarios',
  },
  {
    icon: Search,
    title: 'Proceso de fiscalización',
  },
  {
    icon: FileBarChart,
    title: 'Servicios contables del régimen simplificado',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-elegant-gold text-sm md:text-base font-sans uppercase tracking-wider mb-2">
            NUESTRAS SOLUCIONES
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-4">
            Servicios Contables y Financieros
          </h2>
          <div className="w-24 h-0.5 bg-elegant-gold mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300 flex items-start gap-4"
              >
                <div className="flex-shrink-0">
                  <IconComponent className="w-6 h-6 text-elegant-gold" />
                </div>
                <p className="text-gray-700 font-sans text-sm md:text-base leading-relaxed">
                  {service.title}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
