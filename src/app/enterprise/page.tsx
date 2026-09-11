"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

/* ============================================================
   TIPOS
============================================================ */

type Need =
  | "topografia"
  | "fotogrametria"
  | "seguridad"
  | "termica"
  | "monitoreo"
  | "automatizacion";

/* ============================================================
   NECESIDADES
============================================================ */

const needs: {
  id: Need;
  title: string;
  subtitle: string;
}[] = [
  {
    id: "topografia",
    title: "Topografía",
    subtitle: "Levantamientos y captura geoespacial",
  },
  {
    id: "fotogrametria",
    title: "Fotogrametría",
    subtitle: "Mapeo y generación de información",
  },
  {
    id: "seguridad",
    title: "Seguridad",
    subtitle: "Vigilancia y respuesta",
  },
  {
    id: "termica",
    title: "Inspección térmica",
    subtitle: "Información térmica y análisis",
  },
  {
    id: "monitoreo",
    title: "Monitoreo",
    subtitle: "Supervisión periódica de instalaciones",
  },
  {
    id: "automatizacion",
    title: "Automatización",
    subtitle: "Operaciones aéreas recurrentes",
  },
];

/* ============================================================
   RECOMENDACIONES
============================================================ */

const recommendations: Record<
  Need,
  {
    title: string;
    products: string[];
    description: string;
  }
> = {
  topografia: {
    title: "Soluciones recomendadas",
    products: [
      "Matrice 400",
      "Matrice 4E",
      "DJI Dock 3 + Matrice 4D",
    ],
    description:
      "Alternativas para levantamientos, proyectos geoespaciales y operaciones recurrentes.",
  },

  fotogrametria: {
    title: "Soluciones recomendadas",
    products: [
      "Matrice 4E",
      "Matrice 400",
      "DJI Dock 3 + Matrice 4D",
    ],
    description:
      "Plataformas para captura aérea, mapeo y generación de información geoespacial.",
  },

  seguridad: {
    title: "Soluciones recomendadas",
    products: [
      "DJI Dock 3 + Matrice 4TD",
      "Matrice 4T",
    ],
    description:
      "Soluciones para vigilancia, monitoreo y operaciones que requieren respuesta rápida.",
  },

  termica: {
    title: "Soluciones recomendadas",
    products: [
      "Matrice 4T",
      "DJI Dock 3 + Matrice 4TD",
    ],
    description:
      "Plataformas multisensor para inspección y operaciones con información térmica.",
  },

  monitoreo: {
    title: "Soluciones recomendadas",
    products: [
      "DJI Dock 3 + Matrice 4TD",
      "Matrice 4T",
      "Matrice 400",
    ],
    description:
      "Opciones para supervisión periódica, inspección y monitoreo de instalaciones.",
  },

  automatizacion: {
    title: "Solución recomendada",
    products: [
      "DJI Dock 3 + Matrice 4D",
      "DJI Dock 3 + Matrice 4TD",
    ],
    description:
      "Operaciones aéreas programadas y remotas con la plataforma DJI Dock 3.",
  },
};

/* ============================================================
   PÁGINA
============================================================ */

