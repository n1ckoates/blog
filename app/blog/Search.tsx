"use client";

import { IconSearch } from "@tabler/icons-react";
import { Link } from "next-view-transitions";
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

export default function Search(props: {
	title: string;
	posts: PartialBlogPost[];
}) {
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
			<div className="mb-4 flex flex-col justify-between gap-2 lg:flex-row">
				<h2 className="text-3xl font-extrabold md:text-4xl">{props.title}</h2>

				<div className="relative w-full lg:w-2/3">
					<TextInput
						name="search"
						className="w-full rounded-md"
						placeholder="Search posts..."
						aria-label="Search posts"
						onChange={(e) => setQueryText(e.target.value)}
					/>
					<IconSearch className="absolute right-4 top-2" />
				</div>
			</div>

			<div ref={animationParent}>
				{!filteredPosts.length && (
					<p>No posts were found with that search term.</p>
				)}
				{filteredPosts.map(({ post }) => (
					<Link
						href={"/blog/" + post.slug}
						key={post.slug}
						className="group relative mb-4 block overflow-hidden rounded-lg border border-zinc-200 drop-shadow dark:border-zinc-800 dark:bg-neutral-900/30"
						aria-label={post.title}
					>
						<Image
							alt={post.coverAlt}
							src={post.cover}
							fill
							className="absolute -z-10 object-cover brightness-50 transition group-hover:scale-105"
							placeholder="blur"
							blurDataURL={post.blurDataURL}
						/>

						<div className="flex flex-col justify-between gap-1 bg-gradient-to-b from-transparent to-zinc-950 p-4 text-white lg:flex-row">
							<div
								className="text-zinc-300 md:text-lg"
								style={{
									viewTransitionName: `${post.slug}-time`,
								}}
							>
								<time
									dateTime={post.date.toISOString()}
									className="whitespace-pre after:content-['_•_'] lg:after:content-['\A']"
								>
									{post.date.toLocaleDateString(undefined, {
										dateStyle: "long",
									})}
								</time>
								{post.readingTime} min read
							</div>
							<div className="w-full lg:w-2/3">
								<h1
									className="mb-1 text-xl font-bold md:text-2xl"
									style={{
										viewTransitionName: `${post.slug}-title`,
									}}
								>
									{post.title}
								</h1>
								<h2 className="text-lg text-zinc-300 md:text-xl">
									{post.summary}
								</h2>
							</div>
						</div>
					</Link>
				))}
			</div>
		</>
	);
}
