import { allPosts } from "content-collections";
import RSS from "rss";
import url from "@/lib/siteURL";

export async function GET() {
	const feed = new RSS({
		title: "Nick Oates",
		description: "I write about tech and other things I find interesting.",
		feed_url: url + "/feed.xml",
		site_url: url,
		image_url: url + "/favicon.ico",
		language: "en",
		categories: ["Blog", "Programming"],
	});

	allPosts.forEach((post) => {
		feed.item({
			title: post.title,
			description: post.summary,
			url: `${url}/blog/${post._meta.path}`,
			guid: post._meta.path,
			date: post.date,
		});
	});

	return new Response(feed.xml({ indent: true }), {
		headers: { "Content-Type": "application/xml" },
	});
}
