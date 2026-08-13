'use client';

/**
 * HOME
 *
 * Registro de estudio de arquitectura (ver src/components/quarzo.tsx para las
 * reglas del sistema). Sustituye a la versión anterior, que tenía el estilo
 * bien pero dos secciones vacías de ~1.700 px y la lista de trabajos sin una
 * sola fotografía, en una empresa cuyo producto es visual.
 *
 * CONTENIDO — lo que hay aquí es verificable y nada más:
 *   · Los servicios y la zona salen de la web anterior y de sus páginas de
 *     servicio, que siguen publicadas.
 *   · Las obras se rotulan por TIPO DE TRABAJO, no con nombre de edificio,
 *     año ni municipio: Quarzo no nos ha dado esos datos y en un borrador
 *     anterior me los inventé. Cuando los pase, van al array OBRAS.
 *   · El comparador antes/después NO está montado: las fotos disponibles son
 *     de edificios distintos y una pareja falsa es publicidad engañosa. El
 *     componente está listo en quarzo.tsx para el día que haya una pareja
 *     real del mismo edificio desde el mismo punto.
 *   · Las cifras de m², edificios o siniestralidad tampoco están, por lo
 *     mismo. Es lo que más convence en este sector; hay que pedírselas.
 */

import { useState } from 'react';
import Link from 'next/link';
import {
  Barra, Comparador, Cruces, Entrada, Foto, Partido, Rotulo, useEntradas,
} from '@/components/quarzo';
import Menu from '@/components/Menu';
import { grafo, localBusiness, migas, NEGOCIO, SERVICIOS, SITIO } from '@/lib/seo';

/* Datos estructurados de la home. Un solo @graph con el negocio, el sitio y
   la organización enlazados por @id, en vez de tres <script> repitiendo la
   misma ficha. Es lo que recomienda Google y lo que permite que las páginas
   de servicio referencien al negocio sin volver a describirlo. */
const DATOS = grafo(
  localBusiness(),
  {
    '@type': 'WebSite',
    '@id': `${SITIO}/#sitio`,
    url: SITIO,
    name: NEGOCIO.nombre,
    inLanguage: 'es-ES',
    publisher: { '@id': `${SITIO}/#negocio` },
  },
  {
    '@type': 'Organization',
    '@id': `${SITIO}/#organizacion`,
    name: NEGOCIO.razonSocial,
    url: SITIO,
    logo: { '@type': 'ImageObject', url: NEGOCIO.logo },
    telephone: NEGOCIO.telefono,
    email: NEGOCIO.email,
    sameAs: NEGOCIO.redes,
  },
  {
    '@type': 'WebPage',
    '@id': `${SITIO}/#pagina`,
    url: SITIO,
    name: 'Quarzo Rehabilitaciones | Rehabilitación de fachadas en Elche y Alicante',
    isPartOf: { '@id': `${SITIO}/#sitio` },
    about: { '@id': `${SITIO}/#negocio` },
    primaryImageOfPage: { '@type': 'ImageObject', url: NEGOCIO.imagen },
  },
  migas([]),
  {
    '@type': 'ItemList',
    name: 'Servicios de rehabilitación',
    itemListElement: SERVICIOS.map((s, i) => ({
      '@type': 'ListItem', position: i + 1, name: s.nombre, url: `${SITIO}${s.href}`,
    })),
  },
);

/* Cada obra apunta a la página de servicio que le corresponde. Antes eran
   siete enlaces a "#", y un enlace muerto en la sección que enseña el trabajo
   es peor que no tener la sección. */
/* Cuatro edificios DISTINTOS, uno por servicio. El conjunto de la cúpula da
   fotos muy buenas, pero salía en la banda de portada, en el collage y en dos
   de las cuatro tarjetas: la home parecía la web de un solo edificio.
   La cúpula se queda donde más pesa, en la banda, y las tarjetas enseñan otras
   obras. Aquí también estaba repetida la misma foto en banda y en tarjeta. */
