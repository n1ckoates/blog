import { allPosts } from "contentlayer/generated";
import Search from "./Search";

export const metadata = {
	title: "Blog Posts",
	openGraph: {
		siteName: "Nick Oates",
		title: "Blog Posts",
		description: "Aspiring web developer whose code sometimes works.",
	},
};

// Remove unneeded fields from posts before sending them to the client
const posts = allPosts
	.sort((a, b) => (a.date > b.date ? -1 : a.date < b.date ? 1 : 0))
	.map((post) => ({
		url: post.url,
		cover: post.cover,
		coverAlt: post.coverAlt,
		formattedDate: post.formattedDate,
		readingTime: post.readingTime,
		title: post.title,
		summary: post.summary,
		blurDataURL: post.blurDataURL,
	}));

export default function Blog() {
	return <Search title="Blog Posts" posts={posts} />;
}
