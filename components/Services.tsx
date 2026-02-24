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
  Target,
  GraduationCap,
  Heart,
  Crown,
  MessageSquare,
  Cog,
  RefreshCw,
} from 'lucide-react'

const services = [
  {
    id: 'libros-legales',
    icon: BookOpen,
    title: 'Actualización de libros legales',
    description: 'Registro y actualización correcta de los libros contables y legales exigidos por la normativa vigente, asegurando orden, respaldo y cumplimiento ante autoridades.',
  },
  {
    id: 'asesoria-contable',
    icon: Calculator,
    title: 'Asesoría contable para empresas y emprendedores',
    description: 'Acompañamiento profesional para la toma de decisiones contables y financieras, orientado a optimizar recursos, cumplir obligaciones y hacer crecer el negocio.',
  },
  {
    id: 'auditoria-administrativa',
    icon: FileCheck,
    title: 'Auditoría administrativa y revisión de procesos internos',
    description: 'Análisis de procesos administrativos y controles internos para detectar errores, riesgos y oportunidades de mejora en la gestión empresarial.',
  },
  {
    id: 'aguinaldo-liquidaciones',
    icon: Settings,
    title: 'Cálculo de aguinaldo y liquidaciones laborales',
    description: 'Cálculo preciso de aguinaldos, cesantías, vacaciones y liquidaciones conforme a la legislación laboral vigente.',
  },
  {
    id: 'catalogo-cuentas',
    icon: FileText,
    title: 'Catálogo de cuentas',
    description: 'Diseño y estructuración del catálogo de cuentas contables adaptado a la actividad del negocio para un registro claro y ordenado.',
  },
  {
    id: 'conciliacion-bancaria',
    icon: Building2,
    title: 'Conciliación de cuentas bancarias',
    description: 'Revisión y comparación de registros contables con estados bancarios para garantizar exactitud y detectar diferencias o inconsistencias.',
  },
  {
    id: 'consultoria-financiera',
    icon: Wallet,
    title: 'Consultoría financiera y control de gastos',
    description: 'Evaluación de gastos y estructura financiera del negocio para mejorar el control, la rentabilidad y la eficiencia operativa.',
  },
  {
    id: 'contabilidad-general',
    icon: Receipt,
    title: 'Contabilidad general y registros contables',
    description: 'Registro sistemático de las operaciones financieras del negocio, manteniendo información contable confiable y actualizada.',
  },
  {
    id: 'costeo-importaciones',
    icon: Package,
    title: 'Costeo de importaciones',
    description: 'Cálculo y control de costos asociados a importaciones, incluyendo impuestos, fletes y gastos adicionales, para una correcta valuación.',
  },
  {
    id: 'declaraciones-tributarias',
    icon: Scale,
    title: 'Declaraciones tributarias y cumplimiento fiscal',
    description: 'Preparación y presentación de declaraciones de impuestos, asegurando el cumplimiento oportuno de las obligaciones fiscales.',
  },
  {
    id: 'estados-financieros',
    icon: BarChart3,
    title: 'Elaboración de estados financieros',
    description: 'Preparación de estados financieros claros y confiables que reflejan la situación económica y el desempeño del negocio.',
  },
  {
    id: 'flujo-caja',
    icon: TrendingUp,
    title: 'Flujo de caja proyectado',
    description: 'Proyección de ingresos y egresos futuros para anticipar necesidades de liquidez y apoyar la planificación financiera.',
  },
  {
    id: 'gestion-planillas',
    icon: Users,
    title: 'Gestión de planillas, provisiones y cargas sociales',
    description: 'Administración de planillas salariales, provisiones laborales y cargas sociales conforme a la normativa aplicable.',
  },
  {
    id: 'inscripcion-contribuyente',
    icon: FileSignature,
    title: 'Inscripción de contribuyente',
    description: 'Gestión del proceso de inscripción ante las autoridades tributarias para iniciar actividades comerciales formalmente.',
  },
  {
    id: 'inventarios',
    icon: ClipboardList,
    title: 'Levantamiento e inventarios',
    description: 'Registro y control físico de inventarios para asegurar exactitud en existencias y correcta valuación contable.',
  },
  {
    id: 'fiscalizacion',
    icon: Search,
    title: 'Proceso de fiscalización',
    description: 'Asistencia y acompañamiento durante procesos de fiscalización, preparando documentación y atendiendo requerimientos de las autoridades.',
  },
  {
    id: 'regimen-simplificado',
    icon: FileBarChart,
    title: 'Servicios contables del régimen simplificado',
    description: 'Gestión contable y tributaria para contribuyentes del régimen simplificado, enfocada en cumplimiento, simplicidad y control básico.',
  },
]

