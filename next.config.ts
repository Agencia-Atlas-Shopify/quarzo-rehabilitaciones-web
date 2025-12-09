import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Exportación estática para GitHub Pages
  output: 'export',

  // Base path para GitHub Pages (nombre del repositorio)
  basePath: process.env.NODE_ENV === 'production' ? '/quarzo-rehabilitaciones-web' : '',

  // Optimización de imágenes (deshabilitada para export estático)
  images: {
    unoptimized: true,
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
    formats: ['image/avif', 'image/webp'],
  },

  // Headers de caché
  async headers() {
    return [
      {
        // Caché para assets estáticos (imágenes, fuentes, etc.)
        source: '/(.*)\\.(ico|png|jpg|jpeg|gif|svg|webp|avif|woff|woff2|ttf|ttc|otf)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // Caché para JS y CSS
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // Caché para páginas HTML (revalidar cada hora)
        source: '/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, stale-while-revalidate=86400',
          },
        ],
      },
    ];
  },

  // Compresión
  compress: true,

  // Optimizaciones de producción
  poweredByHeader: false,
};

export default nextConfig;
