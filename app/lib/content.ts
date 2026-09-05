import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";
import remarkSmartypants from "remark-smartypants";
import { z } from "zod";

import getBlurDataURL from "./getBlurDataURL";

const posts = defineCollection({
  directory: "../../content",
  include: "**/*.{md,mdx}",
  name: "posts",
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    summary: z.string(),
    cover: z.string(),
    coverAlt: z.string(),
    content: z.string(),
  }),
  transform: async (document, context) => {
    const mdx = await compileMDX(context, document, {
      remarkPlugins: [[remarkSmartypants, { dashes: true }]],
    });
    return {
      ...document,
      mdx,
      readingTime: getReadingTime(document.content),
      blurDataURL: await getBlurDataURL(document.cover),
    };
  },
});

export default defineConfig({
  content: [posts],
});

function getReadingTime(content: string) {
  const words = content.split(/\s+/g).length;
  const minutes = Math.ceil(words / 200); // 200 words per minute
  return minutes;
}
