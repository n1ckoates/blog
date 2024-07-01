import Search from "./Search";
import { allPosts } from "content-collections";

export const metadata = {
	title: "Blog Posts",
	openGraph: {
		siteName: "Nick Oates",
		title: "Blog Posts",
		description: "Aspiring web developer whose code sometimes works.",
	},
};

export default async function Blog() {
	// Remove unneeded fields from posts before sending them to the client
	const posts = allPosts.map((post) => ({
		slug: post._meta.path,
		cover: post.cover,
		coverAlt: post.coverAlt,
		date: post.date,
		readingTime: post.readingTime,
		title: post.title,
		summary: post.summary,
		blurDataURL: post.blurDataURL,
	}));

	return <Search title="Blog Posts" posts={posts} />;
}
