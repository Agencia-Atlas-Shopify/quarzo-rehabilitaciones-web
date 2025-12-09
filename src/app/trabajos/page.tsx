'use client';

import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useState, useRef } from 'react';
import { ArrowLeft, X, ArrowUpRight } from 'lucide-react';

const trabajos = [
  {
    id: 1,
    title: "Rehabilitación Fachada SATE",
    category: "SATE",
    location: "Elche",
    year: "2024",
    img: "https://quarzorehabilitaciones.es/wp-content/uploads/2024/12/IMG_4136-scaled.webp"
  },
  {
    id: 2,
    title: "Restauración Edificio Histórico",
    category: "Patrimonio",
    location: "Alicante",
    year: "2024",
    img: "https://quarzorehabilitaciones.es/wp-content/uploads/2024/12/IMG_4123-scaled.webp"
  },
  {
    id: 3,
    title: "Trabajo Vertical Fachada",
    category: "Vertical",
    location: "Elche",
    year: "2023",
    img: "https://quarzorehabilitaciones.es/wp-content/uploads/2025/05/IMG_20230926_081639-scaled.jpg"
  },
  {
    id: 4,
    title: "Reforma Integral Fachada",
    category: "Rehabilitación",
    location: "Santa Pola",
    year: "2024",
    img: "https://quarzorehabilitaciones.es/wp-content/uploads/2024/12/IMG_4082-scaled.webp"
  },
  {
    id: 5,
    title: "Aislamiento Térmico Exterior",
    category: "SATE",
    location: "Crevillente",
    year: "2024",
    img: "https://quarzorehabilitaciones.es/wp-content/uploads/2025/05/20241023_100959906_iOS_0-scaled.jpeg"
  },
  {
    id: 6,
    title: "Pintura y Sellado Fachada",
    category: "Rehabilitación",
    location: "Elche",
    year: "2023",
    img: "https://quarzorehabilitaciones.es/wp-content/uploads/2024/12/IMG_4136-scaled.webp"
  },
  {
    id: 7,
    title: "Restauración Ornamentos",
    category: "Patrimonio",
    location: "Orihuela",
    year: "2023",
    img: "https://quarzorehabilitaciones.es/wp-content/uploads/2024/12/IMG_4123-scaled.webp"
  },
  {
    id: 8,
    title: "Limpieza Fachada en Altura",
    category: "Vertical",
    location: "Alicante",
    year: "2024",
    img: "https://quarzorehabilitaciones.es/wp-content/uploads/2025/05/IMG_20230926_081639-scaled.jpg"
  },
  {
    id: 9,
    title: "Impermeabilización Fachada",
    category: "Rehabilitación",
    location: "Novelda",
    year: "2023",
    img: "https://quarzorehabilitaciones.es/wp-content/uploads/2024/12/IMG_4082-scaled.webp"
  },
  {
    id: 10,
    title: "Sistema SATE Completo",
    category: "SATE",
    location: "Aspe",
    year: "2024",
    img: "https://quarzorehabilitaciones.es/wp-content/uploads/2025/05/20241023_100959906_iOS_0-scaled.jpeg"
  },
  {
    id: 11,
    title: "Reparación Grietas Estructurales",
    category: "Rehabilitación",
    location: "Elche",
    year: "2024",
    img: "https://quarzorehabilitaciones.es/wp-content/uploads/2024/12/IMG_4136-scaled.webp"
  },
  {
    id: 12,
    title: "Mantenimiento Edificio",
    category: "Vertical",
    location: "Santa Pola",
    year: "2023",
    img: "https://quarzorehabilitaciones.es/wp-content/uploads/2024/12/IMG_4123-scaled.webp"
  }
];

const categories = ["Todos", "SATE", "Rehabilitación", "Vertical", "Patrimonio"];

// Masonry-style grid sizes
const gridSizes = [
  'col-span-1 row-span-1',
  'col-span-1 row-span-2',
  'col-span-1 row-span-1',
  'col-span-2 row-span-1',
  'col-span-1 row-span-1',
  'col-span-1 row-span-2',
  'col-span-1 row-span-1',
  'col-span-1 row-span-1',
  'col-span-2 row-span-1',
  'col-span-1 row-span-1',
  'col-span-1 row-span-2',
  'col-span-1 row-span-1',
];

