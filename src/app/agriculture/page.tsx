"use client";

import { useState, type ReactNode } from "react";

type ModelId = "t100" | "t70p" | "t55" | "t25p";
type DetailTab = "rendimiento" | "tecnologia" | "aplicacion";

type DroneModel = {
  id: ModelId;
  name: string;
  shortName: string;
  eyebrow: string;
  tagline: string;
  description: string;
  image: string;
  badge?: string;

  spray: string;
  spreading: string;
  spreadingPayload: string;
  lifting: string;
  sprayWidth: string;
  flow: string;

  recommended: string;
  scale: string;

  highlights: string[];

  performance: {
    title: string;
    text: string;
  }[];

  technology: {
    title: string;
    text: string;
  }[];

  applications: string[];
};

const models: DroneModel[] = [
  {
    id: "t100",
    name: "DJI AGRAS T100",
    shortName: "T100",
    eyebrow: "Máximo rendimiento",
    tagline: "Potencia diseñada para grandes operaciones.",
    description:
      "La plataforma de mayor capacidad de la familia AGRAS. Diseñada para operaciones agrícolas de gran escala que requieren alta productividad, pulverización de gran volumen, esparcimiento y elevación de carga.",
    image: "/images/t100.gif",
    badge: "MÁXIMA CAPACIDAD",

    spray: "100 L",
    spreading: "150 L",
    spreadingPayload: "100 kg",
    lifting: "100 kg",
    sprayWidth: "5 – 13 m",
    flow: "30 – 40 L/min",

    recommended: "Grandes extensiones",
    scale: "Operación intensiva",

    highlights: [
      "Sistema de aspersión de hasta 100 litros",
      "Sistema de esparcimiento de 150 litros",
      "Capacidad de elevación de hasta 100 kg",
      "Operaciones automáticas y planificación inteligente",
    ],

    performance: [
      {
        title: "Aspersión de alta capacidad",
        text: "Tanque de 100 L para reducir paradas de recarga en operaciones extensivas.",
      },
      {
        title: "Esparcimiento",
        text: "Tolva de 150 L con capacidad operativa de hasta 100 kg.",
      },
      {
        title: "Alto caudal",
        text: "Sistema de bombeo con hasta 40 L/min utilizando configuración de cuatro aspersores.",
      },
    ],

    technology: [
      {
        title: "Safety System 3.0",
        text: "Integra sistemas avanzados de percepción para detectar obstáculos y trabajar con mayor seguridad.",
      },
      {
        title: "Precisión RTK",
        text: "Posicionamiento centimétrico para mantener trayectorias de aplicación precisas.",
      },
      {
        title: "Operación automatizada",
        text: "Permite planificar rutas y ejecutar operaciones agrícolas de forma inteligente.",
      },
    ],

    applications: [
      "Cultivos extensivos",
      "Caña de azúcar",
      "Maíz",
      "Sorgo",
      "Agave",
      "Huertos",
      "Fertilización",
      "Siembra y esparcimiento",
    ],
  },

  {
    id: "t70p",
    name: "DJI AGRAS T70P",
    shortName: "T70P",
    eyebrow: "Equilibrio profesional",
    tagline: "Alta productividad con excelente maniobrabilidad.",
    description:
      "Una solución profesional para productores y prestadores de servicios que necesitan gran capacidad sin llegar al tamaño del T100. Integra aspersión, esparcimiento y elevación de carga.",
    image: "/images/t70.gif",
    badge: "VERSÁTIL",

    spray: "70 L",
    spreading: "100 L",
    spreadingPayload: "70 kg",
    lifting: "65 kg",
    sprayWidth: "4 – 11 m",
    flow: "30 – 40 L/min",

    recommended: "Medianas y grandes superficies",
    scale: "Operación profesional",

    highlights: [
      "Tanque de aspersión de 70 litros",
      "Tolva de esparcimiento de 100 litros",
      "Hasta 65 kg en operaciones de elevación",
      "Sistema avanzado de prevención de obstáculos",
    ],

    performance: [
      {
        title: "70 L de aspersión",
        text: "Capacidad pensada para trabajar superficies importantes manteniendo buena movilidad.",
      },
      {
        title: "Esparcimiento profesional",
        text: "Sistema de 100 L con capacidad operativa de hasta 70 kg.",
      },
      {
        title: "Hasta 40 L/min",
        text: "Configuración opcional de cuatro aspersores para aplicaciones que requieren mayor caudal.",
      },
    ],

    technology: [
      {
        title: "Safety System 3.0",
        text: "Radar y sistemas de visión ayudan a detectar y rodear obstáculos durante la operación.",
      },
      {
        title: "RTK",
        text: "Precisión centimétrica para mantener rutas uniformes y aplicaciones consistentes.",
      },
      {
        title: "Control inteligente",
        text: "Diseñado para automatizar misiones y reducir la carga operativa del piloto.",
      },
    ],

    applications: [
      "Maíz",
      "Caña de azúcar",
      "Agave",
      "Frutales",
      "Granos",
      "Fertilización",
      "Aplicaciones foliares",
      "Prestación de servicios",
    ],
  },

  {
    id: "t55",
    name: "DJI AGRAS T55",
    shortName: "T55",
    eyebrow: "Ágil y productivo",
    tagline: "Rendimiento profesional en un formato más ligero.",
    description:
      "El AGRAS T55 combina alta capacidad de aplicación con una estructura más ligera y fácil de transportar. Es una alternativa muy atractiva para productores que buscan productividad y versatilidad.",
    image: "/images/Tt55.gif",
    badge: "NUEVO",

    spray: "50 L",
    spreading: "80 L",
    spreadingPayload: "55 kg",
    lifting: "40 kg",
    sprayWidth: "4 – 11 m",
    flow: "40 – 50 L/min",

    recommended: "Superficies medianas",
    scale: "Alta productividad",

    highlights: [
      "Tanque de aspersión de 50 litros",
      "Hasta 50 L/min con cuatro aspersores",
      "Tolva de esparcimiento de 80 litros",
      "Diseño optimizado para facilitar el transporte",
    ],

    performance: [
      {
        title: "50 L de capacidad",
        text: "Buen equilibrio entre capacidad, dimensiones y facilidad de transporte.",
      },
      {
        title: "Hasta 50 L/min",
        text: "Uno de sus puntos fuertes es su elevado caudal con la configuración opcional de cuatro aspersores.",
      },
      {
        title: "55 kg de sólidos",
        text: "Sistema de esparcimiento de 80 L con una carga operativa de hasta 55 kg.",
      },
    ],

    technology: [
      {
        title: "Sistema de seguridad",
        text: "Integra radar y visión para aumentar la percepción del entorno durante las operaciones.",
      },
      {
        title: "Posicionamiento RTK",
        text: "Ayuda a mantener precisión y consistencia entre pasadas.",
      },
      {
        title: "Gestión térmica",
        text: "Cuenta con soluciones orientadas a mantener el desempeño de las baterías durante operaciones exigentes.",
      },
    ],

    applications: [
      "Granos",
      "Hortalizas",
      "Frutales",
      "Agave",
      "Aplicación foliar",
      "Fertilización",
      "Semillas",
      "Operaciones comerciales",
    ],
  },

  {
    id: "t25p",
    name: "DJI AGRAS T25P",
    shortName: "T25P",
    eyebrow: "Compacto e inteligente",
    tagline: "Pequeño en tamaño. Grande en capacidad.",
    description:
      "Una plataforma compacta desarrollada para operaciones individuales, parcelas pequeñas, terrenos fragmentados y productores que buscan facilidad de transporte sin renunciar a automatización y precisión.",
    image: "/images/t25.gif",
    badge: "COMPACTO",

    spray: "20 L",
    spreading: "30 L",
    spreadingPayload: "25 kg",
    lifting: "—",
    sprayWidth: "4 – 7 m",
    flow: "16 – 24 L/min",

    recommended: "Parcelas pequeñas y medianas",
    scale: "Operación individual",

    highlights: [
      "Tanque de aspersión de 20 litros",
      "Tolva de esparcimiento de 30 litros",
      "Fácil de transportar y desplegar",
      "Ideal para trabajos con acceso limitado",
    ],

    performance: [
      {
        title: "20 L de aspersión",
        text: "Capacidad optimizada para parcelas pequeñas, medianas y trabajos especializados.",
      },
      {
        title: "Hasta 24 L/min",
        text: "Puede alcanzar mayor caudal mediante configuración ampliada de aspersores.",
      },
      {
        title: "25 kg de sólidos",
        text: "Sistema de esparcimiento de 30 L para fertilizantes y otros materiales granulados.",
      },
    ],

    technology: [
      {
        title: "Safety System 3.0",
        text: "Sistemas de radar y visión ayudan al operador a trabajar en entornos complejos.",
      },
      {
        title: "RTK",
        text: "Capacidad de posicionamiento preciso para operaciones agrícolas automatizadas.",
      },
      {
        title: "Diseño compacto",
        text: "Puede ser transportado y preparado fácilmente por un solo operador.",
      },
    ],

    applications: [
      "Parcelas pequeñas",
      "Hortalizas",
      "Frutales",
      "Invernaderos abiertos",
      "Aplicaciones localizadas",
      "Fertilización",
      "Trabajos especializados",
      "Productores individuales",
    ],
  },
];

