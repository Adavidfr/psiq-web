import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { Hero } from '../sections/Hero'
import { SobreMiPreview } from '../sections/SobreMiPreview'
import { Sintomas } from '../sections/Sintomas'
import { ComoAyudo } from '../sections/ComoAyudo'
import { CuandoBuscarAyuda } from '../sections/CuandoBuscarAyuda'
import { PrimeraConsulta } from '../sections/PrimeraConsulta'
import { CTA } from '../sections/CTA'

export default function Page() {
  return (
    <div className="bg-slate-50 text-slate-950">
      <Navbar />
      <main className="pt-28">
        <Hero />
        <SobreMiPreview />
        <Sintomas />
        <ComoAyudo />
        <CuandoBuscarAyuda />
        <PrimeraConsulta />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
