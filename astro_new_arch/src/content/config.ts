import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string(),
    category: z.enum(['tutorials', 'reviews', 'news', 'guides']),
    tags: z.array(z.string()).default([]),
    image: z.string().optional(),
    featured: z.boolean().default(false),
    readingTime: z.number().optional(),
  }),
});

const compareCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    competitor: z.string(),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string(),
    verdict: z.string(),
    pros: z.array(z.string()),
    cons: z.array(z.string()),
    rating: z.number().min(0).max(5),
    image: z.string().optional(),
    affiliateLink: z.string().url(),
  }),
});

export const collections = {
  blog: blogCollection,
  compare: compareCollection,
};
