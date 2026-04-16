import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://v0-guide.com',
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: true,
    }),
    sitemap({
      // Skip dynamic routes that depend on collections
      filter: (page) => {
        // Allow static pages only
        const staticPages = ['/', '/pricing', '/compare', '/blog', '/guides', '/use-cases'];
        return staticPages.some(p => page === p || page.startsWith(p + '/'));
      }
    }),
    
    mdx(),
  ],
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
    },
  },
    vite: {
    resolve: {
      alias: {
        '@lib': './src/lib',
        '@layouts': './src/layouts',
        '@components': './src/components',
      },
    },
  },
});
