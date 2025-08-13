import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import pagefind from 'astro-pagefind';

export default defineConfig({
  site: 'https://nikos-dimitriadis.github.io',
  base: '/',
  integrations: [
    tailwind(),
    react(),
    mdx(),
    sitemap(),
    pagefind()
  ],
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true
    }
  },
  vite: {
    optimizeDeps: {
      exclude: ['@astrojs/react']
    },
    server: {
      host: true,
      allowedHosts: ['all']
    }
  },
  output: 'static',
  build: {
    inlineStylesheets: 'auto'
  }
});
