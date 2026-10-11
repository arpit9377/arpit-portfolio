import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://arpityadav.dev",
      lastModified: "2026-10-11",
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
