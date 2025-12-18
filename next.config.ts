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
    formats: ['image/avif', 'image/webp'],
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
