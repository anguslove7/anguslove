import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const diary = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/diary' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    weather: z.string().optional(),
  }),
});

export const collections = { diary };
