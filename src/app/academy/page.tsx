"use client";

import { useState } from "react";

type Audience = "alumno" | "universidad";

const modules = [
  {
    number: "01",
    title: "Seguridad",
    text: "Procedimientos, revisión previa y buenas prácticas antes de cada operación.",
    tag: "Fundamentos",
  },
  {
    number: "02",
    title: "Pilotaje",
    text: "Control de la aeronave, maniobras, despegues y aterrizajes.",
    tag: "Práctica",
  },
  {
    number: "03",
    title: "Misiones",
    text: "Planeación de parcelas, rutas de vuelo y operaciones automatizadas.",
    tag: "Planeación",
  },
  {
    number: "04",
    title: "Parámetros",
    text: "Altura, velocidad, caudal y configuración de aplicación.",
    tag: "Configuración",
  },
  {
    number: "05",
    title: "Campo",
    text: "Operaciones prácticas con tecnología DJI AGRAS.",
    tag: "Experiencia",
  },
  {
    number: "06",
    title: "Evaluación",
    text: "Validación de conocimientos y habilidades del programa.",
    tag: "Certificación",
  },
];

const faq = [
  {
    q: "¿Necesito experiencia previa?",
    a: "No necesariamente. La capacitación está diseñada para desarrollar conocimientos desde fundamentos de seguridad y operación hasta prácticas supervisadas.",
  },
  {
    q: "¿Dónde será?",
    a: "La próxima edición está prevista para octubre de 2026 en Ciudad Valles, San Luis Potosí. Las fechas y sede específicas se compartirán con las personas pre-registradas.",
  },
  {
    q: "¿Pueden capacitar a estudiantes de nuestra universidad?",
    a: "Sí. Podemos coordinar grupos con universidades de Ciudad Valles y otras instituciones de San Luis Potosí, revisando instalaciones, número de alumnos, áreas de práctica y logística.",
  },
  {
    q: "¿Obtengo certificado?",
    a: "El acceso al certificado DJI Academy depende del cumplimiento de los requisitos, evaluaciones y condiciones del programa correspondiente.",
  },
];

