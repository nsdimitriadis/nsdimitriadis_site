import { defineCollection, z } from 'astro:content';

const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    category: z.enum(['cv', 'sports', 'music']),
    coverImage: z.string().optional(),
    summary: z.string().optional(),
    date: z.string().optional(),
  }),
});

export const collections = {
  articles,
};
