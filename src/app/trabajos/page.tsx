'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { ArrowLeft, X } from 'lucide-react';

const trabajos = [
  {
    id: 1,
    title: "Rehabilitación Fachada SATE",
    category: "SATE",
    location: "Elche",
    img: "https://quarzorehabilitaciones.es/wp-content/uploads/2024/12/IMG_4136-scaled.webp"
  },
  {
    id: 2,
    title: "Restauración Edificio Histórico",
    category: "Patrimonio",
    location: "Alicante",
    img: "https://quarzorehabilitaciones.es/wp-content/uploads/2024/12/IMG_4123-scaled.webp"
  },
  {
    id: 3,
    title: "Trabajo Vertical Fachada",
    category: "Vertical",
    location: "Elche",
    img: "https://quarzorehabilitaciones.es/wp-content/uploads/2025/05/IMG_20230926_081639-scaled.jpg"
  },
  {
    id: 4,
    title: "Reforma Integral Fachada",
    category: "Rehabilitación",
    location: "Santa Pola",
    img: "https://quarzorehabilitaciones.es/wp-content/uploads/2024/12/IMG_4082-scaled.webp"
  },
  {
    id: 5,
    title: "Aislamiento Térmico Exterior",
    category: "SATE",
    location: "Crevillente",
    img: "https://quarzorehabilitaciones.es/wp-content/uploads/2025/05/20241023_100959906_iOS_0-scaled.jpeg"
  },
  {
    id: 6,
    title: "Pintura y Sellado Fachada",
    category: "Rehabilitación",
    location: "Elche",
    img: "https://quarzorehabilitaciones.es/wp-content/uploads/2024/12/IMG_4136-scaled.webp"
  },
  {
    id: 7,
    title: "Restauración Ornamentos",
    category: "Patrimonio",
    location: "Orihuela",
    img: "https://quarzorehabilitaciones.es/wp-content/uploads/2024/12/IMG_4123-scaled.webp"
  },
  {
    id: 8,
    title: "Limpieza Fachada en Altura",
    category: "Vertical",
    location: "Alicante",
    img: "https://quarzorehabilitaciones.es/wp-content/uploads/2025/05/IMG_20230926_081639-scaled.jpg"
  },
  {
    id: 9,
    title: "Impermeabilización Fachada",
    category: "Rehabilitación",
    location: "Novelda",
    img: "https://quarzorehabilitaciones.es/wp-content/uploads/2024/12/IMG_4082-scaled.webp"
  },
  {
    id: 10,
    title: "Sistema SATE Completo",
    category: "SATE",
    location: "Aspe",
    img: "https://quarzorehabilitaciones.es/wp-content/uploads/2025/05/20241023_100959906_iOS_0-scaled.jpeg"
  },
  {
    id: 11,
    title: "Reparación Grietas Estructurales",
    category: "Rehabilitación",
    location: "Elche",
    img: "https://quarzorehabilitaciones.es/wp-content/uploads/2024/12/IMG_4136-scaled.webp"
  },
  {
    id: 12,
    title: "Mantenimiento Edificio",
    category: "Vertical",
    location: "Santa Pola",
    img: "https://quarzorehabilitaciones.es/wp-content/uploads/2024/12/IMG_4123-scaled.webp"
  }
];

const categories = ["Todos", "SATE", "Rehabilitación", "Vertical", "Patrimonio"];

