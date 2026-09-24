import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DJI Agriculture",
  description:
    "Drones DJI Agriculture para aspersión, esparcimiento y agricultura de precisión en México.",
  alternates: { canonical: "/agriculture" },
};

export default function AgricultureLayout({ children }: { children: React.ReactNode }) {
  return children;
}
