'use client'

const topServices = [
  { name: 'Asesoría contable para empresas', id: 'asesoria-contable' },
  { name: 'Auditoría administrativa', id: 'auditoria-administrativa' },
  { name: 'Consultoría financiera', id: 'consultoria-financiera' },
  { name: 'Formación gerencial y liderazgo', id: 'formacion-gerencial' },
  { name: 'Estados financieros', id: 'estados-financieros' },
]

export default function Footer() {
  const scrollToService = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-corporate-dark-green text-elegant-gold py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Services Section */}
        <div className="text-center mb-12">
          <h3 className="font-serif font-semibold text-lg mb-4">
            Nuestros Servicios
          </h3>
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {topServices.map((service) => (
              <li key={service.id}>
                <button
                  onClick={() => scrollToService(service.id)}
                  className="text-sm opacity-80 hover:opacity-100 transition-opacity cursor-pointer"
                >
                  {service.name}
                </button>
              </li>
            ))}
          </ul>
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
