import type { MetadataRoute } from "next";
import { SITE_DESCRIPTION, SITE_NAME } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_NAME,
    short_name: SITE_NAME,
    description: SITE_DESCRIPTION,
    start_url: "/",
    display: "standalone",
    background_color: "#f5edd6", // sand-100
    theme_color: "#2d5016", // forest-700
    icons: [
      {
        src: "/icon.jpg",
        sizes: "any",
        type: "image/jpeg",
      },
    ],
  };
}
