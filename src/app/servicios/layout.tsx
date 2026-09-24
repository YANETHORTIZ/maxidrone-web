import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Servicios con drones",
  description:
    "Topografía, fumigación agrícola, inspección, reparación, garantías y soluciones profesionales con drones.",
  alternates: { canonical: "/servicios" },
};

export default function ServiciosLayout({ children }: { children: React.ReactNode }) {
  return children;
}
