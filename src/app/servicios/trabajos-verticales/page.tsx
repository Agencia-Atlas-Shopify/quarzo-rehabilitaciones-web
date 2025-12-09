import { Metadata } from 'next';
import ServiceLayout from '@/components/ServiceLayout';

export const metadata: Metadata = {
  title: 'Trabajos Verticales en Elche y Alicante | Sin Andamios | Quarzo',
  description: 'Especialistas en trabajos verticales en Elche y Alicante. Reparación de fachadas, sellado de grietas, pintura en altura sin andamios. Técnicos certificados. Presupuesto gratis.',
  keywords: ['trabajos verticales Elche', 'trabajos verticales Alicante', 'trabajos en altura', 'reparación fachadas sin andamios', 'limpieza fachadas altura', 'sellado grietas edificios', 'pintura altura'],
  openGraph: {
    title: 'Trabajos Verticales en Elche y Alicante | Sin Andamios',
    description: 'Reparación y mantenimiento de fachadas mediante técnicas de acceso vertical. Sin andamios, menor coste y mayor rapidez.',
    url: 'https://quarzorehabilitaciones.es/servicios/trabajos-verticales',
    siteName: 'Quarzo Rehabilitaciones',
    locale: 'es_ES',
    type: 'website',
  },
  alternates: {
    canonical: 'https://quarzorehabilitaciones.es/servicios/trabajos-verticales',
  },
};

const trabajosVerticalesPage = {
  title: 'Trabajos Verticales',
  subtitle: 'Acceso con Cuerdas Profesional',
  description: 'Realizamos trabajos de reparación, mantenimiento y rehabilitación en fachadas mediante técnicas de acceso vertical con cuerdas. Una solución más económica, rápida y menos invasiva que los andamios tradicionales.',
  heroImage: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1600',
  benefits: [
    'Ahorro significativo respecto a los andamios tradicionales, con costes hasta un 50% menores en muchos trabajos.',
    'Mayor rapidez de ejecución al no requerir montaje y desmontaje de estructuras auxiliares.',
    'Acceso a zonas de difícil alcance donde los andamios no son viables: patios interiores, medianeras, torres.',
    'Menor impacto visual y acústico para los vecinos y el entorno durante la ejecución de los trabajos.',
    'Flexibilidad para intervenciones puntuales y urgentes sin necesidad de grandes preparativos.',
    'Técnicos certificados con formación específica en trabajos en altura y equipos de última generación.',
  ],
  process: [
    {
      step: '01',
      title: 'Inspección Inicial',
      description: 'Evaluamos la fachada desde el exterior para identificar todos los puntos que requieren intervención y planificar el acceso.'
    },
    {
      step: '02',
      title: 'Plan de Seguridad',
      description: 'Elaboramos el plan de seguridad específico con los puntos de anclaje, líneas de vida y equipos de protección necesarios.'
    },
    {
      step: '03',
      title: 'Instalación de Sistemas',
      description: 'Instalamos los puntos de anclaje certificados y las líneas de trabajo, cumpliendo toda la normativa de seguridad vigente.'
    },
    {
      step: '04',
      title: 'Ejecución de Trabajos',
      description: 'Nuestros técnicos certificados realizan las intervenciones necesarias: reparaciones, sellados, pintura o limpieza.'
    },
    {
      step: '05',
      title: 'Verificación Final',
      description: 'Revisamos todos los trabajos realizados y documentamos fotográficamente el estado final de cada zona intervenida.'
    },
  ],
  gallery: [
    'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=800',
    'https://images.unsplash.com/photo-1508450859948-4e04fabaa4ea?q=80&w=800',
    'https://images.unsplash.com/photo-1486718448742-163732cd1544?q=80&w=800',
    'https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=800',
    'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800',
    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800',
  ],
  faqs: [
    {
      question: '¿Qué trabajos se pueden realizar mediante acceso vertical?',
      answer: 'Prácticamente cualquier trabajo de fachada: reparación de grietas, sellado de juntas, pintura, limpieza, instalación de redes antipalomas, reparación de canalones, impermeabilización, instalación de anclajes para aire acondicionado, inspecciones técnicas, y mucho más.'
    },
    {
      question: '¿Es seguro el trabajo vertical?',
      answer: 'Absolutamente. Nuestros técnicos tienen certificación oficial en trabajos en altura y utilizamos equipos certificados según normativa europea. Trabajamos siempre con doble sistema de seguridad y seguimos protocolos estrictos de prevención de riesgos.'
    },
    {
      question: '¿Cuánto cuesta un trabajo vertical comparado con andamios?',
      answer: 'Generalmente, los trabajos verticales son entre un 30% y 50% más económicos que usar andamios, especialmente en intervenciones puntuales o edificios altos. El ahorro viene de eliminar el coste de montaje, alquiler y desmontaje del andamio.'
    },
    {
      question: '¿Se necesita permiso del ayuntamiento para trabajos verticales?',
      answer: 'En la mayoría de casos, los trabajos verticales requieren menos permisos que los andamios ya que no ocupan vía pública. No obstante, gestionamos todos los permisos necesarios según el tipo de intervención.'
    },
    {
      question: '¿Cuánto tiempo tardan en realizar el trabajo?',
      answer: 'Al no requerir montaje de andamios, los trabajos verticales son muy rápidos. Una reparación puntual puede completarse en un día, mientras que trabajos más extensos como pintar una fachada completa pueden llevar varios días.'
    },
    {
      question: '¿Trabajan en edificios muy altos?',
      answer: 'Sí, trabajamos en edificios de cualquier altura. Los trabajos verticales son especialmente ventajosos en edificios altos donde el andamio sería muy costoso. Hemos trabajado en edificios de más de 20 plantas.'
    },
  ],
  relatedServices: [
    { name: 'Sistema SATE', href: '/servicios/sate' },
    { name: 'Rehabilitación de Fachadas', href: '/servicios/rehabilitacion-fachadas' },
    { name: 'Restauración de Patrimonio', href: '/servicios/restauracion-patrimonio' },
  ],
};

export default function TrabajosVerticalesPage() {
  return (
    <ServiceLayout {...trabajosVerticalesPage}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Trabajos Verticales en Elche y Alicante',
            description: 'Servicio profesional de trabajos verticales para reparación y mantenimiento de fachadas sin necesidad de andamios.',
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
            serviceType: 'Trabajos en Altura'
          })
        }}
      />
    </ServiceLayout>
  );
}
