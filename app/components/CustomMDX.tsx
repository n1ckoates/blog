import NewsletterForm from "@/components/NewsletterForm";
import { MDXContent } from "@content-collections/mdx/react";
import Image from "next/image";
import Link from "next/link";
import path from "path";
import React from "react";
import sharp from "sharp";
import { highlight } from "sugar-high";
import { Tweet } from "react-tweet";

async function CustomImage(props: any) {
	const sharpImage = sharp(path.join(process.cwd(), "public", props.src));
	const { width, height } = await sharpImage.metadata();

	const placeholder = await sharpImage.resize(10).toBuffer();
	const base64 = placeholder.toString("base64");
	const blurDataURL = `data:image/png;base64,${base64}`;

	return (
		// Alt text is passed in through props
		// eslint-disable-next-line jsx-a11y/alt-text
		<Image
			{...props}
			placeholder="blur"
			blurDataURL={blurDataURL}
			width={width}
			height={height}
			className="rounded-lg drop-shadow-sm"
			sizes="(max-width: 896px) 100vw, 896px"
		/>
	);
}

function CustomLink(props: any) {
	const href = props.href as string;

	if (href.startsWith("/")) {
		return <Link {...props} />;
	}

	if (href.startsWith("#")) {
		return <a {...props} />;
	}

	return <a target="_blank" {...props} />;
}

const CustomNewsletterForm = ({
	title = "Like what you're reading?",
}: {
	title?: string;
}) => (
	<div className="not-prose text-base text-black dark:text-white">
		<NewsletterForm title={title} />
	</div>
);

function CustomCode({ children, ...props }: any) {
	const html = highlight(children);
	return <code {...props} dangerouslySetInnerHTML={{ __html: html }} />;
}

function createHeadingComponent(level: number) {
	return function CustomHeading({
		children,
	}: React.HTMLAttributes<HTMLHeadingElement>) {
		const slug = (children || "")
			.toString()
			.toLowerCase()
			.trim() // remove leading/trailing whitespace
			.replace(/\s+/g, "-") // replace spaces with dashes
			.replace(/[^\w-]+/g, "") // remove all non-word chars
			.replace(/--+/g, "-"); // replace multiple dashes with single dash

		const Heading = `h${level}` as keyof React.JSX.IntrinsicElements;
		return (
			<Heading id={slug} className="relative w-fit">
				<a
					href={`#${slug}`}
					className="absolute ml-[-1em] h-full w-[calc(100%+1em)] no-underline before:inline-block before:scale-90 before:text-zinc-400 before:opacity-0 before:transition before:content-['#'] hover:before:scale-100 hover:before:opacity-100 before:dark:text-zinc-600"
					aria-hidden
				/>
				{children}
			</Heading>
		);
	};
}

function CustomTweet({ id }: { id: string }) {
	return (
		<div className="not-prose flex justify-center">
			<Tweet id={id} />
		</div>
	);
}

export default function CustomMDX({ code }: { code: string }) {
	return (
		<MDXContent
			code={code}
			components={{
				img: CustomImage,
				a: CustomLink,
				code: CustomCode,
				h1: createHeadingComponent(1),
				h2: createHeadingComponent(2),
				h3: createHeadingComponent(3),
				h4: createHeadingComponent(4),
				h5: createHeadingComponent(5),
				h6: createHeadingComponent(6),
				NewsletterForm: CustomNewsletterForm,
				Tweet: CustomTweet,
			}}
		/>
	);
}
