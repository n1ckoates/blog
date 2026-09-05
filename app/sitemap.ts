import type { MetadataRoute } from "next";

import { origin } from "@/lib/origin";
import posts from "@/lib/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      changeFrequency: "monthly",
      lastModified: new Date(),
      priority: 1,
      url: origin,
    },
    {
      changeFrequency: "yearly",
      lastModified: new Date(),
      priority: 0.9,
      url: `${origin}/about`,
    },
    {
      changeFrequency: "weekly",
      lastModified: new Date(),
      priority: 0.7,
      url: `${origin}/blog`,
    },
    {
      changeFrequency: "yearly",
      lastModified: new Date(),
      priority: 0.7,
      url: `${origin}/projects`,
    },
    ...posts.map((post) => ({
      lastModified: post.date,
      priority: 0.5,
      url: `${origin}/blog/${post._meta.path}`,
    })),
  ];
}
