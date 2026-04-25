import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ site }) => {
  const baseUrl = site ? site.href.replace(/\/$/, '') : 'https://v0-guide.com';

  const priorityMap: Record<string, { priority: string; changefreq: string }> = {
    '':                              { priority: '1.0', changefreq: 'weekly' },
    'pricing/':                      { priority: '0.9', changefreq: 'monthly' },
    'compare/':                      { priority: '0.9', changefreq: 'monthly' },
    'what-is-v0-by-vercel/':         { priority: '0.8', changefreq: 'monthly' },
    'compare/v0-vs-bolt/':           { priority: '0.8', changefreq: 'monthly' },
    'compare/v0-vs-replit/':         { priority: '0.8', changefreq: 'monthly' },
    'compare/v0-vs-github-copilot/': { priority: '0.8', changefreq: 'monthly' },
    'compare/v0-vs-figma-make/':     { priority: '0.8', changefreq: 'monthly' },
    'compare/v0-vs-base44/':         { priority: '0.8', changefreq: 'monthly' },
    'about/':                        { priority: '0.7', changefreq: 'monthly' },
    'blog/':                         { priority: '0.7', changefreq: 'monthly' },
    'guides/':                       { priority: '0.7', changefreq: 'monthly' },
    'use-cases/':                    { priority: '0.7', changefreq: 'monthly' },
    'blog/advanced-v0-techniques/':  { priority: '0.7', changefreq: 'monthly' },
    'blog/getting-started-with-v0/': { priority: '0.7', changefreq: 'monthly' },
    'blog/v0-pricing-review-2026/':  { priority: '0.7', changefreq: 'monthly' },
    'blog/v0-vs-cursor-ai/':         { priority: '0.7', changefreq: 'monthly' },
  };

  const lastmodMap: Record<string, string> = {
    '':                              '2026-04-17',
    'pricing/':                      '2026-04-01',
    'compare/':                      '2026-04-01',
    'what-is-v0-by-vercel/':         '2026-04-01',
    'compare/v0-vs-bolt/':           '2026-03-25',
    'compare/v0-vs-replit/':         '2026-03-25',
    'compare/v0-vs-github-copilot/': '2026-03-20',
    'compare/v0-vs-figma-make/':     '2026-03-15',
    'compare/v0-vs-base44/':         '2026-03-10',
    'about/':                        '2026-04-01',
    'blog/':                         '2026-04-01',
    'guides/':                       '2026-04-01',
    'use-cases/':                    '2026-04-01',
    'blog/advanced-v0-techniques/':  '2026-03-15',
    'blog/getting-started-with-v0/': '2026-03-01',
    'blog/v0-pricing-review-2026/':  '2026-04-01',
    'blog/v0-vs-cursor-ai/':         '2026-03-20',
  };

  const urls = Object.entries(priorityMap).map(([path, { priority, changefreq }]) => {
    const loc = path === '' ? baseUrl + '/' : `${baseUrl}/${path}`;
    const lastmod = lastmodMap[path] ?? new Date().toISOString().split('T')[0];
    return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
  });

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};