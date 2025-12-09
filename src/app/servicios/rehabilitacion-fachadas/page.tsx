import { Metadata } from 'next';
import ServiceLayout from '@/components/ServiceLayout';

export const metadata: Metadata = {
  title: 'Rehabilitación de Fachadas en Elche y Alicante | Quarzo',
  description: 'Rehabilitación integral de fachadas en Elche, Alicante y Costa Blanca. Reparación de grietas, humedades, pintura y restauración. Más de 25 años de experiencia. Presupuesto gratis.',
  keywords: ['rehabilitación fachadas Elche', 'rehabilitación fachadas Alicante', 'reparación fachadas', 'pintura fachadas', 'reforma fachadas edificios', 'arreglar grietas fachada', 'empresa rehabilitación fachadas'],
  openGraph: {
    title: 'Rehabilitación de Fachadas en Elche y Alicante',
    description: 'Expertos en rehabilitación integral de fachadas. Devolvemos la belleza y funcionalidad a tu edificio.',
    url: 'https://quarzorehabilitaciones.es/servicios/rehabilitacion-fachadas',
    siteName: 'Quarzo Rehabilitaciones',
    locale: 'es_ES',
    type: 'website',
  },
  alternates: {
    canonical: 'https://quarzorehabilitaciones.es/servicios/rehabilitacion-fachadas',
  },
};

const rehabilitacionFachadasPage = {
  title: 'Rehabilitación de Fachadas',
  subtitle: 'Restauración Integral de Edificios',
  description: 'Devolvemos la vida a las fachadas deterioradas con soluciones integrales que combinan reparación estructural, tratamiento de humedades, aislamiento y acabados estéticos de primera calidad.',
  heroImage: 'https://images.unsplash.com/photo-1486718448742-163732cd1544?q=80&w=1600',
  benefits: [
    'Diagnóstico completo del estado de la fachada mediante inspección técnica y pruebas específicas para identificar todas las patologías.',
    'Soluciones personalizadas adaptadas a las características constructivas y estéticas de cada edificio.',
    'Tratamiento integral de humedades por filtración, capilaridad o condensación con sistemas garantizados.',
    'Reparación estructural de grietas, fisuras y desprendimientos con materiales de alta resistencia.',
    'Acabados estéticos de calidad que renuevan completamente la imagen del edificio.',
    'Cumplimiento de normativa ITE (Inspección Técnica de Edificios) y certificación energética.',
  ],
  process: [
    {
      step: '01',
      title: 'Inspección Técnica',
      description: 'Realizamos una inspección exhaustiva de la fachada documentando todas las patologías: grietas, humedades, desprendimientos, eflorescencias y deterioros.'
    },
    {
      step: '02',
      title: 'Informe y Proyecto',
      description: 'Elaboramos un informe técnico detallado con las soluciones propuestas, materiales a emplear, plazos de ejecución y presupuesto desglosado.'
    },
    {
      step: '03',
      title: 'Saneamiento y Preparación',
      description: 'Eliminamos los elementos deteriorados, saneamos las zonas afectadas y preparamos la superficie para recibir los nuevos tratamientos.'
    },
    {
      step: '04',
      title: 'Reparaciones Estructurales',
      description: 'Ejecutamos las reparaciones necesarias: cosido de grietas, inyecciones, refuerzos, impermeabilizaciones y tratamientos antihumedad.'
    },
    {
      step: '05',
      title: 'Acabados y Pintura',
      description: 'Aplicamos los revestimientos y pinturas de fachada seleccionados, garantizando durabilidad y estética impecable.'
    },
    {
      step: '06',
      title: 'Entrega y Garantía',
      description: 'Realizamos la recepción de obra con el cliente, entregamos documentación completa y certificado de garantía de todos los trabajos.'
    },
  ],
  gallery: [
    'https://quarzorehabilitaciones.es/wp-content/uploads/2024/12/IMG_4136-scaled.webp',
    'https://quarzorehabilitaciones.es/wp-content/uploads/2024/12/IMG_4123-scaled.webp',
    'https://quarzorehabilitaciones.es/wp-content/uploads/2024/12/IMG_4082-scaled.webp',
    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800',
    'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=800',
    'https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=800',
  ],
  faqs: [
    {
      question: '¿Cuándo es necesario rehabilitar una fachada?',
      answer: 'Es necesario cuando aparecen grietas, desprendimientos de material, manchas de humedad, eflorescencias (manchas blancas), pintura descascarillada o cuando el edificio debe pasar la ITE. También es recomendable cada 15-20 años como mantenimiento preventivo.'
    },
    {
      question: '¿Cuánto cuesta rehabilitar una fachada?',
      answer: 'El precio depende del estado de la fachada, superficie, altura del edificio y tratamientos necesarios. Como referencia, una rehabilitación básica (reparaciones puntuales y pintura) puede costar entre 25€ y 45€/m², mientras que una rehabilitación integral puede oscilar entre 60€ y 150€/m².'
    },
    {
      question: '¿Es obligatorio rehabilitar la fachada para pasar la ITE?',
      answer: 'La ITE evalúa el estado de conservación del edificio. Si se detectan deficiencias graves en la fachada, será obligatorio repararlas en el plazo que determine el informe para obtener la calificación favorable.'
    },
    {
      question: '¿Cuánto tiempo dura una rehabilitación de fachada?',
      answer: 'Depende del alcance de los trabajos. Una rehabilitación de fachada de un edificio de 4-6 plantas suele durar entre 6 y 12 semanas. Los trabajos puntuales pueden completarse en días.'
    },
    {
      question: '¿Se pueden rehabilitar fachadas de edificios históricos?',
      answer: 'Sí, tenemos amplia experiencia en rehabilitación de edificios con valor patrimonial. Utilizamos técnicas y materiales compatibles con las construcciones tradicionales, respetando su carácter histórico.'
    },
    {
      question: '¿Qué garantía ofrecen en la rehabilitación?',
      answer: 'Ofrecemos garantía de 10 años en impermeabilizaciones y tratamientos antihumedad, 5 años en reparaciones estructurales y 3 años en pintura y acabados, siempre que se realice el mantenimiento recomendado.'
    },
  ],
  relatedServices: [
    { name: 'Sistema SATE', href: '/servicios/sate' },
    { name: 'Trabajos Verticales', href: '/servicios/trabajos-verticales' },
    { name: 'Restauración de Patrimonio', href: '/servicios/restauracion-patrimonio' },
  ],
};

export default function RehabilitacionFachadasPage() {
  return (
    <ServiceLayout {...rehabilitacionFachadasPage}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Rehabilitación de Fachadas en Elche y Alicante',
            description: 'Servicio profesional de rehabilitación integral de fachadas para edificios residenciales y comerciales. Reparación de grietas, humedades, pintura y restauración.',
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
            serviceType: 'Rehabilitación de Fachadas'
          })
        }}
      />
    </ServiceLayout>
  );
}
