import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Drones DJI Enterprise en México",
  description:
    "Drones DJI Enterprise en México para topografía, inspección, seguridad, monitoreo y operaciones profesionales. Asesoría especializada de MAXIDRONE.",
  alternates: { canonical: "/enterprise" },
  openGraph: {
    title: "Drones DJI Enterprise en México | MAXIDRONE",
    description:
      "Soluciones con drones DJI Enterprise para topografía, inspección, seguridad, monitoreo y automatización.",
    url: "/enterprise",
  },
};

export default function EnterpriseLayout({ children }: { children: React.ReactNode }) {
  return children;
}
