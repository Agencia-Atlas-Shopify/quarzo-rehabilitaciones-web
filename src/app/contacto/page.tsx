'use client';

/**
 * CONTACTO
 *
 * Reescrita en el registro del resto del sitio. La anterior iba con Futura,
 * acento arena y un pie con "© Quarzo Rehabilitaciones 2025".
 *
 * La LÓGICA del formulario se conserva tal cual estaba: envío a FormSubmit y
 * los tres filtros antispam (campo trampa, tiempo mínimo y validación). Sólo
 * cambia el aspecto. Reescribir eso sin motivo sería tirar algo que funciona.
 *
 * El MAPA apuntaba a "C/ Severo Ochoa 22, 03203 Elche" con un identificador
 * de lugar inventado (0xd63b7f3e3e3e3e3), y las coordenadas del JSON-LD caían
 * en Carrer Capità Baltasar Tristany, a más de dos kilómetros de la nave. Las
 * buenas están verificadas en src/lib/seo.ts y aquí el mapa se pide por
 * DIRECCIÓN, para que Google la resuelva y no dependa de coordenadas a mano.
 */

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Cabecera from '@/components/Cabecera';
import Pie from '@/components/Pie';
import Datos from '@/components/Datos';
import { Partido, Rotulo, useEntradas } from '@/components/quarzo';
import { grafo, localBusiness, migas, NEGOCIO, SITIO } from '@/lib/seo';

const DIRECCION = `${NEGOCIO.calle}, ${NEGOCIO.cp} ${NEGOCIO.localidad}, ${NEGOCIO.provincia}`;

const DATOS = grafo(
  {
    '@type': 'ContactPage',
    '@id': `${SITIO}/contacto#pagina`,
    url: `${SITIO}/contacto`,
    name: 'Contacto y presupuesto — Quarzo Rehabilitaciones',
    description: 'Pide presupuesto sin compromiso para la rehabilitación de tu edificio en Altea, Benidorm, Calpe, Elche o la Costa Blanca.',
    about: { '@id': `${SITIO}/#negocio` },
    inLanguage: 'es-ES',
  },
  migas([{ nombre: 'Contacto', href: '/contacto' }]),
);

const SERVICIOS = [
  'Rehabilitación de fachadas',
  'Aislamiento térmico SATE',
  'Trabajos verticales',
  'Restauración de patrimonio',
  'Otro / no lo sé todavía',
];

