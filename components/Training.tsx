import {
  Target,
  GraduationCap,
  Heart,
  Crown,
  MessageSquare,
  Cog,
  RefreshCw,
} from 'lucide-react'

const trainingServices = [
  {
    icon: Target,
    title: 'Diseño de programas de formación personalizados',
  },
  {
    icon: GraduationCap,
    title: 'Capacitaciones técnicas especializadas',
  },
  {
    icon: Heart,
    title: 'Desarrollo de habilidades humanas y blandas',
  },
  {
    icon: Crown,
    title: 'Formación gerencial y liderazgo',
  },
  {
    icon: MessageSquare,
    title: 'Talleres de comunicación y trabajo en equipo',
  },
  {
    icon: Cog,
    title: 'Capacitación en gestión administrativa y organizacional',
  },
]

export default function Training() {
  return (
    <section id="training" className="py-16 md:py-24 bg-corporate-dark-green">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-elegant-gold text-sm md:text-base font-sans uppercase tracking-wider mb-2">
            FORMACIÓN CORPORATIVA
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-6 md:mb-8">
            Programas de capacitación empresarial diseñados a la medida
          </h2>
        </div>

        <div className="space-y-6 md:space-y-8 mb-12 md:mb-16 text-center max-w-4xl mx-auto">
          <p className="text-white text-base md:text-lg leading-relaxed">
            Desarrollamos programas formativos enfocados en competencias técnicas, humanas y gerenciales, alineados con las necesidades reales de cada organización.
          </p>
          <p className="text-white text-base md:text-lg leading-relaxed">
            Consideramos el aprendizaje como una herramienta estratégica para fortalecer el talento humano y mejorar el desempeño organizacional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
          {trainingServices.map((service, index) => {
            const IconComponent = service.icon
            return (
              <div
                key={index}
                className="border-2 border-elegant-gold rounded-lg p-6 flex items-start gap-4 hover:bg-elegant-gold/10 transition-colors duration-300"
              >
                <div className="flex-shrink-0">
                  <IconComponent className="w-6 h-6 text-elegant-gold" />
                </div>
                <p className="text-elegant-gold font-sans text-sm md:text-base leading-relaxed">
                  {service.title}
                </p>
              </div>
            )
          })}
        </div>

        {/* Additional service box */}
        <div className="max-w-md mx-auto">
          <div className="border-2 border-elegant-gold rounded-lg p-6 flex items-start gap-4 hover:bg-elegant-gold/10 transition-colors duration-300">
            <div className="flex-shrink-0">
              <RefreshCw className="w-6 h-6 text-elegant-gold" />
            </div>
            <p className="text-elegant-gold font-sans text-sm md:text-base leading-relaxed">
              Programas de actualización profesional
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
