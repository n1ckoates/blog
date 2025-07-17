import Link from "next/link";
import { IconArrowRight } from "@tabler/icons-react";
import NewsletterForm from "@/components/NewsletterForm";
import { OrbContainer, Orb } from "@/components/Orb";
import allPosts from "@/lib/posts";
import Image from "next/image";
import { Link as TransitionLink } from "next-view-transitions";

function S({ children }: { children: React.ReactNode }) {
	return (
		<strong className="bg-linear-to-r from-purple-500 to-blue-500 bg-clip-text font-semibold text-transparent print:text-inherit">
			{children}
		</strong>
	);
}

export default function Page() {
	return (
		<>
			<OrbContainer>
				<Orb className="right-0 bg-blue-400/30 dark:bg-blue-600/30" />
				<Orb className="top-28 right-36 bg-purple-400/30 dark:bg-purple-600/30" />
			</OrbContainer>

			<div className="max-w-3xl space-y-4 text-xl md:text-2xl">
				<p>
					<S>Hi! I'm Nick</S>, a web developer who enjoys designing and building
					cool things online.
				</p>
				<p>
					I&apos;m also a big fan of{" "}
					<a href="https://en.wikipedia.org/wiki/Internet_privacy">
						<S>internet privacy</S>
					</a>{" "}
					and{" "}
					<a href="https://en.wikipedia.org/wiki/Free_and_open-source_software">
						<S>open-source software</S>
					</a>
					, and I believe that those values are essential to a healthy web.
					Thanks for stopping by my website!
				</p>
			</div>

			<div className="my-4 flex items-center justify-between">
				<h2 className="text-2xl font-bold">Blog Posts</h2>

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
				<TransitionLink
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
						<p
							className="text-zinc-800 drop-shadow-xs dark:text-zinc-200"
							style={{
								viewTransitionName: `${post._meta.path}-time`,
							}}
						>
							{post.date.toLocaleDateString(undefined, {
								dateStyle: "long",
							})}{" "}
							&bull; {post.readingTime} min read
						</p>

						<h1
							className="max-w-lg text-2xl font-bold text-balance drop-shadow-xs md:group-first:text-3xl"
							style={{
								viewTransitionName: `${post._meta.path}-title`,
							}}
						>
							{post.title}
						</h1>
					</div>

					{/* This is a <div> instead of a <Link> because the card itself is a Link */}
					<div
						className="absolute bottom-4 left-4 rounded-lg bg-zinc-300/40 px-4 py-2 text-sm font-medium backdrop-blur-sm transition hover:bg-zinc-400/60 md:text-base dark:bg-zinc-700/40 dark:hover:bg-zinc-600/60"
						aria-hidden
					>
						Read post
					</div>
				</TransitionLink>
			))}
		</div>
	);
}
