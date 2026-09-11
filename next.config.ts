import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // Permite la recarga en vivo cuando la vista previa se abre desde la red local.
  allowedDevOrigins: ["192.168.0.142"],
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
