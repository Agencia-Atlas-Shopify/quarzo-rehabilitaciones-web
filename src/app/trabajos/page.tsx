'use client';

/**
 * TRABAJOS
 *
 * Reescrita en el registro del resto del sitio. La anterior iba sobre fondo
 * negro, con Futura, acento arena y un pie con "© Quarzo Rehabilitaciones
 * 2025": era la única página que quedaba del diseño viejo junto con contacto.
 *
 * Las obras se agrupan por TIPO DE TRABAJO y no con nombre de edificio, año
 * ni municipio: no tenemos esos datos y en un borrador anterior me los
 * inventé. En cuanto Quarzo los pase, van al array OBRAS y salen solos.
 */

import { useState } from 'react';
import Link from 'next/link';
import Cabecera from '@/components/Cabecera';
import Pie from '@/components/Pie';
import Datos from '@/components/Datos';
import { Foto, Partido, Rotulo, useEntradas } from '@/components/quarzo';
import { grafo, migas, SITIO } from '@/lib/seo';

const OBRAS = [
  { foto: '/images/obra/cupula-vertical.jpg', tipo: 'Verticales', servicio: '/servicios/trabajos-verticales',
    alt: 'Técnico de Quarzo trabajando desde cuerda sobre una cúpula dorada' },
  { foto: '/images/obra/arco-terminado.jpg', tipo: 'Patrimonio', servicio: '/servicios/restauracion-patrimonio',
    alt: 'Arco de un edificio de arquitectura mediterránea, ya restaurado' },
  { foto: '/images/obra/sate-2.jpg', tipo: 'SATE', servicio: '/servicios/sate',
    alt: 'Edificio a media intervención: media fachada con el ladrillo original y media con el aislamiento colocado' },
  { foto: '/images/obra/armadura-techo.jpg', tipo: 'Fachadas', servicio: '/servicios/rehabilitacion-fachadas',
    alt: 'Techo con el revestimiento caído y la armadura del forjado a la vista' },
  { foto: '/images/obra/arco-obra.jpg', tipo: 'Patrimonio', servicio: '/servicios/restauracion-patrimonio',
    alt: 'Arco de un edificio mediterráneo durante la intervención, con el andamio montado' },
  { foto: '/images/obra/celosia-fachada.jpg', tipo: 'Fachadas', servicio: '/servicios/rehabilitacion-fachadas',
    alt: 'Fachada con celosías cerámicas y ventana en arco, ya rehabilitada' },
  { foto: '/images/obra/cupula.jpg', tipo: 'Patrimonio', servicio: '/servicios/restauracion-patrimonio',
    alt: 'Cúpula dorada de un edificio, vista desde abajo' },
  { foto: '/images/obra/torre-plataformas.jpg', tipo: 'Verticales', servicio: '/servicios/trabajos-verticales',
    alt: 'Torre de viviendas con las plataformas de trabajo montadas en la fachada' },
  { foto: '/images/obra/peritaje.jpg', tipo: 'Fachadas', servicio: '/servicios/rehabilitacion-fachadas',
    alt: 'Armadura vista y marcas azules de peritaje sobre el hormigón picado' },
  { foto: '/images/obra/arco-torre.jpg', tipo: 'Patrimonio', servicio: '/servicios/restauracion-patrimonio',
    alt: 'Arco y torre del edificio, terminados tras la restauración' },
  { foto: '/images/obra/armadura-viga.jpg', tipo: 'Fachadas', servicio: '/servicios/rehabilitacion-fachadas',
    alt: 'Viga con el recubrimiento desprendido y la armadura oxidada a la vista' },
  { foto: '/images/obra/arco-obra-2.jpg', tipo: 'Patrimonio', servicio: '/servicios/restauracion-patrimonio',
    alt: 'Andamio montado bajo los arcos durante los trabajos de restauración' },
  { foto: '/images/obra/torre-residencial.jpg', tipo: 'Verticales', servicio: '/servicios/trabajos-verticales',
    alt: 'Torre residencial intervenida en altura' },
  { foto: '/images/obra/armadura-canto.jpg', tipo: 'Fachadas', servicio: '/servicios/rehabilitacion-fachadas',
    alt: 'Canto de forjado con la armadura vista, junto a una celosía cerámica' },
  { foto: '/images/obra/patio-torre.jpg', tipo: 'Patrimonio', servicio: '/servicios/restauracion-patrimonio',
    alt: 'Patio interior del edificio con la torre al fondo, terminado' },
  { foto: '/images/obra/grieta.jpg', tipo: 'Fachadas', servicio: '/servicios/rehabilitacion-fachadas',
    alt: 'Grieta y desprendimiento del revestimiento en una fachada' },
  { foto: '/images/obra/cubierta.jpg', tipo: 'Patrimonio', servicio: '/servicios/restauracion-patrimonio',
    alt: 'Cubierta deteriorada con la cúpula al fondo, antes de intervenir' },
  { foto: '/images/obra/arco-interior.jpg', tipo: 'Patrimonio', servicio: '/servicios/restauracion-patrimonio',
    alt: 'Arco interior del edificio, ya terminado' },
  { foto: '/images/obra/sate-1.jpg', tipo: 'SATE', servicio: '/servicios/sate',
    alt: 'Panel de aislamiento térmico por el exterior fijado sobre la fachada existente' },
  { foto: '/images/obra/terminado.jpg', tipo: 'Fachadas', servicio: '/servicios/rehabilitacion-fachadas',
    alt: 'Bloque residencial con la fachada rehabilitada, revoco y pintura nuevos' },
];

