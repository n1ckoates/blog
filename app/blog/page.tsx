import Search from "./Search";
import { getAllPosts } from "@/lib/blog";

export const metadata = {
	title: "Blog Posts",
	openGraph: {
		siteName: "Nick Oates",
		title: "Blog Posts",
		description: "Aspiring web developer whose code sometimes works.",
	},
};

export default async function Blog() {
	const allPosts = await getAllPosts();

	// Remove unneeded fields from posts before sending them to the client
	const posts = allPosts.map((post) => ({
		slug: post.slug,
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
