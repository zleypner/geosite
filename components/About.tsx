import {
  Shield,
  Scale,
  Target,
  Lock,
  Compass,
  Sprout,
} from 'lucide-react'

const principles = [
  {
    icon: Shield,
    title: 'Ética profesional',
    description: 'Actuamos con integridad y transparencia en cada servicio que ofrecemos.',
  },
  {
    icon: Scale,
    title: 'Cumplimiento normativo',
    description: 'Garantizamos la observancia de las obligaciones legales y tributarias vigentes.',
  },
  {
    icon: Target,
    title: 'Precisión técnica',
    description: 'Cada análisis y registro se realiza con rigor y exactitud contable.',
  },
  {
    icon: Lock,
    title: 'Confidencialidad',
    description: 'Protegemos la información financiera de nuestros clientes con absoluta reserva.',
  },
  {
    icon: Compass,
    title: 'Acompañamiento estratégico',
    description: 'Orientamos la toma de decisiones con base en datos y análisis financiero.',
  },
  {
    icon: Sprout,
    title: 'Crecimiento sostenible',
    description: 'Promovemos prácticas que generan valor a largo plazo para cada organización.',
  },
]

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-elegant-gold text-sm md:text-base font-sans uppercase tracking-wider mb-2">
            QUIÉNES SOMOS
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-4">
            Sobre Nosotros
          </h2>
          <div className="w-24 h-0.5 bg-elegant-gold mx-auto"></div>
        </div>

        <div className="space-y-6 md:space-y-8 text-gray-700 text-base md:text-lg leading-relaxed">
          <p>
            HSGAC INTERNACIONAL S.A. es una firma especializada en contabilidad, administración, gestión financiera y capacitación empresarial.
          </p>
          
          <p>
            Nuestros servicios están diseñados para garantizar el cumplimiento legal y tributario, optimizar recursos financieros y brindar tranquilidad operativa a empresas, pymes y profesionales independientes.
          </p>
          
          <p>
            Actuamos con ética, precisión técnica y compromiso profesional, ofreciendo un acompañamiento cercano y personalizado alineado con los objetivos estratégicos de cada organización.
          </p>
        </div>

        {/* Principios */}
        <div className="mt-16 md:mt-20">
          <h3 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-8 text-center">
            Principios que nos respaldan
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto">
            {principles.map((principle, index) => {
              const IconComponent = principle.icon
              return (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 border-2 border-elegant-gold rounded flex items-center justify-center">
                      <IconComponent className="w-8 h-8 text-elegant-gold" />
                    </div>
                  </div>
                  <h4 className="text-xl md:text-2xl font-serif font-bold text-gray-900 mb-3">
                    {principle.title}
                  </h4>
                  <p className="text-gray-600 font-sans text-sm md:text-base leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
