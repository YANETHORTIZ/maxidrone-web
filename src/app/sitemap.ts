import type { MetadataRoute } from "next";

const baseUrl = "https://maxidrone.mx";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: baseUrl, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/nosotros`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/enterprise`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/agriculture`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/academy`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/servicios`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/contacto`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/tienda`, changeFrequency: "weekly", priority: 0.8 },
  ];
}
