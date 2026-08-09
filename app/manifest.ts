import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Dandeli Inn",
    short_name: "Dandeli Inn",
    description:
      "Budget-friendly stay in Dandeli, Bangur Nagar — 300m from the bus stand.",
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
