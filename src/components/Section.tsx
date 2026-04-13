import type { ReactNode } from 'react'

type SectionProps = {
  id?: string
  title?: string
  children: ReactNode
  className?: string
}

export function Section({ id, title, children, className = '' }: SectionProps) {
  return (
    <section id={id} className={`mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 ${className}`}>
      <div className="rounded-4xl border border-slate-200/80 bg-white p-8 shadow-sm sm:p-10">
        {title && <h2 className="text-2xl font-semibold text-slate-950 sm:text-3xl">{title}</h2>}
        <div className="mt-6 text-slate-700">{children}</div>
      </div>
    </section>
  )
}
