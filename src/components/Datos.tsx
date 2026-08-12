/**
 * Inyecta un bloque de datos estructurados. Un componente y no JSON pegado en
 * cada página: así el escapado y el formato son iguales en todas y no hay que
 * acordarse de dangerouslySetInnerHTML cada vez.
 */
export default function Datos({ datos }: { datos: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(datos) }}
    />
  );
}
