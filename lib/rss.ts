import { allPosts } from "contentlayer/generated";
import RSS from "rss";
import { writeFileSync } from "fs";
import url from "@/lib/siteURL";

export default function generateRSS() {
	const feed = new RSS({
		title: "Nick Oates",
		description: "I write about tech and other things I find interesting.",
		feed_url: url + "/feed.xml",
		site_url: url,
		image_url: url + "/blue.png",
		language: "en",
		categories: ["Blog", "Programming"],
	});

	allPosts.forEach((post) => {
		feed.item({
			title: post.title,
			description: post.summary,
			url: URL + post.url,
			guid: post._raw.flattenedPath,
			date: post.date,
		});
	});

	writeFileSync("./public/feed.xml", feed.xml({ indent: true }));
}
