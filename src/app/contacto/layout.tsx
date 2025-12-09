import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contacto | Presupuesto Gratis Rehabilitación Fachadas Elche',
  description: 'Solicita presupuesto gratis para rehabilitación de fachadas en Elche y Alicante. Contacta con Quarzo Rehabilitaciones. Respuesta en 24h. Teléfono: 697 10 95 83',
  keywords: ['presupuesto rehabilitación fachadas', 'contacto Quarzo', 'presupuesto SATE Elche', 'empresa rehabilitación Alicante contacto', 'presupuesto trabajos verticales'],
  openGraph: {
    title: 'Contacto | Quarzo Rehabilitaciones',
    description: 'Solicita presupuesto gratis para rehabilitación de fachadas en Elche y Alicante. Respuesta en 24 horas.',
    url: 'https://quarzorehabilitaciones.es/contacto',
    siteName: 'Quarzo Rehabilitaciones',
    locale: 'es_ES',
    type: 'website',
  },
  alternates: {
    canonical: 'https://quarzorehabilitaciones.es/contacto',
  },
};

export default function ContactoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
