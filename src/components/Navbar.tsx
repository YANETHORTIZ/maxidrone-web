"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ShoppingCart } from "lucide-react";

const navigationLinks = [
  { href: "/", label: "Inicio" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/enterprise", label: "DJI Enterprise" },
  { href: "/agriculture", label: "DJI Agriculture" },
  { href: "/academy", label: "DJI Academy" },
  { href: "/servicios", label: "Servicios" },
  { href: "/contacto", label: "Contacto" },
];

const storeUrl =
  "https://www.productos-info.com/tienda/maxidrone/productos/categoria/214";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky inset-x-0 top-0 z-50 border-b border-white/10 bg-black text-white">
      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-3 min-[360px]:px-5 sm:px-8 lg:px-12">
        <Link
          href="/"
          className="relative block h-10 w-28 shrink-0 min-[360px]:w-32"
          aria-label="MAXIDRONE, inicio"
        >
          <Image
            src="/images/logo-enterprise.png"
            alt="MAXIDRONE"
            fill
            priority
            sizes="128px"
            className="object-contain object-left"
          />
        </Link>

        <nav
          className="hidden items-center gap-5 text-sm font-medium min-[1100px]:flex"
          aria-label="Navegación principal"
        >
          {navigationLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={`relative whitespace-nowrap py-5 transition-colors after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:origin-left after:bg-[#018C55] after:transition-transform ${
                isActive(link.href)
                  ? "text-[#018C55] after:scale-x-100"
                  : "text-white after:scale-x-0 hover:text-[#018C55] hover:after:scale-x-100"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={storeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 items-center gap-2 rounded-sm border border-[#018C55] px-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#018C55] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#018C55] min-[360px]:px-3"
            aria-label="Abrir Tienda MAXIDRONE"
          >
            <ShoppingCart aria-hidden="true" className="size-5" strokeWidth={1.8} />
            <span>Tienda</span>
          </a>

          <button
            type="button"
            className="grid size-10 place-items-center border border-white/20 min-[1100px]:hidden"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            <span aria-hidden="true" className="flex flex-col gap-1.5">
              <span
                className={`block h-px w-5 bg-white transition ${
                  menuOpen ? "translate-y-[3.5px] rotate-45" : ""
                }`}
              />
              <span
                className={`block h-px w-5 bg-white transition ${
                  menuOpen ? "-translate-y-[3.5px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          id="mobile-menu"
          className="border-t border-white/10 bg-black px-3 py-3 min-[360px]:px-5 min-[1100px]:hidden sm:px-8"
          aria-label="Navegación móvil"
        >
          <div className="mx-auto flex max-w-[1440px] flex-col">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                onClick={() => setMenuOpen(false)}
                className={`border-b border-white/10 py-3.5 text-sm font-medium transition-colors last:border-0 ${
                  isActive(link.href)
                    ? "text-[#018C55]"
                    : "text-white hover:text-[#018C55]"
                }`}
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
