import Image from "next/image";
import Balancer from "react-wrap-balancer";
import { useMDXComponent } from "next-contentlayer/hooks";
import { allPosts } from ".contentlayer/generated";
import NewsletterForm from "components/NewsletterForm";
import generateRSS from "lib/rss";
import mergeMetadata from "lib/mergeMetadata";

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
		(post) => post._raw.flattenedPath === params.slug,
	);
	const MDXContent = useMDXComponent(post.body.code);

	return (
		<article className="prose prose-lg prose-zinc dark:prose-invert md:prose-xl prose-a:text-blue-500 prose-a:decoration-2 prose-a:transition-colors prose-a:ease-in-out hover:prose-a:text-blue-400 prose-pre:bg-zinc-900 dark:hover:prose-a:text-blue-600">
			<time dateTime={post.date}>{post.formattedDate}</time> &bull;{" "}
			{post.readingTime} min read
			<h1>
				<Balancer>{post.title}</Balancer>
			</h1>
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
		(post) => post._raw.flattenedPath === params.slug,
	);

	return mergeMetadata({
		title: post.title,
		description: post.summary,
		image: post.cover,
		imageAlt: post.coverAlt,
	});
}
