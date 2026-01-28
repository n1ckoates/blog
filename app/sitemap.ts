import type { MetadataRoute } from "next";
import posts from "@/lib/posts";
import { origin } from "@/lib/origin";

export default function sitemap(): MetadataRoute.Sitemap {    
	return [
		{
            url: origin,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 1,
        },
        {
            url: `${origin}/about`,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 0.9,
        },
        {
            url: `${origin}/blog`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.7,
        },
        {
            url: `${origin}/projects`,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 0.7,
        },
        ...posts.map((post) => ({
            url: `${origin}/blog/${post._meta.path}`,
            lastModified: post.date,
            priority: 0.5,
        }))
	];
}