export default function TrabajosPage() {
  const [filter, setFilter] = useState("Todos");
  const [selectedWork, setSelectedWork] = useState<typeof trabajos[0] | null>(null);

  const filteredWorks = filter === "Todos"
    ? trabajos
    : trabajos.filter(t => t.category === filter);

  return (
    <div className="min-h-screen bg-[#E6E5E1]">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 px-6 md:px-12 py-6 flex justify-between items-center bg-[#E6E5E1]/80 backdrop-blur-md">
        <Link href="/" className="flex items-center gap-3 group">
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <img src="/logo-dark.svg" alt="Quarzo Rehabilitaciones" className="h-6 md:h-8 w-auto" />
        </Link>
        <Link
          href="/contacto"
          className="text-xs font-bold uppercase tracking-wider hover:text-[#C4A484] transition-colors"
        >
          Contacto
        </Link>
      </header>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <span className="block text-[10px] uppercase tracking-[0.3em] text-[#C4A484] mb-4">Portfolio</span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Nuestros<br/>
            <span className="font-serif italic font-light">Trabajos</span>
          </h1>
          <p className="text-xl opacity-60 max-w-xl">
            Más de 30 años rehabilitando fachadas en Elche, Alicante y toda la Costa Blanca.
            Cada proyecto es único, cada fachada cuenta una historia.
          </p>
        </motion.div>
      </section>

      {/* Filters */}
      <section className="px-6 md:px-12 pb-10 sticky top-20 z-40 bg-[#E6E5E1]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 text-sm font-bold uppercase tracking-wider transition-all ${
                  filter === cat
                    ? 'bg-[#141414] text-[#E6E5E1]'
                    : 'bg-transparent border border-[#141414]/20 hover:border-[#141414]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="px-6 md:px-12 pb-32">
        <div className="max-w-6xl mx-auto">
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            <AnimatePresence mode="popLayout">
              {filteredWorks.map((work, i) => (
                <motion.div
                  key={work.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  onClick={() => setSelectedWork(work)}
                  className="group relative aspect-[4/5] overflow-hidden cursor-pointer"
                >
                  <img
                    src={work.img}
                    alt={work.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <span className="block text-[10px] uppercase tracking-wider text-[#C4A484] mb-2">{work.category}</span>
                    <h3 className="text-xl font-bold text-[#E6E5E1] mb-1">{work.title}</h3>
                    <span className="text-sm text-[#E6E5E1]/60">{work.location}</span>
                  </div>

                  {/* Category tag */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#E6E5E1] px-3 py-1 text-[10px] font-bold uppercase tracking-wider">
                      {work.category}
                    </span>
                  </div>
                </motion.div>
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
            className="fixed inset-0 z-[100] bg-[#141414]/95 flex items-center justify-center p-6"
            onClick={() => setSelectedWork(null)}
          >
            <button
              className="absolute top-6 right-6 text-[#E6E5E1] hover:text-[#C4A484] transition-colors"
              onClick={() => setSelectedWork(null)}
            >
              <X size={32} />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedWork.img}
                alt={selectedWork.title}
                className="w-full h-auto max-h-[70vh] object-contain"
              />
              <div className="mt-6 text-[#E6E5E1]">
                <span className="block text-[10px] uppercase tracking-wider text-[#C4A484] mb-2">
                  {selectedWork.category} — {selectedWork.location}
                </span>
                <h2 className="text-3xl font-bold">{selectedWork.title}</h2>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA */}
      <section className="bg-[#141414] py-32 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-[#E6E5E1] mb-6">
            ¿Tienes un proyecto<br/>
            <span className="font-serif italic font-light text-[#C4A484]">en mente?</span>
          </h2>
          <p className="text-xl text-[#E6E5E1]/60 mb-10 max-w-xl mx-auto">
            Cuéntanos tu idea y te ayudamos a hacerla realidad. Presupuesto sin compromiso.
          </p>
          <Link
            href="/contacto"
            className="inline-block bg-[#E6E5E1] text-[#141414] px-10 py-4 font-bold uppercase tracking-wider hover:bg-[#C4A484] transition-colors"
          >
            Solicitar Presupuesto
          </Link>
        </div>
      </section>

      {/* Footer simple */}
      <footer className="bg-[#141414] border-t border-[#E6E5E1]/10 py-10 px-6 md:px-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <img src="/logo.svg" alt="Quarzo" className="h-8" />
          <div className="flex gap-8 text-sm text-[#E6E5E1]/60">
            <Link href="/" className="hover:text-[#E6E5E1]">Inicio</Link>
            <Link href="/trabajos" className="hover:text-[#E6E5E1]">Trabajos</Link>
            <Link href="/contacto" className="hover:text-[#E6E5E1]">Contacto</Link>
          </div>
          <span className="text-xs text-[#E6E5E1]/40">© Quarzo 2025</span>
        </div>
      </footer>
    </div>
  );
}
