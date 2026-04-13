import { Button } from './ui/Button'

export function Footer() {
  return (
    <footer id="contacto" className="border-t border-slate-200/80 bg-white/95 text-slate-700">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-4 text-sm leading-7">
            <p className="font-semibold text-slate-950">Atención presencial / virtual</p>
            <p>Ciudad</p>
            <p>
              <a className="text-slate-900 underline transition hover:text-slate-700" href="https://wa.me/1234567890" target="_blank" rel="noreferrer">
                WhatsApp
              </a>
            </p>
            <p>
              <a className="text-slate-900 underline transition hover:text-slate-700" href="mailto:contacto@clinicaejemplo.com">
                Correo
              </a>
            </p>
          </div>
          <div className="rounded-4xl bg-slate-50 p-6 text-sm leading-7 text-slate-700 shadow-sm">
            <p className="font-semibold text-slate-950">Este sitio no reemplaza atención de emergencia.</p>
            <p className="mt-3">En caso de crisis o riesgo inmediato, acude a un servicio de urgencias.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