const OBRAS = [
  { foto: '/images/obra/vertical.jpg', titulo: 'Trabajos verticales', href: '/servicios/trabajos-verticales',
    alt: 'Operario trabajando en vertical sobre la fachada de un edificio, sin andamio' },
  { foto: '/images/obra/sate-2.jpg', titulo: 'Aislamiento térmico SATE', href: '/servicios/sate',
    alt: 'Edificio a media intervención: media fachada con el ladrillo original y media con el aislamiento colocado' },
  { foto: '/images/obra/andamio.jpg', titulo: 'Restauración de patrimonio', href: '/servicios/restauracion-patrimonio',
    alt: 'Edificio con el andamio montado durante los trabajos de restauración' },
  { foto: '/images/obra/terminado.jpg', titulo: 'Rehabilitación de fachada', href: '/servicios/rehabilitacion-fachadas',
    alt: 'Bloque residencial con la fachada rehabilitada, revoco y pintura nuevos' },
];

const PASOS = [
  { t: 'Diagnóstico', d: 'Se revisa el edificio y se identifica qué le está pasando: humedades, desprendimientos, armaduras vistas, puentes térmicos.' },
  { t: 'Proyecto y presupuesto', d: 'Sistema, plazo y precio cerrados por escrito antes de montar un solo andamio.' },
  { t: 'Tramitación de ayudas', d: 'Las subvenciones de rehabilitación energética se piden antes de empezar la obra. Acompañamos a la comunidad en el trámite.' },
  { t: 'Ejecución', d: 'Sobre edificio habitado, coordinando accesos y ruidos con los vecinos y con el administrador.' },
  { t: 'Entrega y garantía', d: 'Documentación de lo ejecutado y garantía de los sistemas instalados.' },
];

