export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-20 md:pt-24 bg-corporate-dark-green overflow-hidden"
    >
      {/* Background image with blur */}
      <div
        className="absolute inset-0 scale-110"
        style={{
          backgroundImage: 'url(/assets/sean-pollock-PhYq704ffdA-unsplash.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          filter: 'blur(0.2px)',
        }}
      />
      {/* Color overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(rgba(13, 40, 24, 0.35), rgba(13, 40, 24, 0.35))',
        }}
      />
      {/* Gradient for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-corporate-dark-green/32 via-corporate-dark-green/19 to-corporate-dark-green/32"></div>
      
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 md:mb-8 leading-tight">
          Contabilidad y finanzas con criterio profesional
        </h1>

        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white mb-8 md:mb-12 max-w-3xl mx-auto font-serif">
          Acompañamiento estratégico para empresas y emprendedores.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center w-full px-4 sm:px-0">
          <a
            href="https://wa.me/50687935137?text=Hola,%20me%20gustaría%20solicitar%20información%20sobre%20sus%20servicios."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-elegant-gold text-corporate-dark-green px-6 py-3 md:px-10 md:py-4 font-serif font-semibold text-sm sm:text-base md:text-lg rounded hover:bg-light-gold transition-colors duration-300 shadow-lg text-center"
          >
            SOLICITAR INFORMACIÓN
          </a>

          <a
            href="https://wa.me/50687935137?text=Hola,%20me%20gustaría%20agendar%20una%20consulta."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto border-2 border-elegant-gold text-white px-6 py-3 md:px-10 md:py-4 font-serif font-semibold text-sm sm:text-base md:text-lg rounded hover:bg-elegant-gold/10 transition-colors duration-300 text-center"
          >
            AGENDAR CONSULTA
          </a>
        </div>
      </div>
    </section>
  )
}
