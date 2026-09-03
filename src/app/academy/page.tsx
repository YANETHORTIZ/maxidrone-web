import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DJI Academy | MAXIDRONE",
  description: "Capacitación profesional para operaciones con drones DJI.",
};

const programas = [
  "Operación segura",
  "Aplicación agrícola",
  "Flujos DJI Enterprise",
];

export default function Academy() {
  return (
    <main className="min-h-[calc(100svh-4rem)] bg-black text-white">
      <section className="mx-auto max-w-[1400px] px-6 py-20 md:py-28">
        <p className="font-bold uppercase tracking-[0.25em] text-[#018C55]">
          DJI Academy
        </p>
        <h1 className="mt-5 max-w-4xl text-5xl font-black leading-tight md:text-7xl">
          Capacitación para operar
          <span className="block text-[#018C55]">con confianza</span>
        </h1>
        <p className="mt-7 max-w-2xl text-lg leading-8 text-gray-400">
          Programas de formación para desarrollar habilidades prácticas y aprovechar
          cada herramienta de tu ecosistema DJI.
        </p>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {programas.map((programa) => (
            <article key={programa} className="border border-white/10 bg-[#0b0e0b] p-8">
              <div className="mb-6 h-1 w-12 bg-[#018C55]" />
              <h2 className="text-xl font-bold">{programa}</h2>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
