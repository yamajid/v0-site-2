// src/lib/metadata.ts

import { getSiteUrl } from '@/lib/site-config';
import { getRouteFromPathname } from '@/lib/site-config';


export const SITE = {
  title: 'The V0-Guide',
  description: 'Expert guides, comparisons, and tutorials for v0 by Vercel',
  url: getSiteUrl(),
  image: '/assets/og-default.jpg',
  keywords: ['v0', 'vercel', 'ai', 'ui generation', 'react', 'tailwind', ],
  author: 'V0 guide',
  twitter: '@yourhandle',
} as const;

export type PageMetaInput = {
  title: string;
  description?: string;
  path?: string;
  image?: string;
  keywords?: string[];
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
};

export type PageMetaResolved = {
  title: string;
  description: string;
  image: string;
  canonicalURL: string;
  keywords: string[];
  type: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
};

/**
 * Merge page-specific metadata with site defaults.
 * Automatically appends site title to page title, merges keywords,
 * and generates canonical URLs.
 */
export function definePageMeta(input: PageMetaInput, pathname?: string): PageMetaResolved {
  const resolvedPath = input.path ?? (pathname ? getRouteFromPathname(pathname) : '/');
  const siteUrl = getSiteUrl();
  return {
    title: `${input.title} | ${SITE.title}`,
    description: input.description || SITE.description,
    image: input.image || SITE.image,
    canonicalURL: `${siteUrl}${resolvedPath === '/' ? '/' : resolvedPath}`,
    keywords: [...new Set([...SITE.keywords, ...(input.keywords || [])])],
    type: input.type || 'website',
    publishedTime: input.publishedTime,
    modifiedTime: input.modifiedTime,
  };
}

/**
 * Helper for content collections (blog, compare, guides, etc.)
 */
export function defineContentMeta(collection: string, data: {
  title: string;
  description: string;
  slug: string;
  image?: string;
  tags?: string[];
  publishedAt?: string;
}): PageMetaResolved {
  return definePageMeta({
    title: data.title,
    description: data.description,
    path: `/${collection}/${data.slug}`,
    image: data.image,
    keywords: data.tags,
    type: 'article',
    publishedTime: data.publishedAt,
    
  });
}