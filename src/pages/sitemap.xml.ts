import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ site }) => {
  const baseUrl = site ? site.href : 'https://v0-guide.com';
  
  // Use import.meta.glob to dynamically fetch all Astro pages
  const pages = import.meta.glob('./**/*.astro', { eager: true });
  
  const currentDate = new Date().toISOString().split('T')[0];
  
  const urls = Object.keys(pages).map((filePath) => {
    // filePath format: "./index.astro" or "./compare/v0-vs-bolt.astro"
    let path = filePath.replace('./', '').replace('.astro', '');
    
    // Normalize paths (removes the 'index' file name from roots/subdirectories)
    if (path === 'index') {
      path = ''; // Root site
    } else if (path.endsWith('/index')) {
      path = path.replace(/\/index$/, '/');
    } else if (!path.endsWith('/')) {
      path = `${path}/`; // Add trailing slash for consistency
    }

    // Skip 404 pages or dynamic segments mapped as actual names
    if (path.includes('404') || path.includes('[')) return null;

    const cleanBaseUrl = baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl;
    const urlPath = path === '' ? cleanBaseUrl : `${cleanBaseUrl}/${path}`;
    
    return `  <url>
    <loc>${urlPath}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${path === '' ? 'weekly' : 'monthly'}</changefreq>
    <priority>${path === '' ? '1.0' : '0.8'}</priority>
  </url>`;
  }).filter(Boolean);

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600'
    },
  });
};
