import { Metadata } from 'next';
import ServiceLayout from '@/components/ServiceLayout';

export const metadata: Metadata = {
  title: 'SATE en Elche y Alicante | Aislamiento Térmico Exterior | Quarzo',
  description: 'Instalación de SATE (Sistema de Aislamiento Térmico por el Exterior) en Elche, Alicante y Costa Blanca. Ahorra hasta un 70% en climatización. Presupuesto sin compromiso.',
  keywords: ['SATE Elche', 'SATE Alicante', 'aislamiento térmico exterior', 'aislamiento fachadas', 'eficiencia energética edificios', 'rehabilitación energética', 'SATE precio', 'instaladores SATE'],
  openGraph: {
    title: 'SATE en Elche y Alicante | Aislamiento Térmico Exterior',
    description: 'Especialistas en instalación de SATE. Ahorra hasta un 70% en climatización con aislamiento térmico exterior profesional.',
    url: 'https://quarzorehabilitaciones.es/servicios/sate',
    siteName: 'Quarzo Rehabilitaciones',
    locale: 'es_ES',
    type: 'website',
  },
  alternates: {
    canonical: 'https://quarzorehabilitaciones.es/servicios/sate',
  },
};

const satePage = {
  title: 'Sistema SATE',
  subtitle: 'Aislamiento Térmico por el Exterior',
  description: 'Instalamos sistemas de aislamiento térmico por el exterior (SATE) en Elche, Alicante y toda la provincia. Reduce el consumo energético de tu edificio hasta un 70% y mejora el confort térmico durante todo el año.',
  heroImage: '/images/obra/sate-2.jpg',
  heroAlt: "Edificio de viviendas a media intervención: media fachada con el ladrillo original y media ya con el aislamiento térmico colocado",
  slug: '/servicios/sate',
  tipoServicio: "Aislamiento térmico por el exterior",
  benefits: [
    'Reducción del consumo energético entre un 50% y 70%, lo que se traduce en un importante ahorro en las facturas de luz y gas.',
    'Eliminación de puentes térmicos y humedades por condensación, mejorando la salubridad y durabilidad del edificio.',
    'Aumento del valor del inmueble y mejora de la calificación energética, requisito cada vez más demandado en el mercado.',
    'Instalación por el exterior sin necesidad de obras en el interior de las viviendas ni molestias para los residentes.',
    'Amplia variedad de acabados estéticos que renuevan completamente la imagen del edificio.',
    'Posibilidad de acceder a subvenciones y ayudas europeas para rehabilitación energética de edificios.',
  ],
  process: [
    {
      step: '01',
      title: 'Diagnóstico Energético',
      description: 'Realizamos un estudio termográfico completo del edificio para identificar los puntos críticos de pérdida energética y diseñar la solución óptima.'
    },
    {
      step: '02',
      title: 'Proyecto Técnico',
      description: 'Elaboramos el proyecto técnico con los materiales certificados más adecuados según las características del edificio y la normativa vigente.'
    },
    {
      step: '03',
      title: 'Preparación de Soporte',
      description: 'Preparamos la fachada existente, saneando desperfectos y garantizando una base sólida para la correcta adhesión del sistema.'
    },
    {
      step: '04',
      title: 'Instalación del Sistema',
      description: 'Colocamos las placas aislantes, la malla de refuerzo y las capas de acabado siguiendo estrictamente las especificaciones del fabricante.'
    },
    {
      step: '05',
      title: 'Control de Calidad',
      description: 'Verificamos la correcta ejecución mediante pruebas de adherencia y termografía final, entregando certificado de garantía.'
    },
  ],
  gallery: [
    { src: '/images/obra/sate-1.jpg', alt: "Panel de aislamiento térmico por el exterior fijado sobre la fachada existente" },
    { src: '/images/obra/sate-2.jpg', alt: "Fachada con el sistema SATE a medio colocar, con el ladrillo original todavía a la vista" },
    { src: '/images/obra/terminado.jpg', alt: "Bloque residencial con la fachada terminada tras el aislamiento" },
    { src: '/images/obra/fachada.jpg', alt: "Fachada rehabilitada de un edificio de viviendas en la Costa Blanca" },
    { src: '/images/obra/bloque.jpg', alt: "Bloque de viviendas antes de la intervención" },
    { src: '/images/obra/andamio.jpg', alt: "Edificio con el andamio montado durante los trabajos" },
  ],
  faqs: [
    {
      question: '¿Qué es el sistema SATE y cómo funciona?',
      answer: 'SATE significa Sistema de Aislamiento Térmico por el Exterior. Consiste en adherir placas de material aislante (generalmente EPS o lana de roca) a la fachada del edificio, cubriéndolas con un mortero armado con malla y un revestimiento final. Funciona como un "abrigo" para el edificio, evitando las pérdidas de calor en invierno y la entrada de calor en verano.'
    },
    {
      question: '¿Cuánto puedo ahorrar con la instalación de SATE?',
      answer: 'El ahorro energético típico oscila entre el 50% y el 70% en climatización, dependiendo del estado previo del edificio y el espesor del aislamiento instalado. En términos económicos, esto puede suponer un ahorro de 300€ a 800€ anuales por vivienda.'
    },
    {
      question: '¿Cuánto cuesta instalar SATE en mi edificio?',
      answer: 'El precio del SATE varía según la superficie, altura del edificio, tipo de aislante y acabado elegido. Como referencia, el coste suele oscilar entre 60€ y 120€ por metro cuadrado. Ofrecemos presupuestos personalizados sin compromiso.'
    },
    {
      question: '¿Existen ayudas o subvenciones para instalar SATE?',
      answer: 'Sí, actualmente existen importantes ayudas europeas (Fondos Next Generation) que pueden cubrir hasta el 80% del coste de la rehabilitación energética. En Quarzo te ayudamos con toda la gestión de subvenciones.'
    },
    {
      question: '¿Cuánto tiempo dura la instalación de SATE?',
      answer: 'La duración depende del tamaño del edificio. Un edificio de 4-6 plantas suele requerir entre 4 y 8 semanas. Durante la obra, los vecinos pueden seguir haciendo vida normal en sus viviendas.'
    },
    {
      question: '¿Qué garantía tiene el sistema SATE?',
      answer: 'Ofrecemos garantía de 10 años en materiales y mano de obra. Los sistemas SATE certificados tienen una vida útil superior a 25 años con un mantenimiento mínimo.'
    },
  ],
  relatedServices: [
    { name: 'Rehabilitación de Fachadas', href: '/servicios/rehabilitacion-fachadas' },
    { name: 'Trabajos Verticales', href: '/servicios/trabajos-verticales' },
    { name: 'Restauración de Patrimonio', href: '/servicios/restauracion-patrimonio' },
  ],
};

export default function SATEPage() {
  return (
    <ServiceLayout {...satePage}>
      {/* Schema.org structured data for SEO */}
    </ServiceLayout>
  );
}
