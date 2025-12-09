'use client';

import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { ArrowLeft, X, ArrowUpRight } from 'lucide-react';

const trabajos = [
  {
    id: 1,
    title: "Rehabilitación Fachada SATE",
    category: "SATE",
    location: "Elche",
    year: "2024",
    img: "https://quarzorehabilitaciones.es/wp-content/uploads/2024/12/IMG_4136-scaled.webp",
    height: 'tall'
  },
  {
    id: 2,
    title: "Restauración Edificio Histórico",
    category: "Patrimonio",
    location: "Alicante",
    year: "2024",
    img: "https://quarzorehabilitaciones.es/wp-content/uploads/2024/12/IMG_4123-scaled.webp",
    height: 'medium'
  },
  {
    id: 3,
    title: "Trabajo Vertical Fachada",
    category: "Vertical",
    location: "Elche",
    year: "2023",
    img: "https://quarzorehabilitaciones.es/wp-content/uploads/2025/05/IMG_20230926_081639-scaled.jpg",
    height: 'short'
  },
  {
    id: 4,
    title: "Reforma Integral Fachada",
    category: "Rehabilitación",
    location: "Santa Pola",
    year: "2024",
    img: "https://quarzorehabilitaciones.es/wp-content/uploads/2024/12/IMG_4082-scaled.webp",
    height: 'medium'
  },
  {
    id: 5,
    title: "Aislamiento Térmico Exterior",
    category: "SATE",
    location: "Crevillente",
    year: "2024",
    img: "https://quarzorehabilitaciones.es/wp-content/uploads/2025/05/20241023_100959906_iOS_0-scaled.jpeg",
    height: 'tall'
  },
  {
    id: 6,
    title: "Pintura y Sellado Fachada",
    category: "Rehabilitación",
    location: "Elche",
    year: "2023",
    img: "https://quarzorehabilitaciones.es/wp-content/uploads/2024/12/IMG_4136-scaled.webp",
    height: 'short'
  },
  {
    id: 7,
    title: "Restauración Ornamentos",
    category: "Patrimonio",
    location: "Orihuela",
    year: "2023",
    img: "https://quarzorehabilitaciones.es/wp-content/uploads/2024/12/IMG_4123-scaled.webp",
    height: 'medium'
  },
  {
    id: 8,
    title: "Limpieza Fachada en Altura",
    category: "Vertical",
    location: "Alicante",
    year: "2024",
    img: "https://quarzorehabilitaciones.es/wp-content/uploads/2025/05/IMG_20230926_081639-scaled.jpg",
    height: 'tall'
  },
  {
    id: 9,
    title: "Impermeabilización Fachada",
    category: "Rehabilitación",
    location: "Novelda",
    year: "2023",
    img: "https://quarzorehabilitaciones.es/wp-content/uploads/2024/12/IMG_4082-scaled.webp",
    height: 'short'
  },
  {
    id: 10,
    title: "Sistema SATE Completo",
    category: "SATE",
    location: "Aspe",
    year: "2024",
    img: "https://quarzorehabilitaciones.es/wp-content/uploads/2025/05/20241023_100959906_iOS_0-scaled.jpeg",
    height: 'medium'
  },
  {
    id: 11,
    title: "Reparación Grietas Estructurales",
    category: "Rehabilitación",
    location: "Elche",
    year: "2024",
    img: "https://quarzorehabilitaciones.es/wp-content/uploads/2024/12/IMG_4136-scaled.webp",
    height: 'tall'
  },
  {
    id: 12,
    title: "Mantenimiento Edificio",
    category: "Vertical",
    location: "Santa Pola",
    year: "2023",
    img: "https://quarzorehabilitaciones.es/wp-content/uploads/2024/12/IMG_4123-scaled.webp",
    height: 'medium'
  }
];

const categories = ["Todos", "SATE", "Rehabilitación", "Vertical", "Patrimonio"];

