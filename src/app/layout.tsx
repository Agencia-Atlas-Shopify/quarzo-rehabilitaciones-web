import type { Metadata, Viewport } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";

/* Tipografías del sistema. La referencia usa Suisse Intl + Suisse Works, que
   son de pago; estos dos son los sustitutos libres con el mismo color de
   página. Se sirven desde el propio dominio (next/font las descarga en el
   build), así que no hay petición a Google en tiempo de ejecución ni el aviso
   de cookies que eso arrastraría. */
const grotesca = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--fuente-sans",
  display: "swap",
});
const italica = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: "italic",
  variable: "--fuente-serif",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  themeColor: "#E6E5E1",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://quarzorehabilitaciones.es"),
  title: {
    default: "Quarzo Rehabilitaciones | Rehabilitación de Fachadas en Elche y Alicante",
    template: "%s | Quarzo Rehabilitaciones",
  },
  description: "Empresa especializada en rehabilitación de fachadas, SATE, trabajos verticales y restauración de patrimonio en Altea, Benidorm, Calpe, Elche y toda la Costa Blanca. Más de 30 años de experiencia. Presupuesto gratis.",
  keywords: [
    "rehabilitación fachadas Altea",
    "rehabilitación fachadas Benidorm",
    "rehabilitación fachadas Calpe",
    "rehabilitación fachadas Elche",
    "SATE Benidorm",
    "SATE Calpe",
    "rehabilitación edificios Altea",
    "rehabilitación edificios Alicante",
    "SATE Elche",
    "trabajos verticales Alicante",
    "restauración patrimonio Elche",
    "aislamiento térmico exterior",
    "reparación fachadas",
    "rehabilitación edificios Costa Blanca",
    "empresa rehabilitación Alicante",
  ],
  authors: [{ name: "Quarzo Rehabilitaciones" }],
  creator: "Quarzo Rehabilitaciones",
  publisher: "Quarzo Rehabilitaciones",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://quarzorehabilitaciones.es",
    siteName: "Quarzo Rehabilitaciones",
    title: "Quarzo Rehabilitaciones | Rehabilitación de Fachadas en Elche y Alicante",
    description: "Especialistas en rehabilitación de fachadas, SATE, trabajos verticales y restauración de patrimonio. Más de 30 años de experiencia en Elche y Alicante.",
    images: [
      {
        url: "https://www.quarzorehabilitaciones.es/images/trabajos/IMG_4136-scaled.webp",
        width: 1200,
        height: 630,
        alt: "Quarzo Rehabilitaciones - Rehabilitación de Fachadas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Quarzo Rehabilitaciones | Rehabilitación de Fachadas",
    description: "Especialistas en rehabilitación de fachadas en Elche y Alicante",
    images: ["https://www.quarzorehabilitaciones.es/images/trabajos/IMG_4136-scaled.webp"],
  },
  alternates: {
    canonical: "https://quarzorehabilitaciones.es",
  },
  verification: {
    google: "google-site-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${grotesca.variable} ${italica.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
