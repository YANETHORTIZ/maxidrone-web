"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";

import {
  ArrowRight,
  Building2,
  ChevronLeft,
  ChevronRight,
  Leaf,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Wrench,
} from "lucide-react";

/* ============================================================
   INFORMACIÓN DE CADA CATEGORÍA
============================================================ */

const slides = [
  {
    id: "servicio",
    number: "01",
    title: "Servicio",
    eyebrow: "SOLUCIONES EN CAMPO",

    description:
      "Aplicación de agroquímicos, levantamientos, inspección, mapeo y soporte especializado.",

    image: "/images/servicio.webp",

    phone: "481 156 6180",
    phoneLink: "+524811566180",

    email: "gabriela.ortiz@maxidrone.mx",

    options: [
      "Aplicación de agroquímicos",
      "Levantamientos y topografía",
      "Mapeo y fotogrametría",
      "Inspección aérea",
      "Monitoreo",
      "Mantenimiento y reparación",
      "Piloto y operación en campo",
      "Otro servicio",
    ],
  },

  {
    id: "enterprise",
    number: "02",
    title: "Enterprise",
    eyebrow: "DJI ENTERPRISE",

    description:
      "Equipos y soluciones profesionales para operaciones críticas, automatización, inspección y monitoreo.",

    image: "/images/enterprise-hero.webp",

    phone: "481 156 6180",
    phoneLink: "+524811566180",

    email: "gabriela.ortiz@maxidrone.mx",

    options: [
      "Cotización de equipo DJI Enterprise",
      "DJI Matrice 400",
      "DJI Matrice 4E / 4T",
      "DJI Dock 3",
      "Automatización de operaciones",
      "Inspección y seguridad",
      "Levantamientos profesionales",
      "Proyecto empresarial",
      "Otro proyecto Enterprise",
    ],
  },

  {
    id: "agriculture",
    number: "03",
    title: "Agriculture",
    eyebrow: "DJI AGRICULTURE",

    description:
      "Tecnología agrícola para pulverización, dispersión, agricultura de precisión y productividad en campo.",

    image: "/images/t55.webp",

    phone: "481 107 4483",
    phoneLink: "+524811074483",

    email: "ventas@maxidrone.mx",

    options: [
      "Cotización de dron agrícola",
      "DJI Agras T100",
      "Aplicación de agroquímicos",
      "Pulverización",
      "Dispersión de sólidos",
      "Agricultura de precisión",
      "Capacitación",
      "Refacciones y accesorios",
      "Otro proyecto Agriculture",
    ],
  },
];

const PROJECT_REQUESTS_ENDPOINT =
  "https://script.google.com/macros/s/AKfycbwDANAxxEHRzAcDG8UJPd8nM6hs0I0Swdd-Dt30U5jS3CKruMObQgp1Wlw67lptUwFU/exec";

type SubmitStatus = "idle" | "sending" | "success" | "error";

/* ============================================================
   PÁGINA
============================================================ */

