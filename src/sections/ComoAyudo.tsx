import { Section } from '../components/Section'

function Item({ title, description }: { title: string; description: string }) {
  return (
    <div className="rounded-4xl border border-slate-200/80 bg-slate-50 p-6">
      <h3 className="text-lg font-semibold text-slate-950">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-700">{description}</p>
    </div>
  )
}

export function ComoAyudo() {
  return (
    <Section id="salud-mental" title="Cómo puedo ayudarte">
      <div className="grid gap-6 lg:grid-cols-3">
        <Item
          title="🧠 Evaluación clínica completa"
          description="Comprender tu historia, tus síntomas y el contexto en el que aparecen."
        />
        <Item
          title="💊 Tratamiento basado en evidencia"
          description="Uso adecuado de medicación cuando es necesario, con explicación clara y seguimiento."
        />
        <Item
          title="🗣️ Espacio de comprensión"
          description="Un lugar donde puedes hablar sin ser juzgado."
        />
      </div>
    </Section>
  )
}
