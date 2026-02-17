'use client'

import { useState } from 'react'
import { Phone, Mail } from 'lucide-react'

const servicesList = [
  'Asesoría contable',
  'Auditoría administrativa',
  'Consultoría financiera',
  'Contabilidad general',
  'Declaraciones tributarias',
  'Elaboración de estados financieros',
  'Gestión de planillas',
  'Capacitación empresarial',
  'Otro servicio',
]

export default function Contact() {
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    cargo: '',
    servicio: '',
    telefono: '',
    correo: '',
    mensaje: '',
  })

  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.nombre.trim()) {
      newErrors.nombre = 'El nombre es requerido'
    }
    if (!formData.correo.trim()) {
      newErrors.correo = 'El correo es requerido'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.correo)) {
      newErrors.correo = 'El correo no es válido'
    }
    if (!formData.telefono.trim()) {
      newErrors.telefono = 'El teléfono es requerido'
    }
    if (!formData.servicio) {
      newErrors.servicio = 'Seleccione un servicio de interés'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      // Here you would typically send the form data to a backend
      console.log('Form submitted:', formData)
      alert('Gracias por su interés. Nos pondremos en contacto pronto.')
      // Reset form
      setFormData({
        nombre: '',
        empresa: '',
        cargo: '',
        servicio: '',
        telefono: '',
        correo: '',
        mensaje: '',
      })
    }
  }

  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-4">
            Contacto
          </h2>
          <div className="w-24 h-0.5 bg-elegant-gold mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-8">
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
                    8793-5137
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
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-8">
              Solicitar asesoría
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="nombre" className="block text-gray-700 font-sans mb-2">
                  Nombre completo <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-elegant-gold ${
                    errors.nombre ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Ingrese su nombre completo"
                />
                {errors.nombre && (
                  <p className="text-red-500 text-sm mt-1">{errors.nombre}</p>
                )}
              </div>

              <div>
                <label htmlFor="empresa" className="block text-gray-700 font-sans mb-2">
                  Empresa
                </label>
                <input
                  type="text"
                  id="empresa"
                  name="empresa"
                  value={formData.empresa}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-elegant-gold"
                  placeholder="Nombre de su empresa"
                />
              </div>

              <div>
                <label htmlFor="cargo" className="block text-gray-700 font-sans mb-2">
                  Cargo
                </label>
                <input
                  type="text"
                  id="cargo"
                  name="cargo"
                  value={formData.cargo}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-elegant-gold"
                  placeholder="Su cargo en la empresa"
                />
              </div>

              <div>
                <label htmlFor="servicio" className="block text-gray-700 font-sans mb-2">
                  Servicio de interés <span className="text-red-500">*</span>
                </label>
                <select
                  id="servicio"
                  name="servicio"
                  value={formData.servicio}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-elegant-gold ${
                    errors.servicio ? 'border-red-500' : 'border-gray-300'
                  }`}
                >
                  <option value="">Seleccione un servicio</option>
                  {servicesList.map((service, index) => (
                    <option key={index} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
                {errors.servicio && (
                  <p className="text-red-500 text-sm mt-1">{errors.servicio}</p>
                )}
              </div>

              <div>
                <label htmlFor="telefono" className="block text-gray-700 font-sans mb-2">
                  Teléfono <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-elegant-gold ${
                    errors.telefono ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="8793-5137"
                />
                {errors.telefono && (
                  <p className="text-red-500 text-sm mt-1">{errors.telefono}</p>
                )}
              </div>

              <div>
                <label htmlFor="correo" className="block text-gray-700 font-sans mb-2">
                  Correo electrónico <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="correo"
                  name="correo"
                  value={formData.correo}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-elegant-gold ${
                    errors.correo ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="correo@ejemplo.com"
                />
                {errors.correo && (
                  <p className="text-red-500 text-sm mt-1">{errors.correo}</p>
                )}
              </div>

              <div>
                <label htmlFor="mensaje" className="block text-gray-700 font-sans mb-2">
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-elegant-gold resize-none"
                  placeholder="Cuéntenos sobre sus necesidades..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-elegant-gold text-corporate-dark-green px-8 py-4 font-serif font-semibold text-lg rounded hover:bg-light-gold transition-colors duration-300 shadow-lg"
              >
                SOLICITAR ASESORÍA PROFESIONAL
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
