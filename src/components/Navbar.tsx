"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const homeLinks = [
  { href: "/", label: "Inicio" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/enterprise", label: "Empresa" },
  { href: "/agriculture", label: "Agricultura" },
];

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="size-5">
      <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="1.8" />
      <path d="m16 16 4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  if (pathname === "/") {
    return (
      <header className="absolute inset-x-0 top-0 z-50 border-b border-white/10 bg-black/95 text-white backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-6 sm:px-10 lg:px-14">
          <Link href="/" className="relative block h-12 w-36 shrink-0" aria-label="MAXIDRONE, inicio">
            <Image
              src="/images/logo-enterprise.png"
              alt="MAXIDRONE"
              fill
              priority
              sizes="144px"
              className="object-contain object-left"
            />
          </Link>

          <nav className="hidden items-center gap-9 text-sm uppercase tracking-[0.08em] lg:flex" aria-label="Navegación principal">
            {homeLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`transition hover:text-[#018C55] ${
                  pathname === link.href ? "text-[#018C55]" : "text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <button
              type="button"
              aria-label="Buscar"
              className="transition hover:text-[#018C55] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#018C55]"
            >
              <SearchIcon />
            </button>
          </nav>

          <button
            type="button"
            className="grid size-11 place-items-center border border-white/20 lg:hidden"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="home-mobile-menu"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            <span className="sr-only">{menuOpen ? "Cerrar menú" : "Abrir menú"}</span>
            <span aria-hidden="true" className="flex flex-col gap-1.5">
              <span className={`block h-px w-5 bg-white transition ${menuOpen ? "translate-y-[3.5px] rotate-45" : ""}`} />
              <span className={`block h-px w-5 bg-white transition ${menuOpen ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
            </span>
          </button>
        </div>

        {menuOpen && (
          <nav
            id="home-mobile-menu"
            className="border-t border-white/10 bg-black px-6 py-5 lg:hidden"
            aria-label="Navegación móvil"
          >
            <div className="flex flex-col">
              {homeLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="border-b border-white/10 py-4 text-sm font-semibold uppercase tracking-[0.12em] transition last:border-0 hover:text-[#018C55]"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </header>
    );
  }

  return (
    <header className="sticky top-0 z-50 border-b border-[#151515] bg-[#000000]/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4">
        <Link href="/" className="text-2xl font-black tracking-tight">
          <span className="text-[#FFFFFF]">MAXI</span>
          <span className="text-[#018C55]">DRONE</span>
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-medium text-[#F2F2F2] lg:flex">
          <Link href="/" className="transition hover:text-[#018C55]">Inicio</Link>
          <Link href="/enterprise" className="transition hover:text-[#018C55]">DJI Enterprise</Link>
          <Link href="/agriculture" className="transition hover:text-[#018C55]">DJI Agriculture</Link>
          <Link href="/academy" className="transition hover:text-[#018C55]">DJI Academy</Link>
          <Link href="/servicios" className="transition hover:text-[#018C55]">Servicios</Link>
          <Link href="/nosotros" className="transition hover:text-[#018C55]">Nosotros</Link>
          <Link href="/contacto" className="transition hover:text-[#018C55]">Contacto</Link>
        </nav>

        <Link
          href="/contacto"
          className="rounded-lg bg-[#018C55] px-5 py-3 text-sm font-bold text-[#FFFFFF] transition hover:bg-[#017247]"
        >
          Cotizar
        </Link>
      </div>
    </header>
  );
}
