import { allPosts } from ".contentlayer/generated";
import Link from "next/link";
import { IconArrowRight } from "@tabler/icons-react";
import PostCard from "../components/PostCard.js";
import NewsletterForm from "../components/NewsletterForm.js";
import { OrbContainer, Orb } from "../components/Orb.js";
import { email } from "../metadata.js";

function S({ children }) {
	return (
		<strong className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text font-semibold text-transparent print:text-inherit">
			{children}
		</strong>
	);
}

export default function Home({ posts }) {
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
					<a className="font-semibold" href={`mailto:${email}`}>
						{email}
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
					className="group ml-8 transition-colors hover:text-neutral-600 dark:hover:text-neutral-400"
				>
					View All{" "}
					<IconArrowRight className="inline-block transition-transform ease-in-out group-hover:translate-x-0.5" />
				</Link>
			</div>

			<div className="mx-auto mb-4 grid grid-cols-2 gap-4 md:grid-cols-3">
				{posts.map((post) => (
					<PostCard {...post} key={post.url} />
				))}
			</div>

			<OrbContainer>
				<Orb className="bg-emerald-400/30 dark:bg-emerald-600/30" />
				<Orb className="left-72 top-16 bg-cyan-400/30 dark:bg-cyan-600/30" />
			</OrbContainer>

			<h2 className="my-4 text-2xl font-bold">Newsletter</h2>
			<p className="my-4 mx-auto max-w-2xl text-xl">
				Occasionally, I send out a newsletter to share my thoughts about
				the latest tech news and other things I find interesting &mdash;
				I won&apos;t spam you, promise!
			</p>
			<NewsletterForm />
		</>
	);
}

export function getStaticProps() {
	return {
		props: {
			posts: allPosts
				.sort((a, b) =>
					a.date > b.date ? -1 : a.date < b.date ? 1 : 0
				)
				.slice(0, 5)
				// Only include fields needed for rendering PostCard on client
				.map((post) => ({
					url: post.url,
					cover: post.cover,
					coverAlt: post.coverAlt,
					formattedDate: post.formattedDate,
					readingTime: post.readingTime,
					title: post.title,
				})),
		},
	};
}
