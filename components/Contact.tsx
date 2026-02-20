import { Phone, Mail, MessageCircle } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-4">
            Contacto
          </h2>
          <div className="w-24 h-0.5 bg-elegant-gold mx-auto"></div>
        </div>

        <div className="max-w-xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-8 text-center">
            Información de contacto
          </h3>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 mt-1">
                <Phone className="w-6 h-6 text-elegant-gold" />
              </div>
              <div>
                <p className="text-gray-600 font-sans mb-1">Teléfono</p>
                <a
                  href="tel:+50687935137"
                  className="text-gray-900 font-sans text-lg hover:text-elegant-gold transition-colors"
                >
                  +506 8793-5137
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 mt-1">
                <Mail className="w-6 h-6 text-elegant-gold" />
              </div>
              <div>
                <p className="text-gray-600 font-sans mb-1">Correo electrónico</p>
                <a
                  href="mailto:hsgacinternacional@outlook.com"
                  className="text-gray-900 font-sans text-lg hover:text-elegant-gold transition-colors break-all"
                >
                  hsgacinternacional@outlook.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 mt-1">
                <MessageCircle className="w-6 h-6 text-elegant-gold" />
              </div>
              <div>
                <p className="text-gray-600 font-sans mb-1">WhatsApp</p>
                <a
                  href="https://wa.me/50687935137?text=Hola,%20me%20gustaría%20información%20sobre%20sus%20servicios."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-900 font-sans text-lg hover:text-elegant-gold transition-colors"
                >
                  8793-5137
                </a>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <a
              href="https://wa.me/50687935137?text=Hola,%20me%20gustaría%20solicitar%20asesoría%20profesional."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-green-500 text-white px-6 py-3 font-serif font-semibold text-lg rounded hover:bg-green-600 transition-colors duration-300 shadow-lg"
            >
              <MessageCircle className="w-5 h-5" />
              CONTACTAR POR WHATSAPP
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