export default function AgriculturePage() {
  const [selectedId, setSelectedId] = useState<ModelId>("t100");
  const [detailTab, setDetailTab] =
    useState<DetailTab>("rendimiento");

  const selected =
    models.find((model) => model.id === selectedId) ?? models[0];

  const selectModel = (id: ModelId) => {
    setSelectedId(id);
    setDetailTab("rendimiento");

    setTimeout(() => {
      document
        .getElementById("detalle-modelo")
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
    }, 50);
  };

  const scrollToModels = () => {
    document
      .getElementById("modelos")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#050505] text-white">

      {/* ====================================================== */}
      {/* SUB NAV AGRICULTURE */}
      {/* ====================================================== */}

      <div className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-4 sm:px-10 lg:px-14">

          <button
            onClick={scrollToModels}
            className="flex items-center"
          >
            <img
              src="/images/logo-agriculture.png"
              alt="DJI Agriculture"
              className="h-8 w-auto object-contain sm:h-9"
            />
          </button>

          <div className="hidden items-center gap-8 md:flex">
            <button
              onClick={scrollToModels}
              className="text-sm font-medium text-white/60 transition hover:text-white"
            >
              Modelos
            </button>

            <a
              href="#comparativa"
              className="text-sm font-medium text-white/60 transition hover:text-white"
            >
              Comparativa
            </a>

            <a
              href="#tecnologia"
              className="text-sm font-medium text-white/60 transition hover:text-white"
            >
              Tecnología
            </a>

            <a
               href="https://wa.me/524811074483?text=Hola%20MAXIDRONE,%20quiero%20información%20sobre%20los%20equipos%20DJI%20Agriculture."
              className="
                rounded-full
                bg-[#018C55]
                px-5
                py-2.5
                text-sm
                font-semibold
                text-white
                transition
                hover:bg-[#018C55]
              "
            >
              Hablar con un asesor
            </a>
          </div>
        </div>
      </div>

      {/* ====================================================== */}
      {/* HERO */}
      {/* ====================================================== */}

      <section
        className="
          relative
          min-h-[760px]
          overflow-hidden
          border-b
          border-white/10
          lg:min-h-[820px]
        "
      >

        {/* GLOW */}
        <div
          className="
            pointer-events-none
            absolute
            right-[-200px]
            top-[80px]
            h-[700px]
            w-[700px]
            rounded-full
            bg-[#018C55]/10
            blur-[160px]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            bottom-[-200px]
            left-[-200px]
            h-[500px]
            w-[500px]
            rounded-full
            bg-white/5
            blur-[140px]
          "
        />

        <div
          className="
            relative
            mx-auto
            grid
            min-h-[760px]
            max-w-[1440px]
            items-center
            gap-10
            px-6
            pb-16
            pt-20
            sm:px-10
            lg:min-h-[820px]
            lg:grid-cols-[0.85fr_1.15fr]
            lg:px-14
            lg:pb-10
            lg:pt-10
          "
        >

          {/* TEXTO */}
          <div className="relative z-20 max-w-[650px]">

            <div className="mb-8 flex items-center gap-4">
              <span className="h-[2px] w-9 bg-[#018C55]" />

              <p
                className="
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.28em]
                  text-white/50
                "
              >
                Agricultura de precisión
              </p>
            </div>

            <h1
              className="
                max-w-[700px]
                text-[52px]
                font-semibold
                leading-[0.95]
                tracking-[-0.055em]
                sm:text-[68px]
                lg:text-[82px]
                xl:text-[94px]
              "
            >
              El campo
              <span className="block text-white/30">
                evoluciona.
              </span>
            </h1>

            <p
              className="
                mt-8
                max-w-[570px]
                text-base
                leading-7
                text-white/55
                sm:text-lg
              "
            >
              Soluciones DJI AGRAS para aspersión,
              fertilización, esparcimiento y operaciones
              agrícolas automatizadas con precisión,
              eficiencia y control.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <button
                onClick={scrollToModels}
                className="
                  group
                  flex
                  items-center
                  gap-4
                  rounded-full
                  bg-[#018C55]
                  px-7
                  py-4
                  text-sm
                  font-semibold
                  transition
                  hover:bg-[#018C55]
                "
              >
                Explorar modelos

                <span className="transition group-hover:translate-x-1">
                  →
                </span>
              </button>

              <a
                href="#comparativa"
                className="
                  rounded-full
                  border
                  border-white/15
                  bg-white/[0.03]
                  px-7
                  py-4
                  text-sm
                  font-semibold
                  text-white/80
                  transition
                  hover:border-white/30
                  hover:bg-white/[0.06]
                  hover:text-white
                "
              >
                Comparar equipos
              </a>
            </div>

            <div
              className="
                mt-14
                grid
                max-w-[550px]
                grid-cols-3
                border-t
                border-white/10
                pt-7
              "
            >
              <HeroStat number="4" text="Modelos AGRAS" />

              <HeroStat
                number="100 L"
                text="Máx. aspersión"
                border
              />

              <HeroStat
                number="RTK"
                text="Precisión"
                border
              />
            </div>
          </div>

          {/* DRONE HERO */}
          <div
            className="
              relative
              z-10
              flex
              min-h-[390px]
              items-center
              justify-center
              lg:min-h-[650px]
            "
          >
            <div
              className="
                absolute
                left-1/2
                top-1/2
                h-[430px]
                w-[430px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                border
                border-white/[0.04]
                sm:h-[560px]
                sm:w-[560px]
              "
            />

            <div
              className="
                absolute
                left-1/2
                top-1/2
                h-[320px]
                w-[320px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                border
                border-[#018C55]/10
                sm:h-[430px]
                sm:w-[430px]
              "
            />

            <p
              className="
                pointer-events-none
                absolute
                left-1/2
                top-1/2
                -translate-x-1/2
                -translate-y-1/2
                whitespace-nowrap
                text-[120px]
                font-black
                tracking-[-0.08em]
                text-white/[0.025]
                sm:text-[180px]
                lg:text-[230px]
              "
            >
              AGRAS
            </p>

            <img
              src="/images/t100.gif"
              alt="DJI AGRAS T100"
              className="
                relative
                z-10
                w-full
                max-w-[750px]
                object-contain
                drop-shadow-[0_35px_50px_rgba(0,0,0,0.8)]
              "
            />

            <div
              className="
                absolute
                bottom-8
                right-0
                hidden
                rounded-2xl
                border
                border-white/10
                bg-black/60
                px-5
                py-4
                backdrop-blur-xl
                xl:block
              "
            >
              <p className="text-[10px] uppercase tracking-[0.24em] text-white/35">
                Capacidad máxima
              </p>

              <p className="mt-1 text-xl font-semibold">
                100 L
              </p>

              <p className="mt-1 text-xs text-white/40">
                Sistema de aspersión
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* INTRO */}
      {/* ====================================================== */}

      <section
        id="modelos"
        className="
          scroll-mt-24
          border-b
          border-white/10
          bg-[#080808]
        "
      >
        <div
          className="
            mx-auto
            max-w-[1440px]
            px-6
            py-24
            sm:px-10
            lg:px-14
            lg:py-32
          "
        >
          <div
            className="
              grid
              gap-10
              lg:grid-cols-[0.75fr_1.25fr]
              lg:items-end
            "
          >
            <div>
              <div className="flex items-center gap-4">
                <span className="h-[2px] w-8 bg-[#018C55]" />

                <p
                  className="
                    text-xs
                    font-semibold
                    uppercase
                    tracking-[0.25em]
                    text-white/40
                  "
                >
                  Familia AGRAS
                </p>
              </div>

              <h2
                className="
                  mt-5
                  text-4xl
                  font-semibold
                  tracking-[-0.04em]
                  sm:text-5xl
                  lg:text-6xl
                "
              >
                Un equipo para
                <span className="block text-white/30">
                  cada operación.
                </span>
              </h2>
            </div>

            <p
              className="
                max-w-[650px]
                text-base
                leading-7
                text-white/45
                lg:justify-self-end
                lg:text-lg
              "
            >
              Desde aplicaciones especializadas en
              parcelas pequeñas hasta operaciones de gran
              escala. Selecciona un modelo para conocer su
              capacidad y las aplicaciones para las que fue
              diseñado.
            </p>
          </div>

          {/* TARJETAS MODELOS */}
          <div
            className="
              mt-16
              grid
              gap-4
              md:grid-cols-2
              xl:grid-cols-4
            "
          >
            {models.map((model) => {
              const active = selectedId === model.id;

              return (
                <button
                  key={model.id}
                  onClick={() => selectModel(model.id)}
                  className={`
                    group
                    relative
                    overflow-hidden
                    rounded-[24px]
                    border
                    p-0
                    text-left
                    transition-all
                    duration-500

                    ${
                      active
                        ? "border-[#018C55]/60 bg-[#10140d]"
                        : "border-white/10 bg-[#0c0c0c] hover:border-white/20 hover:bg-[#101010]"
                    }
                  `}
                >
                  <div className="relative h-[280px] overflow-hidden">

                    <div
                      className={`
                        absolute inset-0 transition duration-500

                        ${
                          active
                            ? "bg-[radial-gradient(circle_at_center,rgba(1,140,85,0.16),transparent_65%)]"
                            : "bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_65%)]"
                        }
                      `}
                    />

                    {model.badge && (
                      <span
                        className="
                          absolute
                          left-5
                          top-5
                          z-20
                          rounded-full
                          border
                          border-white/10
                          bg-black/50
                          px-3
                          py-1.5
                          text-[9px]
                          font-bold
                          tracking-[0.2em]
                          text-white/60
                          backdrop-blur
                        "
                      >
                        {model.badge}
                      </span>
                    )}

                    <img
                      src={model.image}
                      alt={model.name}
                      className="
                        absolute
                        inset-0
                        h-full
                        w-full
                        object-contain
                        p-5
                        transition
                        duration-700
                        group-hover:scale-105
                      "
                    />
                  </div>

                  <div className="border-t border-white/[0.07] p-6">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p
                          className="
                            text-[10px]
                            font-semibold
                            uppercase
                            tracking-[0.22em]
                            text-[#018C55]
                          "
                        >
                          {model.eyebrow}
                        </p>

                        <h3
                          className="
                            mt-2
                            text-2xl
                            font-semibold
                            tracking-[-0.03em]
                          "
                        >
                          {model.shortName}
                        </h3>
                      </div>

                      <div
                        className={`
                          flex
                          h-10
                          w-10
                          items-center
                          justify-center
                          rounded-full
                          border
                          transition

                          ${
                            active
                              ? "border-[#018C55] bg-[#018C55] text-white"
                              : "border-white/10 text-white/35 group-hover:border-white/25 group-hover:text-white"
                          }
                        `}
                      >
                        →
                      </div>
                    </div>

                    <div className="mt-6 grid grid-cols-2 gap-3">
                      <SmallSpec
                        label="Aspersión"
                        value={model.spray}
                      />

                      <SmallSpec
                        label="Sólidos"
                        value={model.spreadingPayload}
                      />
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* DETALLE INTERACTIVO */}
      {/* ====================================================== */}

      <section
        id="detalle-modelo"
        className="
          scroll-mt-20
          border-b
          border-white/10
          bg-black
        "
      >
        <div
          className="
            mx-auto
            max-w-[1440px]
            px-6
            py-20
            sm:px-10
            lg:px-14
            lg:py-28
          "
        >

          {/* SELECTOR */}
          <div
            className="
              grid
              grid-cols-2
              gap-2
              overflow-visible
              border-b
              border-white/10
              pb-5
              sm:flex
              sm:overflow-x-auto
              [scrollbar-width:none]
              [&::-webkit-scrollbar]:hidden
            "
          >
            {models.map((model) => (
              <button
                key={model.id}
                onClick={() => {
                  setSelectedId(model.id);
                  setDetailTab("rendimiento");
                }}
                className={`
                  whitespace-normal
                  rounded-full
                  px-3
                  py-2.5
                  text-xs
                  text-center
                  font-semibold
                  transition
                  sm:whitespace-nowrap
                  sm:px-5
                  sm:text-sm

                  ${
                    selectedId === model.id
                      ? "bg-white text-black"
                      : "bg-white/[0.04] text-white/45 hover:bg-white/[0.08] hover:text-white"
                  }
                `}
              >
                AGRAS {model.shortName}
              </button>
            ))}
          </div>

          <div
            className="
              mt-12
              grid
              gap-14
              lg:grid-cols-[1.05fr_0.95fr]
              lg:items-center
            "
          >

            {/* IMAGEN */}
            <div
              className="
                relative
                min-h-[420px]
                overflow-hidden
                rounded-[32px]
                border
                border-white/10
                bg-[#090909]
                sm:min-h-[520px]
              "
            >
              <div
                className="
                  absolute
                  inset-0
                  bg-[radial-gradient(circle_at_center,rgba(1,140,85,0.12),transparent_62%)]
                "
              />

              <div
                className="
                  absolute
                  left-7
                  top-7
                  z-20
                  flex
                  items-center
                  gap-3
                "
              >
                <span className="h-2 w-2 rounded-full bg-[#018C55]" />

                <span
                  className="
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.24em]
                    text-white/40
                  "
                >
                  Modelo seleccionado
                </span>
              </div>

              <span
                className="
                  absolute
                  bottom-4
                  left-1/2
                  -translate-x-1/2
                  text-[110px]
                  font-black
                  tracking-[-0.08em]
                  text-white/[0.025]
                  sm:text-[150px]
                "
              >
                {selected.shortName}
              </span>

              <img
                key={selected.image}
                src={selected.image}
                alt={selected.name}
                className="
                  absolute
                  inset-0
                  h-full
                  w-full
                  transition-all
                  duration-500
                  object-contain
                  p-8
                  sm:p-12
                "
              />
            </div>

            {/* INFO */}
            <div>
              <p
                className="
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.25em]
                  text-[#018C55]
                "
              >
                {selected.eyebrow}
              </p>

              <h2
                className="
                  mt-4
                  text-5xl
                  font-semibold
                  tracking-[-0.05em]
                  sm:text-6xl
                  lg:text-7xl
                "
              >
                {selected.shortName}
              </h2>

              <h3
                className="
                  mt-5
                  max-w-[550px]
                  text-xl
                  font-medium
                  leading-8
                  text-white/80
                  sm:text-2xl
                "
              >
                {selected.tagline}
              </h3>

              <p
                className="
                  mt-5
                  max-w-[620px]
                  text-base
                  leading-7
                  text-white/45
                "
              >
                {selected.description}
              </p>

              {/* SPECS PRINCIPALES */}
              <div
                className="
                  mt-9
                  grid
                  grid-cols-2
                  gap-px
                  overflow-hidden
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/10
                  sm:grid-cols-4
                "
              >
                <MainSpec
                  value={selected.spray}
                  label="Aspersión"
                />

                <MainSpec
                  value={selected.spreading}
                  label="Tolva"
                />

                <MainSpec
                  value={selected.lifting}
                  label="Elevación"
                />

                <MainSpec
                  value={selected.sprayWidth}
                  label="Ancho"
                />
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="https://wa.me/4811024104?text=Hola%20MAXIDRONE,%20quiero%20información%20sobre%20los%20equipos%20DJI%20Agriculture."
                  className="
                    rounded-full
                    bg-[#018C55]
                    px-7
                    py-3.5
                    text-sm
                    font-semibold
                    transition
                    hover:bg-[#018C55]
                  "
                >
                  Solicitar información
                </a>

                <a
                  href="#comparativa"
                  className="
                    rounded-full
                    border
                    border-white/15
                    px-7
                    py-3.5
                    text-sm
                    font-semibold
                    text-white/65
                    transition
                    hover:border-white/30
                    hover:text-white
                  "
                >
                  Comparar
                </a>
              </div>
            </div>
          </div>

          {/* ================================================= */}
          {/* TABS */}
          {/* ================================================= */}

          <div className="mt-24">
            <div
              className="
                grid
                grid-cols-3
                gap-2
                overflow-visible
                border-b
                border-white/10
                sm:flex
                sm:gap-7
                sm:overflow-x-auto
                [scrollbar-width:none]
                [&::-webkit-scrollbar]:hidden
              "
            >
              <TabButton
                active={detailTab === "rendimiento"}
                onClick={() => setDetailTab("rendimiento")}
              >
                Rendimiento
              </TabButton>

              <TabButton
                active={detailTab === "tecnologia"}
                onClick={() => setDetailTab("tecnologia")}
              >
                Tecnología
              </TabButton>

              <TabButton
                active={detailTab === "aplicacion"}
                onClick={() => setDetailTab("aplicacion")}
              >
                Aplicaciones
              </TabButton>
            </div>

            <div className="pt-10">

              {detailTab === "rendimiento" && (
                <div
                  className="
                    grid
                    gap-4
                    md:grid-cols-3
                  "
                >
                  {selected.performance.map(
                    (item, index) => (
                      <FeatureCard
                        key={item.title}
                        index={index + 1}
                        title={item.title}
                        text={item.text}
                      />
                    )
                  )}
                </div>
              )}

              {detailTab === "tecnologia" && (
                <div
                  className="
                    grid
                    gap-4
                    md:grid-cols-3
                  "
                >
                  {selected.technology.map(
                    (item, index) => (
                      <FeatureCard
                        key={item.title}
                        index={index + 1}
                        title={item.title}
                        text={item.text}
                      />
                    )
                  )}
                </div>
              )}

              {detailTab === "aplicacion" && (
                <div
                  className="
                    rounded-[28px]
                    border
                    border-white/10
                    bg-[#090909]
                    p-7
                    sm:p-10
                  "
                >
                  <div
                    className="
                      grid
                      gap-10
                      lg:grid-cols-[0.7fr_1.3fr]
                    "
                  >
                    <div>
                      <p className="text-xs uppercase tracking-[0.22em] text-[#018C55]">
                        Uso recomendado
                      </p>

                      <h3 className="mt-4 text-3xl font-semibold tracking-[-0.04em]">
                        {selected.recommended}
                      </h3>

                      <p className="mt-3 text-sm text-white/40">
                        {selected.scale}
                      </p>
                    </div>

                    <div
                      className="
                        grid
                        grid-cols-2
                        gap-3
                        sm:grid-cols-3
                        xl:grid-cols-4
                      "
                    >
                      {selected.applications.map(
                        (application) => (
                          <div
                            key={application}
                            className="
                              flex
                              min-h-[90px]
                              items-end
                              rounded-xl
                              border
                              border-white/10
                              bg-white/[0.025]
                              p-4
                            "
                          >
                            <span className="text-sm font-medium text-white/65">
                              {application}
                            </span>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* TECHNOLOGY SECTION */}
      {/* ====================================================== */}

      <section
        id="tecnologia"
        className="
          scroll-mt-24
          border-b
          border-white/10
          bg-[#080808]
        "
      >
        <div
          className="
            mx-auto
            max-w-[1440px]
            px-6
            py-24
            sm:px-10
            lg:px-14
            lg:py-32
          "
        >
          <div
            className="
              grid
              gap-12
              lg:grid-cols-[0.9fr_1.1fr]
            "
          >
            <div>
              <div className="flex items-center gap-4">
                <span className="h-[2px] w-8 bg-[#018C55]" />

                <span
                  className="
                    text-xs
                    font-semibold
                    uppercase
                    tracking-[0.25em]
                    text-white/40
                  "
                >
                  Tecnología AGRAS
                </span>
              </div>

              <h2
                className="
                  mt-6
                  max-w-[600px]
                  text-4xl
                  font-semibold
                  tracking-[-0.045em]
                  sm:text-5xl
                  lg:text-6xl
                "
              >
                Precisión que se
                <span className="block text-white/30">
                  convierte en productividad.
                </span>
              </h2>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <TechnologyCard
                number="01"
                title="Aplicación precisa"
                text="Control del caudal y rutas de vuelo planificadas para conseguir aplicaciones uniformes."
              />

              <TechnologyCard
                number="02"
                title="Navegación RTK"
                text="Posicionamiento de alta precisión para realizar pasadas consistentes sobre el cultivo."
              />

              <TechnologyCard
                number="03"
                title="Detección del entorno"
                text="Radar y sistemas de visión apoyan la detección y evasión de obstáculos."
              />

              <TechnologyCard
                number="04"
                title="Operación automática"
                text="Planificación inteligente para reducir maniobras manuales y aumentar la eficiencia."
              />
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* COMPARATIVA */}
      {/* ====================================================== */}

      <section
        id="comparativa"
        className="
          scroll-mt-24
          border-b
          border-white/10
          bg-black
        "
      >
        <div
          className="
            mx-auto
            max-w-[1440px]
            px-6
            py-24
            sm:px-10
            lg:px-14
            lg:py-32
          "
        >
          <div className="max-w-[750px]">
            <div className="flex items-center gap-4">
              <span className="h-[2px] w-8 bg-[#018C55]" />

              <p
                className="
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.25em]
                  text-white/40
                "
              >
                Comparativa
              </p>
            </div>

            <h2
              className="
                mt-5
                text-4xl
                font-semibold
                tracking-[-0.045em]
                sm:text-5xl
                lg:text-6xl
              "
            >
              Encuentra el AGRAS
              <span className="block text-white/30">
                adecuado para ti.
              </span>
            </h2>
          </div>

          <div
            className="
              mt-14
              overflow-x-auto
              rounded-[28px]
              border
              border-white/10
            "
          >
            <table className="w-full min-w-[900px] border-collapse">

              <thead>
                <tr className="bg-[#0b0b0b]">
                  <th
                    className="
                      w-[220px]
                      border-b
                      border-white/10
                      p-6
                      text-left
                      text-xs
                      uppercase
                      tracking-[0.18em]
                      text-white/30
                    "
                  >
                    Especificación
                  </th>

                  {models.map((model) => (
                    <th
                      key={model.id}
                      className="
                        border-b
                        border-l
                        border-white/10
                        p-6
                        text-left
                      "
                    >
                      <span className="text-lg font-semibold">
                        {model.shortName}
                      </span>

                      <span className="mt-1 block text-xs font-normal text-white/35">
                        {model.eyebrow}
                      </span>
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                <ComparisonRow
                  label="Aspersión"
                  values={models.map((m) => m.spray)}
                />

                <ComparisonRow
                  label="Tolva"
                  values={models.map((m) => m.spreading)}
                />

                <ComparisonRow
                  label="Carga de sólidos"
                  values={models.map(
                    (m) => m.spreadingPayload
                  )}
                />

                <ComparisonRow
                  label="Elevación"
                  values={models.map((m) => m.lifting)}
                />

                <ComparisonRow
                  label="Ancho de aspersión"
                  values={models.map(
                    (m) => m.sprayWidth
                  )}
                />

                <ComparisonRow
                  label="Caudal máximo"
                  values={models.map((m) => m.flow)}
                />

                <ComparisonRow
                  label="Operación recomendada"
                  values={models.map(
                    (m) => m.recommended
                  )}
                  last
                />
              </tbody>
            </table>
          </div>

          <p className="mt-5 max-w-[900px] text-xs leading-5 text-white/25">
            Las capacidades y el rendimiento pueden variar
            de acuerdo con la configuración del equipo,
            condiciones ambientales, altitud, material
            aplicado y normativas locales.
          </p>
        </div>
      </section>

      {/* ====================================================== */}
      {/* CTA */}
      {/* ====================================================== */}

      <section className="relative overflow-hidden bg-[#080808]">

        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            h-[600px]
            w-[900px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-[#018C55]/10
            blur-[160px]
          "
        />

        <div
          className="
            relative
            mx-auto
            max-w-[1440px]
            px-6
            py-28
            text-center
            sm:px-10
            lg:px-14
            lg:py-40
          "
        >
          <img
            src="/images/logo-agriculture.png"
            alt="DJI Agriculture"
            className="mx-auto h-10 w-auto object-contain"
          />

          <h2
            className="
              mx-auto
              mt-10
              max-w-[900px]
              text-4xl
              font-semibold
              tracking-[-0.05em]
              sm:text-5xl
              lg:text-7xl
            "
          >
            ¿Qué AGRAS necesita
            <span className="block text-white/30">
              tu operación?
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-6
              max-w-[620px]
              text-base
              leading-7
              text-white/45
            "
          >
            Analizamos superficie, cultivo, tipo de
            aplicación y capacidad requerida para ayudarte
            a seleccionar la solución adecuada.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a
               href="https://wa.me/4811024104?text=Hola%20MAXIDRONE,%20quiero%20información%20sobre%20los%20equipos%20DJI%20Agriculture."
              className="
                rounded-full
                bg-[#018C55]
                px-8
                py-4
                text-sm
                font-semibold
                transition
                hover:bg-[#018C55]
              "
            >
              Contactar a DJI Agriculture
            </a>

            <button
              onClick={scrollToModels}
              className="
                rounded-full
                border
                border-white/15
                px-8
                py-4
                text-sm
                font-semibold
                text-white/70
                transition
                hover:border-white/30
                hover:text-white
              "
            >
              Ver modelos
            </button>
          </div>
        </div>
      </section>


    </main>
  );
}

/* ========================================================== */
/* COMPONENTES AUXILIARES */
/* ========================================================== */

function HeroStat({
  number,
  text,
  border = false,
}: {
  number: string;
  text: string;
  border?: boolean;
}) {
  return (
    <div
      className={`
        ${border ? "border-l border-white/10 pl-5" : ""}
      `}
    >
      <p className="text-lg font-semibold sm:text-xl">
        {number}
      </p>

      <p className="mt-1 text-[11px] text-white/35">
        {text}
      </p>
    </div>
  );
}

function SmallSpec({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div>
      <p className="text-lg font-semibold">{value}</p>

      <p className="mt-1 text-[11px] text-white/30">
        {label}
      </p>
    </div>
  );
}

function MainSpec({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="bg-[#0b0b0b] p-5">
      <p className="text-xl font-semibold">{value}</p>

      <p
        className="
          mt-1
          text-[10px]
          uppercase
          tracking-[0.15em]
          text-white/30
        "
      >
        {label}
      </p>
    </div>
  );
}

function TabButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`
        relative
        whitespace-normal
        pb-5
        text-center
        text-xs
        font-semibold
        transition
        sm:whitespace-nowrap
        sm:text-sm

        ${
          active
            ? "text-white"
            : "text-white/35 hover:text-white/70"
        }
      `}
    >
      {children}

      {active && (
        <span
          className="
            absolute
            bottom-[-1px]
            left-0
            h-[2px]
            w-full
            bg-[#018C55]
          "
        />
      )}
    </button>
  );
}

function FeatureCard({
  index,
  title,
  text,
}: {
  index: number;
  title: string;
  text: string;
}) {
  return (
    <div
      className="
        group
        min-h-[230px]
        rounded-[24px]
        border
        border-white/10
        bg-[#090909]
        p-7
        transition
        duration-300
        hover:border-white/20
        hover:bg-[#0c0c0c]
      "
    >
      <div
        className="
          flex
          h-10
          w-10
          items-center
          justify-center
          rounded-full
          border
          border-[#018C55]/25
          bg-[#018C55]/5
          text-xs
          font-semibold
          text-[#018C55]
        "
      >
        0{index}
      </div>

      <h4
        className="
          mt-8
          text-xl
          font-semibold
          tracking-[-0.02em]
        "
      >
        {title}
      </h4>

      <p
        className="
          mt-3
          max-w-[360px]
          text-sm
          leading-6
          text-white/40
        "
      >
        {text}
      </p>
    </div>
  );
}

function TechnologyCard({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div
      className="
        min-h-[240px]
        rounded-[24px]
        border
        border-white/10
        bg-[#0b0b0b]
        p-7
        transition
        hover:border-white/20
      "
    >
      <span
        className="
          text-xs
          font-semibold
          tracking-[0.18em]
          text-[#018C55]
        "
      >
        {number}
      </span>

      <h3
        className="
          mt-14
          text-xl
          font-semibold
          tracking-[-0.025em]
        "
      >
        {title}
      </h3>

      <p
        className="
          mt-3
          text-sm
          leading-6
          text-white/40
        "
      >
        {text}
      </p>
    </div>
  );
}

function ComparisonRow({
  label,
  values,
  last = false,
}: {
  label: string;
  values: string[];
  last?: boolean;
}) {
  return (
    <tr className="bg-[#070707] transition hover:bg-[#0a0a0a]">
      <td
        className={`
          p-6
          text-sm
          font-medium
          text-white/45

          ${last ? "" : "border-b border-white/[0.07]"}
        `}
      >
        {label}
      </td>

      {values.map((value, index) => (
        <td
          key={`${label}-${index}`}
          className={`
            border-l
            border-white/[0.07]
            p-6
            text-sm
            font-semibold
            text-white/80

            ${last ? "" : "border-b"}
          `}
        >
          {value}
        </td>
      ))}
    </tr>
  );
}
