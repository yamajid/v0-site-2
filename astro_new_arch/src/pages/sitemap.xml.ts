import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ site }) => {
  const pages = [
    '/',
    '/pricing/',
    '/blog/',
    '/compare/',
    '/guides/',
    '/use-cases/',
    '/what-is-v0-by-vercel/',
    '/blog/advanced-v0-techniques/',
    '/blog/getting-started-with-v0/',
    '/blog/v0-pricing-review-2026/',
    '/blog/v0-vs-cursor-ai/',
    '/compare/v0-vs-base44/',
    '/compare/v0-vs-bolt/',
    '/compare/v0-vs-figma-make/',
    '/compare/v0-vs-github-copilot/',
    '/compare/v0-vs-replit/',
    '/use-cases/agentic-workflows/',
    '/use-cases/internal-tools-dashboards/',
    '/use-cases/personal-projects-side-hustles/',
    '/use-cases/prototyping-wireframing/',
  ];

  const baseUrl = site || 'https://v0-guide.com';

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (page) => `  <url>
    <loc>${baseUrl}${page}</loc>
    <changefreq>weekly</changefreq>
    <priority>${page === '/' ? '1.0' : '0.8'}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
};
