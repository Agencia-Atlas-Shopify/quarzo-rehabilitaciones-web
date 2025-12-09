import { Metadata } from 'next';
import ServiceLayout from '@/components/ServiceLayout';

export const metadata: Metadata = {
  title: 'Restauración de Patrimonio Histórico en Elche y Alicante | Quarzo',
  description: 'Restauración de edificios históricos y patrimonio arquitectónico en Elche y Alicante. Técnicas tradicionales y modernas. Especialistas en BIC y edificios protegidos.',
  keywords: ['restauración patrimonio Elche', 'restauración edificios históricos Alicante', 'rehabilitación patrimonio arquitectónico', 'restauración BIC', 'restauración fachadas históricas', 'conservación patrimonio'],
  openGraph: {
    title: 'Restauración de Patrimonio Histórico en Elche y Alicante',
    description: 'Especialistas en restauración de edificios históricos. Preservamos el patrimonio arquitectónico con técnicas respetuosas.',
    url: 'https://quarzorehabilitaciones.es/servicios/restauracion-patrimonio',
    siteName: 'Quarzo Rehabilitaciones',
    locale: 'es_ES',
    type: 'website',
  },
  alternates: {
    canonical: 'https://quarzorehabilitaciones.es/servicios/restauracion-patrimonio',
  },
};

const restauracionPatrimonioPage = {
  title: 'Restauración de Patrimonio',
  subtitle: 'Conservación del Legado Arquitectónico',
  description: 'Recuperamos y preservamos edificios históricos con técnicas especializadas que respetan su valor patrimonial. Combinamos artesanía tradicional con tecnología moderna para devolver el esplendor a construcciones centenarias.',
  heroImage: 'https://images.unsplash.com/photo-1555952494-efd681c7e3f9?q=80&w=1600',
  benefits: [
    'Equipo multidisciplinar con arquitectos, restauradores y artesanos especializados en patrimonio histórico.',
    'Estudios previos exhaustivos: análisis histórico, estratigráfico, de materiales y patologías específicas.',
    'Uso de materiales y técnicas compatibles con las construcciones originales, respetando su autenticidad.',
    'Experiencia en tramitación con organismos de patrimonio: Cultura, BIC, catalogaciones municipales.',
    'Integración de sistemas modernos (instalaciones, accesibilidad) sin alterar el carácter histórico.',
    'Documentación completa del proceso de restauración para archivo y futuras intervenciones.',
  ],
  process: [
    {
      step: '01',
      title: 'Estudio Histórico',
      description: 'Investigamos la historia del edificio, sus transformaciones a lo largo del tiempo y su valor patrimonial para fundamentar las decisiones de restauración.'
    },
    {
      step: '02',
      title: 'Análisis de Patologías',
      description: 'Realizamos un diagnóstico completo de las patologías: análisis de materiales, humedades, deterioros estructurales, biodeterioro y agentes de degradación.'
    },
    {
      step: '03',
      title: 'Proyecto de Restauración',
      description: 'Elaboramos el proyecto técnico definiendo criterios de intervención, técnicas a emplear y materiales compatibles, con tramitación ante organismos competentes.'
    },
    {
      step: '04',
      title: 'Consolidación Estructural',
      description: 'Ejecutamos las intervenciones de consolidación necesarias: refuerzos, inyecciones, cosidos, utilizando técnicas reversibles cuando es posible.'
    },
    {
      step: '05',
      title: 'Restauración de Elementos',
      description: 'Restauramos elementos decorativos, molduras, estucos, cerámicas, carpinterías y otros elementos singulares con técnicas artesanales especializadas.'
    },
    {
      step: '06',
      title: 'Protección y Conservación',
      description: 'Aplicamos tratamientos de protección final y elaboramos el plan de conservación preventiva para garantizar la durabilidad de la intervención.'
    },
  ],
  gallery: [
    'https://images.unsplash.com/photo-1555952494-efd681c7e3f9?q=80&w=800',
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800',
    'https://images.unsplash.com/photo-1523731407965-2430cd12f5e4?q=80&w=800',
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800',
    'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=800',
    'https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=800',
  ],
  faqs: [
    {
      question: '¿Qué diferencia hay entre rehabilitación y restauración de patrimonio?',
      answer: 'La rehabilitación busca recuperar la funcionalidad del edificio, mientras que la restauración de patrimonio prioriza la conservación de los valores históricos y artísticos, utilizando técnicas y materiales específicos que respetan la autenticidad del monumento.'
    },
    {
      question: '¿Necesito permisos especiales para restaurar un edificio histórico?',
      answer: 'Sí, los edificios protegidos (BIC, catalogados, en entornos históricos) requieren autorización de la Consejería de Cultura y/o el Ayuntamiento. En Quarzo nos encargamos de toda la tramitación administrativa necesaria.'
    },
    {
      question: '¿Es más cara la restauración de patrimonio que una rehabilitación normal?',
      answer: 'Generalmente sí, debido a la especialización requerida, los estudios previos, los materiales específicos y las técnicas artesanales. Sin embargo, existen importantes ayudas y subvenciones para patrimonio que pueden reducir significativamente el coste.'
    },
    {
      question: '¿Qué tipo de edificios históricos restauran?',
      answer: 'Restauramos todo tipo de edificios con valor patrimonial: iglesias, conventos, palacios, casas señoriales, edificios modernistas, arquitectura industrial histórica, construcciones tradicionales y edificios del siglo XX con protección.'
    },
    {
      question: '¿Cómo se garantiza el respeto a la autenticidad del edificio?',
      answer: 'Seguimos los criterios internacionales de restauración (Carta de Venecia, Carta de Cracovia) que priorizan la mínima intervención, reversibilidad, diferenciación y compatibilidad de materiales, documentando todo el proceso.'
    },
    {
      question: '¿Pueden adaptar edificios históricos a normativa de accesibilidad?',
      answer: 'Sí, es uno de los retos más frecuentes. Diseñamos soluciones que cumplen la normativa de accesibilidad minimizando el impacto en el edificio histórico, con ascensores discretos, rampas integradas y otros elementos compatibles.'
    },
  ],
  relatedServices: [
    { name: 'Sistema SATE', href: '/servicios/sate' },
    { name: 'Trabajos Verticales', href: '/servicios/trabajos-verticales' },
    { name: 'Rehabilitación de Fachadas', href: '/servicios/rehabilitacion-fachadas' },
  ],
};

export default function RestauracionPatrimonioPage() {
  return (
    <ServiceLayout {...restauracionPatrimonioPage}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Restauración de Patrimonio Histórico en Elche y Alicante',
            description: 'Servicio especializado de restauración de edificios históricos y patrimonio arquitectónico. Técnicas tradicionales y modernas para la conservación del legado cultural.',
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
              priceRange: '€€€'
            },
            areaServed: ['Elche', 'Alicante', 'Santa Pola', 'Crevillente', 'Costa Blanca'],
            serviceType: 'Restauración de Patrimonio'
          })
        }}
      />
    </ServiceLayout>
  );
}