export default function TrabajosPage() {
  const [filter, setFilter] = useState("Todos");
  const [selectedWork, setSelectedWork] = useState<typeof trabajos[0] | null>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll();
  const headerBg = useTransform(scrollYProgress, [0, 0.1], ['rgba(230, 229, 225, 0)', 'rgba(230, 229, 225, 0.95)']);

  const filteredWorks = filter === "Todos"
    ? trabajos
    : trabajos.filter(t => t.category === filter);

  return (
    <div className="min-h-screen bg-[#141414]" ref={containerRef}>
      {/* Header */}
      <motion.header
        style={{ backgroundColor: headerBg }}
        className="fixed top-0 w-full z-50 px-6 md:px-12 py-6 flex justify-between items-center backdrop-blur-md mix-blend-difference"
      >
        <Link href="/" className="flex items-center gap-3 group text-[#E6E5E1]">
          <ArrowLeft size={20} className="group-hover:-translate-x-2 transition-transform duration-300" />
          <img src="/logo.svg" alt="Quarzo Rehabilitaciones" className="h-6 md:h-8 w-auto" />
        </Link>
        <Link
          href="/contacto"
          className="text-xs font-bold uppercase tracking-wider text-[#E6E5E1] hover:text-[#C4A484] transition-colors"
        >
          Contacto
        </Link>
      </motion.header>

      {/* Hero Full Screen */}
      <section className="h-screen relative flex items-center justify-center overflow-hidden">
        {/* Background image with parallax */}
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#141414]/60 via-[#141414]/40 to-[#141414] z-10" />
          <img
            src="https://quarzorehabilitaciones.es/wp-content/uploads/2024/12/IMG_4136-scaled.webp"
            alt="Portfolio"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Content */}
        <div className="relative z-20 text-center px-6">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="block text-[10px] uppercase tracking-[0.5em] text-[#C4A484] mb-6"
          >
            Portfolio / {trabajos.length} Proyectos
          </motion.span>

          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ delay: 0.5, duration: 1, ease: [0.76, 0, 0.24, 1] }}
              className="text-[15vw] md:text-[12vw] font-serif italic text-[#E6E5E1] leading-[0.85] tracking-tight"
            >
              Trabajos
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-8 text-lg md:text-xl text-[#E6E5E1]/60 max-w-xl mx-auto font-light"
          >
            Más de 30 años transformando fachadas en Elche, Alicante y toda la Costa Blanca
          </motion.p>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-6 h-10 border border-[#E6E5E1]/30 rounded-full flex justify-center pt-2"
            >
              <motion.div className="w-1 h-2 bg-[#E6E5E1]/50 rounded-full" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Filters - Sticky */}
      <section className="sticky top-0 z-40 bg-[#141414] border-b border-[#E6E5E1]/10">
        <div className="px-6 md:px-12 py-6">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <motion.button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-5 py-2 text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                    filter === cat
                      ? 'bg-[#E6E5E1] text-[#141414]'
                      : 'text-[#E6E5E1]/60 hover:text-[#E6E5E1] border border-[#E6E5E1]/20 hover:border-[#E6E5E1]/60'
                  }`}
                >
                  {cat}
                </motion.button>
              ))}
            </div>
            <span className="text-xs text-[#E6E5E1]/40 uppercase tracking-wider">
              {filteredWorks.length} proyecto{filteredWorks.length !== 1 ? 's' : ''}
            </span>
          </div>
        </div>
      </section>

      {/* Masonry Grid */}
      <section className="px-4 md:px-8 py-8">
        <motion.div
          layout
          className="max-w-[1800px] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[250px] md:auto-rows-[300px] gap-3 md:gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredWorks.map((work, i) => (
              <motion.div
                key={work.id}
                layout
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.05,
                  layout: { duration: 0.4 }
                }}
                onClick={() => setSelectedWork(work)}
                onMouseEnter={() => setHoveredId(work.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`group relative overflow-hidden cursor-pointer ${gridSizes[i % gridSizes.length]}`}
              >
                {/* Image */}
                <motion.img
                  src={work.img}
                  alt={work.title}
                  className="w-full h-full object-cover"
                  animate={{
                    scale: hoveredId === work.id ? 1.1 : 1,
                    filter: hoveredId !== null && hoveredId !== work.id ? 'grayscale(100%)' : 'grayscale(0%)'
                  }}
                  transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
                />

                {/* Overlay gradient */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/20 to-transparent"
                  initial={{ opacity: 0.3 }}
                  animate={{ opacity: hoveredId === work.id ? 0.9 : 0.3 }}
                  transition={{ duration: 0.4 }}
                />

                {/* Content - Always visible */}
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{
                      y: hoveredId === work.id ? 0 : 10,
                      opacity: hoveredId === work.id ? 1 : 0.7
                    }}
                    transition={{ duration: 0.4 }}
                  >
                    <span className="text-[10px] uppercase tracking-wider text-[#C4A484] mb-1 block">
                      {work.category} — {work.year}
                    </span>
                    <h3 className="text-lg md:text-xl font-bold text-[#E6E5E1] leading-tight">
                      {work.title}
                    </h3>
                    <span className="text-sm text-[#E6E5E1]/50 mt-1 block">{work.location}</span>
                  </motion.div>
                </div>

                {/* Hover icon */}
                <motion.div
                  className="absolute top-4 right-4 w-10 h-10 bg-[#E6E5E1] flex items-center justify-center"
                  initial={{ scale: 0, rotate: -45 }}
                  animate={{
                    scale: hoveredId === work.id ? 1 : 0,
                    rotate: hoveredId === work.id ? 0 : -45
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <ArrowUpRight size={20} className="text-[#141414]" />
                </motion.div>

                {/* Border effect */}
                <motion.div
                  className="absolute inset-0 border-2 border-[#C4A484] pointer-events-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredId === work.id ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedWork && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-[#141414]/98 flex items-center justify-center"
            onClick={() => setSelectedWork(null)}
          >
            {/* Close button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              className="absolute top-6 right-6 w-12 h-12 bg-[#E6E5E1] flex items-center justify-center hover:bg-[#C4A484] transition-colors z-10"
              onClick={() => setSelectedWork(null)}
            >
              <X size={24} className="text-[#141414]" />
            </motion.button>

            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: "spring", damping: 25 }}
              className="max-w-6xl w-full mx-6 flex flex-col md:flex-row gap-8 items-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image */}
              <div className="flex-1 relative">
                <img
                  src={selectedWork.img}
                  alt={selectedWork.title}
                  className="w-full h-auto max-h-[80vh] object-contain"
                />
              </div>

              {/* Info */}
              <div className="md:w-80 text-[#E6E5E1]">
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#C4A484] block mb-4">
                  {selectedWork.category}
                </span>
                <h2 className="text-4xl font-bold mb-4 leading-tight">{selectedWork.title}</h2>
                <div className="space-y-3 text-sm opacity-60 border-t border-[#E6E5E1]/20 pt-4">
                  <div className="flex justify-between">
                    <span>Ubicación</span>
                    <span className="text-[#E6E5E1]">{selectedWork.location}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Año</span>
                    <span className="text-[#E6E5E1]">{selectedWork.year}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tipo</span>
                    <span className="text-[#E6E5E1]">{selectedWork.category}</span>
                  </div>
                </div>
                <Link
                  href="/contacto"
                  className="inline-block mt-8 bg-[#E6E5E1] text-[#141414] px-6 py-3 text-sm font-bold uppercase tracking-wider hover:bg-[#C4A484] transition-colors"
                >
                  Proyecto Similar
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="relative py-40 px-6 md:px-12 overflow-hidden">
        <div className="absolute inset-0 bg-[#E6E5E1]" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="block text-[10px] uppercase tracking-[0.3em] text-[#C4A484] mb-6"
          >
            ¿Te gusta lo que ves?
          </motion.span>

          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
              className="text-5xl md:text-7xl font-bold text-[#141414] leading-[0.9]"
            >
              Hablemos de tu
              <br />
              <span className="font-serif italic font-light">proyecto</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <p className="mt-8 text-xl text-[#141414]/60 max-w-xl mx-auto mb-10">
              Cada fachada es única. Cuéntanos tu idea y la haremos realidad.
            </p>
            <Link
              href="/contacto"
              className="inline-flex items-center gap-3 bg-[#141414] text-[#E6E5E1] px-10 py-5 font-bold uppercase tracking-wider hover:bg-[#C4A484] hover:text-[#141414] transition-all group"
            >
              Solicitar Presupuesto
              <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#141414] border-t border-[#E6E5E1]/10 py-10 px-6 md:px-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <img src="/logo.svg" alt="Quarzo" className="h-8" />
          <div className="flex gap-8 text-sm text-[#E6E5E1]/60">
            <Link href="/" className="hover:text-[#E6E5E1] transition-colors">Inicio</Link>
            <Link href="/trabajos" className="text-[#E6E5E1]">Trabajos</Link>
            <Link href="/contacto" className="hover:text-[#E6E5E1] transition-colors">Contacto</Link>
          </div>
          <span className="text-xs text-[#E6E5E1]/40">© Quarzo 2025</span>
        </div>
      </footer>
    </div>
  );
}
