import { Section } from '../components/Section'

export function CuandoBuscarAyuda() {
  return (
    <Section id="adolescentes" title="¿Cuándo es momento de buscar ayuda?">
      <ul className="space-y-3 text-slate-700 text-sm leading-7">
        <li>Cuando lo que sientes interfiere con tu vida diaria</li>
        <li>Cuando llevas tiempo sintiéndote mal y no mejora</li>
        <li>Cuando ya no sabes cómo manejar lo que te pasa</li>
        <li>Cuando tu forma de pensar o sentir ha cambiado</li>
        <li>Cuando sientes que estás perdiendo el control</li>
      </ul>
      <p className="mt-8 text-sm font-medium text-slate-900">
        No necesitas estar “muy mal” para pedir ayuda.
      </p>
    </Section>
  )
}
