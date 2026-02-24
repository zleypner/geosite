const services = [
  'Actualización de libros legales',
  'Asesoría contable para empresas y emprendedores',
  'Auditoría administrativa y revisión de procesos internos',
  'Cálculo de aguinaldo y liquidaciones laborales',
  'Catálogo de cuentas',
  'Conciliación de cuentas bancarias',
  'Consultoría financiera y control de gastos',
  'Contabilidad general y registros contables',
  'Costeo de importaciones',
  'Declaraciones tributarias y cumplimiento fiscal',
  'Elaboración de estados financieros',
  'Flujo de caja proyectado',
  'Gestión de planillas, provisiones y cargas sociales',
  'Inscripción de contribuyente',
  'Levantamiento e inventarios',
  'Proceso de fiscalización',
  'Servicios contables del régimen simplificado',
]

const trainingServices = [
  'Diseño de programas de formación personalizados',
  'Capacitaciones técnicas especializadas',
  'Desarrollo de habilidades humanas y blandas',
  'Formación gerencial y liderazgo',
  'Talleres de comunicación y trabajo en equipo',
  'Capacitación en gestión administrativa y organizacional',
  'Programas de actualización profesional',
]

export default function Footer() {
  return (
    <footer className="bg-corporate-dark-green text-elegant-gold py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Services Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mb-12">
          {/* Servicios Contables */}
          <div className="lg:col-span-2">
            <h3 className="font-serif font-semibold text-lg mb-4">
              Servicios Contables y Financieros
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
              {services.map((service, index) => (
                <li key={index} className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Capacitaciones */}
          <div>
            <h3 className="font-serif font-semibold text-lg mb-4">
              Capacitaciones Empresariales
            </h3>
            <ul className="space-y-2">
              {trainingServices.map((service, index) => (
                <li key={index} className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-elegant-gold/30 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs md:text-sm font-sans opacity-75">
              © {new Date().getFullYear()} HSGAC INTERNACIONAL S.A. Todos los derechos reservados.
            </p>
            <p className="text-xs md:text-sm font-sans opacity-75">
              Build by{' '}
              <a
                href="https://www.yieldge.com/cr"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-100 transition-opacity underline"
              >
                Yieldge
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
