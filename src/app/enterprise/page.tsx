import Image from "next/image";
import Link from "next/link";

export default function Enterprise() {
  return (
    <main>

      <section className="mx-auto max-w-[1400px] px-6 py-24">

        <Image
          src="/images/logo-enterprise.png"
          alt="MAXIDRONE Enterprise"
          width={2172}
          height={724}
          priority
          className="h-auto w-[220px] md:w-[280px]"
        />

        <p className="mt-6 font-bold uppercase tracking-[0.25em] text-[#018C55]">
          DJI Enterprise
        </p>

        <h1 className="mt-5 text-5xl font-black md:text-7xl">
          Tecnología para
          <span className="block text-[#018C55]">
            operaciones críticas
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-xl leading-8 text-gray-400">
          Soluciones para inspección, seguridad, industria,
          infraestructura y automatización.
        </p>

      </section>


      <section className="mx-auto grid max-w-[1400px] gap-6 px-6 pb-24 md:grid-cols-2 lg:grid-cols-3">

        <Link
          href="/enterprise/dock-3"
          className="rounded-2xl border border-white/10 bg-[#0b0e0b] p-7 hover:border-[#018C55]"
        >
          <div className="mb-7 flex h-52 items-center justify-center rounded-xl bg-black">
            IMAGEN DJI DOCK 3
          </div>

          <h2 className="text-2xl font-bold">
            DJI Dock 3
          </h2>

          <p className="mt-3 text-gray-500">
            Operaciones autónomas y monitoreo remoto.
          </p>
        </Link>


        <Link
          href="/enterprise/matrice-4"
          className="rounded-2xl border border-white/10 bg-[#0b0e0b] p-7 hover:border-[#018C55]"
        >

          <div className="mb-7 flex h-52 items-center justify-center rounded-xl bg-black">
            IMAGEN MATRICE 4
          </div>

          <h2 className="text-2xl font-bold">
            Matrice 4 Series
          </h2>

          <p className="mt-3 text-gray-500">
            Inspección inteligente y operaciones profesionales.
          </p>

        </Link>


        <Link
          href="/enterprise/flighthub-2"
          className="rounded-2xl border border-white/10 bg-[#0b0e0b] p-7 hover:border-[#018C55]"
        >

          <div className="mb-7 flex h-52 items-center justify-center rounded-xl bg-black">
            IMAGEN FLIGHTHUB
          </div>

          <h2 className="text-2xl font-bold">
            FlightHub 2
          </h2>

          <p className="mt-3 text-gray-500">
            Gestión y monitoreo remoto de operaciones.
          </p>

        </Link>

      </section>

    </main>
  );
}