export default function ContactoPage() {
  const [active, setActive] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");
  const [submitMessage, setSubmitMessage] = useState("");

  const currentSlide = slides[active];

  /* ============================================================
     CAMBIAR CATEGORÍA
  ============================================================ */

  const changeSlide = (index: number) => {
    setActive(index);
    setSelectedOption("");
    setSubmitStatus("idle");
    setSubmitMessage("");
  };

  const previousSlide = () => {
    setActive((current) =>
      current === 0 ? slides.length - 1 : current - 1
    );

    setSelectedOption("");
    setSubmitStatus("idle");
    setSubmitMessage("");
  };

  const nextSlide = () => {
    setActive((current) => (current + 1) % slides.length);
    setSelectedOption("");
    setSubmitStatus("idle");
    setSubmitMessage("");
  };

  /* ============================================================
     ENVÍO DEL FORMULARIO
  ============================================================ */

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!selectedOption) {
      setSubmitStatus("error");
      setSubmitMessage("Selecciona la solución que buscas.");
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);

    const nombre = String(formData.get("nombre") || "");
    const empresa = String(formData.get("empresa") || "");
    const email = String(formData.get("email") || "");
    const telefono = String(formData.get("telefono") || "");
    const mensaje = String(formData.get("mensaje") || "");
    const website = String(formData.get("website") || "");

    setSubmitStatus("sending");
    setSubmitMessage("");

    try {
      await fetch(PROJECT_REQUESTS_ENDPOINT, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify({
          nombre,
          empresa,
          email,
          correo: email,
          telefono,
          solucion: `${currentSlide.title} — ${selectedOption}`,
          proyecto: mensaje,
          mensaje,
          website,
        }),
      });

      form.reset();
      setSelectedOption("");
      setSubmitStatus("success");
      setSubmitMessage("Solicitud recibida. Nos pondremos en contacto contigo.");
    } catch {
      setSubmitStatus("error");
      setSubmitMessage("No pudimos guardar tu solicitud. Intenta nuevamente.");
    }
  };

  return (
    <main className="contact-page relative h-[calc(100dvh-60px)] overflow-hidden bg-black text-white">

      {/* ============================================================
          HERO
          NO HAY HEADER AQUÍ.
          SE UTILIZA EL HEADER PRINCIPAL / GLOBAL DEL SITIO.
      ============================================================ */}

      <section className="relative h-full overflow-hidden">

        {/* ============================================================
            FONDOS
        ============================================================ */}

        <div className="absolute inset-0 overflow-hidden">

          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-all duration-[1200ms] ease-in-out ${
                active === index
                  ? "scale-100 opacity-100"
                  : "scale-[1.02] opacity-0"
              }`}
            >
              <Image
                src={slide.image}
                alt={`MAXIDRONE ${slide.title}`}
                fill
                priority={index === 0}
                quality={100}
                sizes="100vw"
                unoptimized
                className="object-cover object-center"
              />
            </div>
          ))}

          {/* ========================================================
              SOMBRA SUAVE
          ======================================================== */}

          <div className="contact-backdrop absolute inset-0" />

          <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/20 to-transparent" />

          <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />

        </div>

        {/* ============================================================
            CONTENIDO
        ============================================================ */}

        <div className="relative z-10 mx-auto grid h-full max-w-[1500px] grid-cols-1 items-center gap-10 px-7 py-4 sm:px-10 lg:grid-cols-[0.88fr_1.12fr] lg:px-14">

          {/* ========================================================
              LADO IZQUIERDO
          ======================================================== */}

          <div className="contents lg:order-1 lg:block lg:max-w-[610px]">

            <div className="order-1 w-full max-w-[610px]">

            {/* CONTADOR */}

            <div className="mb-4 flex items-center gap-4">

              <span className="text-[11px] font-black tracking-[0.28em] text-white/60">
                {currentSlide.number} / 03
              </span>

              <div className="h-px w-14 bg-white/40" />

              <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-white/85">
                {currentSlide.eyebrow}
              </span>

            </div>

            {/* ========================================================
                TÍTULO
            ======================================================== */}

            <h1 className="subpage-title text-[46px] font-black uppercase leading-[0.88] tracking-[-0.055em] sm:text-[56px] xl:text-[66px]">

              Cotiza tu

              <span className="block">
                equipo o
              </span>

              <span className="block">
                proyecto.
              </span>

            </h1>

            {/* TEXTO */}

            <p className="mt-4 max-w-[540px] text-[14px] leading-6 text-white/80">
              Cuéntanos qué necesitas. Nuestro equipo puede ayudarte a
              seleccionar la solución adecuada, cotizar equipos o desarrollar
              un proyecto especializado.
            </p>

            </div>

            <div className="order-3 w-full max-w-[610px]">

            {/* ========================================================
                CATEGORÍA ACTUAL
            ======================================================== */}

            <div className="mt-5 border-l-2 border-white/80 pl-5">

              <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-white/50">
                Actualmente
              </p>

              <h2 className="mt-1 text-[24px] font-black uppercase">
                {currentSlide.title}
              </h2>

              <p className="mt-1 max-w-[520px] text-[13px] leading-5 text-white/70">
                {currentSlide.description}
              </p>

            </div>

            {/* ========================================================
                CONTACTO DINÁMICO
            ======================================================== */}

            <div className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-3">

              {/* TELÉFONO */}

              <a
                href={`tel:${currentSlide.phoneLink}`}
                className="group border border-white/20 bg-black/20 p-3 backdrop-blur-sm transition duration-300 hover:border-white/60 hover:bg-black/35"
              >
                <Phone
                  size={16}
                  strokeWidth={1.5}
                  className="mb-2 text-white/80"
                />

                <p className="text-[8px] uppercase tracking-[0.16em] text-white/50">
                  Teléfono
                </p>

                <p className="mt-1 whitespace-nowrap text-[11px] font-bold">
                  {currentSlide.phone}
                </p>
              </a>

              {/* EMAIL */}

              <a
                href={`mailto:${currentSlide.email}`}
                className="group min-w-0 border border-white/20 bg-black/20 p-3 backdrop-blur-sm transition duration-300 hover:border-white/60 hover:bg-black/35"
              >
                <Mail
                  size={16}
                  strokeWidth={1.5}
                  className="mb-2 text-white/80"
                />

                <p className="text-[8px] uppercase tracking-[0.16em] text-white/50">
                  Email
                </p>

                <p
                  className="mt-1 truncate text-[10px] font-bold"
                  title={currentSlide.email}
                >
                  {currentSlide.email}
                </p>
              </a>

              {/* WHATSAPP */}

              <a
                href={`https://wa.me/${currentSlide.phoneLink.replace(
                  "+",
                  ""
                )}`}
                target="_blank"
                rel="noreferrer"
                className="group border border-white/20 bg-black/20 p-3 backdrop-blur-sm transition duration-300 hover:border-white/60 hover:bg-black/35"
              >
                <MessageCircle
                  size={16}
                  strokeWidth={1.5}
                  className="mb-2 text-[#25D366]"
                />

                <p className="text-[8px] uppercase tracking-[0.16em] text-white/50">
                  WhatsApp
                </p>

                <p className="mt-1 text-[10px] font-bold">
                  Hablar con asesor
                </p>
              </a>

            </div>

            {/* ========================================================
                DIRECCIÓN
            ======================================================== */}

            <div className="mt-3 flex items-start gap-3 border-t border-white/15 pt-3">

              <MapPin
                size={17}
                strokeWidth={1.5}
                className="mt-[2px] shrink-0 text-white/75"
              />

              <div>

                <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-white/50">
                  MAXIDRONE · Ciudad Valles, S.L.P.
                </p>

                <p className="mt-1 text-[11px] leading-4 text-white/75">
                  Ignacio Zaragoza 730, Zona Centro, C.P. 79000,
                  Ciudad Valles, San Luis Potosí, México.
                </p>

              </div>

            </div>

            </div>

          </div>

          {/* ========================================================
              LADO DERECHO
          ======================================================== */}

          <div className="order-2 w-full max-w-[700px] justify-self-end lg:order-2">

            {/* ========================================================
                FORMULARIO
            ======================================================== */}

            <div className="border border-white/20 bg-[#080808]/70 p-5 backdrop-blur-xl lg:p-6">

              {/* TITULO */}

              <div className="flex items-end justify-between gap-5">

                <div>

                  <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-white/45">
                    Cotización
                  </p>

                  <h2 className="mt-1 text-[24px] font-black">
                    ¿Qué necesitas?
                  </h2>

                </div>

                <span className="hidden text-[10px] text-white/40 sm:block">
                  Selecciona una categoría
                </span>

              </div>

              {/* ====================================================
                  CATEGORÍAS
              ==================================================== */}

              <div className="mt-3 grid grid-cols-3 gap-2">

                {/* SERVICIO */}

                <button
                  type="button"
                  onClick={() => changeSlide(0)}
                  className={`group relative min-h-[84px] border p-3 text-left transition duration-300 ${
                    active === 0
                      ? "border-[#D9D9D9] bg-[#111111]"
                      : "border-[#303030] bg-[#151515]/80 hover:border-[#777777]"
                  }`}
                >
                  <Wrench
                    size={19}
                    strokeWidth={1.5}
                    className={
                      active === 0
                        ? "text-white"
                        : "text-white/45"
                    }
                  />

                  <p className="mt-3 text-[10px] font-black uppercase tracking-[0.1em] sm:text-[11px]">
                    Servicio
                  </p>

                  <p className="mt-1 hidden text-[9px] text-white/40 sm:block">
                    Operación y soporte
                  </p>

                  {active === 0 && (
                    <span className="absolute right-3 top-3 h-2 w-2 rounded-full bg-white" />
                  )}

                </button>

                {/* ENTERPRISE */}

                <button
                  type="button"
                  onClick={() => changeSlide(1)}
                  className={`group relative min-h-[84px] border p-3 text-left transition duration-300 ${
                    active === 1
                      ? "border-[#D9D9D9] bg-[#111111]"
                      : "border-[#303030] bg-[#151515]/80 hover:border-[#777777]"
                  }`}
                >
                  <Building2
                    size={19}
                    strokeWidth={1.5}
                    className={
                      active === 1
                        ? "text-white"
                        : "text-white/45"
                    }
                  />

                  <p className="mt-3 text-[10px] font-black uppercase tracking-[0.1em] sm:text-[11px]">
                    Enterprise
                  </p>

                  <p className="mt-1 hidden text-[9px] text-white/40 sm:block">
                    Equipos profesionales
                  </p>

                  {active === 1 && (
                    <span className="absolute right-3 top-3 h-2 w-2 rounded-full bg-white" />
                  )}

                </button>

                {/* AGRICULTURE */}

                <button
                  type="button"
                  onClick={() => changeSlide(2)}
                  className={`group relative min-h-[84px] border p-3 text-left transition duration-300 ${
                    active === 2
                      ? "border-[#D9D9D9] bg-[#111111]"
                      : "border-[#303030] bg-[#151515]/80 hover:border-[#777777]"
                  }`}
                >
                  <Leaf
                    size={19}
                    strokeWidth={1.5}
                    className={
                      active === 2
                        ? "text-white"
                        : "text-white/45"
                    }
                  />

                  <p className="mt-3 text-[10px] font-black uppercase tracking-[0.1em] sm:text-[11px]">
                    Agriculture
                  </p>

                  <p className="mt-1 hidden text-[9px] text-white/40 sm:block">
                    Tecnología agrícola
                  </p>

                  {active === 2 && (
                    <span className="absolute right-3 top-3 h-2 w-2 rounded-full bg-white" />
                  )}

                </button>

              </div>

              {/* ====================================================
                  SELECT
              ==================================================== */}

              <div className="mt-3">

                <label className="mb-1 block text-[9px] font-bold uppercase tracking-[0.18em] text-white/45">
                  ¿Qué solución buscas?
                </label>

                <select
                  form="contact-form"
                  id="contact-solution"
                  name="solucion"
                  required
                  value={selectedOption}
                  onChange={(event) => {
                    setSelectedOption(event.target.value);
                    setSubmitStatus("idle");
                    setSubmitMessage("");
                  }}
                  className="h-10 w-full border border-[#333333] bg-[#111111] px-4 text-[12px] text-white outline-none transition focus:border-[#888888]"
                >
                  <option value="">
                    Selecciona una opción
                  </option>

                  {currentSlide.options.map((option) => (
                    <option
                      key={option}
                      value={option}
                    >
                      {option}
                    </option>
                  ))}

                </select>

              </div>

              {/* ====================================================
                  DATOS
              ==================================================== */}

              <form
                id="contact-form"
                onSubmit={handleSubmit}
                className="mt-2"
              >

                <input
                  aria-hidden="true"
                  autoComplete="off"
                  name="website"
                  tabIndex={-1}
                  type="text"
                  className="pointer-events-none absolute -left-[9999px] h-px w-px opacity-0"
                />

                <div className="grid gap-2 sm:grid-cols-2">

                  <input
                    required
                    name="nombre"
                    type="text"
                    placeholder="Nombre completo *"
                    className="h-10 border border-[#333333] bg-[#111111] px-4 text-[12px] text-white outline-none transition placeholder:text-white/30 focus:border-[#888888]"
                  />

                  <input
                    name="empresa"
                    type="text"
                    placeholder="Empresa"
                    className="h-10 border border-[#333333] bg-[#111111] px-4 text-[12px] text-white outline-none transition placeholder:text-white/30 focus:border-[#888888]"
                  />

                  <input
                    required
                    name="email"
                    type="email"
                    placeholder="Correo electrónico *"
                    className="h-10 border border-[#333333] bg-[#111111] px-4 text-[12px] text-white outline-none transition placeholder:text-white/30 focus:border-[#888888]"
                  />

                  <input
                    required
                    name="telefono"
                    type="tel"
                    placeholder="Teléfono *"
                    className="h-10 border border-[#333333] bg-[#111111] px-4 text-[12px] text-white outline-none transition placeholder:text-white/30 focus:border-[#888888]"
                  />

                </div>

                <textarea
                  required
                  name="mensaje"
                  placeholder="Cuéntanos sobre tu proyecto... *"
                  rows={2}
                  className="mt-2 w-full resize-none border border-[#333333] bg-[#111111] p-3 text-[12px] text-white outline-none transition placeholder:text-white/30 focus:border-[#888888]"
                />

                <button
                  type="submit"
                  disabled={submitStatus === "sending"}
                  className="group mt-2 flex h-10 w-full items-center justify-between bg-white px-5 text-[11px] font-black uppercase tracking-[0.12em] text-black transition duration-300 hover:bg-[#D9D9D9] disabled:cursor-wait disabled:opacity-60"
                >

                  <span>
                    {submitStatus === "sending"
                      ? "Guardando solicitud..."
                      : "Enviar solicitud"}
                  </span>

                  <ArrowRight
                    size={16}
                    className="transition duration-300 group-hover:translate-x-1"
                  />

                </button>

                {submitMessage && (
                  <p
                    role="status"
                    aria-live="polite"
                    className={`mt-2 text-center text-[10px] font-semibold ${
                      submitStatus === "success"
                        ? "text-[#018C55]"
                        : "text-red-300"
                    }`}
                  >
                    {submitMessage}
                  </p>
                )}

              </form>

              {/* PRIVACIDAD */}

              <div className="mt-2 flex items-center justify-center gap-2 text-[9px] text-white/30">

                <ShieldCheck size={12} />

                <span>
                  Tu información será utilizada únicamente para atender tu solicitud.
                </span>

              </div>

            </div>

            {/* ======================================================
                NAVEGACIÓN ENTRE SERVICIO / ENTERPRISE / AGRICULTURE
            ====================================================== */}

            <div className="mt-2 flex items-center justify-between">

              {/* INDICADORES */}

              <div className="flex gap-2">

                {slides.map((slide, index) => (
                  <button
                    key={slide.id}
                    type="button"
                    onClick={() => changeSlide(index)}
                    aria-label={`Mostrar ${slide.title}`}
                    className={`h-[2px] transition-all duration-500 ${
                      active === index
                        ? "w-14 bg-white"
                        : "w-7 bg-white/25 hover:bg-white/60"
                    }`}
                  />
                ))}

              </div>

              {/* FLECHAS */}

              <div className="flex gap-2">

                <button
                  type="button"
                  onClick={previousSlide}
                  className="flex h-8 w-8 items-center justify-center border border-white/25 bg-black/35 transition duration-300 hover:border-white/70 hover:bg-white/10"
                  aria-label="Anterior"
                >
                  <ChevronLeft size={16} />
                </button>

                <button
                  type="button"
                  onClick={nextSlide}
                  className="flex h-8 w-8 items-center justify-center border border-white/25 bg-black/35 transition duration-300 hover:border-white/70 hover:bg-white/10"
                  aria-label="Siguiente"
                >
                  <ChevronRight size={16} />
                </button>

              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}
