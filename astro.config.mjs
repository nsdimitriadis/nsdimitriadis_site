import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

const REPLIT_HOST = 'c611b145-39b5-4b6f-9fd3-5e1ef5ed92c1-00-e4c2l78mdzov.janeway.replit.dev';

export default defineConfig({
  site: 'https://nsdimitriadis.com',
  base: '/',
  integrations: [
    tailwind(),
    react(),
    mdx(),
    sitemap()
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