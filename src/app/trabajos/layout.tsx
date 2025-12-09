import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Trabajos | Portfolio Rehabilitación Fachadas Elche',
  description: 'Galería de proyectos de rehabilitación de fachadas, SATE, trabajos verticales y restauración de patrimonio en Elche y Alicante. Más de 30 años de experiencia.',
  keywords: ['portfolio rehabilitación fachadas', 'trabajos SATE Elche', 'proyectos rehabilitación Alicante', 'fotos trabajos verticales', 'galería restauración patrimonio'],
  openGraph: {
    title: 'Nuestros Trabajos | Quarzo Rehabilitaciones',
    description: 'Descubre nuestros proyectos de rehabilitación de fachadas en Elche y Alicante. Portfolio de más de 30 años de experiencia.',
    url: 'https://quarzorehabilitaciones.es/trabajos',
    siteName: 'Quarzo Rehabilitaciones',
    locale: 'es_ES',
    type: 'website',
  },
  alternates: {
    canonical: 'https://quarzorehabilitaciones.es/trabajos',
  },
};

export default function TrabajosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
