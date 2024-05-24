import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  site: 'https://beta.balsavich.dev/',
  integrations: [sitemap()],
  output: "server",
  adapter: netlify()
});