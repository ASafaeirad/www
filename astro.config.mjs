import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import mdx from "@astrojs/mdx";

import { remarkReadingTime } from "./plugins/remark-reading-time.mjs";

export default defineConfig({
  integrations: [react(), mdx()],
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
});
