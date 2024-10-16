import mergeMetadata from "@/lib/mergeMetadata";
import { notFound } from "next/navigation";
import CustomMDX from "@/components/CustomMDX";
import allPosts from "@/lib/posts";
import "./code.css";

export const dynamicParams = false; // Blog posts are static, don't attempt to generate dynamic routes

type Props = { params: Promise<{ slug: string }> };

export default async function Post(props: Props) {
	const { slug } = await props.params;
	const post = allPosts.find((post) => post._meta.path === slug);
	if (!post) notFound();

	return (
		<article className="prose prose-lg prose-zinc mx-auto dark:prose-invert md:prose-xl prose-h1:tracking-tight prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-pre:bg-zinc-100 dark:prose-a:text-blue-400 dark:prose-pre:bg-zinc-900 lg:mx-0">
			<time dateTime={post.date.toISOString()}>
				{post.date.toLocaleDateString(undefined, { dateStyle: "long" })}
			</time>{" "}
			&bull; {post.readingTime} min read
			<h1 className="text-balance">{post.title}</h1>
			<CustomMDX code={post.mdx} />
		</article>
	);
}

export async function generateStaticParams() {
	return allPosts.map((post) => ({ slug: post._meta.path }));
}

export async function generateMetadata(props: Props) {
	const { slug } = await props.params;
	const post = allPosts.find((post) => post._meta.path === slug);

	if (!post) return mergeMetadata();

	return mergeMetadata({
		title: post.title,
		description: post.summary,
		image: post.cover,
		imageAlt: post.coverAlt,
	});
}
