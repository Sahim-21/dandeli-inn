import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${SITE_URL}/`,
      lastModified: new Date("2026-09-04"),
      changeFrequency: "weekly",
      priority: 1,
      images: [`${SITE_URL}/images/hero.jpg`],
    },
  ];
}
