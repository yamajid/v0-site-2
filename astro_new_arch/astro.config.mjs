import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
// import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://yamajid.github.io/v0-site-2/',
  base: '/v0-site-2/',
  output: 'static',
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: true,
    }),
    // sitemap plugin disabled - using manual sitemap.xml instead
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
