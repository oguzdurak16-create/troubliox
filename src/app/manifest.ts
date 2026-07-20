import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Troublio",
    short_name: "Troublio",
    description: "Find what’s wrong. Know what to do.",
    start_url: "/",
    display: "standalone",
    background_color: "#f7f4eb",
    theme_color: "#073f40",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
    shortcuts: [
      { name: "Guided diagnosis", short_name: "Diagnose", description: "Match a symptom or error code to a guide.", url: "/diagnose" },
      { name: "Search guides", short_name: "Search", description: "Search Troublio troubleshooting guides.", url: "/search" },
      { name: "Saved guides", short_name: "Saved", description: "Open guides saved on this device.", url: "/saved" },
    ],
  };
}
