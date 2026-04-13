import { Section } from '../components/Section'

export function Sintomas() {
  return (
    <Section id="atencion-clinica" title="Tal vez te estás sintiendo así…">
      <ul className="space-y-3 text-slate-700 text-sm leading-7">
        <li>Ansiedad constante o sensación de que algo malo va a pasar</li>
        <li>Episodios de pánico o dificultad para respirar</li>
        <li>Dificultad para dormir o descansar</li>
        <li>Cansancio emocional o falta de motivación</li>
        <li>Pensamientos que no puedes detener</li>
        <li>Cambios en tu estado de ánimo</li>
        <li>Sensación de estar perdido o sobrepasado</li>
      </ul>
      <p className="mt-8 text-sm font-medium text-slate-900">
        No estás exagerando. Lo que sientes tiene una explicación y puede ser tratado.
      </p>
    </Section>
  )
}
