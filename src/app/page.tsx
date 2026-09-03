"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

const slides = [
  {
    src: "/images/matrice400.png",
    alt: "DJI Matrice 400 volando entre formaciones rocosas",
    category: "DJI Enterprise",
    title: "Matrice 400",
    description: "Potencia aérea para misiones profesionales.",
    href: "/enterprise",
    position: "object-center",
  },
  {
    src: "/images/agrast100.png",
    alt: "DJI Agras T100 acompañado por drones agrícolas",
    category: "DJI Agriculture",
    title: "Agras T100",
    description: "Precisión y productividad para el campo.",
    href: "/agriculture",
    position: "object-center",
  },
  {
    src: "/images/dock3.png",
    alt: "DJI Dock 3 operando en un entorno industrial",
    category: "DJI Enterprise",
    title: "DJI Dock 3",
    description: "Operaciones autónomas, listas en todo momento.",
    href: "/enterprise",
    position: "object-center",
  },
] as const;

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);

  const showSlide = useCallback((index: number) => {
    setActiveSlide((index + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      showSlide(activeSlide + 1);
    }, 4000);

    return () => window.clearTimeout(timer);
  }, [activeSlide, showSlide]);

  const currentSlide = slides[activeSlide];

  return (
    <main className="bg-black text-white">
      <section
        className="relative isolate min-h-[calc(100svh-4rem)] overflow-hidden bg-black"
        aria-roledescription="carrusel"
        aria-label="Soluciones destacadas de MAXIDRONE"
      >
        <div className="absolute inset-0">
          {slides.map((slide, index) => {
            const isActive = index === activeSlide;

            return (
              <div
                key={slide.src}
                className={`absolute inset-0 transition-[opacity,transform] duration-[1200ms] ease-in-out ${
                  isActive
                    ? "z-10 scale-100 opacity-100"
                    : "pointer-events-none z-0 scale-[1.08] opacity-0"
                }`}
                aria-hidden={!isActive}
              >
                <Image
                  src={slide.src}
                  alt={isActive ? slide.alt : ""}
                  fill
                  priority={index === 0}
                  sizes="100vw"
                  className={`object-cover ${slide.position} ${
                    isActive ? "hero-image-active" : "scale-[1.03]"
                  }`}
                />
                {isActive && <span className="hero-light-sweep absolute inset-0" />}
              </div>
            );
          })}
        </div>

        <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-r from-black/70 via-black/15 to-transparent" />
        <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-t from-black/75 via-transparent to-black/20" />

        <div className="relative z-30 mx-auto flex min-h-[calc(100svh-4rem)] max-w-[1440px] items-end px-6 pb-24 pt-20 sm:px-10 sm:pb-28 lg:px-14 lg:pb-24">
          <div className="max-w-2xl" key={currentSlide.title}>
            <p className="hero-copy-enter text-sm font-bold uppercase tracking-[0.26em] text-white sm:text-base">
              {currentSlide.category}
            </p>
            <h1 className="hero-copy-enter mt-3 text-4xl font-black uppercase leading-none tracking-[-0.04em] sm:text-6xl lg:text-7xl">
              {currentSlide.title}
            </h1>
            <p className="hero-copy-enter mt-4 max-w-lg text-base leading-7 text-white/80 sm:text-lg">
              {currentSlide.description}
            </p>
            <Link
              href={currentSlide.href}
              className="hero-copy-enter mt-7 inline-flex min-h-12 items-center border border-white/50 bg-black/30 px-6 text-sm font-bold uppercase tracking-[0.14em] backdrop-blur-md transition hover:border-[#018C55] hover:bg-[#018C55] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#018C55]"
            >
              Conocer solución
            </Link>
          </div>
        </div>

        <button
          type="button"
          onClick={() => showSlide(activeSlide - 1)}
          className="absolute left-4 top-1/2 z-40 grid size-12 -translate-y-1/2 place-items-center border border-white/20 bg-black/35 text-3xl backdrop-blur-md transition hover:border-[#018C55] hover:bg-[#018C55] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:left-8 sm:size-14"
          aria-label="Ver imagen anterior"
        >
          <span aria-hidden="true">‹</span>
        </button>

        <button
          type="button"
          onClick={() => showSlide(activeSlide + 1)}
          className="absolute right-4 top-1/2 z-40 grid size-12 -translate-y-1/2 place-items-center border border-white/20 bg-black/35 text-3xl backdrop-blur-md transition hover:border-[#018C55] hover:bg-[#018C55] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:right-8 sm:size-14"
          aria-label="Ver imagen siguiente"
        >
          <span aria-hidden="true">›</span>
        </button>

        <div className="absolute bottom-8 right-6 z-40 flex items-center gap-3 sm:right-10 lg:right-14">
          {slides.map((slide, index) => (
            <button
              key={slide.src}
              type="button"
              onClick={() => showSlide(index)}
              className="relative h-8 w-12 overflow-hidden focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              aria-label={`Mostrar ${slide.title}`}
              aria-current={index === activeSlide ? "true" : undefined}
            >
              <span className="absolute inset-x-0 top-1/2 h-px bg-white/35" />
              {index === activeSlide && (
                <span
                  key={activeSlide}
                  className="carousel-progress absolute inset-x-0 top-1/2 h-0.5 origin-left bg-[#018C55]"
                />
              )}
            </button>
          ))}
        </div>

        <p className="sr-only" aria-live="polite">
          Diapositiva {activeSlide + 1} de {slides.length}: {currentSlide.title}
        </p>
      </section>
    </main>
  );
}