const trainingServices = [
  {
    id: 'formacion-personalizada',
    icon: Target,
    title: 'Diseño de programas de formación personalizados',
    description: 'Creación de planes de formación adaptados a las necesidades específicas de la empresa o del equipo, alineados con sus objetivos y realidad operativa.',
  },
  {
    id: 'capacitaciones-tecnicas',
    icon: GraduationCap,
    title: 'Capacitaciones técnicas especializadas',
    description: 'Formación práctica y actualizada en áreas técnicas específicas para fortalecer competencias profesionales y mejorar el desempeño laboral.',
  },
  {
    id: 'habilidades-blandas',
    icon: Heart,
    title: 'Desarrollo de habilidades humanas y blandas',
    description: 'Entrenamiento enfocado en habilidades como comunicación, liderazgo, manejo del tiempo y resolución de conflictos.',
  },
  {
    id: 'formacion-gerencial',
    icon: Crown,
    title: 'Formación gerencial y liderazgo',
    description: 'Capacitación dirigida a líderes y mandos medios para mejorar la toma de decisiones, la gestión de equipos y el liderazgo efectivo.',
  },
  {
    id: 'talleres-comunicacion',
    icon: MessageSquare,
    title: 'Talleres de comunicación y trabajo en equipo',
    description: 'Espacios prácticos para fortalecer la comunicación interna, la colaboración y la cohesión entre los miembros del equipo.',
  },
  {
    id: 'gestion-administrativa',
    icon: Cog,
    title: 'Capacitación en gestión administrativa y organizacional',
    description: 'Formación orientada a mejorar la organización, los procesos administrativos y la eficiencia operativa de la empresa.',
  },
  {
    id: 'actualizacion-profesional',
    icon: RefreshCw,
    title: 'Programas de actualización profesional',
    description: 'Capacitaciones diseñadas para mantener a los profesionales actualizados en tendencias, normativas y buenas prácticas de su área.',
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <div
                key={index}
                id={service.id}
                className="group h-64 md:h-72 [perspective:1000px] scroll-mt-24"
              >
                <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  {/* Front Face */}
                  <div className="absolute inset-0 bg-white rounded-xl p-6 md:p-8 shadow-md border border-gray-200 flex flex-col items-center justify-center text-center [backface-visibility:hidden]">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-corporate-dark-green/10 rounded-full flex items-center justify-center mb-4 md:mb-6">
                      <IconComponent className="w-8 h-8 md:w-10 md:h-10 text-elegant-gold" />
                    </div>
                    <h3 className="text-gray-900 font-serif font-semibold text-base md:text-lg leading-tight">
                      {service.title}
                    </h3>
                  </div>

                  {/* Back Face */}
                  <div className="absolute inset-0 bg-corporate-dark-green rounded-xl p-6 md:p-8 shadow-md flex flex-col items-center justify-center text-center [backface-visibility:hidden] [transform:rotateY(180deg)]">
                    <IconComponent className="w-8 h-8 text-elegant-gold mb-4" />
                    <p className="text-white font-sans text-sm md:text-base leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Capacitaciones Section */}
        <div className="mt-20 md:mt-28 bg-corporate-dark-green rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12 md:mb-16">
            <p className="text-elegant-gold text-sm md:text-base font-sans uppercase tracking-wider mb-2">
              FORMACIÓN CORPORATIVA
            </p>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-white mb-6">
              Programas de capacitación empresarial diseñados a la medida
            </h3>
            <p className="text-white text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
              Desarrollamos programas formativos enfocados en competencias técnicas, humanas y gerenciales, alineados con las necesidades reales de cada organización.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {trainingServices.map((service, index) => {
              const IconComponent = service.icon
              return (
                <div
                  key={index}
                  id={service.id}
                  className="group h-40 md:h-44 [perspective:1000px] scroll-mt-24"
                >
                  <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    {/* Front Face */}
                    <div className="absolute inset-0 border-2 border-elegant-gold rounded-lg p-6 flex items-center gap-4 [backface-visibility:hidden]">
                      <div className="flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-elegant-gold" />
                      </div>
                      <p className="text-elegant-gold font-sans text-sm md:text-base leading-relaxed">
                        {service.title}
                      </p>
                    </div>

                    {/* Back Face */}
                    <div className="absolute inset-0 bg-elegant-gold rounded-lg p-6 flex flex-col items-center justify-center text-center [backface-visibility:hidden] [transform:rotateY(180deg)]">
                      <IconComponent className="w-6 h-6 text-corporate-dark-green mb-3" />
                      <p className="text-corporate-dark-green font-sans text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
