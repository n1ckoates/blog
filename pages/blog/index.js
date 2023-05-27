import { IconSearch } from "@tabler/icons-react";
import Link from "next/link";
import { allPosts } from ".contentlayer/generated";
import { useState } from "react";
import clsx from "clsx";
import Image from "next/image";
import { useAutoAnimate } from "@formkit/auto-animate/react";

export default function Blog({ posts }) {
	const [searchTerm, setSearchTerm] = useState("");

	const filteredPosts = posts.filter((post) => {
		const searchContent = post.title + post.summary;
		return searchContent.toLowerCase().includes(searchTerm.toLowerCase());
	});

	const [animationParent] = useAutoAnimate();

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
			<div ref={animationParent}>
				{filteredPosts.map((post) => (
					<Link
						href={post.url}
						key={post.url}
						className="group relative mb-4 block overflow-hidden rounded-lg border border-slate-200 drop-shadow dark:border-slate-800 dark:bg-neutral-900/30"
						aria-label={post.title}
					>
						<Image
							alt={post.coverAlt}
							src={post.cover}
							fill
							className="absolute -z-10 object-cover brightness-50 transition ease-in-out group-hover:scale-105"
						/>

						<div className="flex flex-col justify-between gap-1 bg-gradient-to-b from-transparent to-slate-950 p-4 text-white transition-transform duration-300 ease-in-out lg:flex-row">
							<div className="text-slate-300 md:text-lg ">
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
								<h2 className="text-lg text-slate-300 md:text-xl">
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

export function getStaticProps() {
	const posts = allPosts
		.sort((a, b) => (a.date > b.date ? -1 : a.date < b.date ? 1 : 0))
		.map((post) => ({
			url: post.url,
			cover: post.cover,
			coverAlt: post.coverAlt,
			formattedDate: post.formattedDate,
			readingTime: post.readingTime,
			title: post.title,
			summary: post.summary,
		}));
	return {
		props: {
			posts,
			seo: {
				title: "Blog Posts",
			},
		},
	};
}
