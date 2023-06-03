import Image from "next/image";
import Balancer from "react-wrap-balancer";
import { useMDXComponent } from "next-contentlayer/hooks";
import { allPosts } from ".contentlayer/generated";
import NewsletterForm from "../../../components/NewsletterForm";
import generateRSS from "../../../rss";

const CustomImage = (props) => (
	// Alt text is passed in through props
	// eslint-disable-next-line jsx-a11y/alt-text
	<Image
		className="rounded-lg drop-shadow-lg"
		sizes="(max-width: 896px) 100vw, 896px"
		{...props}
	/>
);

const CustomNewsletterForm = (props) => (
	<div className="not-prose text-base text-black dark:text-white">
		<NewsletterForm title="Like what you're reading?" {...props} />
	</div>
);

export default function Post({ params }) {
	const post = allPosts.find(
		(post) => post._raw.flattenedPath === params.slug
	);
	const MDXContent = useMDXComponent(post.body.code);

	return (
		<article className="prose prose-lg prose-slate mx-auto dark:prose-invert md:prose-2xl prose-a:text-blue-500 prose-a:decoration-2 prose-a:transition-colors prose-a:ease-in-out hover:prose-a:text-blue-400 prose-pre:bg-slate-900 dark:hover:prose-a:text-blue-600">
			<div className="md:text-center">
				<time dateTime={post.date}>{post.formattedDate}</time> &bull;{" "}
				{post.readingTime} min read
				<h1>
					<Balancer>{post.title}</Balancer>
				</h1>
			</div>
			<MDXContent
				components={{
					NewsletterForm: CustomNewsletterForm,
					img: CustomImage,
				}}
			/>
		</article>
	);
}

export function generateStaticParams() {
	generateRSS();

	return allPosts.map((post) => ({
		slug: post.slug,
	}));
}

export function generateMetadata({ params }) {
	const post = allPosts.find(
		(post) => post._raw.flattenedPath === params.slug
	);

	return {
		title: post.title,
		description: post.summary,
		openGraph: {
			title: post.title,
			description: post.summary,
			images: [
				{
					url: process.env.NEXT_PUBLIC_URL + post.cover,
					alt: post.coverAlt,
				},
			],
		},
	};
}
