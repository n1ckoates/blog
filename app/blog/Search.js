"use client";

import { IconSearch } from "@tabler/icons-react";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import Fuse from "fuse.js";

export default function Search({ title, posts }) {
	const [searchTerm, setSearchTerm] = useState("");

	const fuse = new Fuse(posts, {
		keys: ["title", "summary", "formattedDate"],
		threshold: 0.4,
	});

	let filteredPosts = posts;
	if (searchTerm) {
		filteredPosts = fuse.search(searchTerm).map(({ item }) => item);
	}

	const [animationParent] = useAutoAnimate();

	return (
		<>
			<div className="mb-4 flex flex-col justify-between gap-2 lg:flex-row">
				<h2 className="text-3xl font-extrabold md:text-4xl">{title}</h2>

				<div className="relative w-full lg:w-2/3">
					<input
						type="text"
						name="search"
						className="w-full rounded-md border border-zinc-200 px-4 py-2 drop-shadow dark:border-zinc-800 dark:bg-zinc-900"
						placeholder="Search posts..."
						aria-label="Search posts"
						onChange={(e) => setSearchTerm(e.target.value)}
					/>
					<IconSearch className="absolute right-4 top-2" />
				</div>
			</div>

			<div ref={animationParent}>
				{!filteredPosts.length && (
					<p>No posts were found with that search term.</p>
				)}
				{filteredPosts.map((post) => (
					<Link
						href={post.url}
						key={post.url}
						className="group relative mb-4 block overflow-hidden rounded-lg border border-zinc-200 drop-shadow dark:border-zinc-800 dark:bg-neutral-900/30"
						aria-label={post.title}
					>
						<Image
							alt={post.coverAlt}
							src={post.cover}
							fill
							className="absolute -z-10 object-cover brightness-50 transition ease-in-out group-hover:scale-105"
							placeholder="blur"
							blurDataURL={post.blurDataURL}
						/>

						<div className="flex flex-col justify-between gap-1 bg-gradient-to-b from-transparent to-zinc-950 p-4 text-white ease-in-out lg:flex-row">
							<div className="text-zinc-300 md:text-lg ">
								<time
									dateTime={post.date}
									className="whitespace-pre after:content-['_•_'] lg:after:content-['\A']"
								>
									{post.formattedDate}
								</time>
								{post.readingTime} min read
							</div>
							<div className="w-full lg:w-2/3">
								<h1 className="mb-1 text-xl font-bold md:text-2xl">
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
