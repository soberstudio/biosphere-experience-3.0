// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';


// https://astro.build/config
export default defineConfig({
  site: 'https://biosphere-experience.com', // Your production URL
  integrations: [sitemap()],
  devToolbar: {
    enabled: false
  },
  vite: {
    plugins: [tailwindcss()]
  },

});