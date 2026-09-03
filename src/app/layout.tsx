import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "MAXIDRONE",
  description:
    "Soluciones profesionales con drones DJI Enterprise y DJI Agriculture",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="bg-[#000000] text-[#FFFFFF]">
        <Navbar />

        {children}
      </body>
    </html>
  );
}