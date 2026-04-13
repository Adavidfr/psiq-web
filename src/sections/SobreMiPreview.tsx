import { Button } from '../components/ui/Button'
import { Section } from '../components/Section'

export function SobreMiPreview() {
  return (
    <Section id="sobre-mi" title="Sobre mí">
      <div className="space-y-4 text-slate-700 text-base leading-8">
        <p>Soy médica psiquiatra enfocada en el abordaje de la salud mental en adolescentes y adultos jóvenes.</p>
        <p>Mi trabajo combina la medicina basada en evidencia con una comprensión profunda de la experiencia emocional de cada paciente.</p>
        <p>Creo en una psiquiatría clara, respetuosa y humana, donde entender lo que te ocurre es tan importante como tratarlo.</p>
      </div>
      <div className="mt-8">
        <Button variant="secondary">Conocer más</Button>
      </div>
    </Section>
  )
}
