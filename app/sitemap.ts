import type { MetadataRoute } from "next";
import posts from "@/lib/posts";

export default function sitemap(): MetadataRoute.Sitemap {
    const base = process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000";

    
	return [
		{
            url: base,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 1,
        },
        {
            url: `${base}/about`,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 0.9,
        },
        {
            url: `${base}/blog`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.7,
        },
        {
            url: `${base}/projects`,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 0.7,
        },
        ...posts.map((post) => ({
            url: `${base}/blog/${post._meta.path}`,
            lastModified: post.date,
            priority: 0.5,
        }))
	];
}
