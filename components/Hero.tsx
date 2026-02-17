'use client'

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-20 md:pt-24 bg-corporate-dark-green"
      style={{
        backgroundImage: 'linear-gradient(rgba(13, 40, 24, 0.85), rgba(13, 40, 24, 0.85)), url(/assets/images/hero-bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-corporate-dark-green/90 via-corporate-dark-green/70 to-corporate-dark-green/90"></div>
      
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 md:mb-8 leading-tight">
          Servicios contables, financieros y capacitaciones empresariales con estándares profesionales de excelencia
        </h1>
        
        <p className="text-lg md:text-xl lg:text-2xl text-white mb-8 md:mb-12 max-w-3xl mx-auto font-serif">
          Acompañamos a organizaciones y emprendedores en el orden financiero, el cumplimiento normativo y la toma de decisiones estratégicas.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center">
          <button
            onClick={() => scrollToSection('contact')}
            className="bg-elegant-gold text-corporate-dark-green px-8 py-3 md:px-10 md:py-4 font-serif font-semibold text-base md:text-lg rounded hover:bg-light-gold transition-colors duration-300 shadow-lg"
          >
            SOLICITAR INFORMACIÓN
          </button>
          
          <button
            onClick={() => scrollToSection('contact')}
            className="border-2 border-elegant-gold text-white px-8 py-3 md:px-10 md:py-4 font-serif font-semibold text-base md:text-lg rounded hover:bg-elegant-gold/10 transition-colors duration-300"
          >
            AGENDAR CONSULTA PROFESIONAL
          </button>
        </div>
      </div>
    </section>
  )
}