const FILTROS = ['Todos', 'Fachadas', 'SATE', 'Verticales', 'Patrimonio'];

const DATOS = grafo(
  {
    '@type': 'CollectionPage',
    '@id': `${SITIO}/trabajos#pagina`,
    url: `${SITIO}/trabajos`,
    name: 'Trabajos de rehabilitación ejecutados',
    description: 'Obras de rehabilitación de fachadas, aislamiento SATE, trabajos verticales y restauración ejecutadas por Quarzo Rehabilitaciones en Altea, Benidorm, Calpe, Elche y la Costa Blanca.',
    isPartOf: { '@id': `${SITIO}/#sitio` },
    about: { '@id': `${SITIO}/#negocio` },
  },
  {
    '@type': 'ImageGallery',
    name: 'Obras ejecutadas',
    image: OBRAS.map((o) => ({ '@type': 'ImageObject', contentUrl: `${SITIO}${o.foto}`, caption: o.alt })),
  },
  migas([{ nombre: 'Trabajos', href: '/trabajos' }]),
);

export default function Trabajos() {
  const [filtro, setFiltro] = useState('Todos');
  useEntradas();

  const visibles = filtro === 'Todos' ? OBRAS : OBRAS.filter((o) => o.tipo === filtro);

  return (
    <div className="q-pagina">
      <Datos datos={DATOS} />
      <Cabecera />

      <main>
        <nav className="q-migas" aria-label="Migas de pan">
          <Link className="q-rot q-apag" href="/">Inicio</Link>
          <span className="q-rot q-apag" aria-hidden="true">/</span>
          <span className="q-rot">Trabajos</span>
        </nav>

        <section className="q-serv-portada">
          <h1 className="q-serv-titulo">Trabajos</h1>
          <p className="q-serv-sub q-it">Obras ejecutadas</p>
        </section>

        {/* Filtros. Son <button> y no enlaces: no cambian de página, sólo
            filtran lo que ya está cargado. */}
        <div className="q-filtros">
          {FILTROS.map((f) => (
            <button
              className={`q-filtro q-rot${filtro === f ? ' is-activo' : ''}`}
              type="button"
              key={f}
              onClick={() => setFiltro(f)}
              aria-pressed={filtro === f}
            >
              {f}
            </button>
          ))}
        </div>

        <section className="q-obra">
          <div className="q-rejilla">
            {visibles.map((o, i) => (
              <Link className="q-pieza" href={o.servicio} key={o.foto + i}>
                <Foto src={o.foto} alt={o.alt} ratio="4/3"
                  sizes="(max-width:860px) 100vw, 33vw" prioridad={i < 3} />
                <span className="q-pieza__pie">
                  <Rotulo apagado>{String(i + 1).padStart(2, '0')}</Rotulo>
                  <Rotulo>{o.tipo}</Rotulo>
                  <Rotulo apagado className="q-pieza__ver">Ver servicio</Rotulo>
                </span>
              </Link>
            ))}
          </div>
        </section>

        <Partido recto="Cuéntanos" italica="tu edificio" />
        <section className="q-cierre">
          <Link className="q-cierre__mail q-entra" href="mailto:joseantonio@quarzorehabilitaciones.es">
            joseantonio@quarzorehabilitaciones.es
          </Link>
          <div className="q-cierre__fila q-entra">
            <Rotulo grande className="q-cierre__tel"><Link href="tel:+34697109583">697 10 95 83</Link></Rotulo>
            <Rotulo grande apagado>Altea · Benidorm · Calpe · Elche</Rotulo>
            <Rotulo grande apagado>Presupuesto sin compromiso</Rotulo>
          </div>
        </section>
      </main>

      <Pie />
    </div>
  );
}
