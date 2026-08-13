'use client';

/**
 * SISTEMA VISUAL DE QUARZO
 *
 * Piezas compartidas por la home y, más adelante, por el resto de páginas.
 * El registro es de estudio de arquitectura, tomado de pelizzari.com y medido
 * sobre ella. Las reglas, para que nadie las rompa sin saberlo:
 *
 *   papel #f0efeb · tinta #111 · apagado #69727d
 *   TIPO      una grotesca en un solo peso + una serif ITÁLICA de contrapunto.
 *             La serif no decora: va en la segunda mitad de cada titular y
 *             sobre las palabras del párrafo que llevan el peso.
 *   TITULAR   partido a todo el ancho, grotesca izquierda + itálica derecha.
 *             Es la firma del sistema.
 *   RÓTULOS   10-11 px en mayúsculas con tracking. Único sitio con tracking.
 *   BOTONES   píldora pequeña, nunca un botón grande.
 *   FOTO      a sangre o en collage escalonado, nunca en rejilla regular.
 *   LOGOTIPO  sólo como marca (portada y barra). Es Futura Bold y pesa mucho
 *             más que el resto; si se usara en los titulares, la página se
 *             convertiría en una valla publicitaria.
 */

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

/* ------------------------------------------------------------------ *
 *  Rótulo
 * ------------------------------------------------------------------ */
export function Rotulo({
  children, apagado = false, grande = false, className = '', as: Tag = 'span',
}: {
  children: React.ReactNode; apagado?: boolean; grande?: boolean;
  className?: string; as?: React.ElementType;
}) {
  return (
    <Tag className={[grande ? 'q-rot q-rot--grande' : 'q-rot', apagado ? 'q-apag' : '', className]
      .filter(Boolean).join(' ')}>
      {children}
    </Tag>
  );
}

/* ------------------------------------------------------------------ *
 *  Titular partido
 * ------------------------------------------------------------------ */
export function Partido({ recto, italica, id }: { recto: string; italica: string; id?: string }) {
  return (
    <h2 className="q-partido q-entra" id={id}>
      <span>{recto}</span> <span className="q-it">{italica}</span>
    </h2>
  );
}

/* ------------------------------------------------------------------ *
 *  Retícula de cruces de registro
 * ------------------------------------------------------------------ */
export function Cruces() {
  return <div className="q-cruces" aria-hidden="true" />;
}

/* ------------------------------------------------------------------ *
 *  Entradas al hacer scroll
 *
 *  IntersectionObserver y no una librería de animación: son una docena de
 *  elementos y añadir una dependencia por una clase no compensa. Cada uno se
 *  deja de observar al entrar, porque nada vuelve a desaparecer al subir.
 * ------------------------------------------------------------------ */
export function useEntradas() {
  useEffect(() => {
    const piezas = document.querySelectorAll<HTMLElement>('.q-entra');
    if (!('IntersectionObserver' in window)
      || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      piezas.forEach((p) => p.classList.add('dentro'));
      return;
    }
    const ojo = new IntersectionObserver((entradas) => {
      entradas.forEach((e) => {
        if (!e.isIntersecting) return;
        e.target.classList.add('dentro');
        ojo.unobserve(e.target);
      });
    }, { rootMargin: '0px 0px -12% 0px', threshold: 0.06 });

    // Escalonado entre hermanas: no entran todas de golpe.
    piezas.forEach((p) => {
      const hermanas = Array.from(p.parentElement?.children || [])
        .filter((h) => h.classList.contains('q-entra'));
      p.style.transitionDelay = `${hermanas.indexOf(p) * 90}ms`;
      ojo.observe(p);
    });
    return () => ojo.disconnect();
  }, []);
}

/* ------------------------------------------------------------------ *
 *  Entrada de la página
 *
 *  Un recuadro centrado va pasando obras mientras crece, y al final se abre a
 *  sangre y descubre la página. La cabecera se ve desde el primer instante.
 * ------------------------------------------------------------------ */
/* Copias LIGERAS, no los originales. La entrada llegó a descargar los diez
   JPEG a tamaño completo antes de pintar nada: 13 MB de los 14,6 que pesaba la
   home. El recuadro mide como mucho 56vw x 31vh, así que con 900 px de ancho
   sobra hasta en pantalla retina. En webp y a calidad 58 las diez pesan 920 KB
   juntas. Es la diferencia entre que la animación arranque al instante o a
   los cinco segundos. */
