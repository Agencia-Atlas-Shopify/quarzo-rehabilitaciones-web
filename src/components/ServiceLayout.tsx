'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Phone, Mail, MapPin, CreditCard, CheckCircle } from 'lucide-react';

interface ServiceLayoutProps {
  title: string;
  subtitle: string;
  description: string;
  heroImage: string;
  benefits: string[];
  process: { step: string; title: string; description: string }[];
  gallery: string[];
  faqs: { question: string; answer: string }[];
  relatedServices: { name: string; href: string }[];
  children?: React.ReactNode;
}

export default function ServiceLayout({
  title,
  subtitle,
  description,
  heroImage,
  benefits,
  process,
  gallery,
  faqs,
  relatedServices,
  children
}: ServiceLayoutProps) {
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
        <Link href="/contacto" className="hidden md:block text-sm font-bold uppercase tracking-wider hover:opacity-70 transition-opacity">
          Contacto
        </Link>
      </header>

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-end">
        <div className="absolute inset-0">
          <img src={heroImage} alt={title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#141414]/80 via-[#141414]/30 to-transparent" />
        </div>
        <div className="relative z-10 p-6 md:p-12 pb-16 max-w-4xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#C4A484] text-sm font-bold uppercase tracking-[0.2em] mb-4 block"
          >
            {subtitle}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[0.95] tracking-tight mb-6"
          >
            {title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed"
          >
            {description}
          </motion.p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6 md:px-12 bg-[#E6E5E1]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 tracking-tight">
            ¿Por qué elegir nuestro servicio?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-4"
              >
                <span className="text-[#C4A484] text-2xl font-bold">0{i + 1}</span>
                <p className="text-lg leading-relaxed">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Financing Highlight Section */}
      <section className="bg-gradient-to-r from-[#C4A484] to-[#a88b6b] overflow-hidden">
        {/* Marquee infinito */}
        <div className="bg-[#141414] py-2 overflow-hidden">
          <div className="animate-marquee">
            {[...Array(2)].map((_, setIndex) => (
              <div key={setIndex} className="flex shrink-0">
                {[...Array(6)].map((_, i) => (
                  <span key={i} className="mx-8 text-sm font-medium text-[#C4A484] uppercase tracking-wider whitespace-nowrap">
                    Financiación propia sin intereses* · Hasta 36 meses · Sin bancos · 0% interés ·
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="py-12 px-6 md:px-12">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12"
            >
              <div className="flex items-center gap-4">
                <div className="bg-[#141414] p-4 rounded-full">
                  <CreditCard className="w-8 h-8 text-[#C4A484]" />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#141414]">
                    Financiación Propia*
                  </h3>
                  <p className="text-lg text-[#141414]/80 font-medium">
                    Sin intereses · Sin bancos
                  </p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 text-[#141414]">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-medium">Hasta 36 meses</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-medium">0% interés</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-medium">Sin comisiones</span>
                </div>
              </div>
              <Link
                href="/contacto"
                className="bg-[#141414] text-[#E6E5E1] px-6 py-3 font-bold uppercase tracking-wider text-sm hover:bg-[#141414]/80 transition-colors whitespace-nowrap"
              >
                Consulta Condiciones
              </Link>
            </motion.div>
            <p className="text-center text-sm text-[#141414]/60 mt-6">
              *Sujeto a valoración de cada proyecto individual
            </p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-6 md:px-12 bg-[#141414] text-[#E6E5E1]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
            Nuestro Proceso de Trabajo
          </h2>
          <p className="text-lg opacity-60 mb-16 max-w-2xl">
            Un enfoque metódico y profesional para garantizar resultados excepcionales en cada proyecto.
          </p>
          <div className="space-y-12">
            {process.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-8 items-start border-t border-white/10 pt-8"
              >
                <span className="text-[#C4A484] text-sm font-mono">{item.step}</span>
                <div>
                  <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                  <p className="text-lg opacity-70 max-w-xl">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-6 md:px-12 bg-[#E6E5E1]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 tracking-tight">
            Proyectos Realizados
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {gallery.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="aspect-[4/3] overflow-hidden"
              >
                <img
                  src={img}
                  alt={`Proyecto ${title} ${i + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 px-6 md:px-12 bg-[#1a1a1e] text-[#E6E5E1]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 tracking-tight">
            Preguntas Frecuentes
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <motion.details
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="group border-b border-white/10 pb-6"
              >
                <summary className="text-xl font-bold cursor-pointer list-none flex justify-between items-center">
                  {faq.question}
                  <span className="text-[#C4A484] group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-4 text-lg opacity-70 leading-relaxed">{faq.answer}</p>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 px-6 md:px-12 bg-[#E6E5E1]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 tracking-tight">
            Otros Servicios
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedServices.map((service, i) => (
              <Link
                key={i}
                href={service.href}
                className="group p-8 border border-[#141414]/10 hover:bg-[#141414] hover:text-[#E6E5E1] transition-all duration-500"
              >
                <span className="text-sm text-[#C4A484] font-mono mb-4 block">0{i + 1}</span>
                <h3 className="text-2xl font-bold group-hover:translate-x-2 transition-transform">
                  {service.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 md:px-12 bg-[#C4A484]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#141414]">
            ¿Necesitas un presupuesto?
          </h2>
          <p className="text-xl mb-10 text-[#141414]/70">
            Contacta con nosotros para una evaluación gratuita de tu proyecto
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+34697109583"
              className="inline-flex items-center justify-center gap-2 bg-[#141414] text-[#E6E5E1] px-8 py-4 font-bold uppercase tracking-wider hover:bg-[#141414]/80 transition-colors"
            >
              <Phone size={18} />
              Llamar Ahora
            </a>
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center gap-2 border-2 border-[#141414] text-[#141414] px-8 py-4 font-bold uppercase tracking-wider hover:bg-[#141414] hover:text-[#E6E5E1] transition-colors"
            >
              <Mail size={18} />
              Solicitar Presupuesto
            </Link>
          </div>
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
        <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-white/10 text-sm opacity-40 flex flex-col md:flex-row justify-between items-center gap-4">
          <span>© Quarzo Rehabilitaciones 2025</span>
          <div className="flex items-center gap-3">
            <span className="text-xs">Financiado por</span>
            <img src="/images/next-generation-eu.png" alt="Next Generation EU" className="h-8 w-auto opacity-80" />
          </div>
          <a href="https://theatlas.es" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity">
            Creado por Atlas Agencia E-Commerce
          </a>
        </div>
      </footer>

      {children}
    </div>
  );
}
