import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {

  return {

    name: "Machwana Law Office",

    short_name: "Machwana",

    description:
      "Strategic legal services for businesses and individuals.",


    start_url: "/",


    display: "standalone",


    background_color: "#0f172a",


    theme_color: "#f97316",


    orientation: "portrait",


    lang: "en",


    icons: [

      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },

      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },

      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },

      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },

    ],

  };

}