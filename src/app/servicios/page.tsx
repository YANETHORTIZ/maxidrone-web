"use client";

import { useState } from "react";

type ServiceId =
  | "topografia"
  | "fumigacion"
  | "inspeccion"
  | "desarrollo";

type Service = {
  id: ServiceId;
  number: string;
  shortName: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  label: string;
  applications: string[];
  benefits: string[];
};

const services: Service[] = [
  {
    id: "topografia",
    number: "01",
    shortName: "Topografía",
    title: "Levantamientos topográficos",
    subtitle: "Datos precisos para decisiones de ingeniería.",
    description:
      "Realizamos levantamientos aéreos para generación de información geoespacial, documentación de terreno, modelos digitales y seguimiento de proyectos. Cada operación se diseña de acuerdo con el área, precisión requerida y objetivo del cliente.",
    image: "/images/servicios/topografia.gif",
    label: "Geoespacial",
    applications: [
      "Ortomosaicos",
      "Modelos digitales",
      "Curvas de nivel",
      "Cálculo de superficies",
      "Volumetrías",
      "Seguimiento de obra",
    ],
    benefits: [
      "Cobertura rápida de grandes superficies",
      "Información visual y georreferenciada",
      "Reducción de trabajo manual en campo",
      "Entregables adaptados al proyecto",
    ],
  },

  {
    id: "fumigacion",
    number: "02",
    shortName: "Fumigación",
    title: "Fumigación agrícola",
    subtitle: "Aplicaciones aéreas más eficientes y precisas.",
    description:
      "Desarrollamos operaciones de aplicación agrícola con drones DJI AGRAS, adaptando parámetros de vuelo y aplicación de acuerdo con el cultivo, superficie y características particulares de cada proyecto.",
    image: "/images/servicios/fumigacion.gif",
    label: "Agricultura",
    applications: [
      "Aspersión",
      "Fertilización",
      "Aplicaciones foliares",
      "Cultivos extensivos",
      "Frutales",
      "Aplicación localizada",
    ],
    benefits: [
      "Aplicación uniforme",
      "Mayor capacidad operativa",
      "Acceso a terrenos complejos",
      "Planeación de misiones",
    ],
  },

  {
    id: "inspeccion",
    number: "03",
    shortName: "Inspección",
    title: "Inspección de infraestructura",
    subtitle: "Observa activos críticos desde otra perspectiva.",
    description:
      "Utilizamos drones y sensores especializados para inspeccionar tuberías, gasoductos, oleoductos e infraestructura industrial, reduciendo la exposición del personal y facilitando la documentación de activos difíciles de alcanzar.",
    image: "/images/servicios/inspeccion.gif",
    label: "Infraestructura",
    applications: [
      "Tuberías",
      "Gasoductos",
      "Oleoductos",
      "Infraestructura industrial",
      "Torres",
      "Instalaciones críticas",
    ],
    benefits: [
      "Acceso a zonas complejas",
      "Documentación aérea",
      "Seguimiento periódico",
      "Información para análisis técnico",
    ],
  },

  {
    id: "desarrollo",
    number: "04",
    shortName: "Desarrollo",
    title: "Desarrollo de soluciones",
    subtitle: "Drones, software y automatización para tu operación.",
    description:
      "Diseñamos soluciones especializadas cuando una operación necesita algo más que un vuelo. Integramos drones, captura de datos, software y automatización para desarrollar herramientas adaptadas a las necesidades específicas de cada cliente.",
    image: "/images/servicios/desarrollo.gif",
    label: "Software + Drones",
    applications: [
      "Automatización",
      "Plataformas web",
      "Procesamiento de datos",
      "Integraciones",
      "Monitoreo",
      "Flujos personalizados",
    ],
    benefits: [
      "Desarrollo a la medida",
      "Integración con operaciones existentes",
      "Automatización de procesos",
      "Soluciones escalables",
    ],
  },
];

