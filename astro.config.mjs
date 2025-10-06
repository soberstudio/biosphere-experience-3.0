// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';


// https://astro.build/config
export default defineConfig({
  site: 'https://biosphere-experience.org', // Your production URL
  integrations: [sitemap(), mdx()],
  devToolbar: {
    enabled: false
  },
  vite: {
    plugins: [tailwindcss()]
  },

});