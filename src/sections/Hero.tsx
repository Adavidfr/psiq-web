import { Button } from '../components/ui/Button'
import heroImg from '../assets/hero.png'

export function Hero() {
  return (
    <section id="inicio" className="overflow-hidden bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="max-w-2xl">
            <p className="mb-4 inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs uppercase tracking-[0.3em] text-slate-600">
              Atención profesional
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
              Comprender lo que te pasa es el primer paso para sentirte mejor.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700 sm:text-xl">
              Atención en psiquiatría para adolescentes y adultos jóvenes.
              Evaluación clara, tratamiento basado en evidencia y un espacio seguro para hablar de lo que estás viviendo.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button>Agendar consulta</Button>
              <Button variant="secondary">Conocer cómo puedo ayudarte</Button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-8 top-0 h-24 w-24 rounded-full bg-sky-100/70 blur-3xl" />
            <div className="relative overflow-hidden rounded-4xl border border-slate-200 bg-white shadow-[0_36px_160px_-80px_rgba(15,23,42,0.35)]">
              <img
                src={heroImg}
                alt="Espacio clínico profesional con sensación de calma"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