export default function EnterprisePage() {
  const [selectedNeed, setSelectedNeed] =
    useState<Need>("topografia");

  const [dockDrone, setDockDrone] =
    useState<"4d" | "4td">("4d");

  const [heroZoom, setHeroZoom] =
    useState(false);

  const recommendation =
    recommendations[selectedNeed];

  /* ==========================================================
     ANIMACIÓN SUAVE DEL HERO
  ========================================================== */

  useEffect(() => {
    const timer = window.setInterval(() => {
      setHeroZoom((current) => !current);
    }, 9000);

    return () => {
      window.clearInterval(timer);
    };
  }, []);

  return (
    <main className="overflow-hidden bg-[#000000] text-[#FFFFFF]">

      {/* ======================================================
          HERO PREMIUM - PANTALLA COMPLETA
      ====================================================== */}

      <section
        className="
          relative
          isolate
          h-[calc(100svh-64px)]
          min-h-[650px]
          overflow-hidden
          border-b
          border-white/10
          bg-black
        "
      >

        {/* IMAGEN PRINCIPAL */}
        <div className="absolute inset-0 overflow-hidden">

          <Image
            src="/images/enterprise-hero.jpg"
            alt="Soluciones DJI Enterprise MAXIDRONE"
            fill
            priority
            quality={100}
            sizes="100vw"
            className={`
              object-cover
              object-[58%_center]
              transition-transform
              duration-[9000ms]
              ease-in-out
              ${
                heroZoom
                  ? "scale-[1.035]"
                  : "scale-100"
              }
            `}
          />

        </div>


        {/* SOMBRA IZQUIERDA */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            bg-gradient-to-r
            from-black/75
            via-black/32
            to-transparent
          "
        />


        {/* SOMBRA INFERIOR MUY LIGERA */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            bg-gradient-to-t
            from-black/35
            via-transparent
            to-black/5
          "
        />


        {/* CONTENIDO */}
        <div
          className="
            relative
            z-10
            mx-auto
            flex
            h-full
            max-w-[1600px]
            items-end
            px-4
            pb-16
            sm:px-6
            sm:pb-20
            lg:px-8
            lg:pb-24
            xl:px-10
          "
        >

          <div
            className="
              max-w-[560px]
              translate-x-0
              sm:-translate-x-10
              lg:-translate-x-16
            "
          >

            {/* IDENTIFICADOR */}
            <div className="mb-5 flex items-center gap-4">

              <span className="h-px w-9 bg-[#D9D9D9]" />

              <p
                className="
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.30em]
                  text-white/75
                  sm:text-sm
                "
              >
                DJI Enterprise
              </p>

            </div>


            {/* TITULO */}
            <h1
              className="
                max-w-[600px]
                text-[38px]
                font-semibold
                uppercase
                leading-[0.98]
                tracking-[-0.045em]
                text-white
                sm:text-[46px]
                md:text-[54px]
                lg:text-[60px]
              "
              style={{
                textShadow:
                  "0 4px 18px rgba(0,0,0,0.35)",
              }}
            >

              Tecnología para

              <span className="block">
                operaciones
              </span>

              <span className="block">
                críticas
              </span>

            </h1>


            {/* DESCRIPCIÓN */}
            <p
              className="
                mt-6
                max-w-[520px]
                text-base
                leading-7
                text-white/70
                sm:text-[17px]
              "
            >
              Plataformas profesionales para levantamientos,
              inspección, monitoreo, seguridad y automatización.
            </p>


            {/* BOTONES */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">

              <a
                href="#soluciones"
                className="
                  inline-flex
                  min-h-12
                  items-center
                  justify-center
                  bg-[#F2F2F2]
                  px-7
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.13em]
                  text-black
                  transition-all
                  duration-300
                  hover:bg-white
                "
              >
                Explorar soluciones
              </a>


              <Link
                href="https://wa.me/4811566180?text=Hola%20MAXIDRONE,%20quiero%20información%20sobre%20las%20soluciones%20DJI%20Enterprise."
                className="
                  inline-flex
                  min-h-12
                  items-center
                  justify-center
                  border
                  border-white/30
                  bg-black/10
                  px-7
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.13em]
                  text-white
                  backdrop-blur-sm
                  transition-all
                  duration-300
                  hover:border-white
                  hover:bg-white
                  hover:text-black
                "
              >
                Hablar con un especialista
              </Link>

            </div>


            {/* CATEGORÍAS */}
            <div
              className="
                mt-10
                flex
                flex-wrap
                gap-x-7
                gap-y-3
                border-t
                border-white/15
                pt-5
                text-[10px]
                uppercase
                tracking-[0.17em]
                text-white/45
                sm:text-[11px]
              "
            >

              <span>Levantamientos</span>
              <span>Inspección</span>
              <span>Monitoreo</span>
              <span>Automatización</span>

            </div>

          </div>

        </div>


        {/* DESCUBRIR */}
        <a
          href="#soluciones"
          className="
            absolute
            bottom-7
            right-8
            z-20
            hidden
            items-center
            gap-3
            text-[10px]
            uppercase
            tracking-[0.20em]
            text-white/40
            transition
            hover:text-white
            md:flex
          "
        >

          Descubrir

          <span
            className="
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-full
              border
              border-white/20
            "
          >
            ↓
          </span>

        </a>

      </section>


      {/* ======================================================
          QUÉ QUIERES LOGRAR
          FONDO: 4.gif
      ====================================================== */}

      <section
        id="soluciones"
        className="
          relative
          overflow-hidden
          border-b
          border-[#151515]
          bg-black
          bg-cover
          bg-center
          bg-no-repeat
        "
        style={{
          backgroundImage: "url('/images/enterprise-hero.gif')",
        }}
      >

        {/* OSCURECEMOS EL GIF PARA QUE EL TEXTO SE LEA */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            bg-black/70
          "
        />


        {/* CONTENIDO */}
        <div
          className="
            relative
            z-10
            mx-auto
            max-w-[1440px]
            px-6
            py-24
            sm:px-10
            lg:px-14
          "
        >

          <div className="max-w-3xl">

            <div className="mb-5 flex items-center gap-4">

              <span className="h-[2px] w-8 bg-[#018C55]" />

              <p
                className="
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.25em]
                  text-white/55
                "
              >
                Encuentra tu solución
              </p>

            </div>


            <h2
              className="
                text-4xl
                font-semibold
                uppercase
                tracking-[-0.03em]
                text-white
                sm:text-5xl
              "
            >
              ¿Qué quieres lograr?
            </h2>


            <p
              className="
                mt-5
                max-w-2xl
                text-lg
                leading-8
                text-[#6B6B6B]
              "
            >
              Selecciona una necesidad y te mostraremos
              las soluciones que pueden adaptarse a
              tu operación.
            </p>

          </div>


          {/* SELECTOR DE NECESIDADES */}
          <div
            className="
              mt-12
              grid
              gap-3
              sm:grid-cols-2
              lg:grid-cols-3
            "
          >

            {needs.map((need) => {

              const active =
                need.id === selectedNeed;

              return (
                <button
                  key={need.id}
                  type="button"
                  aria-pressed={active}
                  onClick={() =>
                    setSelectedNeed(need.id)
                  }
                  className={`
                    group
                    min-h-[125px]
                    border
                    p-6
                    text-left
                    transition-all
                    duration-300

                    ${
                      active
                        ? "border-[#FFFFFF] bg-[#111111]"
                        : "border-[#252525] bg-[#151515] hover:border-[#6B6B6B]"
                    }
                  `}
                >

                  <div
                    className="
                      flex
                      items-start
                      justify-between
                      gap-4
                    "
                  >

                    <div>

                      <p
                        className="
                          text-lg
                          font-semibold
                          text-white
                        "
                      >
                        {need.title}
                      </p>


                      <p
                        className="
                          mt-2
                          text-sm
                          leading-6
                          text-[#6B6B6B]
                        "
                      >
                        {need.subtitle}
                      </p>

                    </div>


                    <span
                      className={`
                        mt-1
                        h-2
                        w-2
                        shrink-0
                        rounded-full

                        ${
                          active
                            ? "bg-[#FFFFFF]"
                            : "bg-[#6B6B6B]"
                        }
                      `}
                    />

                  </div>

                </button>
              );

            })}

          </div>


          {/* RECOMENDACIÓN */}
          <div
            aria-live="polite"
            className="
              mt-6
              grid
              gap-8
              border
              border-[#252525]
              bg-[#080808]
              p-7
              md:p-10
              lg:grid-cols-[1fr_1.3fr]
            "
          >

            <div>

              <p
                className="
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.22em]
                  text-white/45
                "
              >
                MAXIDRONE recomienda
              </p>


              <h3
                className="
                  mt-3
                  text-3xl
                  font-semibold
                  text-white
                "
              >
                {recommendation.title}
              </h3>


              <p
                className="
                  mt-4
                  max-w-lg
                  leading-7
                  text-[#6B6B6B]
                "
              >
                {recommendation.description}
              </p>

            </div>


            <div>

              {recommendation.products.map(
                (product, index) => (

                  <div
                    key={product}
                    className="
                      flex
                      items-center
                      gap-5
                      border-b
                      border-[#202020]
                      py-4
                    "
                  >

                    <span
                      className="
                        text-xs
                        font-semibold
                        text-[#6B6B6B]
                      "
                    >
                      0{index + 1}
                    </span>


                    <span
                      className="
                        text-lg
                        font-semibold
                        text-white
                      "
                    >
                      {product}
                    </span>


                    <span
                      className="
                        ml-auto
                        text-[#018C55]
                      "
                    >
                      →
                    </span>

                  </div>

                )
              )}

            </div>

          </div>

        </div>

      </section>


      {/* ======================================================
          MATRICE 400
      ====================================================== */}

      <section
        className="
          border-b
          border-[#151515]
          bg-black
        "
      >

        <div
          className="
            mx-auto
            grid
            max-w-[1440px]
            gap-14
            px-6
            py-24
            sm:px-10
            lg:grid-cols-2
            lg:px-14
          "
        >

          {/* IMAGEN */}
          <div
            className="
              group
              relative
              min-h-[520px]
              overflow-hidden
              bg-[#151515]
            "
          >

            <Image
              src="/images/400.png"
              alt="DJI Matrice 400"
              fill
              quality={100}
              sizes="(max-width:1024px) 100vw, 50vw"
              className="
                object-cover
                transition-transform
                duration-[1200ms]
                ease-out
                group-hover:scale-[1.025]
              "
            />


            <div
              className="
                pointer-events-none
                absolute
                inset-0
                bg-gradient-to-t
                from-black/35
                via-transparent
                to-transparent
              "
            />

          </div>


          {/* TEXTO */}
          <div
            className="
              flex
              flex-col
              justify-center
              lg:px-8
            "
          >

            <div className="mb-5 flex items-center gap-4">

              <span className="h-[2px] w-8 bg-[#018C55]" />

              <p
                className="
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.25em]
                  text-white/50
                "
              >
                Plataforma insignia
              </p>

            </div>


            <h2
              className="
                text-5xl
                font-semibold
                uppercase
                tracking-[-0.04em]
                text-white
                sm:text-6xl
              "
            >
              Matrice 400
            </h2>


            <p
              className="
                mt-5
                text-2xl
                font-medium
                text-[#F2F2F2]
              "
            >
              Potencia para proyectos de gran escala.
            </p>


            <p
              className="
                mt-6
                max-w-xl
                text-lg
                leading-8
                text-[#6B6B6B]
              "
            >
              Plataforma de alto rendimiento para
              levantamientos, mapeo, captura avanzada
              de datos y operaciones que requieren
              sensores especializados.
            </p>


            <div
              className="
                mt-9
                flex
                flex-wrap
                gap-3
              "
            >

              {[
                "Topografía",
                "Mapeo",
                "Modelado 3D",
                "Datos especializados",
              ].map((item) => (

                <span
                  key={item}
                  className="
                    border
                    border-[#292929]
                    bg-[#151515]
                    px-4
                    py-2
                    text-sm
                    font-medium
                    text-[#F2F2F2]
                  "
                >
                  {item}
                </span>

              ))}

            </div>


            <Link
              href="https://wa.me/4811566180?text=Hola%20MAXIDRONE,%20quiero%20información%20sobre%20el%20equipo%20DJI%20Matrice%20400."
              className="
                mt-10
                inline-flex
                min-h-12
                w-fit
                items-center
                bg-[#018C55]
                px-7
                text-sm
                font-semibold
                uppercase
                tracking-[0.12em]
                text-white
                transition
                hover:bg-[#017247]
              "
            >
              Consultar Matrice 400
            </Link>

          </div>

        </div>

      </section>


      {/* ======================================================
          DJI DOCK 3
      ====================================================== */}

      <section
        className="
          relative
          border-b
          border-[#252525]
          bg-[#151515]
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
          "
        >

          <div
            className="
              grid
              items-start
              gap-12
              lg:grid-cols-[0.8fr_1.2fr]
            "
          >

            {/* TEXTO DOCK */}
            <div className="lg:sticky lg:top-28">

              <div className="mb-5 flex items-center gap-4">

                <span className="h-[2px] w-8 bg-[#018C55]" />

                <p
                  className="
                    text-xs
                    font-semibold
                    uppercase
                    tracking-[0.25em]
                    text-white/50
                  "
                >
                  Operaciones autónomas
                </p>

              </div>


              <h2
                className="
                  text-5xl
                  font-semibold
                  uppercase
                  tracking-[-0.04em]
                  text-white
                  sm:text-6xl
                "
              >
                DJI Dock 3
              </h2>


              <p
                className="
                  mt-6
                  max-w-xl
                  text-lg
                  leading-8
                  text-white/60
                "
              >
                Automatiza operaciones de monitoreo,
                seguridad, inspección y levantamientos
                mediante misiones programadas y
                operación remota.
              </p>


              <div
                className="
                  mt-9
                  border-l
                  border-[#018C55]
                  pl-5
                "
              >

                <p
                  className="
                    text-xl
                    font-medium
                    text-white
                  "
                >
                  Operación aérea
                </p>

                <p
                  className="
                    mt-1
                    text-xl
                    font-medium
                    text-white/55
                  "
                >
                  automatizada
                </p>

              </div>

            </div>


            {/* ÁREA DOCK */}
            <div>

              {/* IMAGEN */}
              <div
                className="
                  group
                  relative
                  min-h-[480px]
                  overflow-hidden
                  bg-black
                "
              >

                <Image
                  src="/images/dock3.jpg"
                  alt="DJI Dock 3"
                  fill
                  quality={100}
                  sizes="(max-width:1024px) 100vw, 60vw"
                  className="
                    object-cover
                    transition-transform
                    duration-[1200ms]
                    ease-out
                    group-hover:scale-[1.025]
                  "
                />


                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/65
                    via-transparent
                    to-transparent
                  "
                />


                <div
                  className="
                    absolute
                    bottom-7
                    left-7
                  "
                >

                  <p
                    className="
                      text-xs
                      font-semibold
                      uppercase
                      tracking-[0.25em]
                      text-white/50
                    "
                  >
                    Ecosistema Dock
                  </p>


                  <p
                    className="
                      mt-2
                      text-2xl
                      font-semibold
                      text-white
                    "
                  >
                    Elige la aeronave según la misión.
                  </p>

                </div>

              </div>


              {/* SELECTOR 4D / 4TD */}
              <div className="mt-6">

                <div
                  className="
                    grid
                    grid-cols-2
                    border
                    border-[#303030]
                  "
                >

                  <button
                    type="button"
                    aria-pressed={dockDrone === "4d"}
                    onClick={() =>
                      setDockDrone("4d")
                    }
                    className={`
                      min-h-16
                      px-5
                      text-sm
                      font-semibold
                      uppercase
                      tracking-[0.14em]
                      transition

                      ${
                        dockDrone === "4d"
                          ? "bg-white text-black"
                          : "bg-black text-[#6B6B6B] hover:text-white"
                      }
                    `}
                  >
                    Matrice 4D
                  </button>


                  <button
                    type="button"
                    aria-pressed={dockDrone === "4td"}
                    onClick={() =>
                      setDockDrone("4td")
                    }
                    className={`
                      min-h-16
                      border-l
                      border-[#303030]
                      px-5
                      text-sm
                      font-semibold
                      uppercase
                      tracking-[0.14em]
                      transition

                      ${
                        dockDrone === "4td"
                          ? "bg-white text-black"
                          : "bg-black text-[#6B6B6B] hover:text-white"
                      }
                    `}
                  >
                    Matrice 4TD
                  </button>

                </div>


                {/* ================================
                    MATRICE 4D
                ================================= */}

                {dockDrone === "4d" && (

                  <div
                    className="
                      grid
                      gap-8
                      bg-black
                      p-7
                      sm:p-9
                      md:grid-cols-[1fr_1.1fr]
                    "
                  >

                    <div
                      className="
                        group
                        relative
                        min-h-[320px]
                        overflow-hidden
                        bg-[#151515]
                      "
                    >

                      <Image
                        src="/images/matrice4d.png"
                        alt="DJI Matrice 4D"
                        fill
                        quality={100}
                        sizes="(max-width:768px) 100vw, 40vw"
                        className="
                          object-contain
                          p-5
                          transition-transform
                          duration-700
                          group-hover:scale-[1.04]
                        "
                      />

                    </div>


                    <div
                      className="
                        flex
                        flex-col
                        justify-center
                      "
                    >

                      <p
                        className="
                          text-xs
                          font-semibold
                          uppercase
                          tracking-[0.20em]
                          text-white/45
                        "
                      >
                        Matrice 4D
                      </p>


                      <h3
                        className="
                          mt-3
                          text-3xl
                          font-semibold
                          text-white
                        "
                      >
                        Precisión geoespacial automatizada.
                      </h3>


                      <p
                        className="
                          mt-5
                          leading-7
                          text-[#6B6B6B]
                        "
                      >
                        La opción del ecosistema Dock
                        orientada a mapeo, levantamientos
                        y captura recurrente de información.
                      </p>


                      <div
                        className="
                          mt-7
                          grid
                          grid-cols-2
                          gap-4
                          text-sm
                        "
                      >

                        {[
                          "Mapeo",
                          "Topografía",
                          "Fotogrametría",
                          "Misiones programadas",
                        ].map((item) => (

                          <div
                            key={item}
                            className="
                              border-l
                              border-[#018C55]
                              pl-3
                              font-medium
                              text-[#F2F2F2]
                            "
                          >
                            {item}
                          </div>

                        ))}

                      </div>

                    </div>

                  </div>

                )}


                {/* ================================
                    MATRICE 4TD
                ================================= */}

                {dockDrone === "4td" && (

                  <div
                    className="
                      grid
                      gap-8
                      bg-black
                      p-7
                      sm:p-9
                      md:grid-cols-[1fr_1.1fr]
                    "
                  >

                    <div
                      className="
                        group
                        relative
                        min-h-[320px]
                        overflow-hidden
                        bg-[#151515]
                      "
                    >

                      <Image
                        src="/images/matrice4td.png"
                        alt="DJI Matrice 4TD"
                        fill
                        quality={100}
                        sizes="(max-width:768px) 100vw, 40vw"
                        className="
                          object-contain
                          p-5
                          transition-transform
                          duration-700
                          group-hover:scale-[1.04]
                        "
                      />

                    </div>


                    <div
                      className="
                        flex
                        flex-col
                        justify-center
                      "
                    >

                      <p
                        className="
                          text-xs
                          font-semibold
                          uppercase
                          tracking-[0.20em]
                          text-white/45
                        "
                      >
                        Matrice 4TD
                      </p>


                      <h3
                        className="
                          mt-3
                          text-3xl
                          font-semibold
                          text-white
                        "
                      >
                        Visión multisensor automatizada.
                      </h3>


                      <p
                        className="
                          mt-5
                          leading-7
                          text-[#6B6B6B]
                        "
                      >
                        Configuración orientada a seguridad,
                        monitoreo, inspección y operaciones
                        que requieren información térmica.
                      </p>


                      <div
                        className="
                          mt-7
                          grid
                          grid-cols-2
                          gap-4
                          text-sm
                        "
                      >

                        {[
                          "Seguridad",
                          "Monitoreo",
                          "Inspección",
                          "Información térmica",
                        ].map((item) => (

                          <div
                            key={item}
                            className="
                              border-l
                              border-[#018C55]
                              pl-3
                              font-medium
                              text-[#F2F2F2]
                            "
                          >
                            {item}
                          </div>

                        ))}

                      </div>

                    </div>

                  </div>

                )}

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ======================================================
          MATRICE 4 SERIES
      ====================================================== */}

      <section
        className="
          border-b
          border-[#151515]
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
          "
        >

          <div
            className="
              mx-auto
              max-w-3xl
              text-center
            "
          >

            <div
              className="
                mb-5
                flex
                items-center
                justify-center
                gap-4
              "
            >

              <span className="h-[2px] w-8 bg-[#018C55]" />

              <p
                className="
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.25em]
                  text-white/45
                "
              >
                Matrice 4 Series
              </p>

            </div>


            <h2
              className="
                text-4xl
                font-semibold
                uppercase
                tracking-[-0.04em]
                text-white
                sm:text-6xl
              "
            >

              Compacto.

              <br />

              Inteligente.

              <br />

              Profesional.

            </h2>

          </div>


          <div
            className="
              mt-14
              grid
              gap-6
              lg:grid-cols-2
            "
          >

            {/* MATRICE 4E */}
            <article
              className="
                group
                overflow-hidden
                border
                border-[#252525]
                bg-[#151515]
              "
            >

              <div
                className="
                  relative
                  min-h-[430px]
                  overflow-hidden
                  bg-black
                "
              >

                <Image
                  src="/images/matrice4e.png"
                  alt="DJI Matrice 4E"
                  fill
                  quality={100}
                  sizes="(max-width:1024px) 100vw, 50vw"
                  className="
                    object-contain
                    p-8
                    transition-transform
                    duration-[1000ms]
                    ease-out
                    group-hover:scale-[1.04]
                  "
                />

              </div>


              <div className="p-8">

                <p
                  className="
                    text-xs
                    font-semibold
                    uppercase
                    tracking-[0.22em]
                    text-white/40
                  "
                >
                  Geoespacial
                </p>


                <h3
                  className="
                    mt-3
                    text-3xl
                    font-semibold
                    text-white
                  "
                >
                  Matrice 4E
                </h3>


                <p
                  className="
                    mt-4
                    leading-7
                    text-[#6B6B6B]
                  "
                >
                  Plataforma compacta orientada a
                  fotogrametría, topografía y generación
                  de información geoespacial.
                </p>


                <div
                  className="
                    mt-6
                    flex
                    flex-wrap
                    gap-2
                  "
                >

                  {[
                    "Fotogrametría",
                    "Topografía",
                    "Mapeo",
                  ].map((item) => (

                    <span
                      key={item}
                      className="
                        border
                        border-[#242424]
                        bg-black
                        px-3
                        py-2
                        text-xs
                        font-medium
                        text-[#F2F2F2]
                      "
                    >
                      {item}
                    </span>

                  ))}

                </div>

              </div>

            </article>


            {/* MATRICE 4T */}
            <article
              className="
                group
                overflow-hidden
                border
                border-[#252525]
                bg-[#151515]
              "
            >

              <div
                className="
                  relative
                  min-h-[430px]
                  overflow-hidden
                  bg-black
                "
              >

                <Image
                  src="/images/matrice4t.png"
                  alt="DJI Matrice 4T"
                  fill
                  quality={100}
                  sizes="(max-width:1024px) 100vw, 50vw"
                  className="
                    object-contain
                    p-8
                    transition-transform
                    duration-[1000ms]
                    ease-out
                    group-hover:scale-[1.04]
                  "
                />

              </div>


              <div className="p-8">

                <p
                  className="
                    text-xs
                    font-semibold
                    uppercase
                    tracking-[0.22em]
                    text-white/40
                  "
                >
                  Multisensor
                </p>


                <h3
                  className="
                    mt-3
                    text-3xl
                    font-semibold
                    text-white
                  "
                >
                  Matrice 4T
                </h3>


                <p
                  className="
                    mt-4
                    leading-7
                    text-[#6B6B6B]
                  "
                >
                  Plataforma para inspecciones,
                  seguridad, monitoreo y aplicaciones
                  que requieren información térmica.
                </p>


                <div
                  className="
                    mt-6
                    flex
                    flex-wrap
                    gap-2
                  "
                >

                  {[
                    "Inspección",
                    "Seguridad",
                    "Térmico",
                  ].map((item) => (

                    <span
                      key={item}
                      className="
                        border
                        border-[#242424]
                        bg-black
                        px-3
                        py-2
                        text-xs
                        font-medium
                        text-[#F2F2F2]
                      "
                    >
                      {item}
                    </span>

                  ))}

                </div>

              </div>

            </article>

          </div>

        </div>

      </section>


      {/* ======================================================
          ECOSISTEMA
      ====================================================== */}
{/* ======================================================
    ECOSISTEMA
====================================================== */}

<section
  className="
    border-b
    border-[#151515]
    bg-black
  "
>
  <div
    className="
      mx-auto
      max-w-[1440px]
      px-6
      py-16
      sm:px-10
      lg:px-14
      lg:py-20
    "
  >

    {/* ENCABEZADO */}
    <div
      className="
        grid
        gap-6
        lg:grid-cols-[0.7fr_1.3fr]
        lg:items-end
      "
    >

      <div>
        <div className="flex items-center gap-4">

          <span className="h-px w-8 bg-white/35" />

          <p
            className="
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.26em]
              text-white/35
            "
          >
            Ecosistema Enterprise
          </p>

        </div>

        <h2
          className="
            mt-4
            text-3xl
            font-semibold
            uppercase
            tracking-[-0.04em]
            text-white
            sm:text-4xl
            lg:text-5xl
          "
        >
          Del vuelo
          <span className="block text-white/25">
            a la decisión.
          </span>
        </h2>
      </div>


      <div className="lg:pb-1">

        <p
          className="
            max-w-[620px]
            text-sm
            leading-6
            text-white/40
            lg:ml-auto
          "
        >
          La tecnología es solo el comienzo.
          Convertimos la captura aérea en información
          que puede apoyar la operación, el análisis
          y la toma de decisiones.
        </p>

      </div>

    </div>


    {/* ==================================================
        PROCESO
    ================================================== */}

    <div
      className="
        mt-10
        grid
        gap-2
        sm:grid-cols-2
        lg:grid-cols-5
      "
    >

      {[
        {
          number: "01",
          title: "Vuelo",
          text: "Captura aérea",
        },
        {
          number: "02",
          title: "Datos",
          text: "Información",
        },
        {
          number: "03",
          title: "Procesamiento",
          text: "Organización",
        },
        {
          number: "04",
          title: "Análisis",
          text: "Interpretación",
        },
        {
          number: "05",
          title: "Decisión",
          text: "Acción",
        },
      ].map((step, index) => (

        <div
          key={step.number}
          className="
            group
            relative
            min-h-[150px]
            overflow-hidden
            border
            border-white/[0.08]
            bg-[#0A0A0A]
            p-5
            transition-all
            duration-300
            hover:border-white/20
            hover:bg-[#101010]
          "
        >

          {/* NUMERO */}
          <div className="flex items-center justify-between">

            <span
              className="
                text-[9px]
                font-semibold
                tracking-[0.15em]
                text-white/25
              "
            >
              {step.number}
            </span>

            <span
              className="
                h-1
                w-1
                rounded-full
                bg-white/30
                transition
                group-hover:bg-white
              "
            />

          </div>


          {/* TEXTO */}
          <div className="mt-8">

            <h3
              className="
                text-base
                font-semibold
                uppercase
                tracking-[-0.01em]
                text-white
              "
            >
              {step.title}
            </h3>

            <p
              className="
                mt-1.5
                text-xs
                text-white/30
              "
            >
              {step.text}
            </p>

          </div>


          {/* FLECHA ENTRE PROCESOS */}
          {index < 4 && (

            <span
              className="
                absolute
                bottom-4
                right-4
                hidden
                text-xs
                text-white/15
                transition
                group-hover:text-white/40
                lg:block
              "
            >
              →
            </span>

          )}

        </div>

      ))}

    </div>


    {/* ==================================================
        DESCRIPCIÓN INFERIOR COMPACTA
    ================================================== */}

    <div
      className="
        mt-3
        grid
        gap-px
        overflow-hidden
        border
        border-white/[0.08]
        bg-white/[0.08]
        md:grid-cols-3
      "
    >

      <div className="bg-[#080808] px-5 py-4">

        <p
          className="
            text-[9px]
            uppercase
            tracking-[0.2em]
            text-white/25
          "
        >
          Captura
        </p>

        <p
          className="
            mt-1.5
            text-xs
            font-medium
            text-white/55
          "
        >
          Información desde el aire
        </p>

      </div>


      <div className="bg-[#080808] px-5 py-4">

        <p
          className="
            text-[9px]
            uppercase
            tracking-[0.2em]
            text-white/25
          "
        >
          Procesamiento
        </p>

        <p
          className="
            mt-1.5
            text-xs
            font-medium
            text-white/55
          "
        >
          Datos organizados y utilizables
        </p>

      </div>


      <div className="bg-[#080808] px-5 py-4">

        <p
          className="
            text-[9px]
            uppercase
            tracking-[0.2em]
            text-white/25
          "
        >
          Resultado
        </p>

        <p
          className="
            mt-1.5
            text-xs
            font-medium
            text-white/55
          "
        >
          Información para tomar decisiones
        </p>

      </div>

    </div>

  </div>
</section>

      {/* ======================================================
          CTA FINAL
      ====================================================== */}

      <section className="bg-black">

        <div
          className="
            mx-auto
            max-w-[1440px]
            px-6
            py-24
            sm:px-10
            lg:px-14
          "
        >

          <div
            className="
              grid
              gap-10
              border
              border-[#252525]
              bg-[#151515]
              p-8
              sm:p-12
              lg:grid-cols-[1fr_auto]
              lg:items-center
            "
          >

            <div>

              <div className="mb-5 flex items-center gap-4">

                <span className="h-[2px] w-8 bg-[#018C55]" />

                <p
                  className="
                    text-xs
                    font-semibold
                    uppercase
                    tracking-[0.25em]
                    text-white/45
                  "
                >
                  MAXIDRONE
                </p>

              </div>


              <h2
                className="
                  max-w-3xl
                  text-4xl
                  font-semibold
                  uppercase
                  tracking-[-0.04em]
                  text-white
                  sm:text-5xl
                "
              >
                No necesitas elegir el dron solo.
              </h2>


              <p
                className="
                  mt-5
                  max-w-2xl
                  text-lg
                  leading-8
                  text-[#6B6B6B]
                "
              >
                Cuéntanos qué quieres realizar y
                te ayudamos a identificar la plataforma
                adecuada para tu operación.
              </p>

            </div>


            <Link
              href="/contacto"
              className="
                inline-flex
                min-h-14
                items-center
                justify-center
                bg-[#018C55]
                px-8
                text-sm
                font-semibold
                uppercase
                tracking-[0.12em]
                text-white
                transition
                hover:bg-[#017247]
              "
            >
              Diseñar mi solución
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}
