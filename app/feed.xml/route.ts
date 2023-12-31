import { getAllPosts } from "@/lib/blog";
import RSS from "rss";
import url from "@/lib/siteURL";

export async function GET() {
	const feed = new RSS({
		title: "Nick Oates",
		description: "I write about tech and other things I find interesting.",
		feed_url: url + "/feed.xml",
		site_url: url,
		image_url: url + "/blue.png",
		language: "en",
		categories: ["Blog", "Programming"],
	});

	const allPosts = await getAllPosts();
	allPosts.forEach((post) => {
		feed.item({
			title: post.title,
			description: post.summary,
			url: `${url}/blog/${post.slug}`,
			guid: post.slug,
			date: post.date,
		});
	});

	return new Response(feed.xml({ indent: true }));
}
