import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Optimización de imágenes
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'quarzorehabilitaciones.es',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
    /* webp primero y avif después: avif comprime algo más pero tarda mucho
       más en codificarse, y en Railway ese coste lo paga el PRIMER visitante
       de cada tamaño. Con webp delante, la primera visita es bastante más
       rápida y la diferencia de peso es pequeña.
       minimumCacheTTL a 30 días: por defecto son 60 segundos y el optimizador
       reprocesaba la misma foto una y otra vez. */
    formats: ['image/webp'],
    minimumCacheTTL: 2592000,
    qualities: [70, 75, 82],
  },

  // Headers de caché optimizados
  async headers() {
    return [
      {
        // Caché largo para assets estáticos de Next.js (tienen hash en el nombre)
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // Caché largo para imágenes, fuentes, etc.
        source: '/:path*.(ico|png|jpg|jpeg|gif|svg|webp|avif|woff|woff2|ttf|otf)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // Caché para páginas HTML
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=0, s-maxage=86400, stale-while-revalidate=86400',
          },
        ],
      },
    ];
  },

  // Deshabilitar polyfills para navegadores antiguos
  experimental: {
    optimizePackageImports: ['framer-motion', 'lucide-react'],
  },

  // Compresión
  compress: true,

  // Optimizaciones de producción
  poweredByHeader: false,
};

export default nextConfig;
