"use client";

import { IconSearch } from "@tabler/icons-react";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import TextInput from "@/components/TextInput";
import { useFuzzySearchList } from "@nozbe/microfuzz/react";

type PartialBlogPost = {
	slug: string;
	cover: string;
	coverAlt: string;
	date: Date;
	readingTime: number;
	title: string;
	summary: string;
	blurDataURL: string;
};

export function BlogClient(props: { posts: PartialBlogPost[] }) {
	const [queryText, setQueryText] = useState("");
	const [animationParent] = useAutoAnimate();

	const filteredPosts = useFuzzySearchList({
		list: props.posts,
		queryText,
		getText: (item) => [item.title, item.summary],
		mapResultItem: ({ item }) => ({ post: item }),
	});

	return (
		<>
			<div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
				<div>
					<h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
						Blog
					</h1>
					<p className="text-muted-foreground mt-1 text-sm">
						Notes on software, the web, and things I&apos;m learning.
					</p>
				</div>

				<div className="relative w-full sm:w-64">
					<TextInput
						name="search"
						className="w-full rounded-lg pr-10 text-sm"
						placeholder="Search posts..."
						aria-label="Search posts"
						onChange={(e) => setQueryText(e.target.value)}
					/>
					<IconSearch
						className="text-muted-foreground absolute top-2.5 right-3"
						size={18}
						aria-hidden
					/>
				</div>
			</div>

			<div ref={animationParent} className="space-y-3">
				{!filteredPosts.length && (
					<p className="border-border text-muted-foreground rounded-xl border p-5 text-sm">
						No posts were found with that search term.
					</p>
				)}
				{filteredPosts.map(({ post }) => (
					<Link
						href={"/blog/" + post.slug}
						key={post.slug}
						className="border-border bg-surface hover:bg-surface-hover grid overflow-hidden rounded-xl border sm:grid-cols-[10rem_minmax(0,1fr)]"
						aria-label={post.title}
					>
						<div className="bg-secondary relative aspect-video overflow-hidden sm:aspect-auto">
							<Image
								alt={post.coverAlt}
								src={post.cover}
								fill
								className="object-cover"
								sizes="(max-width:640px) 100vw, 160px"
								placeholder="blur"
								blurDataURL={post.blurDataURL}
							/>
						</div>

						<div className="min-w-0 p-4 sm:p-5">
							<p className="text-muted-foreground mb-1.5 text-xs font-medium">
								<time dateTime={post.date.toISOString()}>
									{post.date.toLocaleDateString(undefined, {
										month: "short",
										day: "numeric",
										year: "numeric",
									})}
								</time>{" "}
								&bull; {post.readingTime} min read
							</p>

							<h2 className="text-lg leading-snug font-semibold tracking-tight sm:text-xl">
								{post.title}
							</h2>

							<p className="text-subtle-foreground mt-1.5 line-clamp-2 text-sm leading-6">
								{post.summary}
							</p>
						</div>
					</Link>
				))}
			</div>
		</>
	);
}
