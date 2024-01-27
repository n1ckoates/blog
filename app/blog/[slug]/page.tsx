import Balancer from "react-wrap-balancer";
import mergeMetadata from "@/lib/mergeMetadata";
import { notFound } from "next/navigation";
import { getAllPosts } from "@/lib/blog";
import CustomMDX from "@/components/CustomMDX";
import "./code.css";

export const dynamicParams = false;

export default async function Post({ params }: { params: { slug: string } }) {
	const allPosts = await getAllPosts();
	const post = allPosts.find((post) => post.slug === params.slug);
	if (!post) notFound();

	return (
		<article className="prose prose-lg prose-zinc mx-auto dark:prose-invert md:prose-xl prose-h1:tracking-tight prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-pre:bg-zinc-100 dark:prose-a:text-blue-400 dark:prose-pre:bg-zinc-900 lg:mx-0">
			<time dateTime={post.date.toISOString()}>
				{post.date.toLocaleDateString(undefined, { dateStyle: "long" })}
			</time>{" "}
			&bull; {post.readingTime} min read
			<h1>
				<Balancer>{post.title}</Balancer>
			</h1>
			<CustomMDX source={post.content} />
		</article>
	);
}

export async function generateStaticParams() {
	const allPosts = await getAllPosts();
	return allPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
	params,
}: {
	params: { slug: string };
}) {
	const allPosts = await getAllPosts();
	const post = allPosts.find((post) => post.slug === params.slug);

	if (!post) return mergeMetadata();

	return mergeMetadata({
		title: post.title,
		description: post.summary,
		image: post.cover,
		imageAlt: post.coverAlt,
	});
}