// Height classes for masonry effect
const heightClasses: Record<string, string> = {
  tall: 'h-[500px] md:h-[600px]',
  medium: 'h-[350px] md:h-[450px]',
  short: 'h-[280px] md:h-[350px]'
};

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

  // Split into columns for masonry
  const getColumns = (items: typeof trabajos, numCols: number) => {
    const columns: (typeof trabajos)[] = Array.from({ length: numCols }, () => []);
    items.forEach((item, i) => {
      columns[i % numCols].push(item);
    });
    return columns;
  };

  const [numCols, setNumCols] = useState(3);

  useEffect(() => {
    const updateCols = () => {
      if (window.innerWidth < 640) setNumCols(1);
      else if (window.innerWidth < 1024) setNumCols(2);
      else setNumCols(3);
    };
    updateCols();
    window.addEventListener('resize', updateCols);
    return () => window.removeEventListener('resize', updateCols);
  }, []);

  const columns = getColumns(filteredWorks, numCols);

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

      {/* True Masonry Grid */}
      <section className="px-4 md:px-8 py-12">
        <div className="max-w-[1600px] mx-auto">
          <motion.div layout className="flex gap-4 md:gap-6">
            <AnimatePresence mode="popLayout">
              {columns.map((column, colIndex) => (
                <div key={colIndex} className="flex-1 flex flex-col gap-4 md:gap-6">
                  {column.map((work, i) => (
                    <motion.div
                      key={work.id}
                      layout
                      initial={{ opacity: 0, y: 100, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{
                        duration: 0.7,
                        delay: (colIndex * 0.1) + (i * 0.1),
                        ease: [0.76, 0, 0.24, 1]
                      }}
                      onClick={() => setSelectedWork(work)}
                      onMouseEnter={() => setHoveredId(work.id)}
                      onMouseLeave={() => setHoveredId(null)}
                      className={`group relative overflow-hidden cursor-pointer ${heightClasses[work.height]}`}
                    >
                      {/* Image with clip-path reveal */}
                      <motion.div
                        className="absolute inset-0"
                        initial={{ clipPath: 'inset(100% 0 0 0)' }}
                        animate={{ clipPath: 'inset(0% 0 0 0)' }}
                        transition={{ duration: 1, delay: (colIndex * 0.1) + (i * 0.15), ease: [0.76, 0, 0.24, 1] }}
                      >
                        <motion.img
                          src={work.img}
                          alt={work.title}
                          className="w-full h-full object-cover"
                          animate={{
                            scale: hoveredId === work.id ? 1.15 : 1,
                            filter: hoveredId !== null && hoveredId !== work.id ? 'grayscale(100%) brightness(0.5)' : 'grayscale(0%) brightness(1)'
                          }}
                          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                        />
                      </motion.div>

                      {/* Overlay gradient - always visible but stronger on hover */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/30 to-transparent"
                        animate={{ opacity: hoveredId === work.id ? 1 : 0.6 }}
                        transition={{ duration: 0.4 }}
                      />

                      {/* Content */}
                      <div className="absolute inset-0 p-6 flex flex-col justify-end">
                        {/* Category tag */}
                        <motion.span
                          className="absolute top-4 left-4 bg-[#C4A484] text-[#141414] px-3 py-1 text-[10px] font-bold uppercase tracking-wider"
                          initial={{ x: -50, opacity: 0 }}
                          animate={{
                            x: hoveredId === work.id ? 0 : -10,
                            opacity: hoveredId === work.id ? 1 : 0.7
                          }}
                          transition={{ duration: 0.4 }}
                        >
                          {work.category}
                        </motion.span>

                        {/* Year */}
                        <motion.span
                          className="absolute top-4 right-4 text-[#E6E5E1]/60 text-xs font-mono"
                          animate={{ opacity: hoveredId === work.id ? 1 : 0.5 }}
                        >
                          {work.year}
                        </motion.span>

                        {/* Title and location */}
                        <motion.div
                          animate={{
                            y: hoveredId === work.id ? 0 : 20,
                            opacity: hoveredId === work.id ? 1 : 0.8
                          }}
                          transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
                        >
                          <h3 className="text-2xl md:text-3xl font-bold text-[#E6E5E1] leading-tight mb-2">
                            {work.title}
                          </h3>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-[#E6E5E1]/60">{work.location}</span>
                            <motion.div
                              className="flex items-center gap-2 text-[#C4A484] text-sm font-bold uppercase tracking-wider"
                              initial={{ x: -20, opacity: 0 }}
                              animate={{
                                x: hoveredId === work.id ? 0 : -20,
                                opacity: hoveredId === work.id ? 1 : 0
                              }}
                              transition={{ duration: 0.3 }}
                            >
                              Ver proyecto
                              <ArrowUpRight size={16} />
                            </motion.div>
                          </div>
                        </motion.div>
                      </div>

                      {/* Border effect on hover */}
                      <motion.div
                        className="absolute inset-0 pointer-events-none"
                        initial={{ opacity: 0 }}
                        animate={{
                          opacity: hoveredId === work.id ? 1 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                        style={{
                          boxShadow: 'inset 0 0 0 3px #C4A484'
                        }}
                      />

                      {/* Corner accents */}
                      <motion.div
                        className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#C4A484]"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{
                          scale: hoveredId === work.id ? 1 : 0,
                          opacity: hoveredId === work.id ? 1 : 0
                        }}
                        transition={{ duration: 0.3 }}
                      />
                      <motion.div
                        className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#C4A484]"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{
                          scale: hoveredId === work.id ? 1 : 0,
                          opacity: hoveredId === work.id ? 1 : 0
                        }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                      />
                    </motion.div>
                  ))}
                </div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedWork && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-[#141414] flex items-center justify-center p-4 md:p-8"
            onClick={() => setSelectedWork(null)}
          >
            {/* Close button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.5, rotate: -90 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.5, rotate: 90 }}
              transition={{ duration: 0.3 }}
              className="absolute top-4 right-4 md:top-6 md:right-6 w-12 h-12 md:w-14 md:h-14 bg-[#E6E5E1] flex items-center justify-center hover:bg-[#C4A484] transition-colors z-20"
              onClick={() => setSelectedWork(null)}
            >
              <X size={24} className="text-[#141414]" />
            </motion.button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 50 }}
              transition={{ type: "spring", damping: 25, stiffness: 120 }}
              className="max-w-6xl w-full flex flex-col md:flex-row gap-6 md:gap-8 items-center bg-[#141414] max-h-[90vh] overflow-y-auto p-4 md:p-0"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image */}
              <motion.div
                className="flex-1 relative overflow-hidden bg-[#1a1a1e] w-full"
                initial={{ clipPath: 'inset(0 100% 0 0)' }}
                animate={{ clipPath: 'inset(0 0% 0 0)' }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
              >
                <img
                  src={selectedWork.img}
                  alt={selectedWork.title}
                  className="w-full h-auto max-h-[50vh] md:max-h-[75vh] object-contain"
                />
              </motion.div>

              {/* Info */}
              <motion.div
                className="w-full md:w-96 text-[#E6E5E1] flex-shrink-0"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <span className="inline-block bg-[#C4A484] text-[#141414] px-4 py-1 text-xs font-bold uppercase tracking-wider mb-4 md:mb-6">
                  {selectedWork.category}
                </span>
                <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight">{selectedWork.title}</h2>

                <div className="space-y-3 md:space-y-4 text-sm border-t border-[#E6E5E1]/20 pt-4 md:pt-6 mb-6 md:mb-8">
                  <div className="flex justify-between items-center">
                    <span className="opacity-50 uppercase tracking-wider text-xs">Ubicación</span>
                    <span className="font-bold">{selectedWork.location}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="opacity-50 uppercase tracking-wider text-xs">Año</span>
                    <span className="font-bold">{selectedWork.year}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="opacity-50 uppercase tracking-wider text-xs">Servicio</span>
                    <span className="font-bold">{selectedWork.category}</span>
                  </div>
                </div>

                <Link
                  href="/contacto"
                  className="inline-flex items-center gap-3 bg-[#E6E5E1] text-[#141414] px-6 md:px-8 py-3 md:py-4 font-bold uppercase tracking-wider hover:bg-[#C4A484] transition-all group w-full justify-center text-sm md:text-base"
                >
                  Solicitar Proyecto Similar
                  <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Link>
              </motion.div>
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
          <img src="/images/kit-digital-next-generation.png" alt="Kit Digital - Financiado por la Unión Europea Next Generation EU" className="h-10 w-auto" />
        </div>
        <div className="max-w-6xl mx-auto mt-6 pt-6 border-t border-[#E6E5E1]/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#E6E5E1]/40">
          <span>© Quarzo Rehabilitaciones 2025</span>
          <a href="https://theatlas.es" target="_blank" rel="noopener noreferrer" className="hover:text-[#E6E5E1] transition-colors">
            Creado por Atlas Agencia E-Commerce
          </a>
        </div>
      </footer>
    </div>
  );
}
