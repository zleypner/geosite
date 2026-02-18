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
    description: 'Creación de planes de formación adaptados a las necesidades específicas de la empresa o del equipo, alineados con sus objetivos y realidad operativa.',
  },
  {
    icon: GraduationCap,
    title: 'Capacitaciones técnicas especializadas',
    description: 'Formación práctica y actualizada en áreas técnicas específicas para fortalecer competencias profesionales y mejorar el desempeño laboral.',
  },
  {
    icon: Heart,
    title: 'Desarrollo de habilidades humanas y blandas',
    description: 'Entrenamiento enfocado en habilidades como comunicación, liderazgo, manejo del tiempo y resolución de conflictos.',
  },
  {
    icon: Crown,
    title: 'Formación gerencial y liderazgo',
    description: 'Capacitación dirigida a líderes y mandos medios para mejorar la toma de decisiones, la gestión de equipos y el liderazgo efectivo.',
  },
  {
    icon: MessageSquare,
    title: 'Talleres de comunicación y trabajo en equipo',
    description: 'Espacios prácticos para fortalecer la comunicación interna, la colaboración y la cohesión entre los miembros del equipo.',
  },
  {
    icon: Cog,
    title: 'Capacitación en gestión administrativa y organizacional',
    description: 'Formación orientada a mejorar la organización, los procesos administrativos y la eficiencia operativa de la empresa.',
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
                className="group h-40 md:h-44 [perspective:1000px]"
              >
                <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  {/* Front Face */}
                  <div className="absolute inset-0 border-2 border-elegant-gold rounded-lg p-6 flex items-center gap-4 [backface-visibility:hidden]">
                    <div className="flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-elegant-gold" />
                    </div>
                    <p className="text-elegant-gold font-sans text-sm md:text-base leading-relaxed">
                      {service.title}
                    </p>
                  </div>

                  {/* Back Face */}
                  <div className="absolute inset-0 bg-elegant-gold rounded-lg p-6 flex flex-col items-center justify-center text-center [backface-visibility:hidden] [transform:rotateY(180deg)]">
                    <IconComponent className="w-6 h-6 text-corporate-dark-green mb-3" />
                    <p className="text-corporate-dark-green font-sans text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Additional service box */}
        <div className="max-w-md mx-auto">
          <div className="group h-40 md:h-44 [perspective:1000px]">
            <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              {/* Front Face */}
              <div className="absolute inset-0 border-2 border-elegant-gold rounded-lg p-6 flex items-center gap-4 [backface-visibility:hidden]">
                <div className="flex-shrink-0">
                  <RefreshCw className="w-6 h-6 text-elegant-gold" />
                </div>
                <p className="text-elegant-gold font-sans text-sm md:text-base leading-relaxed">
                  Programas de actualización profesional
                </p>
              </div>

              {/* Back Face */}
              <div className="absolute inset-0 bg-elegant-gold rounded-lg p-6 flex flex-col items-center justify-center text-center [backface-visibility:hidden] [transform:rotateY(180deg)]">
                <RefreshCw className="w-6 h-6 text-corporate-dark-green mb-3" />
                <p className="text-corporate-dark-green font-sans text-sm leading-relaxed">
                  Capacitaciones diseñadas para mantener a los profesionales actualizados en tendencias, normativas y buenas prácticas de su área.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
