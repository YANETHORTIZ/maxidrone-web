import Image from "next/image";

export default function Agriculture() {
  return (
    <main>

      <section className="mx-auto max-w-[1400px] px-6 py-24">

        <Image
          src="/images/logo-agriculture.png"
          alt="MAXIDRONE Agriculture"
          width={2172}
          height={724}
          priority
          className="h-auto w-[220px] md:w-[280px]"
        />

        <p className="mt-6 font-bold uppercase tracking-[0.25em] text-[#018C55]">
          DJI Agriculture
        </p>

        <h1 className="mt-5 text-5xl font-black md:text-7xl">
          Tecnología para
          <span className="block text-[#018C55]">
            transformar el campo
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-xl text-gray-400">
          Drones agrícolas, accesorios, capacitación y soluciones
          especializadas.
        </p>

      </section>


      <section className="mx-auto grid max-w-[1400px] gap-6 px-6 pb-24 md:grid-cols-2 lg:grid-cols-3">

        {[
          "AGRAS T25P",
          "AGRAS T70P",
          "AGRAS T100",
          "Accesorios",
          "DJI Academy",
          "Soluciones Agrícolas",
        ].map((producto) => (

          <div
            key={producto}
            className="rounded-2xl border border-white/10 bg-[#0b0e0b] p-7"
          >

            <div className="mb-7 flex h-52 items-center justify-center rounded-xl bg-black text-gray-600">
              IMAGEN
            </div>

            <h2 className="text-2xl font-bold">
              {producto}
            </h2>

            <p className="mt-3 text-gray-500">
              Conocer producto y características.
            </p>

          </div>

        ))}

      </section>

    </main>
  );
}