const FOTOS_INTRO = [
  '/images/intro/cupula-vertical.webp', '/images/intro/arco-terminado.webp',
  '/images/intro/sate-2.webp', '/images/intro/armadura-techo.webp',
  '/images/intro/arco-obra.webp', '/images/intro/celosia-fachada.webp',
  '/images/intro/cupula.webp', '/images/intro/torre-plataformas.webp',
  '/images/intro/peritaje.webp', '/images/intro/arco-torre.webp',
];

export function Entrada() {
  const [fuera, setFuera] = useState(false);
  const [quitada, setQuitada] = useState(false);
  const [n, setN] = useState(0);
  const [abriendo, setAbriendo] = useState(false);
  const acabada = useRef(false);

  useEffect(() => {
    const calma = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    /* Una vez por sesión: verla cada vez que se vuelve de una ficha a la home
       cansa a la segunda. En la primera visita sí, que es cuando construye. */
    let vista = false;
    try { vista = sessionStorage.getItem('quarzo-intro') === '1'; } catch { /* modo privado */ }
    if (calma || vista) { setQuitada(true); return; }
    try { sessionStorage.setItem('quarzo-intro', '1'); } catch { /* modo privado */ }

    document.body.classList.add('q-cargando');
    /* Sólo las tres primeras por delante. Las demás dan tiempo de sobra a
       llegar mientras corre el ciclo (135 ms por foto) y así no compiten con
       la banda de la portada, que es lo que el visitante ve de verdad. */
    FOTOS_INTRO.slice(0, 3).forEach((f) => { const i = new window.Image(); i.src = f; });
    setTimeout(() => {
      FOTOS_INTRO.slice(3).forEach((f) => { const i = new window.Image(); i.src = f; });
    }, 400);

    const PASO = 135, VUELTAS = 12;
    let paso = 0;
    let reloj: ReturnType<typeof setTimeout>;

    const terminar = () => {
      if (acabada.current) return;
      acabada.current = true;
      clearTimeout(reloj);
      setAbriendo(true);
      setTimeout(() => {
        setFuera(true);
        document.body.classList.remove('q-cargando');
        setTimeout(() => setQuitada(true), 600);
      }, 620);
    };

    const tic = () => {
      paso += 1;
      setN(paso);
      if (paso >= VUELTAS) return terminar();
      reloj = setTimeout(tic, PASO);
    };
    reloj = setTimeout(tic, PASO);

    const saltar = () => terminar();
    ['pointerdown', 'keydown', 'wheel'].forEach((e) =>
      window.addEventListener(e, saltar, { once: true, passive: true }));

    return () => {
      clearTimeout(reloj);
      document.body.classList.remove('q-cargando');
      ['pointerdown', 'keydown', 'wheel'].forEach((e) => window.removeEventListener(e, saltar));
    };
  }, []);

  if (quitada) return null;

  const t = Math.min(n, 12) / 12;
  const estilo = abriendo
    ? { width: '100vw', height: '100svh' }
    : { width: `${30 + t * 26}vw`, height: `${11 + t * 20}vh` };

  return (
    <div className={`q-intro${fuera ? ' is-fuera' : ''}`} aria-hidden="true">
      <div className={`q-intro__caja${abriendo ? ' is-abriendo' : ''}`} style={estilo}>
        {/* Sin next/image a propósito: cambian cada 135 ms y lo que importa es
            que estén ya en caché, no que el optimizador las procese una a una
            —eso añadiría diez peticiones a /_next/image en el peor momento. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={FOTOS_INTRO[n % FOTOS_INTRO.length]} alt="" />
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ *
 *  Barra
 *
 *  La marca arranca escondida: mientras se ve el logotipo gigante de la
 *  portada sobra, y encima compite con él. Aparece cuando la portada se va.
 * ------------------------------------------------------------------ */
export function Barra({ onMenu }: { onMenu: () => void }) {
  const [marcaVisible, setMarcaVisible] = useState(false);

  useEffect(() => {
    const gigante = document.querySelector('.q-portada');
    if (!gigante || !('IntersectionObserver' in window)) { setMarcaVisible(true); return; }
    const ojo = new IntersectionObserver(([e]) => setMarcaVisible(!e.isIntersecting), { threshold: 0 });
    ojo.observe(gigante);
    return () => ojo.disconnect();
  }, []);

  return (
    <header className="q-barra">
      <Link className="q-barra__tel q-rot" href="tel:+34697109583">697 10 95 83</Link>

      {/* visibility además de opacity: sólo con opacity el enlace seguiría
          siendo tabulable estando invisible. */}
      <Link
        className={`q-barra__marca${marcaVisible ? ' is-visible' : ''}`}
        href="/"
        aria-label="Quarzo Rehabilitaciones — inicio"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="q-barra__logo" src="/logo-linea-blanco.svg" alt="" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="q-barra__logo q-barra__logo--apilado" src="/logo.svg" alt="" />
      </Link>

      <button className="q-barra__menu q-rot" type="button" onClick={onMenu} aria-expanded={false}>
        Menú
      </button>
    </header>
  );
}

/* ------------------------------------------------------------------ *
 *  Foto de obra
 *
 *  Envuelve next/image para no repetir `sizes` en cada llamada y para que
 *  ninguna se quede sin él: sin `sizes`, Next sirve la variante más grande a
 *  todo el mundo y la optimización no sirve de nada.
 * ------------------------------------------------------------------ */
export function Foto({
  src, alt, ratio, sizes, prioridad = false, className = '',
}: {
  src: string; alt: string; ratio: string; sizes: string;
  prioridad?: boolean; className?: string;
}) {
  return (
    <span className={`q-foto ${className}`} style={{ aspectRatio: ratio }}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={prioridad}
        quality={75}
        style={{ objectFit: 'cover' }}
      />
    </span>
  );
}

/* ------------------------------------------------------------------ *
 *  Comparador antes / después
 *
 *  Estuvo montado y sin usar durante un tiempo porque las únicas dos fotos
 *  disponibles eran de EDIFICIOS DISTINTOS, y una pareja falsa aquí es
 *  publicidad engañosa. Con la tanda de fotos del 13/08/2026 llegó por fin
 *  una pareja de verdad: el mismo edificio desde la calle, con los medios
 *  auxiliares montados y ya terminado.
 * ------------------------------------------------------------------ */
export function Comparador({ antes, despues, pie }: { antes: string; despues: string; pie: string }) {
  const caja = useRef<HTMLDivElement>(null);
  const tirador = useRef<HTMLSpanElement>(null);
  const arrastrando = useRef(false);

  const poner = (pct: number) => {
    const v = Math.max(0, Math.min(100, pct));
    caja.current?.style.setProperty('--corte', `${v}%`);
    tirador.current?.setAttribute('aria-valuenow', String(Math.round(v)));
  };
  const desdeX = (x: number) => {
    const c = caja.current?.getBoundingClientRect();
    if (c) poner(((x - c.left) / c.width) * 100);
  };

  return (
    <section className="q-comparar">
      <div
        className="q-ab q-entra"
        ref={caja}
        style={{ ['--corte' as string]: '50%' }}
        onPointerDown={(e) => { arrastrando.current = true; e.currentTarget.setPointerCapture(e.pointerId); desdeX(e.clientX); }}
        onPointerMove={(e) => { if (arrastrando.current) desdeX(e.clientX); }}
        onPointerUp={() => { arrastrando.current = false; }}
        onPointerCancel={() => { arrastrando.current = false; }}
      >
        <Foto src={antes} alt="Antes de la intervención" ratio="16/9" sizes="100vw" />
        <span className="q-ab__b"><Foto src={despues} alt="Después de la intervención" ratio="16/9" sizes="100vw" /></span>
        <span className="q-ab__et q-ab__et--a q-rot">Antes</span>
        <span className="q-ab__et q-ab__et--b q-rot">Después</span>
        <span className="q-ab__linea">
          {/* Con teclado también: es la única pieza interactiva de la sección. */}
          <span
            className="q-ab__tir"
            ref={tirador}
            tabIndex={0}
            role="slider"
            aria-label="Comparar el antes y el después de la fachada"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={50}
            onKeyDown={(e) => {
              const actual = parseFloat(caja.current?.style.getPropertyValue('--corte') || '50');
              const paso = e.shiftKey ? 10 : 2;
              const mapa: Record<string, number> = {
                ArrowRight: actual + paso, ArrowLeft: actual - paso, Home: 0, End: 100,
              };
              if (!(e.key in mapa)) return;
              e.preventDefault();
              poner(mapa[e.key]);
            }}
          >↔</span>
        </span>
      </div>
      <div className="q-pie3 q-entra">
        <Rotulo apagado>{pie}</Rotulo>
        <span />
        <Rotulo apagado>Arrastra</Rotulo>
      </div>
    </section>
  );
}
