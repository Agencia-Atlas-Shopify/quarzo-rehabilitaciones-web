import Link from 'next/link';
import { NEGOCIO } from '@/lib/seo';

/**
 * Pie único de todo el sitio. Antes había tres: el de la home, el de las
 * páginas de servicio y uno viejo con "© Quarzo Rehabilitaciones 2025" que
 * seguía en trabajos y contacto. El año a mano es además una bomba de
 * relojería: cada 1 de enero la web se queda desfasada sola.
 */
export default function Pie() {
  return (
    <footer className="q-pie">
      <span className="q-rot">{NEGOCIO.razonSocial}</span>
      <Link className="q-rot" href={`tel:${NEGOCIO.telefono}`}>{NEGOCIO.telefonoBonito}</Link>
      <span className="q-rot">Altea · Benidorm · Calpe · Elche</span>
      {/* Obligación del convenio de la ayuda, no un adorno. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="q-pie__sello"
        src="/images/kit-digital-next-generation.png"
        alt="Kit Digital — Financiado por la Unión Europea, Next Generation EU"
      />
    </footer>
  );
}