export default function AcademyPage() {
  const [audience, setAudience] =
    useState<Audience>("alumno");

  const studentWhatsapp =
    "https://wa.me/524811024104?text=Hola%20MAXIDRONE,%20quiero%20información%20para%20registrarme%20a%20DJI%20Academy%20Ciudad%20Valles%20Octubre%202026.";

  const universityWhatsapp =
    "https://wa.me/524811024104?text=Hola%20MAXIDRONE,%20represento%20a%20una%20universidad%20y%20quiero%20información%20sobre%20un%20convenio%20DJI%20Academy.";

  const scrollTo = (id: string) => {
    document
      .getElementById(id)
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  return (
    <main className="overflow-hidden bg-black text-white">

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
            className="flex items-center gap-4"
          >
            <img
              src="/images/logo-agriculture.png"
              alt="DJI Agriculture"
              className="h-7 w-auto object-contain sm:h-8"
            />

            <span className="h-6 w-px bg-white/15" />

            <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/65">
              Academy
            </span>
          </button>

          <nav className="hidden items-center gap-7 lg:flex">

            <button
              onClick={() => scrollTo("programa")}
              className="text-xs font-medium text-white/45 transition hover:text-white"
            >
              Programa
            </button>

            <button
              onClick={() =>
                scrollTo("universidades")
              }
              className="text-xs font-medium text-white/45 transition hover:text-white"
            >
              Universidades
            </button>

            <button
              onClick={() =>
                scrollTo("certificacion")
              }
              className="text-xs font-medium text-white/45 transition hover:text-white"
            >
              Certificación
            </button>

            <button
              onClick={() => scrollTo("registro")}
              className="rounded-full bg-[#018C55] px-5 py-2.5 text-xs font-semibold text-white transition hover:bg-[#018C55]"
            >
              Registro octubre 2026
            </button>

          </nav>

          <button
            onClick={() => scrollTo("registro")}
            className="rounded-full bg-[#018C55] px-4 py-2 text-[11px] font-semibold lg:hidden"
          >
            Registro
          </button>

        </div>
      </header>

      {/* ====================================================== */}
      {/* HERO */}
      {/* ====================================================== */}

      <section className="relative border-b border-white/10 bg-black">

        <div className="mx-auto grid max-w-[1440px] lg:grid-cols-[0.88fr_1.12fr]">

          {/* TEXTO */}

          <div className="relative flex min-h-[580px] flex-col justify-center px-6 py-14 sm:px-10 lg:px-14">

            <div className="mb-6 flex flex-wrap items-center gap-2">

              <span className="rounded-full bg-[#018C55] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em]">
                Inscripciones
              </span>

              <span className="rounded-full border border-white/10 px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-white/45">
                Ciudad Valles · S.L.P.
              </span>

            </div>

            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/30">
              Formación DJI Agriculture
            </p>

            <h1 className="mt-5 text-[56px] font-semibold leading-[0.9] tracking-[-0.06em] sm:text-[72px] lg:text-[82px]">

              DJI

              <span className="block text-[#018C55]">
                Academy
              </span>

            </h1>

            <p className="mt-6 text-xl font-medium text-white/85">
              Aprende. Practica. Pilotea.
            </p>

            <p className="mt-3 max-w-[560px] text-sm leading-6 text-white/40 sm:text-base">
              Capacitación teórica y práctica para
              estudiantes, profesionales y futuros operadores
              de drones agrícolas.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">

              <button
                onClick={() => scrollTo("registro")}
                className="group flex items-center gap-4 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition hover:bg-white/85"
              >
                Quiero participar

                <span className="transition group-hover:translate-x-1">
                  →
                </span>
              </button>

              <button
                onClick={() =>
                  scrollTo("universidades")
                }
                className="rounded-full border border-white/15 px-6 py-3.5 text-sm font-semibold text-white/60 transition hover:border-white/30 hover:text-white"
              >
                Convenios universitarios
              </button>

            </div>
          </div>

          {/* ================================================== */}
          {/* ESPACIO FOTO 01 */}
          {/* ================================================== */}

          <div className="relative min-h-[450px] overflow-hidden bg-[#090909] lg:min-h-[580px]">

            {/*
              FOTO 1

              Guarda la imagen en:

              public/images/academy/academy-1.jpg
            */}

            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('/images/academy/academy-1.jpg')",
              }}
            />

            <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/5 to-transparent" />

            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/20" />

            <div className="absolute left-6 top-6 rounded-full border border-white/10 bg-black/50 px-4 py-2 backdrop-blur">
              <p className="text-[9px] uppercase tracking-[0.22em] text-white/55">
                Octubre · 2026
              </p>
            </div>

            <div className="absolute bottom-7 left-7">

              <p className="text-[9px] uppercase tracking-[0.22em] text-white/35">
                DJI Academy
              </p>

              <p className="mt-2 text-xl font-semibold">
                Formación práctica en campo.
              </p>

            </div>

          </div>
        </div>

        {/* INFO RÁPIDA */}

        <div className="border-t border-white/10 bg-[#050505]">

          <div className="mx-auto grid max-w-[1440px] grid-cols-2 md:grid-cols-4">

            <MiniInfo
              label="Fecha"
              value="Octubre 2026"
            />

            <MiniInfo
              label="Ubicación"
              value="Ciudad Valles, S.L.P."
            />

            <MiniInfo
              label="Modalidad"
              value="Presencial"
            />

            <MiniInfo
              label="Enfoque"
              value="Teoría + práctica"
            />

          </div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* MENSAJE */}
      {/* ====================================================== */}

      <section className="border-b border-white/10 bg-[#050505]">

        <div className="mx-auto grid max-w-[1440px] gap-5 px-6 py-10 sm:px-10 lg:grid-cols-[0.45fr_1.55fr] lg:items-center lg:px-14">

          <div className="flex items-center gap-3">

            <span className="h-px w-8 bg-[#018C55]" />

            <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-white/30">
              DJI Academy × MAXIDRONE
            </p>

          </div>

          <h2 className="max-w-[900px] text-2xl font-semibold leading-tight tracking-[-0.04em] sm:text-3xl">

            Formación para los nuevos profesionales

            <span className="text-white/30">
              {" "}de la agricultura de precisión.
            </span>

          </h2>

        </div>
      </section>

      {/* ====================================================== */}
      {/* PROGRAMA */}
      {/* ====================================================== */}

      <section
        id="programa"
        className="scroll-mt-20 border-b border-white/10 bg-black"
      >

        <div className="mx-auto max-w-[1440px] px-6 py-14 sm:px-10 lg:px-14 lg:py-16">

          <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">

            <div>

              <p className="text-[9px] font-semibold uppercase tracking-[0.26em] text-[#018C55]">
                Programa
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.045em] sm:text-4xl">
                Aprende haciendo.
              </h2>

            </div>

            <p className="max-w-[530px] text-sm leading-6 text-white/40">
              Formación enfocada en conocimientos que pueden
              aplicarse directamente en una operación agrícola.
            </p>

          </div>

          <div className="mt-9 grid gap-3 md:grid-cols-2 lg:grid-cols-3">

            {modules.map((module) => (

              <article
                key={module.number}
                className="group relative min-h-[190px] overflow-hidden rounded-[18px] border border-white/10 bg-[#090909] p-5 transition hover:border-white/20 hover:bg-[#0d0d0d]"
              >

                <div className="flex items-center justify-between">

                  <span className="text-[10px] font-semibold text-[#018C55]">
                    {module.number}
                  </span>

                  <span className="rounded-full border border-[#018C55]/25 bg-[#018C55]/5 px-3 py-1 text-[8px] font-semibold uppercase tracking-[0.14em] text-[#018C55]">
                    {module.tag}
                  </span>

                </div>

                <h3 className="mt-7 text-xl font-semibold tracking-[-0.03em]">
                  {module.title}
                </h3>

                <p className="mt-2 max-w-[330px] text-xs leading-5 text-white/40">
                  {module.text}
                </p>

                <span className="absolute -bottom-3 -right-1 text-[80px] font-bold text-white/[0.02]">
                  {module.number}
                </span>

              </article>

            ))}

          </div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* EXPERIENCIA */}
      {/* ====================================================== */}

      <section className="border-b border-white/10 bg-[#060606]">

        <div className="mx-auto grid max-w-[1440px] gap-8 px-6 py-14 sm:px-10 lg:grid-cols-[0.7fr_1.3fr] lg:px-14 lg:py-16">

          <div>

            <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#018C55]">
              Tu experiencia
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.045em] sm:text-4xl">
              Del aula
              <span className="block text-white/25">
                al campo.
              </span>
            </h2>

          </div>

          <div className="grid gap-3 sm:grid-cols-2">

            <JourneyCard
              step="01"
              title="Conoce"
              text="Comprende el equipo, sus sistemas y principios de operación."
            />

            <JourneyCard
              step="02"
              title="Configura"
              text="Prepara la aeronave y establece parámetros de trabajo."
            />

            <JourneyCard
              step="03"
              title="Pilotea"
              text="Practica maniobras y operaciones supervisadas."
            />

            <JourneyCard
              step="04"
              title="Aplica"
              text="Ejecuta una misión agrícola estructurada."
            />

          </div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* UNIVERSIDADES */}
      {/* ====================================================== */}

      <section
        id="universidades"
        className="scroll-mt-20 border-b border-white/10 bg-black"
      >

        <div className="mx-auto grid max-w-[1440px] gap-8 px-6 py-14 sm:px-10 lg:grid-cols-[1fr_0.8fr] lg:px-14 lg:py-16">

          <div>

            <div className="flex items-center gap-3">

              <span className="h-1.5 w-1.5 rounded-full bg-[#018C55]" />

              <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-white/30">
                Convenios universitarios
              </p>

            </div>

            <h2 className="mt-4 max-w-[720px] text-3xl font-semibold leading-[1] tracking-[-0.05em] sm:text-4xl lg:text-5xl">

              Llevamos la capacitación

              <span className="block text-white/25">
                hasta tu universidad.
              </span>

            </h2>

            <p className="mt-5 max-w-[640px] text-sm leading-6 text-white/40">
              MAXIDRONE puede trabajar con universidades e
              instituciones educativas de Ciudad Valles y
              San Luis Potosí para acercar tecnología
              DJI Agriculture a sus estudiantes.
            </p>

            <a
              href={universityWhatsapp}
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex items-center gap-4 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-white/85"
            >
              Solicitar convenio
              <span>→</span>
            </a>

          </div>

          <div className="rounded-[20px] border border-white/10 bg-[#090909] p-6">

            <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#018C55]">
              Podemos coordinar
            </p>

            <div className="mt-5">

              <UniversityLine
                number="01"
                text="Grupos de estudiantes"
              />

              <UniversityLine
                number="02"
                text="Capacitación en campus"
              />

              <UniversityLine
                number="03"
                text="Prácticas con drones AGRAS"
              />

              <UniversityLine
                number="04"
                text="Planeación de misiones"
              />

              <UniversityLine
                number="05"
                text="Proceso de certificación"
              />

            </div>

          </div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* ESPACIO FOTO 02 */}
      {/* ====================================================== */}

      <section className="border-b border-white/10 bg-[#050505]">

        <div className="mx-auto max-w-[1440px] px-6 py-12 sm:px-10 lg:px-14">

          <div className="relative min-h-[390px] overflow-hidden rounded-[24px] border border-white/10 bg-[#0b0b0b] sm:min-h-[480px]">

            {/*
              FOTO 2

              Guarda la imagen en:

              public/images/academy/academy-2.jpg
            */}

            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('/images/academy/academy-2.jpg')",
              }}
            />

            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/15 to-transparent" />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/10" />

            <div className="absolute bottom-7 left-7 max-w-[550px]">

              <p className="text-[9px] font-semibold uppercase tracking-[0.23em] text-[#018C55]">
                Experiencia práctica
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                Aprende operando tecnología real.
              </h2>

              <p className="mt-3 max-w-[500px] text-sm leading-6 text-white/45">
                La formación combina conocimientos técnicos
                con actividades prácticas supervisadas.
              </p>

            </div>
          </div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* CERTIFICACIÓN */}
      {/* ====================================================== */}

      <section
        id="certificacion"
        className="scroll-mt-20 border-b border-white/10 bg-black"
      >

        <div className="mx-auto max-w-[1440px] px-6 py-14 sm:px-10 lg:px-14 lg:py-16">

          <div className="grid overflow-hidden rounded-[22px] border border-white/10 lg:grid-cols-[0.55fr_1.45fr]">

            <div className="relative flex min-h-[270px] items-center justify-center bg-[#0c0c0c] p-6">

              <div className="absolute h-[180px] w-[180px] rounded-full border border-[#018C55]/30" />

              <div className="absolute h-[130px] w-[130px] rounded-full border border-white/10" />

              <div className="relative text-center">

                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#018C55] text-xl font-bold">
                  ✓
                </div>

                <p className="mt-5 text-[9px] font-semibold uppercase tracking-[0.24em] text-white/35">
                  DJI Academy
                </p>

                <p className="mt-2 text-base font-semibold">
                  Formación especializada
                </p>

              </div>
            </div>

            <div className="bg-[#080808] p-7 sm:p-9">

              <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#018C55]">
                Certificación
              </p>

              <h2 className="mt-3 max-w-[650px] text-3xl font-semibold tracking-[-0.045em] sm:text-4xl">
                Aprende una habilidad
                <span className="text-white/25">
                  {" "}que puedes demostrar.
                </span>
              </h2>

              <p className="mt-4 max-w-[650px] text-sm leading-6 text-white/40">
                Los participantes reciben formación basada en
                el programa correspondiente de DJI Academy y
                pueden acceder al proceso de certificación al
                cumplir los requisitos y evaluaciones aplicables.
              </p>

              <div className="mt-6 grid gap-2 sm:grid-cols-2">

                <CertificateItem text="Formación teórica" />

                <CertificateItem text="Práctica supervisada" />

                <CertificateItem text="Evaluación" />

                <CertificateItem text="Proceso de certificación" />

              </div>

              <p className="mt-5 text-[9px] leading-5 text-white/25">
                * La emisión del certificado depende de los
                requisitos y criterios vigentes del programa
                DJI Academy correspondiente.
              </p>

            </div>
          </div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* OCTUBRE */}
      {/* ====================================================== */}

      <section className="border-b border-white/10 bg-[#050505]">

        <div className="mx-auto grid max-w-[1440px] items-center gap-7 px-6 py-10 sm:px-10 lg:grid-cols-[0.35fr_1.65fr] lg:px-14">

          <div>

            <p className="text-[62px] font-semibold leading-none tracking-[-0.07em] text-[#018C55]">
              OCT
            </p>

            <p className="mt-1 text-base font-semibold text-white/25">
              2026
            </p>

          </div>

          <div className="grid gap-5 md:grid-cols-[1fr_auto] md:items-center">

            <div>

              <p className="text-[9px] font-semibold uppercase tracking-[0.23em] text-white/30">
                Ciudad Valles · San Luis Potosí
              </p>

              <h2 className="mt-2 text-2xl font-semibold tracking-[-0.035em] sm:text-3xl">
                Pre-registro abierto.
              </h2>

              <p className="mt-2 max-w-[600px] text-xs leading-5 text-white/40">
                Regístrate para recibir fechas, sede,
                disponibilidad y proceso de inscripción.
              </p>

            </div>

            <button
              onClick={() => scrollTo("registro")}
              className="rounded-full bg-[#018C55] px-7 py-3.5 text-sm font-semibold text-white"
            >
              Quiero participar
            </button>

          </div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* REGISTRO */}
      {/* ====================================================== */}

      <section
        id="registro"
        className="scroll-mt-20 border-b border-white/10 bg-black"
      >

        <div className="mx-auto max-w-[1050px] px-6 py-14 sm:px-10 lg:py-16">

          <div className="text-center">

            <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#018C55]">
              Registro
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.045em] sm:text-4xl">
              ¿Cómo quieres participar?
            </h2>

          </div>

          <div className="mx-auto mt-7 flex max-w-[360px] rounded-full border border-white/10 bg-[#090909] p-1">

            <button
              onClick={() => setAudience("alumno")}
              className={`flex-1 rounded-full px-5 py-2.5 text-xs font-semibold transition ${
                audience === "alumno"
                  ? "bg-white text-black"
                  : "text-white/40"
              }`}
            >
              Alumno
            </button>

            <button
              onClick={() =>
                setAudience("universidad")
              }
              className={`flex-1 rounded-full px-5 py-2.5 text-xs font-semibold transition ${
                audience === "universidad"
                  ? "bg-white text-black"
                  : "text-white/40"
              }`}
            >
              Universidad
            </button>

          </div>

          <div className="mt-6 rounded-[20px] border border-white/10 bg-[#090909] p-6 sm:p-8">

            {audience === "alumno" ? (

              <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">

                <div>

                  <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#018C55]">
                    Registro individual
                  </p>

                  <h3 className="mt-2 text-xl font-semibold">
                    Quiero aprender a pilotear drones agrícolas.
                  </h3>

                  <p className="mt-2 max-w-[600px] text-xs leading-5 text-white/40">
                    Contáctanos para conocer requisitos,
                    disponibilidad, sede y proceso de inscripción.
                  </p>

                </div>

                <a
                  href={studentWhatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="whitespace-nowrap rounded-full bg-[#018C55] px-7 py-3.5 text-sm font-semibold text-white"
                >
                  Pre-registrarme →
                </a>

              </div>

            ) : (

              <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">

                <div>

                  <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#018C55]">
                    Instituciones educativas
                  </p>

                  <h3 className="mt-2 text-xl font-semibold">
                    Queremos capacitar a nuestros alumnos.
                  </h3>

                  <p className="mt-2 max-w-[600px] text-xs leading-5 text-white/40">
                    Podemos revisar grupo, instalaciones,
                    fechas y logística para desarrollar
                    una capacitación en su universidad.
                  </p>

                </div>

                <a
                  href={universityWhatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="whitespace-nowrap rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-black"
                >
                  Solicitar convenio →
                </a>

              </div>

            )}

          </div>

          <p className="mt-5 text-center text-xs text-white/25">
            DJI Agriculture · MAXIDRONE · 481 107 4483
          </p>

        </div>
      </section>

      {/* ====================================================== */}
      {/* FAQ */}
      {/* ====================================================== */}

      <section className="border-b border-white/10 bg-[#050505]">

        <div className="mx-auto grid max-w-[1150px] gap-8 px-6 py-14 sm:px-10 lg:grid-cols-[0.45fr_1.55fr] lg:py-16">

          <div>

            <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#018C55]">
              FAQ
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em]">
              Antes de
              <span className="block text-white/25">
                comenzar.
              </span>
            </h2>

          </div>

          <div className="border-t border-white/10">

            {faq.map((item) => (

              <details
                key={item.q}
                className="group border-b border-white/10 py-4"
              >

                <summary className="flex cursor-pointer list-none items-center justify-between gap-5">

                  <span className="text-sm font-semibold text-white/80">
                    {item.q}
                  </span>

                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 text-white/40 transition group-open:rotate-45">
                    +
                  </span>

                </summary>

                <p className="max-w-[720px] pt-4 text-xs leading-6 text-white/40">
                  {item.a}
                </p>

              </details>

            ))}

          </div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* FINAL */}
      {/* ====================================================== */}

      <section className="relative overflow-hidden bg-black">

        <div className="absolute left-1/2 top-1/2 h-[350px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#018C55]/10 blur-[120px]" />

        <div className="relative mx-auto max-w-[1000px] px-6 py-20 text-center sm:px-10">

          <img
            src="/images/logo-agriculture.png"
            alt="DJI Agriculture"
            className="mx-auto h-8 w-auto object-contain"
          />

          <p className="mt-5 text-[9px] font-semibold uppercase tracking-[0.27em] text-white/30">
            DJI Academy · Octubre 2026
          </p>

          <h2 className="mx-auto mt-4 max-w-[800px] text-3xl font-semibold tracking-[-0.045em] sm:text-4xl lg:text-5xl">

            Aprende tecnología que

            <span className="block text-white/25">
              está transformando el campo.
            </span>

          </h2>

          <button
            onClick={() => scrollTo("registro")}
            className="mt-7 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-black transition hover:bg-white/85"
          >
            Registrarme
          </button>

        </div>
      </section>

    </main>
  );
}

