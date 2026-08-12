'use client';

import Link from 'next/link';

/**
 * Cabecera de las páginas internas. La marca va SIEMPRE visible aquí (a
 * diferencia de la home, donde espera a que se vaya el logotipo gigante), y
 * en la versión blanca porque la barra entera está en mix-blend-mode
 * difference: con la negra desaparecería sobre las fotos oscuras.
 */
export default function Cabecera({ derecha = 'Presupuesto', hrefDerecha = '/contacto' }:
  { derecha?: string; hrefDerecha?: string }) {
  return (
    <header className="q-barra">
      <Link className="q-barra__tel q-rot" href="/">← Inicio</Link>
      <Link className="q-barra__marca is-visible" href="/" aria-label="Quarzo Rehabilitaciones — inicio">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="q-barra__logo" src="/logo-linea-blanco.svg" alt="" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="q-barra__logo q-barra__logo--apilado" src="/logo.svg" alt="" />
      </Link>
      <Link className="q-barra__menu q-rot" href={hrefDerecha}>{derecha}</Link>
    </header>
  );
}
