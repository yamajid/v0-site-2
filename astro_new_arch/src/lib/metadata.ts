// src/lib/metadata.ts
export const SITE = {
  title: 'v0 by Vercel Affiliate',
  description: 'Expert guides, comparisons, and tutorials for v0 by Vercel',
  url: import.meta.env.SITE || 'https://localhost:4321',
  image: '/assets/og-default.jpg',
  keywords: ['v0', 'vercel', 'ai', 'ui generation', 'react', 'tailwind'],
  author: 'Your Name',
  twitter: '@yourhandle',
} as const;

export type PageMetaInput = {
  title: string;
  description?: string;
  path: string;
  image?: string;
  keywords?: string[];
  type?: 'website' | 'article';
  publishedTime?: string;
};

export type PageMetaResolved = {
  title: string;
  description: string;
  image: string;
  canonicalURL: string;
  keywords: string[];
  type: 'website' | 'article';
  publishedTime?: string;
};

/**
 * Merge page-specific metadata with site defaults.
 * Automatically appends site title to page title, merges keywords,
 * and generates canonical URLs.
 */
export function definePageMeta(input: PageMetaInput): PageMetaResolved {
  return {
    title: `${input.title} | ${SITE.title}`,
    description: input.description || SITE.description,
    image: input.image || SITE.image,
    canonicalURL: `${SITE.url}${input.path.replace(/\/$/, '')}`,
    keywords: [...new Set([...SITE.keywords, ...(input.keywords || [])])],
    type: input.type || 'website',
    publishedTime: input.publishedTime,
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