import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto | MAXIDRONE",
  description: "Contacta a MAXIDRONE para diseñar una solución para tu operación.",
};

export default function Contacto() {
  return (
    <main className="min-h-[calc(100svh-4rem)] bg-black text-white">
      <section className="mx-auto max-w-[1400px] px-6 py-20 md:py-28">
        <p className="font-bold uppercase tracking-[0.25em] text-[#018C55]">
          Contacto
        </p>
        <h1 className="mt-5 max-w-4xl text-5xl font-black leading-tight md:text-7xl">
          Hablemos de
          <span className="block text-[#018C55]">tu proyecto</span>
        </h1>
        <p className="mt-7 max-w-2xl text-lg leading-8 text-gray-400">
          Cuéntanos qué necesitas resolver. Nuestro equipo te ayudará a identificar
          la tecnología y el servicio adecuados para tu operación.
        </p>

        <div className="mt-14 max-w-2xl border border-white/10 bg-[#0b0e0b] p-8 md:p-10">
          <h2 className="text-2xl font-bold">MAXIDRONE</h2>
          <p className="mt-4 leading-7 text-gray-400">
            Atención especializada para agricultura, industria, inspección,
            seguridad y automatización.
          </p>
        </div>
      </section>
    </main>
  );
}
