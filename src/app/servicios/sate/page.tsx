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
  heroImage: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1600',
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
    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800',
    'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=800',
    'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800',
    'https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?q=80&w=800',
    'https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?q=80&w=800',
    'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800',
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Instalación de SATE en Elche y Alicante',
            description: 'Servicio profesional de instalación de Sistema de Aislamiento Térmico por el Exterior (SATE) para edificios residenciales y comerciales.',
            provider: {
              '@type': 'LocalBusiness',
              name: 'Quarzo Rehabilitaciones',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Carrer Inca, 40',
                addressLocality: 'Elx',
                addressRegion: 'Alicante',
                postalCode: '03206',
                addressCountry: 'ES'
              },
              telephone: '+34697109583',
              priceRange: '€€'
            },
            areaServed: ['Elche', 'Alicante', 'Santa Pola', 'Crevillente', 'Costa Blanca'],
            serviceType: 'Aislamiento Térmico por el Exterior'
          })
        }}
      />
    </ServiceLayout>
  );
}
