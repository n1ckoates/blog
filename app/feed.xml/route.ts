import allPosts from "@/lib/posts";
import RSS from "rss";
import { origin } from "@/lib/origin";

export const dynamic = "force-static";

export function GET() {
	const feed = new RSS({
		title: "Nick Oates",
		description: "Notes on software, the web, and things I'm learning.",
		feed_url: `${origin}/feed.xml`,
		site_url: origin,
		image_url: `${origin}/favicon.ico`,
		language: "en",
		categories: ["Blog", "Programming"],
	});

	for (const post of allPosts) {
		feed.item({
			title: post.title,
			description: post.summary,
			url: `${origin}/blog/${post._meta.path}`,
			guid: post._meta.path,
			date: post.date,
		});
	}

	return new Response(feed.xml({ indent: true }), {
		headers: { "Content-Type": "application/xml" },
	});
}
