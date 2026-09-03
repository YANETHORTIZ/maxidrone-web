import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nosotros | MAXIDRONE",
  description: "Conoce el equipo y la visión de MAXIDRONE.",
};

export default function Nosotros() {
  return (
    <main className="min-h-[calc(100svh-4rem)] bg-black text-white">
      <section className="mx-auto max-w-[1400px] px-6 py-20 md:py-28">
        <p className="font-bold uppercase tracking-[0.25em] text-[#018C55]">
          Nosotros
        </p>
        <h1 className="mt-5 max-w-4xl text-5xl font-black leading-tight md:text-7xl">
          Tecnología aérea con
          <span className="block text-[#018C55]">propósito</span>
        </h1>
        <p className="mt-7 max-w-2xl text-lg leading-8 text-gray-400">
          Integramos soluciones profesionales con drones para ayudar a empresas
          y productores a operar con mayor precisión, seguridad y eficiencia.
        </p>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          <article className="border border-white/10 bg-[#0b0e0b] p-8">
            <h2 className="text-2xl font-bold">Experiencia técnica</h2>
            <p className="mt-3 leading-7 text-gray-400">
              Seleccionamos e integramos tecnología adecuada para cada operación.
            </p>
          </article>
          <article className="border border-white/10 bg-[#0b0e0b] p-8">
            <h2 className="text-2xl font-bold">Acompañamiento</h2>
            <p className="mt-3 leading-7 text-gray-400">
              Guiamos a cada cliente desde la elección del equipo hasta su uso diario.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
