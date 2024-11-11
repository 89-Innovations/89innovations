// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';
import icon from 'astro-icon';
import mdx from '@astrojs/mdx';
import remarkGfm from 'remark-gfm';

// https://astro.build/config
export default defineConfig({
  site: process.env.CF_PAGES_URL,
  integrations: [react(), tailwind(), sitemap(), robotsTxt(), icon(), mdx()],
  markdown: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [],
  },
  experimental: {
    contentLayer: true,
  },
});
