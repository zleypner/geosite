'use client'

import { useState, useEffect } from 'react'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-corporate-dark-green shadow-lg' : 'bg-corporate-dark-green'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-elegant-gold font-serif text-xl md:text-2xl font-bold hover:opacity-80 transition-opacity"
            >
              HSGAC INTERNACIONAL
            </button>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-6 lg:space-x-8">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-elegant-gold font-serif text-sm lg:text-base hover:opacity-80 transition-opacity"
            >
              INICIO
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-elegant-gold font-serif text-sm lg:text-base hover:opacity-80 transition-opacity"
            >
              NOSOTROS
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-elegant-gold font-serif text-sm lg:text-base hover:opacity-80 transition-opacity"
            >
              SERVICIOS
            </button>
            <button
              onClick={() => scrollToSection('training')}
              className="text-elegant-gold font-serif text-sm lg:text-base hover:opacity-80 transition-opacity"
            >
              CAPACITACIONES
            </button>
            <button
              onClick={() => scrollToSection('principles')}
              className="text-elegant-gold font-serif text-sm lg:text-base hover:opacity-80 transition-opacity"
            >
              PRINCIPIOS
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-elegant-gold font-serif text-sm lg:text-base hover:opacity-80 transition-opacity"
            >
              CONTACTO
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              className="text-elegant-gold"
              aria-label="Menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
