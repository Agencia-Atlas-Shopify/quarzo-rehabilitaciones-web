/**
 * SEO — datos estructurados (schema.org) en un solo sitio.
 *
 * Antes cada página se escribía su JSON-LD a mano y el resultado era: cinco
 * LocalBusiness distintos repetidos, ningún FAQPage a pesar de que las cuatro
 * páginas de servicio tienen seis preguntas cada una, y ninguna migaja de pan.
 * Eso son tres tipos de resultado enriquecido que Google podía estar
 * enseñando y no enseñaba.
 *
 * Aquí vive el negocio UNA vez y cada página compone lo suyo a partir de él.
 * Todo lo que hay es verificable: dirección, teléfono, horario y zona salen
 * del JSON-LD que ya tenía la web. NO hay valoraciones ni número de reseñas:
 * inventarlas es motivo de penalización manual de Google, además de mentira.
 */

export const SITIO = 'https://quarzorehabilitaciones.es';

export const NEGOCIO = {
  nombre: 'Quarzo Rehabilitaciones',
  razonSocial: 'Quarzo Rehabilitaciones SLU',
  telefono: '+34697109583',
  telefonoBonito: '697 10 95 83',
  email: 'joseantonio@quarzorehabilitaciones.es',
  calle: 'Carrer Inca, 40',
  localidad: 'Elx',
  provincia: 'Alicante',
  cp: '03206',
  pais: 'ES',
  lat: 38.2623889,
  lon: -0.7088889,
  /* Los cuatro primeros son los que se enseñan en la web; el resto siguen
     declarados para el buscador. Altea y Calpe no estaban y son búsquedas
     locales con valor propio. */
  zonas: ['Altea', 'Benidorm', 'Calpe', 'Elche', 'Alicante', 'Santa Pola',
    'Crevillente', 'Novelda', 'Aspe', 'Orihuela', 'Torrevieja', 'Costa Blanca'],
  redes: ['https://www.instagram.com/quarzorehabilitaciones'],
  logo: `${SITIO}/logo-dark.svg`,
  imagen: `${SITIO}/images/obra/sate-2.jpg`,
};

/** El negocio. Se referencia por @id desde el resto para no repetirlo. */
export function localBusiness() {
  return {
    '@type': ['LocalBusiness', 'HomeAndConstructionBusiness', 'GeneralContractor'],
    '@id': `${SITIO}/#negocio`,
    name: NEGOCIO.nombre,
    legalName: NEGOCIO.razonSocial,
    url: SITIO,
    logo: NEGOCIO.logo,
    image: NEGOCIO.imagen,
    telephone: NEGOCIO.telefono,
    email: NEGOCIO.email,
    description:
      'Empresa de rehabilitación de fachadas, aislamiento térmico SATE, trabajos '
      + 'verticales y restauración de patrimonio en Elche, Alicante y la Costa Blanca. '
      + 'Más de 30 años de experiencia sobre edificio habitado.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: NEGOCIO.calle,
      addressLocality: NEGOCIO.localidad,
      addressRegion: NEGOCIO.provincia,
      postalCode: NEGOCIO.cp,
      addressCountry: NEGOCIO.pais,
    },
    geo: { '@type': 'GeoCoordinates', latitude: NEGOCIO.lat, longitude: NEGOCIO.lon },
    openingHoursSpecification: [{
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '18:00',
    }],
    areaServed: NEGOCIO.zonas.map((z) => ({ '@type': 'City', name: z })),
    priceRange: '€€',
    currenciesAccepted: 'EUR',
    sameAs: NEGOCIO.redes,
    /* El catálogo enseña a Google todo lo que hace la empresa desde cualquier
       página, no sólo desde la que está viendo. */
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Servicios de rehabilitación',
      itemListElement: SERVICIOS.map((s) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: s.nombre, url: `${SITIO}${s.href}` },
      })),
    },
  };
}

export const SERVICIOS = [
  { nombre: 'Rehabilitación de fachadas', href: '/servicios/rehabilitacion-fachadas' },
  { nombre: 'Aislamiento térmico SATE', href: '/servicios/sate' },
  { nombre: 'Trabajos verticales', href: '/servicios/trabajos-verticales' },
  { nombre: 'Restauración de patrimonio', href: '/servicios/restauracion-patrimonio' },
];

/** Migas de pan. Google las pinta bajo el título en vez de la URL cruda. */
export function migas(ruta: { nombre: string; href: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: [{ nombre: 'Inicio', href: '/' }, ...ruta].map((r, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: r.nombre,
      item: `${SITIO}${r.href === '/' ? '' : r.href}`,
    })),
  };
}

/** Preguntas frecuentes. Es el resultado enriquecido más rentable que hay
 *  aquí: ocupa el triple de alto en la página de resultados. Requiere que las
 *  preguntas estén VISIBLES en la página, no sólo en el JSON-LD. */
export function faqPage(faqs: { question: string; answer: string }[]) {
  return {
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };
}

export function servicio({
  nombre, descripcion, href, tipo, imagen,
}: { nombre: string; descripcion: string; href: string; tipo: string; imagen: string }) {
  return {
    '@type': 'Service',
    '@id': `${SITIO}${href}#servicio`,
    name: nombre,
    description: descripcion,
    serviceType: tipo,
    url: `${SITIO}${href}`,
    image: `${SITIO}${imagen}`,
    provider: { '@id': `${SITIO}/#negocio` },
    areaServed: NEGOCIO.zonas.map((z) => ({ '@type': 'City', name: z })),
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: `${SITIO}/contacto`,
      servicePhone: NEGOCIO.telefono,
    },
  };
}

/** Un solo bloque @graph por página: es lo que recomienda Google frente a
 *  meter cuatro <script> sueltos, y permite enlazar las piezas por @id. */
export function grafo(...piezas: object[]) {
  return { '@context': 'https://schema.org', '@graph': piezas.filter(Boolean) };
}
