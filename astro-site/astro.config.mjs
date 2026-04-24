// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://www.authenticcommunicatorglobal.com',
  output: 'static',
  adapter: vercel(),
  integrations: [
    sitemap({
      changefreq: 'monthly',
      lastmod: new Date(),
      serialize(item) {
        const path = new URL(item.url).pathname.replace(/\/$/, '') || '/';
        if (path === '/') {
          item.priority = 1.0;
          item.changefreq = 'weekly';
        } else if (/^\/(packages|about|free-consultation)$/.test(path)) {
          item.priority = 0.9;
          item.changefreq = 'monthly';
        } else if (/^\/packages\/[^/]+$/.test(path)) {
          item.priority = 0.85;
          item.changefreq = 'monthly';
        } else if (path === '/inspiration') {
          item.priority = 0.8;
          item.changefreq = 'weekly';
        } else if (/^\/inspiration\/[^/]+$/.test(path)) {
          item.priority = 0.7;
          item.changefreq = 'monthly';
        } else if (path === '/contact') {
          item.priority = 0.7;
          item.changefreq = 'monthly';
        } else if (/^\/(privacy|terms)$/.test(path)) {
          item.priority = 0.3;
          item.changefreq = 'yearly';
        } else {
          item.priority = 0.5;
          item.changefreq = 'monthly';
        }
        return item;
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});
