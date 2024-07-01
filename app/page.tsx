import Link from "next/link";
import { IconArrowRight } from "@tabler/icons-react";
import NewsletterForm from "@/components/NewsletterForm";
import { OrbContainer, Orb } from "@/components/Orb";
import { allPosts } from "content-collections";
import Image from "next/image";
import Balancer from "react-wrap-balancer";

function S({ children }: { children: React.ReactNode }) {
	return (
		<strong className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text font-semibold text-transparent print:text-inherit">
			{children}
		</strong>
	);
}

export default async function Page() {
	return (
		<>
			<OrbContainer>
				<Orb className="right-0 bg-blue-400/30 dark:bg-blue-600/30" />
				<Orb className="right-36 top-28 bg-purple-400/30 dark:bg-purple-600/30" />
			</OrbContainer>

			<div className="max-w-3xl space-y-4 text-xl md:text-2xl">
				<p>
					<S>Hello! I&apos;m Nick</S>, an aspiring web developer whose
					code sometimes works. Right now, I&apos;m focused on
					mastering various web technologies, and I&apos;m excited to
					see where those skills can take me in the future!
				</p>
				<p>
					I enjoy designing and building cool things, and my best work
					is displayed over on{" "}
					<Link href="/projects">
						<S>my projects page</S>
					</Link>
					. If you&apos;d like to get in touch, email me at{" "}
					<a
						className="font-semibold"
						href="mailto:nick@nickoates.com"
					>
						nick@nickoates.com
					</a>
					.
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
					, and I believe that those values are essential to a healthy
					web. Thanks for stopping by my website!
				</p>
			</div>

			<div className="my-4 flex items-baseline justify-between">
				<h2 className="text-2xl font-bold">Blog Posts</h2>

				<Link
					href="/blog"
					className="group ml-8 transition-colors hover:text-zinc-600 dark:hover:text-zinc-400"
				>
					View All{" "}
					<IconArrowRight className="inline-block transition-transform ease-in-out group-hover:translate-x-0.5" />
				</Link>
			</div>

			<PostGrid />

			<OrbContainer>
				<Orb className="bg-emerald-400/30 dark:bg-emerald-600/30" />
				<Orb className="left-72 top-16 bg-cyan-400/30 dark:bg-cyan-600/30" />
			</OrbContainer>

			<h2 className="my-4 text-2xl font-bold">Newsletter</h2>
			<p className="mx-auto my-4 max-w-2xl text-xl">
				Occasionally, I send out a newsletter to share my thoughts about
				the latest tech news and other things I find interesting &mdash;
				I won&apos;t spam you, promise!
			</p>
			<NewsletterForm />
		</>
	);
}

async function PostGrid() {
	const posts = allPosts.slice(0, 2);

	return (
		<div className="mx-auto grid grid-cols-2 gap-4 md:grid-cols-3">
			{posts.map((post) => (
				<Link
					href={"/blog/" + post._meta.path}
					className="group relative h-60 overflow-hidden rounded-xl text-white first:col-span-2 only:col-span-full max-md:last:even:col-span-full md:h-80 md:last:[&:nth-child(3)]:col-span-full last:[&:nth-child(4)]:col-span-2"
					aria-label={post.title}
					key={post._meta.path}
				>
					<Image
						src={post.cover}
						alt={post.coverAlt}
						fill
						className="object-cover transition ease-in-out group-hover:scale-105"
						sizes="(max-width: 896px) 100vw, 896px"
						priority
						placeholder="blur"
						blurDataURL={post.blurDataURL}
					/>

					<div className="absolute h-min w-full bg-gradient-to-b from-black/70 via-black/70 via-80% p-4 group-first:via-black/70">
						<div className="text-base drop-shadow-sm">
							{post.date.toLocaleDateString(undefined, {
								dateStyle: "long",
							})}{" "}
							&bull; {post.readingTime} min read
						</div>

						<h1 className="max-w-lg text-2xl font-bold drop-shadow-sm md:group-first:text-3xl">
							<Balancer>{post.title}</Balancer>
						</h1>
					</div>

					{/* This is a <div> instead of a <Link> because the card itself is a Link */}
					<div
						className="absolute bottom-4 left-4 rounded-lg bg-zinc-600/30 px-4 py-2 text-sm font-semibold backdrop-blur transition hover:bg-zinc-600/60 md:text-base"
						aria-hidden
					>
						Read post
					</div>
				</Link>
			))}
		</div>
	);
}
