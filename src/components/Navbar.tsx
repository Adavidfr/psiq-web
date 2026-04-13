import { useState } from 'react'
import { Button } from './ui/Button'

const navItems = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Sobre mí', href: '#sobre-mi' },
  { label: 'Atención clínica', href: '#atencion-clinica' },
  { label: 'Salud mental', href: '#salud-mental' },
  { label: 'Adolescentes', href: '#adolescentes' },
  { label: 'Familias', href: '#familias' },
  { label: 'Contacto', href: '#contacto' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <a href="#inicio" className="font-semibold tracking-tight text-slate-950">
          Clínica de Confianza
        </a>

        <nav className="hidden items-center gap-8 text-sm text-slate-700 md:flex">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="transition hover:text-slate-950">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button>Agendar consulta</Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white p-2 text-slate-700 transition hover:border-slate-300 hover:text-slate-950 md:hidden"
          aria-label="Menú"
        >
          <span className="text-lg">☰</span>
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-200/80 bg-white/95 px-4 py-4 md:hidden">
          <div className="space-y-3 text-sm text-slate-700">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="block rounded-2xl px-3 py-2 transition hover:bg-slate-100">
                {item.label}
              </a>
            ))}
            <Button className="w-full">Agendar consulta</Button>
          </div>
        </div>
      )}
    </header>
  )
}
