import { allPosts } from ".contentlayer/generated";
import RSS from "rss";
import { name } from "./metadata.js";
import { writeFileSync } from "fs";

const URL = process.env.NEXT_PUBLIC_URL;

export default function generateRSS() {
	const feed = new RSS({
		title: name,
		description: "I write about tech and other things I find interesting.",
		feed_url: URL + "/feed.xml",
		site_url: URL,
		image_url: URL + "/blue.png",
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
