"use client";

import { useEffect } from "react";

const storeUrl =
  "https://www.productos-info.com/tienda/maxidrone/productos/categoria/214";

export default function StorePage() {
  useEffect(() => {
    window.location.replace(storeUrl);
  }, []);

  return (
    <main className="grid min-h-[calc(100vh-4rem)] place-items-center bg-neutral-950 px-6 text-center text-white">
      <div>
        <p className="mb-4 text-lg">Abriendo el catálogo de MAXIDRONE…</p>
        <a
          href={storeUrl}
          className="inline-flex rounded-sm bg-[#018C55] px-5 py-3 font-semibold transition-colors hover:bg-[#017347]"
        >
          Continuar a la tienda
        </a>
      </div>
    </main>
  );
}
