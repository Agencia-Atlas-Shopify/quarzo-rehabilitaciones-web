import type { Metadata, Viewport } from "next";
import "./globals.css";

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
  description: "Empresa especializada en rehabilitación de fachadas, SATE, trabajos verticales y restauración de patrimonio en Elche, Alicante y Costa Blanca. Más de 30 años de experiencia. Presupuesto gratis.",
  keywords: [
    "rehabilitación fachadas Elche",
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
    <html lang="es">
      <body>
        {children}
      </body>
    </html>
  );
}
