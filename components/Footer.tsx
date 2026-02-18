export default function Footer() {
  return (
    <footer className="bg-corporate-dark-green text-elegant-gold py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-xl md:text-2xl font-serif font-bold mb-4">
            HSGAC INTERNACIONAL S.A.
          </h3>
          <p className="text-sm md:text-base font-sans mb-4 opacity-90">
            Servicios contables, financieros y capacitaciones empresariales
          </p>
          <div className="border-t border-elegant-gold/30 pt-6 mt-6">
            <p className="text-xs md:text-sm font-sans opacity-75">
              © {new Date().getFullYear()} HSGAC INTERNACIONAL S.A. Todos los derechos reservados.
            </p>
            <p className="text-xs md:text-sm font-sans opacity-75 mt-2">
              Build by{' '}
              <a
                href="https://www.yieldge.com/cr/mision"
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
