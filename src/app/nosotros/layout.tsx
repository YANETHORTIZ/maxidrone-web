import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "Conoce a MAXIDRONE y nuestras soluciones profesionales con drones para agricultura, industria e infraestructura.",
  alternates: { canonical: "/nosotros" },
};

export default function NosotrosLayout({ children }: { children: React.ReactNode }) {
  return children;
}
