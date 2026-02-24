import { Phone, Mail, MessageCircle, ArrowRight } from 'lucide-react'

const WHATSAPP_URL = 'https://wa.me/50687935137'
const WHATSAPP_PREFILL = 'Hola, me gustaría recibir asesoría profesional. ¿Podrían ayudarme?'
const PHONE = '+50687935137'
const EMAIL = 'hsgacinternacional@outlook.com'

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-16 md:py-24"
      style={{
        backgroundImage: 'url(/assets/verne-ho-0LAJfSNa-xQ-unsplash.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto bg-white/85 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-2">
              Contacto
            </h2>
            <p className="text-gray-600 font-sans text-base md:text-lg mb-4 max-w-md mx-auto">
              Estamos listos para ayudarte. Elige la opción que prefieras — respuesta rápida y sin compromiso.
            </p>
            <div className="w-24 h-0.5 bg-elegant-gold mx-auto"></div>
          </div>

          {/* CTA principal: WhatsApp */}
          <div className="text-center mb-8">
            <a
              href={`${WHATSAPP_URL}?text=${encodeURIComponent(WHATSAPP_PREFILL)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 w-full sm:w-auto bg-[#25D366] text-white px-6 py-4 font-serif font-semibold text-base rounded-xl hover:bg-[#20BD5A] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02]"
            >
              <MessageCircle className="w-6 h-6 flex-shrink-0" />
              <span>Chatea con un asesor ahora</span>
              <ArrowRight className="w-5 h-5 flex-shrink-0" />
            </a>
            <p className="text-gray-500 text-sm mt-2 font-sans">
              Respuesta en minutos · Asesoría sin compromiso
            </p>
          </div>

          <div className="border-t border-gray-200 pt-6 space-y-4">
            <p className="text-gray-600 font-sans text-sm text-center mb-4">
              O contáctanos por teléfono o correo
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={`tel:${PHONE.replace(/\s/g, '')}`}
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg border-2 border-elegant-gold/40 text-gray-800 font-sans font-medium hover:bg-elegant-gold/10 hover:border-elegant-gold transition-colors"
              >
                <Phone className="w-5 h-5 text-elegant-gold" />
                Llamar ahora · +506 8793-5137
              </a>
              <a
                href={`mailto:${EMAIL}?subject=Consulta%20desde%20web%20HSGAC`}
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg border-2 border-gray-300 text-gray-800 font-sans font-medium hover:bg-gray-100 hover:border-gray-400 transition-colors"
              >
                <Mail className="w-5 h-5 text-elegant-gold" />
                Enviar correo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
