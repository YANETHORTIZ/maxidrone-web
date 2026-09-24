import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DJI Enterprise",
  description:
    "Drones DJI Enterprise para topografía, inspección, seguridad, monitoreo y operaciones profesionales.",
  alternates: { canonical: "/enterprise" },
};

export default function EnterpriseLayout({ children }: { children: React.ReactNode }) {
  return children;
}
