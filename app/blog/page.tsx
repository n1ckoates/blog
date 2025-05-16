import Search from "./Search";
import allPosts from "@/lib/posts";
import mergeMetadata from "@/lib/mergeMetadata";

export const metadata = mergeMetadata({ title: "Blog Posts" });

export default function Blog() {
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
