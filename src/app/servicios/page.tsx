import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Servicios | MAXIDRONE",
  description: "Servicios profesionales e implementación de soluciones con drones.",
};

const servicios = [
  {
    title: "Venta y configuración",
    description: "Equipos preparados de acuerdo con las necesidades de tu operación.",
  },
  {
    title: "Implementación",
    description: "Integración de flujos de trabajo para campo, industria y seguridad.",
  },
  {
    title: "Soporte técnico",
    description: "Acompañamiento para mantener tus operaciones en movimiento.",
  },
];

export default function Servicios() {
  return (
    <main className="min-h-[calc(100svh-4rem)] bg-black text-white">
      <section className="mx-auto max-w-[1400px] px-6 py-20 md:py-28">
        <p className="font-bold uppercase tracking-[0.25em] text-[#018C55]">
          Servicios
        </p>
        <h1 className="mt-5 max-w-4xl text-5xl font-black leading-tight md:text-7xl">
          Soluciones listas para
          <span className="block text-[#018C55]">tu operación</span>
        </h1>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {servicios.map((servicio) => (
            <article key={servicio.title} className="border border-white/10 bg-[#0b0e0b] p-8">
              <h2 className="text-2xl font-bold">{servicio.title}</h2>
              <p className="mt-4 leading-7 text-gray-400">{servicio.description}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
