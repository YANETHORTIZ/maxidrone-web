import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tienda",
  description:
    "Consulta equipos, accesorios y soluciones DJI disponibles con MAXIDRONE.",
  alternates: { canonical: "/tienda" },
};

export default function TiendaLayout({ children }: { children: React.ReactNode }) {
  return children;
}
