'use client';

/**
 * MENÚ A PANTALLA COMPLETA
 *
 * En el registro del sitio el menú no es una barra con seis enlaces: es una
 * pantalla que se abre con los mismos titulares partidos que el resto de la
 * página. Sustituye al acordeón anterior, que era de otro lenguaje.
 *
 * Funciona igual con ratón y con teclado: Esc cierra, el foco queda dentro
 * mientras está abierto y vuelve al botón que lo abrió al cerrarse. Sin eso,
 * quien navega con teclado se queda tabulando por detrás de una capa opaca.
 */

import { useEffect, useRef } from 'react';
import Link from 'next/link';

const ENLACES = [
  { texto: 'Inicio', href: '/' },
  { texto: 'Trabajos', href: '/trabajos' },
  { texto: 'Fachadas', href: '/servicios/rehabilitacion-fachadas' },
  { texto: 'SATE', href: '/servicios/sate' },
  { texto: 'Verticales', href: '/servicios/trabajos-verticales' },
  { texto: 'Patrimonio', href: '/servicios/restauracion-patrimonio' },
  { texto: 'Contacto', href: '/contacto' },
];

export default function Menu({ abierto, cerrar }: { abierto: boolean; cerrar: () => void }) {
  const capa = useRef<HTMLDivElement>(null);
  const previo = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!abierto) return;
    previo.current = document.activeElement as HTMLElement;
    document.body.classList.add('q-cargando');   // bloquea el scroll de detrás
    capa.current?.querySelector<HTMLElement>('a')?.focus();

    const teclas = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { e.preventDefault(); cerrar(); return; }
      if (e.key !== 'Tab') return;
      // Trampa de foco: el tabulador no debe salirse de la capa.
      const focos = capa.current?.querySelectorAll<HTMLElement>('a,button');
      if (!focos || !focos.length) return;
      const primero = focos[0], ultimo = focos[focos.length - 1];
      if (e.shiftKey && document.activeElement === primero) { e.preventDefault(); ultimo.focus(); }
      else if (!e.shiftKey && document.activeElement === ultimo) { e.preventDefault(); primero.focus(); }
    };
    document.addEventListener('keydown', teclas);
    return () => {
      document.removeEventListener('keydown', teclas);
      document.body.classList.remove('q-cargando');
      previo.current?.focus();
    };
  }, [abierto, cerrar]);

  return (
    <div
      className={`q-menu${abierto ? ' is-abierto' : ''}`}
      ref={capa}
      role="dialog"
      aria-modal="true"
      aria-label="Menú"
      aria-hidden={!abierto}
      // inert mientras está cerrado: si no, sus enlaces siguen siendo
      // tabulables aunque no se vean.
      {...(!abierto ? { inert: '' as unknown as boolean } : {})}
    >
      <div className="q-menu__barra">
        <span className="q-rot q-apag">Quarzo Rehabilitaciones</span>
        <button className="q-menu__cerrar q-rot" type="button" onClick={cerrar}>Cerrar</button>
      </div>

      <nav className="q-menu__lista">
        {ENLACES.map((e, i) => (
          <Link className="q-menu__enlace" href={e.href} key={e.href} onClick={cerrar}>
            <span className="q-rot q-apag">{String(i + 1).padStart(2, '0')}</span>
            <span>{e.texto}</span>
          </Link>
        ))}
      </nav>

      <div className="q-menu__pie">
        <Link className="q-rot q-rot--grande" href="tel:+34697109583">697 10 95 83</Link>
        <Link className="q-rot q-rot--grande q-apag" href="mailto:joseantonio@quarzorehabilitaciones.es">
          joseantonio@quarzorehabilitaciones.es
        </Link>
      </div>
    </div>
  );
}
