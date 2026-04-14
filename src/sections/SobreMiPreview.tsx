import { Button } from "../components/ui/Button";
import aboutMeImg from "../assets/images/aboutMe.jpg";

export function SobreMiPreview() {
  return (
    <div
      id="sobre-mi"
      className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8"
    >
      <div className="rounded-4xl border border-slate-200/80 bg-white p-8 shadow-sm sm:p-10">
        <h2 className="text-2xl font-semibold text-slate-950 sm:text-3xl mb-8">
          Sobre mí
        </h2>
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-4 text-slate-700 text-base leading-8">
            <p>
              Soy médica psiquiatra enfocada en el abordaje de la salud mental
              en adolescentes y adultos jóvenes.
            </p>
            <p>
              Mi trabajo combina la medicina basada en evidencia con una
              comprensión profunda de la experiencia emocional de cada paciente.
            </p>
            <p>
              Creo en una psiquiatría clara, respetuosa y humana, donde entender
              lo que te ocurre es tan importante como tratarlo.
            </p>
            <div className="mt-8">
              <Button variant="secondary">Conocer más</Button>
            </div>
          </div>
          <div className="relative inline-block overflow-hidden rounded-4xl">
            <img
              src={aboutMeImg}
              alt="Profesional psiquiatra"
              className="block max-w-full h-auto max-h-80 "
            />

            {/* Fade en bordes (más natural tipo vignette) */}
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute inset-0 rounded-4xl shadow-[inset_0_0_80px_rgba(255,255,255,0.6)]" />

              {/* degradado suave en bordes */}
              <div className="absolute inset-0 rounded-4xl bg-[radial-gradient(circle,rgba(255,255,255,0)_60%,rgba(255,255,255,0.6)_100%)]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