/* ========================================================== */
/* COMPONENTES */
/* ========================================================== */

function MiniInfo({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="border-r border-white/10 px-5 py-4 sm:px-7">

      <p className="text-[8px] font-semibold uppercase tracking-[0.2em] text-white/25">
        {label}
      </p>

      <p className="mt-1.5 text-xs font-semibold text-white/70">
        {value}
      </p>

    </div>
  );
}

function JourneyCard({
  step,
  title,
  text,
}: {
  step: string;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-[16px] border border-white/10 bg-[#090909] p-5 transition hover:border-[#018C55]/35">

      <div className="flex items-center justify-between">

        <span className="text-[9px] font-semibold text-[#018C55]">
          {step}
        </span>

        <span className="h-1.5 w-1.5 rounded-full bg-[#018C55]" />

      </div>

      <h3 className="mt-5 text-lg font-semibold">
        {title}
      </h3>

      <p className="mt-2 text-xs leading-5 text-white/40">
        {text}
      </p>

    </div>
  );
}

function UniversityLine({
  number,
  text,
}: {
  number: string;
  text: string;
}) {
  return (
    <div className="flex items-center gap-4 border-b border-white/10 py-3">

      <span className="text-[9px] font-semibold text-[#018C55]">
        {number}
      </span>

      <p className="text-xs font-medium text-white/65">
        {text}
      </p>

    </div>
  );
}

function CertificateItem({
  text,
}: {
  text: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#0c0c0c] px-4 py-3">

      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#018C55] text-[9px] font-bold text-white">
        ✓
      </span>

      <span className="text-xs font-medium text-white/55">
        {text}
      </span>

    </div>
  );
}