import type { MetadataRoute } from "next";

// Web app manifest: makes the Year 11 IGCSE Business Studio installable ("Add to Home Screen").
export default function manifest(): MetadataRoute.Manifest {
  return {
    id: "/",
    name: "Year 11 IGCSE Business (4BS1)",
    short_name: "4BS1 Business",
    description:
      "Master Pearson Edexcel IGCSE Business (4BS1 9–1) — discovery lessons, Grade 9 exam marks-savers, interactive finance explorables, auto-marked papers, procedural drills and sitcom episodes.",
    lang: "en-GB",
    start_url: "/",
    scope: "/",
    display: "standalone",
    orientation: "any",
    background_color: "#f5f6fb",
    theme_color: "#0f766e",
    categories: ["education", "business"],
    icons: [
      { src: "/api/appicon?size=192", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/api/appicon?size=512", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/api/appicon?size=512&maskable=1", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
