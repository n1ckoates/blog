"use client";

import { IconSearch } from "@tabler/icons-react";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import TextInput from "@/components/TextInput";
import { useFuzzySearchList } from "@nozbe/microfuzz/react";
import { ViewTransition } from "react";

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
				<ViewTransition name="blog-posts-header">
					<div>
						<h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
							Blog
						</h1>
						<p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
							Notes on software, the web, and things I&apos;m learning.
						</p>
					</div>
				</ViewTransition>

				<div className="relative w-full sm:w-64">
					<TextInput
						name="search"
						className="w-full rounded-lg pr-10 text-sm"
						placeholder="Search posts..."
						aria-label="Search posts"
						onChange={(e) => setQueryText(e.target.value)}
					/>
					<IconSearch
						className="absolute top-2.5 right-3 text-zinc-400"
						size={18}
						aria-hidden
					/>
				</div>
			</div>

			<div ref={animationParent} className="space-y-3">
				{!filteredPosts.length && (
					<p className="rounded-xl border border-zinc-200 p-5 text-sm text-zinc-500 dark:border-zinc-800 dark:text-zinc-400">
						No posts were found with that search term.
					</p>
				)}
				{filteredPosts.map(({ post }) => (
					<Link
						href={"/blog/" + post.slug}
						key={post.slug}
						className="group grid overflow-hidden rounded-xl border border-zinc-200 bg-zinc-50/60 transition-colors hover:bg-white sm:grid-cols-[10rem_minmax(0,1fr)] dark:border-zinc-800 dark:bg-zinc-950/50 dark:hover:bg-zinc-900/60"
						aria-label={post.title}
					>
						<div className="relative aspect-[16/9] overflow-hidden bg-zinc-200 sm:aspect-auto dark:bg-zinc-800">
							<Image
								alt={post.coverAlt}
								src={post.cover}
								fill
								className="object-cover transition duration-500 group-hover:scale-[1.03]"
								sizes="(max-width:640px) 100vw, 160px"
								placeholder="blur"
								blurDataURL={post.blurDataURL}
							/>
						</div>

						<div className="min-w-0 p-4 sm:p-5">
							<ViewTransition name={post.slug + "-search-time"}>
								<p className="mb-1.5 text-xs font-medium text-zinc-500 dark:text-zinc-400">
									<time dateTime={post.date.toISOString()}>
										{post.date.toLocaleDateString(undefined, {
											month: "short",
											day: "numeric",
											year: "numeric",
										})}
									</time>{" "}
									&bull; {post.readingTime} min read
								</p>
							</ViewTransition>

							<ViewTransition name={post.slug + "-search-title"}>
								<h2 className="text-lg leading-snug font-semibold tracking-tight sm:text-xl">
									{post.title}
								</h2>
							</ViewTransition>

							<p className="mt-1.5 line-clamp-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
								{post.summary}
							</p>
						</div>
					</Link>
				))}
			</div>
		</>
	);
}
