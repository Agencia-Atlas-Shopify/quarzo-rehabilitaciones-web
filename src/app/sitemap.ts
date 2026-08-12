import { MetadataRoute } from 'next';
import { SITIO } from '@/lib/seo';

/* lastModified con fecha FIJA y no new Date(): con la fecha del build, cada
   despliegue le dice a Google que las siete páginas han cambiado, y cuando eso
   pasa siempre acaba ignorando el campo. Se sube a mano al tocar contenido. */
const TOCADO = new Date('2026-08-12');

const IMG = (n: string) => `${SITIO}/images/obra/${n}`;

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITIO, lastModified: TOCADO, changeFrequency: 'monthly', priority: 1,
      images: [IMG('sate-2.jpg'), IMG('terminado.jpg'), IMG('patologia.jpg')] },
    { url: `${SITIO}/trabajos`, lastModified: TOCADO, changeFrequency: 'monthly', priority: 0.9,
      images: [IMG('fachada.jpg'), IMG('vertical.jpg')] },
    { url: `${SITIO}/servicios/rehabilitacion-fachadas`, lastModified: TOCADO, changeFrequency: 'monthly', priority: 0.9,
      images: [IMG('terminado.jpg'), IMG('patologia.jpg'), IMG('forjado.jpg')] },
    { url: `${SITIO}/servicios/sate`, lastModified: TOCADO, changeFrequency: 'monthly', priority: 0.9,
      images: [IMG('sate-2.jpg'), IMG('sate-1.jpg')] },
    { url: `${SITIO}/servicios/trabajos-verticales`, lastModified: TOCADO, changeFrequency: 'monthly', priority: 0.8,
      images: [IMG('vertical.jpg')] },
    { url: `${SITIO}/servicios/restauracion-patrimonio`, lastModified: TOCADO, changeFrequency: 'monthly', priority: 0.8,
      images: [IMG('andamio.jpg'), IMG('forjado.jpg')] },
    { url: `${SITIO}/contacto`, lastModified: TOCADO, changeFrequency: 'yearly', priority: 0.7 },
  ];
}
