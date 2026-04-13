import { Button } from '../components/ui/Button'
import { Section } from '../components/Section'

export function CTA() {
  return (
    <Section id="cta" title="Dar el primer paso puede cambiar mucho.">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-2xl text-slate-700 text-base leading-8">
          Si sientes que necesitas ayuda, puedes agendar una consulta.
          Este puede ser el inicio de un proceso de comprensión y cambio.
        </p>
        <Button>Agendar consulta</Button>
      </div>
    </Section>
  )
}