export default function ServiciosPage() {
  const [selectedId, setSelectedId] =
    useState<ServiceId>("topografia");

  const selected =
    services.find((service) => service.id === selectedId) ??
    services[0];

  const scrollTo = (id: string) => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const selectService = (id: ServiceId) => {
    setSelectedId(id);

    setTimeout(() => {
      document
        .getElementById("servicios")
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
    }, 50);
  };

  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">

      {/* ====================================================== */}
      {/* NAV */}
      {/* ====================================================== */}

      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/90 backdrop-blur-xl">
        <div className="mx-auto flex h-[68px] max-w-[1440px] items-center justify-between px-6 sm:px-10 lg:px-14">

          <button
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="flex items-center gap-3"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15">
              <span className="text-xs font-bold">
                M
              </span>
            </div>

            <div className="text-left">
              <p className="text-xs font-semibold tracking-[0.08em]">
                MAXIDRONE
              </p>

              <p className="mt-[2px] text-[8px] uppercase tracking-[0.25em] text-white/30">
                Servicios
              </p>
            </div>
          </button>

          <nav className="hidden items-center gap-7 lg:flex">
            <button
              onClick={() => scrollTo("servicios")}
              className="text-xs font-medium text-white/45 transition hover:text-white"
            >
              Servicios
            </button>

            <button
              onClick={() => scrollTo("metodologia")}
              className="text-xs font-medium text-white/45 transition hover:text-white"
            >
              Cómo trabajamos
            </button>

            <button
              onClick={() => scrollTo("soluciones")}
              className="text-xs font-medium text-white/45 transition hover:text-white"
            >
              Desarrollo
            </button>

            <button
              onClick={() => scrollTo("contacto")}
              className="rounded-full bg-white px-5 py-2.5 text-xs font-semibold text-black transition hover:bg-white/85"
            >
              Solicitar proyecto
            </button>
          </nav>

          <button
            onClick={() => scrollTo("contacto")}
            className="rounded-full bg-white px-4 py-2 text-[11px] font-semibold text-black lg:hidden"
          >
            Contacto
          </button>
        </div>
      </header>

      {/* ====================================================== */}
      {/* HERO */}
      {/* ====================================================== */}

      <section className="border-b border-white/10 bg-black">
        <div className="mx-auto grid max-w-[1440px] lg:grid-cols-[0.9fr_1.1fr]">

          {/* TEXTO */}
          <div className="flex min-h-[560px] flex-col justify-center px-6 py-12 sm:px-10 lg:px-14">

            <div className="flex items-center gap-3">
              <span className="h-px w-9 bg-white/35" />

              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/35">
                Servicios especializados
              </p>
            </div>

            <h1 className="mt-6 max-w-[700px] text-[50px] font-semibold leading-[0.92] tracking-[-0.06em] sm:text-[66px] lg:text-[78px]">
              Tecnología aérea
              <span className="block text-white/25">
                aplicada a tu operación.
              </span>
            </h1>

            <p className="mt-6 max-w-[580px] text-sm leading-6 text-white/45 sm:text-base sm:leading-7">
              Integramos drones, sensores, información y
              desarrollo tecnológico para resolver necesidades
              específicas de cada proyecto.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">

              <button
                onClick={() => scrollTo("servicios")}
                className="group flex items-center gap-4 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition hover:bg-white/85"
              >
                Explorar servicios

                <span className="transition group-hover:translate-x-1">
                  →
                </span>
              </button>

              <button
                onClick={() => scrollTo("contacto")}
                className="rounded-full border border-white/15 px-6 py-3.5 text-sm font-semibold text-white/60 transition hover:border-white/30 hover:text-white"
              >
                Tengo un proyecto
              </button>

            </div>
          </div>

          {/* IMAGEN HERO */}
          <div className="relative min-h-[420px] overflow-hidden bg-[#090909] lg:min-h-[560px]">

            {/*
              IMAGEN:
              public/images/servicios/hero-servicios.jpg
            */}

            <div
              className="absolute inset-0 bg-cover bg-center opacity-75"
              style={{
                backgroundImage:
                  "url('/images/servicios/hero-servicios.png')",
              }}
            />

            <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/10 to-black/10" />

            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/20" />

            <div className="absolute left-6 top-6 rounded-full border border-white/15 bg-black/50 px-4 py-2 backdrop-blur">
              <p className="text-[9px] uppercase tracking-[0.2em] text-white/60">
                Ingeniería · Datos · Automatización
              </p>
            </div>

            <div className="absolute bottom-7 left-7 max-w-[430px]">
              <p className="text-[9px] uppercase tracking-[0.22em] text-white/35">
                Soluciones personalizadas
              </p>

              <p className="mt-2 text-lg font-semibold sm:text-xl">
                Cada operación comienza entendiendo el problema.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* ACCESOS RÁPIDOS */}
      {/* ====================================================== */}

      <section className="border-b border-white/10 bg-[#050505]">
        <div className="mx-auto grid max-w-[1440px] grid-cols-2 lg:grid-cols-4">

          {services.map((service) => (
            <button
              key={service.id}
              onClick={() =>
                selectService(service.id)
              }
              className="group border-r border-white/10 px-5 py-5 text-left transition hover:bg-white/[0.035]"
            >
              <div className="flex items-center justify-between">
                <span className="text-[9px] text-white/20">
                  {service.number}
                </span>

                <span className="text-xs text-white/0 transition group-hover:text-white/40">
                  →
                </span>
              </div>

              <p className="mt-2 text-sm font-semibold text-white/65 transition group-hover:text-white">
                {service.shortName}
              </p>
            </button>
          ))}

        </div>
      </section>

      {/* ====================================================== */}
      {/* SERVICIOS */}
      {/* ====================================================== */}

      <section
        id="servicios"
        className="scroll-mt-20 border-b border-white/10 bg-black"
      >
        <div className="mx-auto max-w-[1440px] px-6 py-14 sm:px-10 lg:px-14 lg:py-16">

          <div className="mb-9 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-[9px] font-semibold uppercase tracking-[0.26em] text-white/25">
                Qué hacemos
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                Servicios diseñados
                <span className="text-white/25">
                  {" "}alrededor del proyecto.
                </span>
              </h2>
            </div>

            <p className="max-w-[480px] text-xs leading-5 text-white/35">
              Selecciona un servicio para conocer sus
              aplicaciones y cómo podemos integrarlo en tu operación.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[0.35fr_1.65fr]">

            {/* MENU LATERAL */}
            <aside className="rounded-[18px] border border-white/10 bg-[#080808] p-3">

              {services.map((service) => {
                const active =
                  selectedId === service.id;

                return (
                  <button
                    key={service.id}
                    onClick={() =>
                      setSelectedId(service.id)
                    }
                    className={`
                      group
                      flex
                      w-full
                      items-center
                      justify-between
                      rounded-xl
                      px-4
                      py-4
                      text-left
                      transition

                      ${
                        active
                          ? "bg-white text-black"
                          : "text-white/40 hover:bg-white/[0.04] hover:text-white"
                      }
                    `}
                  >
                    <div className="flex items-center gap-3">

                      <span
                        className={`text-[9px] ${
                          active
                            ? "text-black/35"
                            : "text-white/20"
                        }`}
                      >
                        {service.number}
                      </span>

                      <span className="text-xs font-semibold">
                        {service.shortName}
                      </span>
                    </div>

                    <span
                      className={
                        active
                          ? "text-black/60"
                          : "text-white/20"
                      }
                    >
                      →
                    </span>
                  </button>
                );
              })}

            </aside>

            {/* SERVICIO ACTIVO */}
            <div className="overflow-hidden rounded-[22px] border border-white/10 bg-[#080808]">

              {/* FOTO */}
              <div className="relative min-h-[330px] overflow-hidden bg-[#101010] sm:min-h-[380px]">

                {/*
                  IMÁGENES:

                  /images/servicios/topografia.jpg
                  /images/servicios/fumigacion.jpg
                  /images/servicios/inspeccion.jpg
                  /images/servicios/desarrollo.jpg
                */}

                <div
                  key={selected.image}
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('${selected.image}')`,
                  }}
                />

                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent" />

                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/10" />

                <div className="absolute left-6 top-6">
                  <span className="rounded-full border border-white/15 bg-black/50 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.18em] text-white/60 backdrop-blur">
                    {selected.label}
                  </span>
                </div>

                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-white/30">
                    Servicio {selected.number}
                  </p>

                  <h3 className="mt-2 max-w-[760px] text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                    {selected.title}
                  </h3>
                </div>

              </div>

              {/* DETALLE */}
              <div className="grid lg:grid-cols-[1.1fr_0.9fr]">

                <div className="border-b border-white/10 p-6 sm:p-7 lg:border-b-0 lg:border-r">

                  <p className="text-base font-semibold text-white/80">
                    {selected.subtitle}
                  </p>

                  <p className="mt-3 max-w-[670px] text-sm leading-6 text-white/40">
                    {selected.description}
                  </p>

                  <p className="mt-6 text-[9px] font-semibold uppercase tracking-[0.22em] text-white/25">
                    Aplicaciones
                  </p>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {selected.applications.map(
                      (application) => (
                        <span
                          key={application}
                          className="rounded-full border border-white/10 bg-white/[0.025] px-3 py-1.5 text-[10px] text-white/45"
                        >
                          {application}
                        </span>
                      )
                    )}
                  </div>

                </div>

                {/* BENEFICIOS */}
                <div className="p-6 sm:p-7">

                  <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-white/25">
                    Ventajas
                  </p>

                  <div className="mt-4 space-y-3">
                    {selected.benefits.map(
                      (benefit, index) => (
                        <div
                          key={benefit}
                          className="flex items-center gap-3 border-b border-white/[0.06] pb-3"
                        >
                          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-white/10 text-[8px] text-white/30">
                            0{index + 1}
                          </span>

                          <span className="text-xs leading-5 text-white/50">
                            {benefit}
                          </span>
                        </div>
                      )
                    )}
                  </div>

                  <button
                    onClick={() => scrollTo("contacto")}
                    className="mt-6 rounded-full bg-white px-5 py-3 text-xs font-semibold text-black transition hover:bg-white/85"
                  >
                    Solicitar este servicio
                  </button>

                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* GALERÍA DE SERVICIOS */}
      {/* ====================================================== */}

      <section className="border-b border-white/10 bg-[#050505]">

        <div className="mx-auto grid max-w-[1440px] grid-cols-2 lg:grid-cols-4">

          {services.map((service) => (
            <button
              key={service.id}
              onClick={() =>
                selectService(service.id)
              }
              className="group relative min-h-[230px] overflow-hidden border-r border-white/10 text-left"
            >

              <div
                className="absolute inset-0 bg-cover bg-center opacity-45 transition duration-700 group-hover:scale-105 group-hover:opacity-65"
                style={{
                  backgroundImage: `url('${service.image}')`,
                }}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-black/10" />

              <div className="absolute inset-x-0 bottom-0 p-5">

                <span className="text-[9px] text-white/25">
                  {service.number}
                </span>

                <h3 className="mt-1 text-base font-semibold sm:text-lg">
                  {service.shortName}
                </h3>

                <span className="mt-3 inline-block text-[10px] text-white/35 transition group-hover:text-white">
                  Explorar →
                </span>

              </div>
            </button>
          ))}

        </div>
      </section>

      {/* ====================================================== */}
      {/* METODOLOGÍA */}
      {/* ====================================================== */}

      <section
        id="metodologia"
        className="scroll-mt-20 border-b border-white/10 bg-[#080808]"
      >
        <div className="mx-auto max-w-[1440px] px-6 py-14 sm:px-10 lg:px-14 lg:py-16">

          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">

            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-white/30" />

                <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-white/30">
                  Cómo trabajamos
                </p>
              </div>

              <h2 className="mt-4 max-w-[500px] text-3xl font-semibold tracking-[-0.045em] sm:text-4xl lg:text-5xl">
                Primero entendemos
                <span className="block text-white/25">
                  el problema.
                </span>
              </h2>

              <p className="mt-5 max-w-[500px] text-sm leading-6 text-white/40">
                No todos los proyectos necesitan el mismo
                drone, sensor, metodología o entregable.
                Diseñamos cada operación según los objetivos
                reales del cliente.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">

              <ProcessCard
                number="01"
                title="Analizamos"
                text="Definimos objetivo, ubicación, alcance y necesidades técnicas."
              />

              <ProcessCard
                number="02"
                title="Diseñamos"
                text="Seleccionamos equipo, sensores, metodología y flujo de trabajo."
              />

              <ProcessCard
                number="03"
                title="Ejecutamos"
                text="Realizamos la operación y capturamos la información requerida."
              />

              <ProcessCard
                number="04"
                title="Entregamos"
                text="Procesamos los datos y generamos los entregables definidos."
              />

            </div>
          </div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* DESARROLLO DE SOFTWARE */}
      {/* ====================================================== */}

      <section
        id="soluciones"
        className="scroll-mt-20 border-b border-white/10 bg-black"
      >
        <div className="mx-auto grid max-w-[1440px] lg:grid-cols-[1.05fr_0.95fr]">

          {/* FOTO */}
          <div className="relative min-h-[390px] overflow-hidden bg-[#0c0c0c] lg:min-h-[500px]">

            {/*
              IMAGEN:
              /images/servicios/software.
            */}

            <div
              className="absolute inset-0 bg-cover bg-center opacity-60"
              style={{
                backgroundImage:
                  "url('/images/servicios/software.gif')",
              }}
            />

            <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/65" />

            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/10" />

            <div className="absolute bottom-6 left-6">
              <p className="text-[9px] uppercase tracking-[0.24em] text-white/35">
                Hardware · Software · Datos
              </p>
            </div>
          </div>

          {/* TEXTO */}
          <div className="flex items-center bg-[#080808] px-6 py-12 sm:px-10 lg:px-12">

            <div className="max-w-[620px]">

              <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-white/30">
                Desarrollo especializado
              </p>

              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">
                Si no existe,
                <span className="block text-white/25">
                  lo desarrollamos.
                </span>
              </h2>

              <p className="mt-5 text-sm leading-6 text-white/40">
                Hay proyectos donde un drone por sí solo no
                resuelve el problema. Podemos desarrollar
                sistemas que integren captura aérea,
                procesamiento de información, automatización
                y software especializado.
              </p>

              <div className="mt-6 grid gap-2 sm:grid-cols-2">

                <CompactItem text="Plataformas web" />
                <CompactItem text="Automatización" />
                <CompactItem text="Visualización de datos" />
                <CompactItem text="Integraciones" />
                <CompactItem text="Procesamiento" />
                <CompactItem text="Soluciones personalizadas" />

              </div>

              <button
                onClick={() => scrollTo("contacto")}
                className="mt-7 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition hover:bg-white/85"
              >
                Cuéntanos tu proyecto
              </button>

            </div>
          </div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* VALOR */}
      {/* ====================================================== */}

      <section className="border-b border-white/10 bg-[#050505]">
        <div className="mx-auto grid max-w-[1440px] grid-cols-2 lg:grid-cols-4">

          <Metric
            number="01"
            title="Necesidad"
            text="Entendemos el problema."
          />

          <Metric
            number="02"
            title="Tecnología"
            text="Elegimos la herramienta."
          />

          <Metric
            number="03"
            title="Información"
            text="Transformamos los datos."
          />

          <Metric
            number="04"
            title="Resultado"
            text="Entregamos una solución."
          />

        </div>
      </section>

      {/* ====================================================== */}
      {/* MENSAJE GRANDE */}
      {/* ====================================================== */}

      <section className="border-b border-white/10 bg-black">
        <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-10 lg:px-14 lg:py-20">

          <div className="grid gap-8 lg:grid-cols-[0.45fr_1.55fr]">

            <div>
              <p className="text-[9px] font-semibold uppercase tracking-[0.26em] text-white/25">
                Nuestro enfoque
              </p>
            </div>

            <h2 className="max-w-[950px] text-3xl font-semibold leading-[1.05] tracking-[-0.045em] sm:text-4xl lg:text-5xl">
              No adaptamos tu proyecto a un drone.
              <span className="text-white/25">
                {" "}Adaptamos la tecnología a tu proyecto.
              </span>
            </h2>

          </div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* CONTACTO */}
      {/* ====================================================== */}

      <section
        id="contacto"
        className="scroll-mt-20 bg-[#080808]"
      >
        <div className="mx-auto grid max-w-[1440px] gap-10 px-6 py-16 sm:px-10 lg:grid-cols-[1fr_auto] lg:items-center lg:px-14 lg:py-20">

          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-white/30" />

              <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-white/30">
                Inicia un proyecto
              </p>
            </div>

            <h2 className="mt-5 max-w-[820px] text-4xl font-semibold leading-[0.98] tracking-[-0.055em] sm:text-5xl lg:text-6xl">
              Cuéntanos qué necesitas.
              <span className="block text-white/25">
                Nosotros diseñamos cómo hacerlo.
              </span>
            </h2>

            <p className="mt-5 max-w-[620px] text-sm leading-6 text-white/40">
              Comparte con nosotros el objetivo, ubicación
              y alcance general de tu proyecto para revisar
              la solución más adecuada.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">

            <a
              href="https://wa.me/524811024104?text=Hola%20MAXIDRONE,%20quiero%20información%20sobre%20sus%20servicios%20con%20drones."
              target="_blank"
              rel="noreferrer"
              className="whitespace-nowrap rounded-full bg-white px-7 py-3.5 text-center text-sm font-semibold text-black transition hover:bg-white/85"
            >
              WhatsApp →
            </a>

            <a
              href="mailto:facturacion@maxidrone.mx"
              className="whitespace-nowrap rounded-full border border-white/15 px-7 py-3.5 text-center text-sm font-semibold text-white/70 transition hover:border-white/30 hover:text-white"
            >
              Enviar correo
            </a>

          </div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* FOOTER */}
      {/* ====================================================== */}

      <footer className="border-t border-white/10 bg-black">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-4 px-6 py-7 sm:px-10 md:flex-row md:items-center md:justify-between lg:px-14">

          <div>
            <p className="text-xs font-semibold">
              MAXIDRONE
            </p>

            <p className="mt-1 text-[8px] uppercase tracking-[0.22em] text-white/25">
              Servicios especializados con drones
            </p>
          </div>

          <p className="text-xs text-white/25">
            Tecnología diseñada alrededor de tu operación.
          </p>

        </div>
      </footer>

    </main>
  );
}

/* ========================================================== */
/* COMPONENTES */
/* ========================================================== */

function ProcessCard({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <article
      className="
        min-h-[165px]
        rounded-[16px]
        border
        border-white/10
        bg-[#0d0d0d]
        p-5
        transition
        duration-300
        hover:border-white/20
        hover:bg-[#111111]
      "
    >
      <span className="text-[9px] font-semibold text-white/20">
        {number}
      </span>

      <h3 className="mt-7 text-lg font-semibold tracking-[-0.025em]">
        {title}
      </h3>

      <p className="mt-2 max-w-[300px] text-xs leading-5 text-white/40">
        {text}
      </p>
    </article>
  );
}

function CompactItem({
  text,
}: {
  text: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.025] px-4 py-3">
      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-white/55" />

      <span className="text-xs font-medium text-white/50">
        {text}
      </span>
    </div>
  );
}

function Metric({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="min-h-[140px] border-r border-white/10 p-5 transition hover:bg-white/[0.025]">

      <span className="text-[9px] text-white/20">
        {number}
      </span>

      <p className="mt-6 text-base font-semibold">
        {title}
      </p>

      <p className="mt-1 text-xs text-white/30">
        {text}
      </p>

    </div>
  );
}