// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import react from "@astrojs/react";
import mdx from "@astrojs/mdx";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  fonts: [
    {
      provider: fontProviders.local(),
      name: "Rubik Beastly",
      cssVariable: "--font-rubik-beastly",
      options: {
        variants: [
          {
            src: ["./src/assets/fonts/rubik-beastly-latin-400-normal.woff2"],
            weight: "normal",
            style: "normal",
          },
        ],
      },
    },
  ],
  integrations: [react(), mdx()],
  adapter: netlify(),
});
