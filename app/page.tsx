import Link from "next/link";
import { IconArrowRight } from "@tabler/icons-react";
import NewsletterForm from "@/components/NewsletterForm";
import { OrbContainer, Orb } from "@/components/Orb";
import allPosts from "@/lib/posts";
import Image from "next/image";
import { S } from "@/components/typography";
import { Prose } from "@/components/Prose";
import { ViewTransition } from "react";

export default function Page() {
	return (
		<>
			<h1 className="sr-only">Nick Oates - Software Engineer</h1>

			<OrbContainer>
				<Orb className="right-0 bg-blue-400/30 dark:bg-blue-600/30" />
				<Orb className="top-28 right-36 bg-purple-400/30 dark:bg-purple-600/30" />
			</OrbContainer>

			<ViewTransition name="about-lead">
				<Prose as="p">
					Hey, I&apos;m <S>Nick Oates</S>, a software engineer with a passion for designing and building cool things on the web. I love obsessing over the small details of my work, and I&apos;m always looking for new things to learn and ways to improve my skills. <Link href="/about" className="whitespace-nowrap">Read more&hellip;</Link>
				</Prose>
			</ViewTransition>

			<div className="my-4 flex items-center justify-between">
				<ViewTransition name="blog-posts-header">
					<h2 className="text-2xl font-bold">Blog Posts</h2>
				</ViewTransition>

				<Link
					href="/blog"
					className="group flex items-center gap-1 text-zinc-700 transition-colors hover:text-zinc-600 dark:text-zinc-300 dark:hover:text-zinc-400"
				>
					View All
					<IconArrowRight
						size={20}
						className="transition-transform group-hover:translate-x-0.5"
					/>
				</Link>
			</div>

			<PostGrid />

			<OrbContainer>
				<Orb className="bg-emerald-400/30 dark:bg-emerald-600/30" />
				<Orb className="top-16 left-72 bg-cyan-400/30 dark:bg-cyan-600/30" />
			</OrbContainer>

			<h2 className="my-4 text-2xl font-bold">Newsletter</h2>
			<p className="mx-auto my-4 max-w-2xl text-xl">
				Occasionally, I send out a newsletter to share my thoughts about the
				latest tech news and other things I find interesting &mdash; I
				won&apos;t spam you, promise!
			</p>
			<NewsletterForm />
		</>
	);
}

function PostGrid() {
	const posts = allPosts.slice(0, 2);

	return (
		<div className="mx-auto grid grid-cols-2 gap-4 md:grid-cols-3">
			{posts.map((post) => (
				<Link
					href={"/blog/" + post._meta.path}
					className="group relative h-60 overflow-hidden rounded-xl first:col-span-2 only:col-span-full last:nth-4:col-span-2 max-md:last:even:col-span-full md:h-80 md:last:nth-3:col-span-full"
					aria-label={post.title}
					key={post._meta.path}
				>
					<Image
						src={post.cover}
						alt={post.coverAlt}
						fill
						className="object-cover transition group-hover:scale-105"
						sizes="(max-width: 896px) 100vw, 896px"
						priority
						placeholder="blur"
						blurDataURL={post.blurDataURL}
					/>


					<div className="absolute w-full bg-linear-to-b from-zinc-50/70 via-zinc-50/50 via-75% p-4 dark:from-zinc-950/70 dark:via-zinc-950/50">
						<ViewTransition name={`${post._meta.path}-grid-time`}>
							<p
								className="text-zinc-800 drop-shadow-xs dark:text-zinc-200"
							>
								{post.date.toLocaleDateString(undefined, {
									dateStyle: "long",
								})}{" "}
								&bull; {post.readingTime} min read
							</p>
						</ViewTransition>


						<ViewTransition name={`${post._meta.path}-grid-title`}>
							<h1
								className="max-w-lg text-2xl font-bold text-balance drop-shadow-xs md:group-first:text-3xl"
							>
								{post.title}
							</h1>
						</ViewTransition>
					</div>

					{/* This is a <div> instead of a <Link> because the card itself is a Link */}
					<div
						className="absolute bottom-4 left-4 rounded-lg bg-zinc-300/40 px-4 py-2 text-sm font-medium backdrop-blur-sm transition hover:bg-zinc-400/60 md:text-base dark:bg-zinc-700/40 dark:hover:bg-zinc-600/60"
						aria-hidden
					>
						Read post
					</div>
				</Link>
			))}
		</div>
	);
}
