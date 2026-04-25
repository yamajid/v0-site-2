import rss from '@astrojs/rss';
import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ site }) => {
  const baseUrl = (site || 'https://v0-guide.com').toString();

  // Static blog items — update when you add real MDX blog posts
  const blogItems = [
    {
      title: 'Advanced v0 Techniques for Production React Apps',
      description: 'Go beyond basic prompts. Learn how to use v0 for full feature scaffolding, dark mode, and component systems.',
      link: `${baseUrl}blog/advanced-v0-techniques/`,
      pubDate: new Date('2026-03-15'),
    },
    {
      title: 'Getting Started with v0 by Vercel',
      description: 'A step-by-step guide for first-time v0 users — from writing your first prompt to deploying on Vercel.',
      link: `${baseUrl}blog/getting-started-with-v0/`,
      pubDate: new Date('2026-03-01'),
    },
    {
      title: 'v0 Pricing Review 2026 — Is It Worth It?',
      description: 'Full breakdown of v0 free vs Pro vs Team plans with real cost scenarios for freelancers and agencies.',
      link: `${baseUrl}blog/v0-pricing-review-2026/`,
      pubDate: new Date('2026-04-01'),
    },
    {
      title: 'v0 vs Cursor AI — Which Is Better for React Development?',
      description: 'Side-by-side comparison of v0 and Cursor for React developers. Speed, code quality, pricing, and workflow.',
      link: `${baseUrl}blog/v0-vs-cursor-ai/`,
      pubDate: new Date('2026-03-20'),
    },
  ];

  return rss({
    title: 'v0-Guide Blog',
    description: 'Latest tutorials, reviews, and insights about v0 by Vercel',
    site: baseUrl,
    items: blogItems,
    stylesheet: '/rss/styles.xsl',
    xmlns: {
      content: 'http://purl.org/rss/1.0/modules/content/',
    },
  });
};