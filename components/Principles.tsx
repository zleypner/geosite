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

export default function Principles() {
  return (
    <section id="principles" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-elegant-gold text-sm md:text-base font-sans uppercase tracking-wider mb-2">
            NUESTRO COMPROMISO
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-4">
            Principios que nos respaldan
          </h2>
          <div className="w-24 h-0.5 bg-elegant-gold mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {principles.map((principle, index) => {
            const IconComponent = principle.icon
            return (
              <div
                key={index}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 border-2 border-elegant-gold rounded flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-elegant-gold" />
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-serif font-bold text-gray-900 mb-3">
                  {principle.title}
                </h3>
                <p className="text-gray-600 font-sans text-sm md:text-base leading-relaxed">
                  {principle.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
