'use client';

/**
 * PÁGINA DE SERVICIO
 *
 * Mismo registro que la home (ver quarzo.tsx). Lo que cambia respecto a la
 * versión anterior, además del estilo:
 *
 *  · Las FOTOS son de obra propia. Antes eran de Unsplash: diecinueve imágenes
 *    de edificios ajenos presentadas como trabajo de Quarzo. Eso no es una
 *    cuestión de gusto, es lo que un cliente considera engaño cuando lo
 *    descubre, y Google lo lee como contenido genérico.
 *  · Emite los DATOS ESTRUCTURADOS de la página: Service, FAQPage y migas de
 *    pan, en un único @graph. El FAQPage no existía y es el resultado
 *    enriquecido más rentable de todos: las seis preguntas ya estaban escritas
 *    y visibles, sólo faltaba declararlas.
 *  · Las preguntas van en <details> nativo, no en un acordeón con estado. Se
 *    puede abrir sin JavaScript, el buscador del navegador encuentra el texto
 *    de dentro y Google lo indexa igual.
 */

import React from 'react';
import Link from 'next/link';
import { Foto, Partido, Rotulo, useEntradas } from './quarzo';
import { faqPage, grafo, migas, servicio, SITIO } from '@/lib/seo';

export interface ServiceLayoutProps {
  title: string;
  subtitle: string;
  description: string;
  heroImage: string;
  heroAlt: string;
  slug: string;
  tipoServicio: string;
  benefits: string[];
  process: { step: string; title: string; description: string }[];
  gallery: { src: string; alt: string }[];
  faqs: { question: string; answer: string }[];
  relatedServices: { name: string; href: string }[];
}

export default function ServiceLayout({
  title, subtitle, description, heroImage, heroAlt, slug, tipoServicio,
  benefits, process, gallery, faqs, relatedServices,
}: ServiceLayoutProps) {
  useEntradas();

  const datos = grafo(
    servicio({ nombre: title, descripcion: description, href: slug, tipo: tipoServicio, imagen: heroImage }),
    faqPage(faqs),
    migas([{ nombre: 'Servicios', href: '/servicios' }, { nombre: title, href: slug }]),
    {
      '@type': 'WebPage',
      '@id': `${SITIO}${slug}#pagina`,
      url: `${SITIO}${slug}`,
      name: title,
      description,
      isPartOf: { '@id': `${SITIO}/#sitio` },
      primaryImageOfPage: { '@type': 'ImageObject', url: `${SITIO}${heroImage}`, caption: heroAlt },
    },
  );

  return (
    <div className="q-pagina">
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(datos) }} />

      <header className="q-barra">
        <Link className="q-barra__tel q-rot" href="/">← Inicio</Link>
        <Link className="q-barra__marca is-visible" href="/" aria-label="Quarzo Rehabilitaciones — inicio">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="q-barra__logo" src="/logo-linea-blanco.svg" alt="" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="q-barra__logo q-barra__logo--apilado" src="/logo.svg" alt="" />
        </Link>
        <Link className="q-barra__menu q-rot" href="/contacto">Presupuesto</Link>
      </header>

      <main>
        {/* Migas visibles, no sólo en el JSON-LD: Google pide que lo que
            declaras esté también en la página. */}
        <nav className="q-migas" aria-label="Migas de pan">
          <Link className="q-rot q-apag" href="/">Inicio</Link>
          <span className="q-rot q-apag" aria-hidden="true">/</span>
          <span className="q-rot">{title}</span>
        </nav>

        <section className="q-serv-portada">
          <h1 className="q-serv-titulo">{title}</h1>
          <p className="q-serv-sub q-it">{subtitle}</p>
        </section>

        <section className="q-banda">
          <Foto src={heroImage} alt={heroAlt} ratio="16/9" sizes="100vw" prioridad />
        </section>

        <section className="q-dos" style={{ paddingTop: 'clamp(52px,9vw,150px)' }}>
          <div className="q-entra"><Rotulo>El servicio</Rotulo></div>
          <p className="q-lead q-entra" style={{ maxWidth: '34ch' }}>{description}</p>
        </section>

        {/* ---------- Por qué ---------- */}
        <Partido recto="Por" italica="qué" />
        <section className="q-obra">
          <ul className="q-pasos q-entra">
            {benefits.map((b, i) => (
              <li className="q-paso" key={b}>
                <Rotulo apagado className="q-paso__n">{String(i + 1).padStart(2, '0')}</Rotulo>
                <p className="q-paso__d" style={{ marginTop: 0, maxWidth: '68ch' }}>{b}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* ---------- Cómo ---------- */}
        <Partido recto="Cómo" italica="se hace" />
        <section className="q-obra">
          <ol className="q-pasos q-entra">
            {process.map((p) => (
              <li className="q-paso" key={p.step}>
                <Rotulo apagado className="q-paso__n">{p.step}</Rotulo>
                <div>
                  <div className="q-paso__t">{p.title}</div>
                  <p className="q-paso__d">{p.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* ---------- Obra ---------- */}
        {gallery.length > 0 && (
          <>
            <Partido recto="Obra" italica="ejecutada" />
            <section className="q-obra">
              <div className="q-rejilla">
                {gallery.map((g, i) => (
                  <div className="q-entra" key={g.src + i}>
                    <Foto src={g.src} alt={g.alt} ratio="4/3" sizes="(max-width:860px) 100vw, 33vw" />
                  </div>
                ))}
              </div>
            </section>
          </>
        )}

        {/* ---------- Preguntas ---------- */}
        <Partido recto="Preguntas" italica="frecuentes" />
        <section className="q-obra">
          <div className="q-faqs q-entra">
            {faqs.map((f) => (
              <details className="q-faq" key={f.question}>
                <summary className="q-faq__p">
                  <span>{f.question}</span>
                  <span className="q-faq__mas" aria-hidden="true">+</span>
                </summary>
                <p className="q-faq__r">{f.answer}</p>
              </details>
            ))}
          </div>
        </section>

        {/* ---------- Otros servicios ---------- */}
        <Partido recto="Otros" italica="servicios" />
        <section className="q-obra">
          <div className="q-pasos q-entra">
            {relatedServices.map((s, i) => (
              <Link className="q-paso q-otro" href={s.href} key={s.href}>
                <Rotulo apagado className="q-paso__n">{String(i + 1).padStart(2, '0')}</Rotulo>
                <span className="q-paso__t">{s.name}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* ---------- Cierre ---------- */}
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

      <footer className="q-pie">
        <Rotulo>Quarzo Rehabilitaciones SLU</Rotulo>
        <Rotulo>Altea · Benidorm · Calpe · Elche</Rotulo>
      </footer>
    </div>
  );
}
