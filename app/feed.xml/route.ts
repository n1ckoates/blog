import allPosts from "@/lib/posts";
import RSS from "rss";

export const dynamic = "force-static";

export async function GET() {
	const url = process.env.VERCEL_PROJECT_PRODUCTION_URL
		? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
		: "http://localhost:3000";

	const feed = new RSS({
		title: "Nick Oates",
		description: "I write about tech and other things I find interesting.",
		feed_url: url + "/feed.xml",
		site_url: url,
		image_url: url + "/favicon.ico",
		language: "en",
		categories: ["Blog", "Programming"],
	});

	for (const post of allPosts) {
		feed.item({
			title: post.title,
			description: post.summary,
			url: `${url}/blog/${post._meta.path}`,
			guid: post._meta.path,
			date: post.date,
		});
	}

	return new Response(feed.xml({ indent: true }), {
		headers: { "Content-Type": "application/xml" },
	});
}
