/**
 * Global site configuration
 * Should be called with Astro.site from BaseLayout
 */

let GLOBAL_SITE_URL: string = 'https://v0-guide.com'; // Fallback

export function initSiteConfig(astroSite: URL | undefined): void {
  if (astroSite) {
    GLOBAL_SITE_URL = astroSite.toString().replace(/\/$/, '');
  }
}

export function getSiteUrl(): string {
  return GLOBAL_SITE_URL;
}

export function getSiteUrlWithPath(path: string): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${GLOBAL_SITE_URL}${cleanPath}`;
}


export function getRouteFromPathname(pathname: string): string {
  // Remove .html extension if present
  let route = pathname.replace(/\.html$/, '');
  
  // Ensure trailing slash consistency (remove for canonical)
  route = route.replace(/\/$/, '') || '/';
  
  return route;
}