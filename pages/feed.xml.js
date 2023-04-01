import { allPosts } from ".contentlayer/generated";
import RSS from "rss";
import { name } from "../metadata.js";

const URL = process.env.NEXT_PUBLIC_URL;

export function getServerSideProps({ res }) {
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

	res.setHeader("Content-Type", "text/xml");
	res.setHeader(
		"Cache-Control",
		"public, s-maxage=1200, stale-while-revalidate=600"
	);
	res.write(feed.xml({ indent: true }));
	res.end();

	return {
		props: {},
	};
}

export default function Feed() {
	return null;
}
