import mergeMetadata from "@/lib/mergeMetadata";
import { notFound } from "next/navigation";
import { CustomMDX } from "@/components/typography";
import allPosts from "@/lib/posts";
import "./code.css";
import { Prose } from "@/components/Prose";
import { ViewTransition } from "react";

export const dynamicParams = false; // Blog posts are static, don't attempt to generate dynamic routes

type Props = { params: Promise<{ slug: string }> };

export default async function Post(props: Props) {
	const { slug } = await props.params;
	const post = allPosts.find((post) => post._meta.path === slug);
	if (!post) notFound();

	return (
		<Prose>
			<ViewTransition name={`${post._meta.path}-grid-time`}>
				<ViewTransition name={`${post._meta.path}-search-time`}>
					<span>
						<time dateTime={post.date.toISOString()}>
							{post.date.toLocaleDateString(undefined, { dateStyle: "long" })}
						</time>{" "}
						&bull; {post.readingTime} min read
					</span>
				</ViewTransition>
			</ViewTransition>


			<ViewTransition name={`${post._meta.path}-grid-title`}>
				<ViewTransition name={`${post._meta.path}-search-title`}>
					<h1
					>
						{post.title}
					</h1>
				</ViewTransition>
			</ViewTransition>

			<CustomMDX code={post.mdx} />
		</Prose>
	);
}

export function generateStaticParams() {
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
