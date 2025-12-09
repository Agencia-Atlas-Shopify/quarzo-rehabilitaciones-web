'use client';

import { Metadata } from 'next';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

export default function ContactoPage() {
  const [formState, setFormState] = useState({
    nombre: '',
    email: '',
    telefono: '',
    servicio: '',
    mensaje: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would handle form submission
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="bg-[#E6E5E1] min-h-screen text-[#141414]">
      <style>{`
        .font-sans { font-family: 'Futura', 'Helvetica Neue', sans-serif; }
        .font-serif { font-family: 'Futura', 'Helvetica Neue', sans-serif; }
      `}</style>

      {/* Header */}
      <header className="fixed top-0 w-full z-50 px-6 md:px-12 py-6 flex justify-between items-center bg-[#E6E5E1]/90 backdrop-blur-sm">
        <Link href="/" className="flex items-center gap-2 text-[#141414] hover:opacity-70 transition-opacity">
          <ArrowLeft size={20} />
          <span className="text-sm font-bold uppercase tracking-wider">Volver</span>
        </Link>
        <Link href="/" className="text-2xl font-bold tracking-tighter uppercase">Quarzo.</Link>
        <div className="hidden md:block w-20" />
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#C4A484] text-sm font-bold uppercase tracking-[0.2em] mb-4 block"
          >
            Contacto
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-tight mb-6"
          >
            Solicita tu<br />
            <span className="text-[#C4A484]">Presupuesto Gratis</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl opacity-70 max-w-2xl leading-relaxed"
          >
            Contacta con nosotros para una evaluación sin compromiso de tu proyecto de rehabilitación.
            Respondemos en menos de 24 horas.
          </motion.p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="pb-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            {isSubmitted ? (
              <div className="bg-[#141414] text-[#E6E5E1] p-12 flex flex-col items-center justify-center text-center h-full">
                <CheckCircle size={64} className="text-[#C4A484] mb-6" />
                <h2 className="text-3xl font-bold mb-4">¡Mensaje Enviado!</h2>
                <p className="text-lg opacity-70 mb-8">
                  Gracias por contactar con Quarzo Rehabilitaciones.
                  Te responderemos en menos de 24 horas.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="border border-[#E6E5E1] px-8 py-4 font-bold uppercase tracking-wider hover:bg-[#E6E5E1] hover:text-[#141414] transition-colors"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="nombre" className="block text-sm font-bold uppercase tracking-wider mb-2">
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    required
                    value={formState.nombre}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b-2 border-[#141414]/20 py-4 focus:border-[#C4A484] outline-none transition-colors text-lg"
                    placeholder="Tu nombre"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-bold uppercase tracking-wider mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formState.email}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b-2 border-[#141414]/20 py-4 focus:border-[#C4A484] outline-none transition-colors text-lg"
                      placeholder="tu@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="telefono" className="block text-sm font-bold uppercase tracking-wider mb-2">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      id="telefono"
                      name="telefono"
                      value={formState.telefono}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b-2 border-[#141414]/20 py-4 focus:border-[#C4A484] outline-none transition-colors text-lg"
                      placeholder="+34 600 000 000"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="servicio" className="block text-sm font-bold uppercase tracking-wider mb-2">
                    Servicio de interés
                  </label>
                  <select
                    id="servicio"
                    name="servicio"
                    value={formState.servicio}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b-2 border-[#141414]/20 py-4 focus:border-[#C4A484] outline-none transition-colors text-lg cursor-pointer"
                  >
                    <option value="">Selecciona un servicio</option>
                    <option value="sate">Sistema SATE - Aislamiento Térmico</option>
                    <option value="trabajos-verticales">Trabajos Verticales</option>
                    <option value="rehabilitacion-fachadas">Rehabilitación de Fachadas</option>
                    <option value="restauracion-patrimonio">Restauración de Patrimonio</option>
                    <option value="otro">Otro servicio</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="mensaje" className="block text-sm font-bold uppercase tracking-wider mb-2">
                    Mensaje *
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    required
                    rows={5}
                    value={formState.mensaje}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b-2 border-[#141414]/20 py-4 focus:border-[#C4A484] outline-none transition-colors text-lg resize-none"
                    placeholder="Cuéntanos sobre tu proyecto..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#141414] text-[#E6E5E1] px-8 py-5 font-bold uppercase tracking-wider hover:bg-[#C4A484] hover:text-[#141414] transition-colors flex items-center justify-center gap-3"
                >
                  <Send size={18} />
                  Enviar Solicitud
                </button>

                <p className="text-sm opacity-50 text-center">
                  Al enviar este formulario, aceptas nuestra política de privacidad.
                </p>
              </form>
            )}
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-10"
          >
            <div>
              <h2 className="text-2xl font-bold mb-6">Información de Contacto</h2>
              <div className="space-y-6">
                <a href="tel:+34697109583" className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-[#141414] flex items-center justify-center group-hover:bg-[#C4A484] transition-colors">
                    <Phone size={20} className="text-[#E6E5E1]" />
                  </div>
                  <div>
                    <span className="block text-sm font-bold uppercase tracking-wider opacity-50 mb-1">Teléfono</span>
                    <span className="text-xl font-bold group-hover:text-[#C4A484] transition-colors">697 10 95 83</span>
                  </div>
                </a>

                <a href="mailto:joseantonio@quarzorehabilitaciones.es" className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-[#141414] flex items-center justify-center group-hover:bg-[#C4A484] transition-colors">
                    <Mail size={20} className="text-[#E6E5E1]" />
                  </div>
                  <div>
                    <span className="block text-sm font-bold uppercase tracking-wider opacity-50 mb-1">Email</span>
                    <span className="text-xl font-bold group-hover:text-[#C4A484] transition-colors">joseantonio@quarzorehabilitaciones.es</span>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#141414] flex items-center justify-center">
                    <MapPin size={20} className="text-[#E6E5E1]" />
                  </div>
                  <div>
                    <span className="block text-sm font-bold uppercase tracking-wider opacity-50 mb-1">Dirección</span>
                    <span className="text-xl font-bold">Carrer Inca, 40</span>
                    <span className="block opacity-70">03206 Elx, Alicante</span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#141414] flex items-center justify-center">
                    <Clock size={20} className="text-[#E6E5E1]" />
                  </div>
                  <div>
                    <span className="block text-sm font-bold uppercase tracking-wider opacity-50 mb-1">Horario</span>
                    <span className="text-xl font-bold">Lunes a Viernes</span>
                    <span className="block opacity-70">8:00 - 18:00</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Areas */}
            <div className="bg-[#141414] text-[#E6E5E1] p-8">
              <h3 className="text-lg font-bold mb-4">Zona de Trabajo</h3>
              <p className="opacity-70 mb-4">
                Realizamos proyectos de rehabilitación en toda la provincia de Alicante y zonas limítrofes:
              </p>
              <div className="flex flex-wrap gap-2">
                {['Elche', 'Alicante', 'Santa Pola', 'Crevillente', 'Novelda', 'Aspe', 'Orihuela', 'Torrevieja', 'Benidorm', 'Costa Blanca'].map((city) => (
                  <span key={city} className="px-3 py-1 border border-[#E6E5E1]/20 text-sm">
                    {city}
                  </span>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold mb-4">Nuestros Servicios</h3>
              <div className="grid grid-cols-2 gap-3">
                <Link href="/servicios/sate" className="p-4 border border-[#141414]/10 hover:bg-[#141414] hover:text-[#E6E5E1] transition-colors">
                  <span className="text-xs text-[#C4A484] block mb-1">01</span>
                  <span className="font-bold">Sistema SATE</span>
                </Link>
                <Link href="/servicios/trabajos-verticales" className="p-4 border border-[#141414]/10 hover:bg-[#141414] hover:text-[#E6E5E1] transition-colors">
                  <span className="text-xs text-[#C4A484] block mb-1">02</span>
                  <span className="font-bold">Trabajos Verticales</span>
                </Link>
                <Link href="/servicios/rehabilitacion-fachadas" className="p-4 border border-[#141414]/10 hover:bg-[#141414] hover:text-[#E6E5E1] transition-colors">
                  <span className="text-xs text-[#C4A484] block mb-1">03</span>
                  <span className="font-bold">Rehabilitación Fachadas</span>
                </Link>
                <Link href="/servicios/restauracion-patrimonio" className="p-4 border border-[#141414]/10 hover:bg-[#141414] hover:text-[#E6E5E1] transition-colors">
                  <span className="text-xs text-[#C4A484] block mb-1">04</span>
                  <span className="font-bold">Restauración Patrimonio</span>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[400px] bg-[#141414] relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3128.8393557893!2d-0.7088889!3d38.2623889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd63b7f3e3e3e3e3%3A0x3e3e3e3e3e3e3e3e!2sC%2F%20Severo%20Ochoa%2022%2C%2003203%20Elche%2C%20Alicante!5e0!3m2!1ses!2ses!4v1234567890"
          width="100%"
          height="100%"
          style={{ border: 0, filter: 'grayscale(100%) contrast(1.2)' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Ubicación de Quarzo Rehabilitaciones en Elche"
        />
        <div className="absolute bottom-6 left-6 bg-[#E6E5E1] p-6">
          <h3 className="font-bold text-lg mb-2">Quarzo Rehabilitaciones</h3>
          <p className="text-sm opacity-70">Carrer Inca, 40, 03206 Elx</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#141414] text-[#E6E5E1] py-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10">
          <div>
            <h3 className="text-2xl font-bold mb-4">Quarzo.</h3>
            <p className="text-sm opacity-60">
              Especialistas en rehabilitación de edificios en Elche y toda la provincia de Alicante.
            </p>
          </div>
          <div>
            <h4 className="font-bold uppercase text-sm tracking-wider mb-4 text-[#C4A484]">Servicios</h4>
            <ul className="space-y-2 text-sm opacity-70">
              <li><Link href="/servicios/sate" className="hover:opacity-100">SATE</Link></li>
              <li><Link href="/servicios/trabajos-verticales" className="hover:opacity-100">Trabajos Verticales</Link></li>
              <li><Link href="/servicios/rehabilitacion-fachadas" className="hover:opacity-100">Rehabilitación Fachadas</Link></li>
              <li><Link href="/servicios/restauracion-patrimonio" className="hover:opacity-100">Restauración Patrimonio</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold uppercase text-sm tracking-wider mb-4 text-[#C4A484]">Contacto</h4>
            <ul className="space-y-2 text-sm opacity-70">
              <li>697 10 95 83</li>
              <li>joseantonio@quarzorehabilitaciones.es</li>
              <li>Carrer Inca, 40, 03206 Elx</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold uppercase text-sm tracking-wider mb-4 text-[#C4A484]">Zona de Trabajo</h4>
            <p className="text-sm opacity-70">
              Elche, Alicante, Santa Pola, Crevillente, Novelda, Aspe, Orihuela y toda la Costa Blanca.
            </p>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-white/10 text-sm opacity-40 flex justify-between">
          <span>© Quarzo Rehabilitaciones 2025</span>
          <span>Diseñado con precisión</span>
        </div>
      </footer>

      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'Quarzo Rehabilitaciones',
            description: 'Empresa especializada en rehabilitación de fachadas, SATE, trabajos verticales y restauración de patrimonio en Elche y Alicante.',
            image: 'https://quarzorehabilitaciones.es/wp-content/uploads/2024/12/IMG_4136-scaled.webp',
            '@id': 'https://quarzorehabilitaciones.es',
            url: 'https://quarzorehabilitaciones.es',
            telephone: '+34697109583',
            email: 'joseantonio@quarzorehabilitaciones.es',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Carrer Inca, 40',
              addressLocality: 'Elx',
              addressRegion: 'Alicante',
              postalCode: '03206',
              addressCountry: 'ES'
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: 38.2623889,
              longitude: -0.7088889
            },
            openingHoursSpecification: {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
              opens: '08:00',
              closes: '18:00'
            },
            areaServed: ['Elche', 'Alicante', 'Santa Pola', 'Crevillente', 'Novelda', 'Aspe', 'Orihuela', 'Torrevieja', 'Benidorm', 'Costa Blanca'],
            priceRange: '€€',
            sameAs: [
              'https://www.instagram.com/quarzorehabilitaciones',
              'https://www.linkedin.com/company/quarzorehabilitaciones'
            ]
          })
        }}
      />
    </div>
  );
}
