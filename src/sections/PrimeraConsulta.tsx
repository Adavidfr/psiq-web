import { Section } from "../components/Section";

export function PrimeraConsulta() {
  return (
    <Section
      id="familias"
      title="¿Cómo es la primera consulta?"
    >
      <div className="space-y-4 text-slate-700 text-sm leading-7">
        <p>
          Es un espacio para conocerte, entender qué estás viviendo y comenzar a
          orientar el proceso.
        </p>
        <p>Hablaremos de tus síntomas, tu historia y lo que te preocupa.</p>
        <p>
          Si es necesario, se planteará un plan de tratamiento claro y adaptado
          a ti.
        </p>
      </div>
      <p className="mt-8 text-sm font-medium text-slate-900">
        Puedes venir con dudas. No necesitas tener todo claro.
      </p>
    </Section>
  );
}
