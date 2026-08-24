import Link from "next/link";
import { IconArrowRight } from "@tabler/icons-react";
import { OrbContainer, Orb } from "@/components/Orb";
import allPosts from "@/lib/posts";
import Image from "next/image";
import clsx from "clsx";

export default function Page() {
	return (
		<>
			<h1 className="sr-only">Nick Oates - Software Engineer</h1>

			<OrbContainer>
				<Orb className="right-0 bg-blue-400/30 dark:bg-blue-600/30" />
				<Orb className="top-28 right-36 bg-purple-400/30 dark:bg-purple-600/30" />
			</OrbContainer>

			<section className="max-w-3xl" aria-labelledby="intro-heading">
				<h2
					id="intro-heading"
					className="max-w-2xl text-2xl leading-tight font-semibold tracking-tight text-balance sm:text-3xl"
				>
					Software engineer at Vercel, working on the AI SDK.
				</h2>
				<div className="text-subtle-foreground mt-5 max-w-2xl space-y-3 text-base leading-7">
					<p>
						I care about thoughtful developer tools, open-source software, and
						the small details that make technology feel good to use.
					</p>
					<p>
						I recently graduated from Benson Polytechnic High School, where I
						studied radio broadcasting, helped start a student newspaper, and
						learned that you can just do things.{" "}
						<Link
							href="/about"
							className="text-primary decoration-primary/30 hover:decoration-primary font-medium underline underline-offset-4 transition"
						>
							More about me
						</Link>
					</p>
				</div>
			</section>

			<div className="border-border mt-12 mb-4 flex items-end justify-between border-b pb-3">
				<h2 className="text-xl font-semibold tracking-tight">Recent writing</h2>

				<Link
					href="/blog"
					className="text-muted-foreground hover:text-foreground group flex items-center gap-1 text-sm font-medium transition-colors"
				>
					View all
					<IconArrowRight
						size={16}
						className="transition-transform group-hover:translate-x-0.5"
					/>
				</Link>
			</div>

			<PostGrid />
		</>
	);
}

function PostGrid() {
	const posts = allPosts.slice(0, 4);

	return (
		<div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
			{posts.map((post, index) => (
				<Link
					href={"/blog/" + post._meta.path}
					className={clsx(
						"group bg-secondary relative min-h-52 overflow-hidden rounded-xl after:pointer-events-none after:absolute after:inset-0 after:z-10 after:rounded-xl after:ring-1 after:ring-white/15 after:ring-inset sm:min-h-56",
						(index === 0 || index === 3) && "md:col-span-2",
					)}
					aria-label={post.title}
					key={post._meta.path}
				>
					<Image
						src={post.cover}
						alt={post.coverAlt}
						fill
						className="object-cover transition duration-250 group-hover:scale-[1.05]"
						sizes="(max-width: 640px) 100vw, (max-width: 896px) 50vw, 600px"
						priority={index < 2}
						placeholder="blur"
						blurDataURL={post.blurDataURL}
					/>
					<div className="absolute inset-0 bg-linear-to-t from-zinc-950/95 via-zinc-950/25 to-transparent" />

					<div className="absolute inset-x-0 bottom-0 p-4 text-white sm:p-5">
						<p className="mb-1.5 text-xs font-medium text-zinc-300">
							{post.date.toLocaleDateString(undefined, {
								month: "short",
								day: "numeric",
								year: "numeric",
							})}{" "}
							&bull; {post.readingTime} min read
						</p>
						<h3 className="max-w-lg text-lg leading-snug font-semibold text-balance sm:text-xl">
							{post.title}
						</h3>
					</div>
				</Link>
			))}
		</div>
	);
}
