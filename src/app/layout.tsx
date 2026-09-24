import type { Metadata } from "next";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Navbar from "@/components/Navbar";

const googleAnalyticsId = "G-2WP2C8VKDS";

export const metadata: Metadata = {
  metadataBase: new URL("https://maxidrone.mx"),
  title: {
    default: "MAXIDRONE | Drones profesionales DJI",
    template: "%s | MAXIDRONE",
  },
  description:
    "Soluciones profesionales con drones DJI Enterprise y DJI Agriculture en México.",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "/",
    siteName: "MAXIDRONE",
    title: "MAXIDRONE | Drones profesionales DJI",
    description:
      "Soluciones profesionales con drones DJI Enterprise y DJI Agriculture en México.",
  },
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
        <Analytics />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
          strategy="beforeInteractive"
        />
        <Script id="google-analytics" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${googleAnalyticsId}');
          `}
        </Script>
      </body>
    </html>
  );
}
