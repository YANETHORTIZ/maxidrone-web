import type { Metadata } from "next";
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
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "256x256", type: "image/x-icon" },
      { url: "/favicon.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
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
      <head>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${googleAnalyticsId}');
            `,
          }}
        />
      </head>
      <body className="bg-[#000000] text-[#FFFFFF]">
        <Navbar />

        {children}
        <Analytics />
      </body>
    </html>
  );
}
