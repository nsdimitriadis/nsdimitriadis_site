import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import pagefind from 'astro-pagefind';

const REPLIT_HOST = 'c584ee27-3a6a-44fc-b770-b7c9d728653a-00-zjnq8vkgavcp.worf.replit.dev';

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
  output: 'static',
  build: {
    inlineStylesheets: 'auto'
  },
  vite: {
    optimizeDeps: {
      exclude: ['@astrojs/react']
    },
    server: {
      host: '0.0.0.0',
      port: 5000,
      allowedHosts: [REPLIT_HOST],
      hmr: {
        protocol: 'wss',
        host: REPLIT_HOST,
        clientPort: 443,
      },
      strictPort: false,
    },
    preview: {
      host: '0.0.0.0',
      port: 5000,
      allowedHosts: [REPLIT_HOST],
    }
  }
});