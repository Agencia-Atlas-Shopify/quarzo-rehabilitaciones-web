import { MetadataRoute } from 'next';
import { SITIO } from '@/lib/seo';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/', disallow: ['/api/', '/_next/static/chunks/'] },
      /* Los rastreadores de IA generativa se dejan pasar a propósito: para una
         empresa local, salir citada en una respuesta de ChatGPT o Perplexity
         cuando alguien pregunta por rehabilitación en Elche vale más que el
         tráfico que se pierde. Si algún día se decide lo contrario, se
         bloquean aquí por nombre. */
    ],
    sitemap: `${SITIO}/sitemap.xml`,
    host: SITIO,
  };
}