export default function Contacto() {
  useEntradas();

  const [formState, setFormState] = useState({
    nombre: '', email: '', telefono: '', servicio: '', mensaje: '',
    website: '',   // campo trampa: los robots lo rellenan, las personas no lo ven
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [formLoadTime, setFormLoadTime] = useState(0);

  useEffect(() => { setFormLoadTime(Date.now()); }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Campo trampa relleno: se acepta en silencio para no darle pistas al robot.
    if (formState.website) { setIsSubmitted(true); return; }

    if (Date.now() - formLoadTime < 3000) {
      setError('Por favor, tómate un momento para completar el formulario.');
      return;
    }
    if (!formState.nombre.trim() || !formState.email.trim() || !formState.mensaje.trim()) {
      setError('Por favor, completa los campos obligatorios.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      setError('Por favor, introduce un email válido.');
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch('https://formsubmit.co/ajax/joseantonio@quarzorehabilitaciones.es', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          nombre: formState.nombre,
          email: formState.email,
          telefono: formState.telefono,
          servicio: formState.servicio,
          mensaje: formState.mensaje,
          _subject: `Nueva consulta de ${formState.nombre} - Quarzo Rehabilitaciones`,
        }),
      });
      if (res.ok) setIsSubmitted(true);
      else setError('No se ha podido enviar. Llámanos al 697 10 95 83 y lo vemos.');
    } catch {
      setError('No se ha podido enviar. Llámanos al 697 10 95 83 y lo vemos.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => setFormState({ ...formState, [e.target.name]: e.target.value });

  return (
    <div className="q-pagina">
      <Datos datos={DATOS} />

      {/* El LocalBusiness completo vive en la home; aquí se repite entero
          porque es la página que Google asocia a la ficha de empresa. */}
      <Datos datos={{ '@context': 'https://schema.org', ...localBusiness() }} />

      <Cabecera derecha="Trabajos" hrefDerecha="/trabajos" />

      <main>
        <nav className="q-migas" aria-label="Migas de pan">
          <Link className="q-rot q-apag" href="/">Inicio</Link>
          <span className="q-rot q-apag" aria-hidden="true">/</span>
          <span className="q-rot">Contacto</span>
        </nav>

        <section className="q-serv-portada">
          <h1 className="q-serv-titulo">Contacto</h1>
          <p className="q-serv-sub q-it">Presupuesto sin compromiso</p>
        </section>

        <section className="q-dos" style={{ paddingTop: 'clamp(24px,3vw,48px)' }}>
          {/* --- Datos --- */}
          <div className="q-entra">
            <Rotulo>Estudio</Rotulo>
            <div className="q-datos">
              <Link className="q-dato" href={`tel:${NEGOCIO.telefono}`}>
                <Rotulo apagado>Teléfono</Rotulo>
                <span className="q-dato__v">{NEGOCIO.telefonoBonito}</span>
              </Link>
              <Link className="q-dato" href={`mailto:${NEGOCIO.email}`}>
                <Rotulo apagado>Email</Rotulo>
                <span className="q-dato__v q-dato__v--mail">{NEGOCIO.email}</span>
              </Link>
              <div className="q-dato">
                <Rotulo apagado>Dirección</Rotulo>
                <span className="q-dato__v">{NEGOCIO.calle}<br />{NEGOCIO.cp} {NEGOCIO.localidad}, {NEGOCIO.provincia}</span>
              </div>
              <div className="q-dato">
                <Rotulo apagado>Horario</Rotulo>
                <span className="q-dato__v">Lunes a viernes, 8.00 a 18.00h</span>
              </div>
              <div className="q-dato">
                <Rotulo apagado>Zona</Rotulo>
                <span className="q-dato__v">Altea · Benidorm · Calpe · Elche y toda la Costa Blanca</span>
              </div>
            </div>
          </div>

          {/* --- Formulario --- */}
          <div className="q-entra">
            {isSubmitted ? (
              <div className="q-enviado">
                <p className="q-lead">Mensaje <span className="q-it">enviado</span>.</p>
                <p className="q-nota">Te respondemos en cuanto lo veamos. Si es urgente, llámanos
                  al <Link href={`tel:${NEGOCIO.telefono}`}>{NEGOCIO.telefonoBonito}</Link>.</p>
              </div>
            ) : (
              <form className="q-form" onSubmit={handleSubmit} noValidate>
                {/* Campo trampa. Fuera de pantalla y no display:none: algunos
                    robots ignoran los que están ocultos con display. */}
                <input
                  className="q-oculto" type="text" name="website" tabIndex={-1}
                  autoComplete="off" aria-hidden="true"
                  value={formState.website} onChange={handleChange}
                />

                <label className="q-campo">
                  <Rotulo apagado>Nombre *</Rotulo>
                  <input type="text" name="nombre" required
                    value={formState.nombre} onChange={handleChange} />
                </label>

                <div className="q-campo-par">
                  <label className="q-campo">
                    <Rotulo apagado>Email *</Rotulo>
                    <input type="email" name="email" required
                      value={formState.email} onChange={handleChange} />
                  </label>
                  <label className="q-campo">
                    <Rotulo apagado>Teléfono</Rotulo>
                    <input type="tel" name="telefono"
                      value={formState.telefono} onChange={handleChange} />
                  </label>
                </div>

                <label className="q-campo">
                  <Rotulo apagado>Qué necesitas</Rotulo>
                  <select name="servicio" value={formState.servicio} onChange={handleChange}>
                    <option value="">Selecciona</option>
                    {SERVICIOS.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                </label>

                <label className="q-campo">
                  <Rotulo apagado>Cuéntanos el edificio *</Rotulo>
                  <textarea name="mensaje" rows={5} required
                    value={formState.mensaje} onChange={handleChange} />
                </label>

                {error && <p className="q-error" role="alert">{error}</p>}

                <button className="q-pildora" type="submit" disabled={isSubmitting}>
                  {isSubmitting ? 'Enviando…' : 'Enviar'}
                </button>
              </form>
            )}
          </div>
        </section>

        <Partido recto="Dónde" italica="estamos" />
        <section className="q-obra">
          <div className="q-mapa q-entra">
            {/* Por DIRECCIÓN y no por coordenadas: el mapa anterior llevaba
                unas fijas que caían en otra calle y un place-id inventado. */}
            <iframe
              src={`https://www.google.com/maps?q=${encodeURIComponent(DIRECCION)}&output=embed`}
              title={`Ubicación de Quarzo Rehabilitaciones en ${DIRECCION}`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
          <p className="q-pie3 q-entra" style={{ marginTop: 0 }}>
            <Rotulo apagado>{DIRECCION}</Rotulo>
            <span />
            <Link className="q-rot" target="_blank" rel="noopener noreferrer"
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(DIRECCION)}`}>
              Cómo llegar
            </Link>
          </p>
        </section>
      </main>

      <Pie />
    </div>
  );
}