export default function Home() {
  const [menu, setMenu] = useState(false);
  useEntradas();

  return (
    <div className="q-pagina">
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(DATOS) }} />
      <Cruces />
      <Entrada />
      <Barra onMenu={() => setMenu(true)} />
      <Menu abierto={menu} cerrar={() => setMenu(false)} />

      <main>
        {/* ---------- Portada ---------- */}
        <section className="q-portada">
          <div style={{ width: '100%' }}>
            {/* El nombre es el LOGOTIPO, no tipografía compuesta. Va en pila
                justificada: cada palabra estirada a todo el ancho por
                separado. El texto accesible viaja en el alt. */}
            <h1 style={{ margin: 0 }}>
              {/* El H1 es el elemento con más peso de la página y estaba VACÍO
                  de texto: sólo llevaba las dos imágenes del logotipo. Ahora
                  lleva la frase que de verdad se busca, escondida a la vista
                  pero leída por Google y por un lector de pantalla, y el
                  logotipo queda como lo que es, una imagen decorativa. */}
              <span className="q-oculto">
                Rehabilitación de fachadas en Elche y Alicante — Quarzo Rehabilitaciones
              </span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="q-marca" src="/logo-quarzo.svg" alt="" aria-hidden="true" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="q-marca" src="/logo-rehabilitaciones.svg" alt="" aria-hidden="true" />
            </h1>
            <div className="q-portada__pie">
              <Rotulo grande>Rehabilitación de fachadas</Rotulo>
              <Rotulo grande apagado>Altea · Benidorm · Calpe · Elche</Rotulo>
              <Rotulo grande apagado>Más de 30 años</Rotulo>
            </div>
          </div>
        </section>

        {/* ---------- Banda a sangre ----------
            La foto es un edificio a media intervención: media fachada con el
            ladrillo original y media ya con el aislamiento puesto. Es el
            antes y el después dentro del mismo encuadre, y aquí sí es cierto
            porque es un solo edificio en una sola fotografía. */}
        <section className="q-banda">
          {/* La foto es vertical (1200x1600) y el técnico está en el tercio
              alto. Con el recorte centrado desaparecía justo él, que es lo
              único que cuenta la historia; con "top" salía solo cielo. El 22%
              es el punto medido: entra la figura entera, el remate y la masa
              de la cúpula, y la escalera que da la escala. */}
          <Foto
            src="/images/obra/cupula-vertical.jpg"
            alt="Técnico de Quarzo trabajando desde cuerda sobre la cúpula dorada de un edificio"
            ratio="16/9"
            sizes="100vw"
            prioridad
            encuadre="center 22%"
          />
          <div className="q-banda__srv">
            <Rotulo>Fachadas</Rotulo>
            <Rotulo>SATE</Rotulo>
            <Rotulo>Patrimonio</Rotulo>
          </div>
        </section>

        {/* ---------- Qué le pasa a un edificio ---------- */}
        <Partido recto="Sobre" italica="los edificios" />
        <div className="q-collage">
          <div className="q-entra q-c1">
            <Foto src="/images/obra/armadura-techo.jpg" ratio="3/4" sizes="(max-width:860px) 50vw, 25vw"
              alt="Techo con el revestimiento caído y la armadura del forjado a la vista" />
          </div>
          <div className="q-entra q-c2">
            <Foto src="/images/obra/arco-obra.jpg" ratio="4/5" sizes="(max-width:860px) 100vw, 34vw"
              alt="Arco de un edificio mediterráneo durante la intervención, con el andamio montado" />
          </div>
          <div className="q-entra q-c3">
            <Foto src="/images/obra/arco-interior.jpg" ratio="3/4" sizes="(max-width:860px) 50vw, 25vw"
              alt="Arco interior del edificio ya restaurado, enmarcando la torre al fondo" />
          </div>
        </div>

        {/* ---------- Obras ---------- */}
        <Partido recto="Obras" italica="seleccionadas" id="obras" />
        <section className="q-obra">
          <div className="q-fila q-fila--baja">
            {OBRAS.slice(0, 2).map((o) => (
              <Link className="q-pieza q-entra" href={o.href} key={o.titulo}>
                <Foto src={o.foto} alt={o.alt} ratio="4/3" sizes="(max-width:860px) 100vw, 46vw" />
                <span className="q-pieza__pie">
                  <Rotulo apagado>Servicio</Rotulo>
                  <Rotulo>{o.titulo}</Rotulo>
                  <Rotulo apagado className="q-pieza__ver">Ver</Rotulo>
                </span>
              </Link>
            ))}
          </div>
          <div className="q-fila">
            {OBRAS.slice(2).map((o) => (
              <Link className="q-pieza q-entra" href={o.href} key={o.titulo}>
                <Foto src={o.foto} alt={o.alt} ratio="4/3" sizes="(max-width:860px) 100vw, 46vw" />
                <span className="q-pieza__pie">
                  <Rotulo apagado>Servicio</Rotulo>
                  <Rotulo>{o.titulo}</Rotulo>
                  <Rotulo apagado className="q-pieza__ver">Ver</Rotulo>
                </span>
              </Link>
            ))}
          </div>
          <div className="q-centrado q-entra">
            <Link className="q-pildora q-pildora--hueca" href="/trabajos">Ver todos los trabajos</Link>
          </div>
        </section>

        {/* ---------- Antes y después ----------
            Por fin una pareja REAL: el mismo edificio desde la calle, con el
            montacargas y el andamio montados en la primera y terminado en la
            segunda. Hasta ahora el comparador estaba sin usar porque las dos
            fotos que había eran de edificios distintos. */}
        <Partido recto="Antes" italica="y después" />
        <Comparador
          antes="/images/obra/ab-antes.jpg"
          despues="/images/obra/ab-despues.jpg"
          pie="Rehabilitación de fachada"
        />

        {/* ---------- Ayudas ----------
            La razón por la que una comunidad se decide a rehabilitar AHORA y
            no dentro de cinco años. No estaba en la web anterior. Se habla del
            trámite, no de importes ni de plazos: las convocatorias cambian y
            poner una cifra aquí es garantizarse que quede desfasada. */}
        <Partido recto="Ayudas" italica="y subvenciones" />
        <section className="q-dos">
          <div className="q-entra">
            <p className="q-lead">
              La rehabilitación energética está <span className="q-it">subvencionada</span>.
              El trámite se hace antes de empezar la obra.
            </p>
            <div className="q-nota">
              <p>
                Las ayudas a la rehabilitación de edificios se solicitan con el proyecto
                en la mano y antes del inicio de los trabajos, no después. Es el error
                más caro que puede cometer una comunidad.
              </p>
              <p>
                Acompañamos a la comunidad y al administrador durante todo el proceso:
                qué documentación hace falta, qué exige la convocatoria vigente y en qué
                orden hay que hacer las cosas.
              </p>
            </div>
            <div style={{ marginTop: 'clamp(20px,3vw,44px)' }}>
              <Link className="q-pildora" href="/contacto">Consultar mi caso</Link>
            </div>
          </div>
          <div className="q-entra">
            <Foto src="/images/obra/torre-plataformas.jpg" ratio="4/3" sizes="(max-width:860px) 100vw, 52vw"
              alt="Torre de viviendas con las plataformas de trabajo montadas en la fachada" />
          </div>
        </section>

        {/* ---------- Método ---------- */}
        <Partido recto="Saber" italica="hacer" id="metodo" />
        <section className="q-dos">
          <div className="q-entra">
            <p className="q-lead">
              Quarzo trabaja sobre <span className="q-it">edificios existentes y habitados</span>.
            </p>
            <div className="q-nota">
              <p>
                Cada intervención empieza por entender cómo está construido el edificio y
                qué le ha pasado. De ahí salen el diagnóstico, el sistema y el plazo,
                y no al revés. Es la diferencia entre tapar una fachada y rehabilitarla.
              </p>
            </div>
          </div>
          <ol className="q-pasos q-entra">
            {PASOS.map((p, i) => (
              <li className="q-paso" key={p.t}>
                <Rotulo apagado className="q-paso__n">{String(i + 1).padStart(2, '0')}</Rotulo>
                <div>
                  <div className="q-paso__t">{p.t}</div>
                  <p className="q-paso__d">{p.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* ---------- Cierre ---------- */}
        <Partido recto="Cuéntanos" italica="tu edificio" id="contacto" />
        <section className="q-cierre">
          <Link className="q-cierre__mail q-entra" href="mailto:joseantonio@quarzorehabilitaciones.es">
            joseantonio@quarzorehabilitaciones.es
          </Link>
          <div className="q-cierre__fila q-entra">
            <Rotulo grande className="q-cierre__tel">
              <Link href="tel:+34697109583">697 10 95 83</Link>
            </Rotulo>
            <Rotulo grande apagado>Altea · Benidorm · Calpe · Elche</Rotulo>
            <Rotulo grande apagado>Presupuesto sin compromiso</Rotulo>
          </div>
        </section>
      </main>

      <footer className="q-pie">
        <Rotulo>Quarzo Rehabilitaciones SLU</Rotulo>
        <Rotulo>Altea · Benidorm · Calpe · Elche</Rotulo>
        {/* El sello de Kit Digital estaba en la home anterior y lo había
            perdido al rehacerla. No es decoración: quien recibe esa ayuda está
            OBLIGADO por convenio a exhibir el reconocimiento de financiación
            durante el periodo que marque la resolución. Se queda. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="q-pie__sello"
          src="/images/kit-digital-next-generation.png"
          alt="Kit Digital — Financiado por la Unión Europea, Next Generation EU"
        />
      </footer>
    </div>
  );
}
