'use client';

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Instagram, Linkedin } from 'lucide-react';
import Link from 'next/link';

// --- Assets & Config ---
const COLORS = {
  bg: "#E6E5E1", // Piedra caliza suave
  text: "#141414", // Negro casi puro
  accent: "#C4A484" // Tono tierra
};

const NOISE_SVG = `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E")`;

// --- 1. Utilidades de Animación ---

const CinematicCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoverState, setHoverState] = useState<string | null>(null);

  useEffect(() => {
    const updateMouse = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement;
      if (target.closest('[data-cursor="view"]')) setHoverState('view');
      else if (target.closest('a, button, .interactive')) setHoverState('click');
      else setHoverState(null);
    };
    window.addEventListener('mousemove', updateMouse);
    return () => window.removeEventListener('mousemove', updateMouse);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[100] hidden md:flex items-center justify-center mix-blend-difference"
      animate={{
        x: mousePosition.x - (hoverState === 'view' ? 40 : hoverState === 'click' ? 24 : 6),
        y: mousePosition.y - (hoverState === 'view' ? 40 : hoverState === 'click' ? 24 : 6),
        width: hoverState === 'view' ? 80 : hoverState === 'click' ? 48 : 12,
        height: hoverState === 'view' ? 80 : hoverState === 'click' ? 48 : 12,
        backgroundColor: "#FFF",
        borderRadius: "50%"
      }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
    >
      <AnimatePresence>
        {hoverState === 'view' && (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-black text-[10px] font-bold uppercase tracking-widest"
          >
            Ver
          </motion.span>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const ArchitecturalMarquee = ({ text }: { text: string }) => {
  return (
    <div className="overflow-hidden border-y border-[#141414]/10 py-6 bg-[#E6E5E1] relative z-20">
      <div className="animate-marquee-slow">
        {[...Array(2)].map((_, setIndex) => (
          <div key={setIndex} className="flex shrink-0">
            {[...Array(4)].map((_, i) => (
              <span key={i} className="flex items-center gap-10 md:gap-20 mx-10 md:mx-20 text-4xl md:text-[8rem] font-sans font-bold uppercase tracking-tighter leading-none text-[#141414]/10 whitespace-nowrap">
                {text} <span className="font-sans text-2xl md:text-4xl opacity-50">●</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

// FIX: SplitText más robusto para garantizar visibilidad
const SplitText = ({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) => (
  <div className={`overflow-hidden ${className}`}>
    <motion.div
      initial={{ y: "100%", opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1], delay }}
    >
      {children}
    </motion.div>
  </div>
);

// --- Componentes UI ---

const Navbar = ({ toggleMenu, isMenuOpen }: { toggleMenu: () => void; isMenuOpen: boolean }) => (
  <motion.header
    className="fixed top-0 w-full z-50 px-6 md:px-12 py-6 flex justify-between items-center mix-blend-difference text-[#E6E5E1]"
    initial={{ y: -100 }}
    animate={{ y: 0 }}
    transition={{ delay: 2, duration: 0.8 }}
  >
    <Link href="/" className="interactive">
      <img src="/logo.svg" alt="Quarzo Rehabilitaciones" className="h-8 md:h-10 w-auto" />
    </Link>

    <button onClick={toggleMenu} className="group flex items-center gap-3 interactive cursor-pointer">
      <span className="hidden md:block text-[10px] font-bold uppercase tracking-[0.2em] group-hover:opacity-70 transition-opacity">Menu</span>
      <div className="relative w-8 h-2 flex flex-col justify-between items-end overflow-hidden">
         <span className={`w-full h-[1px] bg-current transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-[3px]' : ''}`} />
         <span className={`w-2/3 h-[1px] bg-current transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-[4px] w-full' : 'group-hover:w-full'}`} />
      </div>
    </button>
  </motion.header>
);

const FullScreenMenu = ({ isOpen, toggle }: { isOpen: boolean; toggle: () => void }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
        animate={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
        exit={{ clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)" }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        className="fixed inset-0 bg-[#141414] z-40 flex flex-col justify-center items-center text-[#E6E5E1]"
      >
        <div className="flex flex-col gap-0 text-center mix-blend-difference">
          {[
            { name: 'Trabajos', href: '/trabajos' },
            { name: 'Servicios', href: '/#servicios' },
            { name: 'Contacto', href: '/contacto' }
          ].map((item, i) => (
            <div key={item.name} className="overflow-hidden group">
                <motion.div
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.2 + (i * 0.1), duration: 0.8 }}
                >
                  <Link
                    href={item.href}
                    onClick={toggle}
                    className="block text-[12vw] md:text-[8vw] font-serif italic leading-[0.85] hover:text-white/50 transition-colors cursor-pointer interactive"
                  >
                    {item.name}
                  </Link>
                </motion.div>
            </div>
          ))}
        </div>
      </motion.div>
    )}
  </AnimatePresence>
);

// --- HERO SECTION ---
const Hero = () => {
  const { scrollY } = useScroll();
  const yVideo = useTransform(scrollY, [0, 1000], [0, 200]);
  const scaleText = useTransform(scrollY, [0, 500], [1, 0.9]);

  return (
    <section className="relative h-screen w-full bg-[#E6E5E1] overflow-hidden flex flex-col justify-center items-center px-6">

      {/* Video Container */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <motion.div
           style={{ y: yVideo }}
           className="relative w-[90vw] h-[60vh] md:w-[40vw] md:h-[70vh] overflow-hidden bg-black"
        >
           <motion.div
             initial={{ scale: 1.5 }}
             animate={{ scale: 1 }}
             transition={{ duration: 2, ease: [0.76, 0, 0.24, 1] }}
             className="w-full h-full opacity-70"
           >
              <img
                src="/images/trabajos/20241023_100959906_iOS_0-scaled.jpeg"
                alt="Quarzo Rehabilitaciones"
                className="w-full h-full object-cover"
              />
           </motion.div>
        </motion.div>
      </div>

      {/* Logo */}
      <motion.div style={{ scale: scaleText }} className="relative z-10 w-full flex justify-center">
         <div className="overflow-hidden">
            <motion.img
              src="/logo-dark.svg"
              alt="Quarzo Rehabilitaciones"
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ delay: 0.5, duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
              className="w-[80vw] md:w-[50vw] max-w-4xl h-auto"
            />
         </div>
      </motion.div>

      {/* Detalles */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-6 md:left-12 z-20 flex flex-col gap-2 mix-blend-difference text-[#E6E5E1]"
      >
         <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Fig. 01 — Rehabilitación</span>
         <div className="w-12 h-[1px] bg-current" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-10 right-6 md:right-12 z-20 mix-blend-difference text-[#E6E5E1] hidden md:block"
      >
         <div className="flex flex-col items-center gap-4">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] rotate-90 origin-right translate-x-2">Scroll</span>
            <div className="w-[1px] h-16 bg-current" />
         </div>
      </motion.div>
    </section>
  );
};

// --- PROJECTS ---
const ProjectGallery = () => {
    const works = [
      { name: "Rehabilitación Fachada", type: "SATE", img: "/images/trabajos/IMG_4136-scaled.webp" },
      { name: "Restauración Edificio", type: "Patrimonio", img: "/images/trabajos/IMG_4123-scaled.webp" },
      { name: "Trabajo Vertical", type: "Vertical", img: "/images/trabajos/IMG_20230926_081639-scaled.jpg" },
      { name: "Reforma Integral", type: "Restauración", img: "/images/trabajos/IMG_4082-scaled.webp" }
    ];

    return (
        <section className="py-20 md:py-40 bg-[#E6E5E1] relative z-10 text-[#141414]">
            {/* Header - Desktop */}
            <div className="hidden md:flex px-6 md:px-12 mb-20 items-end justify-between border-b border-[#141414]/10 pb-6">
                <SplitText>
                   <h2 className="text-4xl md:text-6xl font-serif italic text-[#141414]">Algunos de Nuestros Trabajos</h2>
                </SplitText>
                <Link href="/trabajos" className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] opacity-40 hover:opacity-100 transition-opacity">
                  Ver todos →
                </Link>
            </div>

            {/* Mobile Header - Premium Style */}
            <div className="md:hidden px-6 mb-8">
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="text-[10px] uppercase tracking-[0.3em] text-[#C4A484] font-bold block mb-3"
                >
                  Portfolio
                </motion.span>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-3xl font-serif italic text-[#141414] leading-tight"
                >
                  Nuestros<br/>Trabajos
                </motion.h2>
            </div>

            {/* Mobile Gallery - Awwwards Style */}
            <div className="md:hidden">
              {works.map((work, i) => (
                <Link href="/trabajos" key={i}>
                  <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1], delay: i * 0.1 }}
                    className="relative mb-4 mx-4 group"
                  >
                    {/* Card Container */}
                    <div className="relative overflow-hidden aspect-[4/5] bg-[#141414]">
                      {/* Image with parallax effect */}
                      <motion.div
                        initial={{ scale: 1.1 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: [0.33, 1, 0.68, 1] }}
                        className="absolute inset-0"
                      >
                        <img
                          src={work.img}
                          alt={work.name}
                          className="w-full h-full object-cover"
                        />
                      </motion.div>

                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/20 to-transparent" />

                      {/* Index Number - Large decorative */}
                      <div className="absolute top-4 right-4">
                        <span className="text-[80px] font-sans font-bold leading-none text-white/10">
                          0{i + 1}
                        </span>
                      </div>

                      {/* Content Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        {/* Type Badge */}
                        <motion.span
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + i * 0.1 }}
                          className="inline-block px-3 py-1 bg-[#C4A484] text-[#141414] text-[10px] font-bold uppercase tracking-[0.15em] mb-4"
                        >
                          {work.type}
                        </motion.span>

                        {/* Title */}
                        <motion.h3
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.4 + i * 0.1 }}
                          className="text-2xl font-sans font-bold uppercase tracking-tight text-white leading-[1.1] mb-3"
                        >
                          {work.name}
                        </motion.h3>

                        {/* CTA Line */}
                        <motion.div
                          initial={{ opacity: 0, width: 0 }}
                          whileInView={{ opacity: 1, width: "100%" }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.5 + i * 0.1, duration: 0.6 }}
                          className="flex items-center justify-between pt-4 border-t border-white/20"
                        >
                          <span className="text-[10px] uppercase tracking-[0.2em] text-white/60 font-medium">
                            Ver proyecto
                          </span>
                          <motion.span
                            className="text-[#C4A484] text-xl"
                            initial={{ x: -10, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 + i * 0.1 }}
                          >
                            →
                          </motion.span>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}

              {/* Ver Todos Button - Mobile */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="px-6 mt-8"
              >
                <Link
                  href="/trabajos"
                  className="flex items-center justify-center gap-3 w-full py-4 border border-[#141414] text-[#141414] text-sm font-bold uppercase tracking-[0.15em] hover:bg-[#141414] hover:text-[#E6E5E1] transition-all duration-300"
                >
                  <span>Ver todos los trabajos</span>
                  <span>→</span>
                </Link>
              </motion.div>
            </div>

            {/* Desktop Gallery */}
            <div className="hidden md:flex flex-col w-full">
                {works.map((work, i) => (
                    <Link href="/trabajos" key={i}>
                      <motion.div
                          initial="initial"
                          whileHover="hover"
                          className="group relative border-b border-[#141414]/10 py-16 cursor-pointer"
                      >
                          {/* Desktop layout with hover effect */}
                          <div className="flex px-12 justify-between items-baseline relative z-20">
                              <h3 className="text-8xl font-sans font-bold uppercase tracking-tight transition-transform duration-500 group-hover:translate-x-10 text-[#141414] group-hover:text-[#E6E5E1] group-hover:mix-blend-difference">
                                  {work.name}
                              </h3>
                              <span className="text-sm font-serif italic opacity-60 group-hover:text-[#E6E5E1] group-hover:mix-blend-difference">{work.type}</span>
                          </div>

                          {/* Hover Image - Desktop only */}
                          <motion.div
                              variants={{
                                  initial: { opacity: 0, scale: 0.9, rotate: -2 },
                                  hover: { opacity: 1, scale: 1, rotate: 0 }
                              }}
                              transition={{ duration: 0.4, ease: "easeOut" }}
                              className="absolute left-0 right-0 top-0 bottom-0 pointer-events-none z-10 flex items-center justify-center"
                          >
                              <div className="w-[40vw] h-[40vh] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                                  <img src={work.img} alt={work.name} className="w-full h-full object-cover" />
                              </div>
                          </motion.div>

                          {/* Fondo negro sutil al hover - Desktop only */}
                          <motion.div
                             className="absolute inset-0 bg-[#141414] z-0"
                             variants={{ initial: { scaleY: 0 }, hover: { scaleY: 1 } }}
                             transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
                          />
                      </motion.div>
                    </Link>
                ))}
            </div>

        </section>
    );
};

// --- SERVICES ---
const Services = () => {
    const services = [
        {
            id: "01",
            title: "Sistema SATE",
            text: "Aislamiento Térmico por el Exterior en Elche y Alicante. Ahorra hasta un 70% en climatización con nuestro sistema certificado. Instaladores profesionales.",
            href: "/servicios/sate"
        },
        {
            id: "02",
            title: "Trabajos Verticales",
            text: "Reparación de fachadas sin andamios en Elche. Técnicos certificados en trabajos en altura. Sellado de grietas, pintura y limpieza de fachadas.",
            href: "/servicios/trabajos-verticales"
        },
        {
            id: "03",
            title: "Rehabilitación de Fachadas",
            text: "Rehabilitación integral de fachadas en Elche y Alicante. Reparación de grietas, impermeabilización, pintura y restauración de elementos decorativos.",
            href: "/servicios/rehabilitacion-fachadas"
        },
        {
            id: "04",
            title: "Restauración de Patrimonio",
            text: "Restauración de edificios históricos y patrimonio arquitectónico. Técnicas tradicionales y modernas para BIC y edificios protegidos en la Costa Blanca.",
            href: "/servicios/restauracion-patrimonio"
        }
    ];

    return (
        <section id="servicios" className="bg-[#141414] text-[#E6E5E1] min-h-screen py-40 px-6 md:px-12 flex flex-col md:flex-row gap-20">
            <div className="md:w-1/3 md:sticky md:top-40 md:h-fit">
                <span className="block text-[10px] uppercase tracking-[0.2em] mb-4 text-[#C4A484]">Servicios de Rehabilitación</span>
                <h2 className="text-5xl md:text-7xl font-sans font-bold leading-[0.9] tracking-tighter mb-10">
                    Especialistas en<br/>
                    <span className="font-serif italic font-light opacity-50">Fachadas</span>
                </h2>
                <p className="text-lg opacity-50 font-light leading-relaxed max-w-sm">
                    Más de 30 años rehabilitando edificios en Elche, Alicante y toda la Costa Blanca. Combinamos artesanía tradicional con tecnología de vanguardia.
                </p>
            </div>

            <div className="md:w-2/3 flex flex-col gap-20">
                {services.map((s, i) => (
                    <Link href={s.href} key={i}>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: i * 0.1 }}
                            className="border-t border-[#E6E5E1]/20 pt-10 group hover:border-[#E6E5E1] transition-colors duration-500 cursor-pointer"
                        >
                            <span className="text-xs font-mono text-[#C4A484] mb-4 block">/{s.id}</span>
                            <h3 className="text-4xl md:text-5xl font-sans font-bold mb-6 group-hover:translate-x-4 transition-transform duration-500">{s.title}</h3>
                            <p className="text-xl md:text-2xl font-serif italic opacity-60 font-light leading-relaxed group-hover:opacity-90 transition-opacity">
                                {s.text}
                            </p>
                            <span className="inline-block mt-6 text-sm font-bold uppercase tracking-wider text-[#C4A484] group-hover:translate-x-2 transition-transform">
                                Ver servicio →
                            </span>
                        </motion.div>
                    </Link>
                ))}
            </div>
        </section>
    )
}

// --- FOOTER ---
const Footer = () => {
    return (
        <div
            className="relative h-[70vh] md:h-[60vh]"
            style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
        >
            <div className="fixed bottom-0 h-[70vh] md:h-[60vh] w-full bg-[#C4A484] flex flex-col justify-between p-6 md:p-12 z-0">
                <div className="flex justify-between font-sans text-[10px] uppercase tracking-[0.2em] text-[#141414]/60">
                   <span>Contact Us</span>
                   <span>Elche, ES</span>
                </div>

                <div className="text-center">
                    <motion.h2
                        initial={{ y: "50%" }}
                        whileInView={{ y: 0 }}
                        className="text-[15vw] font-serif leading-none tracking-tighter text-[#141414] mix-blend-multiply interactive hover:italic transition-all cursor-pointer"
                    >
                        Hablemos
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 border-t border-[#141414]/20 pt-10 text-[#141414]">
                    <div className="flex flex-col gap-2">
                        <span className="text-[10px] uppercase tracking-[0.2em] opacity-50">Email</span>
                        <a href="mailto:joseantonio@quarzorehabilitaciones.es" className="font-serif italic text-base md:text-xl hover:opacity-50 interactive break-all">joseantonio@quarzorehabilitaciones.es</a>
                    </div>
                    <div className="flex flex-col gap-2">
                        <span className="text-[10px] uppercase tracking-[0.2em] opacity-50">Teléfono</span>
                        <a href="tel:+34697109583" className="font-serif italic text-xl hover:opacity-50 interactive">697 10 95 83</a>
                    </div>
                    <div className="flex flex-col gap-2">
                        <span className="text-[10px] uppercase tracking-[0.2em] opacity-50">Dirección</span>
                        <p className="font-sans text-sm font-bold uppercase">Carrer Inca, 40<br/>03206 Elx, Alicante</p>
                    </div>
                    <div className="flex flex-col gap-4">
                         <div className="flex gap-4">
                             <Instagram size={20} className="interactive cursor-pointer hover:scale-110 transition-transform" />
                             <Linkedin size={20} className="interactive cursor-pointer hover:scale-110 transition-transform" />
                         </div>
                         <span className="text-[10px] uppercase opacity-40">© Quarzo 2025</span>
                    </div>
                    <div className="flex flex-col gap-2 items-start sm:items-end">
                        <img src="/images/kit-digital-next-generation.png" alt="Kit Digital - Financiado por la Unión Europea Next Generation EU" className="h-12 md:h-14 w-auto" />
                    </div>
                </div>
            </div>
        </div>
    )
}

// --- Preloader ---
const Preloader = ({ onComplete }: { onComplete: () => void }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCount(prev => {
                if (prev >= 100) {
                    clearInterval(timer);
                    return 100;
                }
                return prev + 1;
            });
        }, 20);
        setTimeout(onComplete, 2000);
        return () => clearInterval(timer);
    }, [onComplete]);

    return (
        <motion.div
            className="fixed inset-0 bg-[#E6E5E1] z-[999] flex flex-col items-center justify-center"
            exit={{ y: "-100%", transition: { duration: 1, ease: [0.76, 0, 0.24, 1] } }}
        >
            <div className="overflow-hidden">
                <motion.h1
                    initial={{ y: 100 }}
                    animate={{ y: 0 }}
                    className="text-[10vw] font-sans font-bold tracking-tighter text-[#141414]"
                >
                    QUARZO
                </motion.h1>
            </div>
            <div className="w-[300px] h-[1px] bg-[#141414]/20 mt-10 relative overflow-hidden">
                <motion.div
                    className="absolute inset-0 bg-[#141414]"
                    initial={{ width: 0 }}
                    animate={{ width: `${count}%` }}
                />
            </div>
            <span className="mt-4 font-mono text-xs">{count}%</span>
        </motion.div>
    )
}

// --- App Principal ---

export default function App() {
  const [loading, setLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-[#E6E5E1] min-h-screen font-sans selection:bg-[#141414] selection:text-[#E6E5E1] cursor-none text-[#141414]">
      {/* Noise Texture Overlay */}
      <div
        className="fixed inset-0 pointer-events-none z-[50] opacity-[0.4] mix-blend-overlay"
        style={{ backgroundImage: NOISE_SVG }}
      />

      {/* Estilos Tipográficos */}
      <style>{`
        .font-sans { font-family: 'Futura', 'Helvetica Neue', sans-serif; }
        .font-serif { font-family: 'Futura', 'Helvetica Neue', sans-serif; }
        .font-mono { font-family: 'Futura', monospace; }
      `}</style>

      <CinematicCursor />

      <AnimatePresence mode="wait">
        {loading ? (
            <Preloader key="loader" onComplete={() => setLoading(false)} />
        ) : (
            <div key="content">
                <Navbar toggleMenu={() => setMenuOpen(!menuOpen)} isMenuOpen={menuOpen} />
                <FullScreenMenu isOpen={menuOpen} toggle={() => setMenuOpen(false)} />

                <main className="relative z-10 bg-[#E6E5E1] mb-[70vh] md:mb-[60vh]">
                    <Hero />
                    <ArchitecturalMarquee text="Rehabilitación de Fachadas Elche" />

                    <section className="py-32 px-6 md:px-12 max-w-5xl mx-auto text-[#141414]">
                        <SplitText>
                            <p className="text-2xl md:text-4xl font-serif leading-relaxed text-center">
                                &quot;Especialistas en <span className="italic text-[#C4A484]">rehabilitación de edificios</span> en Elche y Alicante. Más de 30 años transformando fachadas con técnicas innovadoras y respeto por el patrimonio arquitectónico.&quot;
                            </p>
                        </SplitText>
                        <div className="mt-12 flex flex-wrap justify-center gap-4 text-sm">
                            <Link href="/servicios/sate" className="opacity-60 hover:opacity-100 hover:text-[#C4A484] transition-all">SATE</Link>
                            <span className="opacity-60">•</span>
                            <Link href="/servicios/trabajos-verticales" className="opacity-60 hover:opacity-100 hover:text-[#C4A484] transition-all">Trabajos Verticales</Link>
                            <span className="opacity-60">•</span>
                            <Link href="/servicios/rehabilitacion-fachadas" className="opacity-60 hover:opacity-100 hover:text-[#C4A484] transition-all">Rehabilitación Fachadas</Link>
                            <span className="opacity-60">•</span>
                            <Link href="/servicios/restauracion-patrimonio" className="opacity-60 hover:opacity-100 hover:text-[#C4A484] transition-all">Restauración Patrimonio</Link>
                        </div>
                    </section>

                    <ProjectGallery />
                    <Services />
                </main>
                <Footer />
            </div>
        )}
      </AnimatePresence>
    </div>
  );
}
