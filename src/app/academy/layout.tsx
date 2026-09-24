import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DJI Academy",
  description:
    "Capacitación profesional para pilotos de drones, seguridad, misiones y operación en campo.",
  alternates: { canonical: "/academy" },
};

export default function AcademyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
