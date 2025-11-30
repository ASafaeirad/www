import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import { remarkReadingTime } from "./plugins/remark-reading-time.mjs";

export default defineConfig({
  integrations: [react(), mdx(), sitemap()],
  site: "https://remvze.com",
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
});
