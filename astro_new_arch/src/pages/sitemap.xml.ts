import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ site }) => {
  const pages = [
    { path: '/', lastmod: '2026-04-17' },
    { path: '/pricing/', lastmod: '2026-04-01' },
    { path: '/blog/', lastmod: '2026-04-01' },
    { path: '/compare/', lastmod: '2026-04-01' },
    { path: '/guides/', lastmod: '2026-04-01' },
    { path: '/use-cases/', lastmod: '2026-04-01' },
    { path: '/what-is-v0-by-vercel/', lastmod: '2026-04-01' },
    { path: '/blog/advanced-v0-techniques/', lastmod: '2026-03-15' },
    { path: '/blog/getting-started-with-v0/', lastmod: '2026-03-01' },
    { path: '/blog/v0-pricing-review-2026/', lastmod: '2026-04-01' },
    { path: '/blog/v0-vs-cursor-ai/', lastmod: '2026-03-20' },
    { path: '/compare/v0-vs-base44/', lastmod: '2026-03-10' },
    { path: '/compare/v0-vs-bolt/', lastmod: '2026-03-25' },
    { path: '/compare/v0-vs-figma-make/', lastmod: '2026-03-15' },
    { path: '/compare/v0-vs-github-copilot/', lastmod: '2026-03-20' },
    { path: '/compare/v0-vs-replit/', lastmod: '2026-03-25' },
    { path: '/use-cases/agentic-workflows/', lastmod: '2026-03-15' },
    { path: '/use-cases/internal-tools-dashboards/', lastmod: '2026-03-10' },
    { path: '/use-cases/personal-projects-side-hustles/', lastmod: '2026-03-20' },
    { path: '/use-cases/prototyping-wireframing/', lastmod: '2026-03-15' },
  ];

  const baseUrl = site || 'https://v0-guide.com';

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (page) => `  <url>
    <loc>${baseUrl}${page.path}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.path === '/' ? 'weekly' : 'monthly'}</changefreq>
    <priority>${page.path === '/' ? '1.0' : '0.8'}</priority>
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
