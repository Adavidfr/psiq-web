import { Section } from "../components/Section";
import evaluacionImg from "../assets/images/evaluacion.jpg";
import tratamientoImg from "../assets/images/tratamiento.jpg";
import espacioImg from "../assets/images/espacio.jpg";

function Item({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: string;
}) {
  return (
    <div className="overflow-hidden rounded-4xl border border-slate-200/80 bg-slate-50 shadow-sm">
      <div className="h-44 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold text-slate-950">{title}</h3>
        <p className="mt-3 text-sm leading-7 text-slate-700">{description}</p>
      </div>
    </div>
  );
}

export function ComoAyudo() {
  return (
    <Section
      id="salud-mental"
      title="Cómo puedo ayudarte"
    >
      <div className="grid gap-6 lg:grid-cols-3">
        <Item
          title="🧠 Evaluación clínica completa"
          description="Comprender tu historia, tus síntomas y el contexto en el que aparecen."
          image={evaluacionImg}
        />
        <Item
          title="💊 Tratamiento basado en evidencia"
          description="Uso adecuado de medicación cuando es necesario, con explicación clara y seguimiento."
          image={tratamientoImg}
        />
        <Item
          title="🗣️ Espacio de comprensión"
          description="Un lugar donde puedes hablar sin ser juzgado."
          image={espacioImg}
        />
      </div>
    </Section>
  );
}
