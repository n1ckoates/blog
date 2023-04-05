import { IconSearch } from "@tabler/icons-react";
import Head from "next/head";
import Link from "next/link";
import { allPosts } from ".contentlayer/generated";
import { useState } from "react";
import clsx from "clsx";

export default function Blog({ posts }) {
	const [searchTerm, setSearchTerm] = useState("");
	const filteredPosts = posts.filter((post) => {
		const searchContent = post.title + post.summary;
		return searchContent.toLowerCase().includes(searchTerm.toLowerCase());
	});

	return (
		<>
			<div className="mb-4 flex flex-col justify-between gap-2 lg:flex-row">
				<h2 className="text-3xl font-extrabold md:text-4xl">
					Blog Posts
				</h2>

				<div className="relative w-full lg:w-2/3">
					<input
						type="text"
						name="search"
						className="w-full rounded-md border border-slate-200 px-4 py-2 drop-shadow dark:border-slate-800 dark:bg-slate-900"
						placeholder="Search posts..."
						aria-label="Search posts"
						onChange={(e) => setSearchTerm(e.target.value)}
					/>
					<IconSearch className="absolute right-4 top-2" />
				</div>
			</div>

			<p className={clsx({ hidden: filteredPosts.length })}>
				No posts were found with that search term.
			</p>
			{filteredPosts.map((post) => (
				<Link
					href={post.url}
					key={post._raw.flattenedPath}
					className="flex flex-col justify-between gap-1 py-4 transition-transform duration-300 ease-in-out hover:scale-105 lg:flex-row"
				>
					<div className="text-slate-600 dark:text-slate-400 md:text-lg ">
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
						<h2 className="text-lg text-slate-600 dark:text-slate-400 md:text-xl">
							{post.summary}
						</h2>
					</div>
				</Link>
			))}
		</>
	);
}

export function getStaticProps() {
	const posts = allPosts.sort((a, b) =>
		a.date > b.date ? -1 : a.date < b.date ? 1 : 0
	);
	return {
		props: {
			posts,
			seo: {
				title: "Blog Posts",
			},
		},
	};
}
