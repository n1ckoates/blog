import { Metadata } from "next";

const defaultDescription = "I'm Nick Oates, a software engineer with a passion for designing and building cool things on the web. I love obsessing over the small details of my work, and I'm always looking for new things to learn and ways to improve my skills."

export default function mergeMetadata({
	title,
	description,
	image,
	imageAlt,
}: {
	title?: string;
	description?: string;
	image?: string;
	imageAlt?: string;
} = {}): Metadata {
	return {
		title: title ? `${title} • Nick Oates` : "Nick Oates — Software Engineer",
		openGraph: {
			siteName: "Nick Oates",
			title: title ?? "Nick Oates",
			description: description ?? defaultDescription,
			images: {
				url: image ?? "/images/card-image.png",
				alt:
					imageAlt ??
					"Text reading 'Nick Oates' on a blue to purple gradient background.",
			},
		},
		description: description ?? defaultDescription,
		twitter: {
			title: title ?? "Nick Oates",
			card: "summary_large_image",
			site: "@nickoates_",
		},
		alternates: {
			types: {
				"application/rss+xml": "/feed.xml",
			},
		},
	};
}
