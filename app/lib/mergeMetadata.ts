import { Metadata } from "next";

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
			description: description ?? "Web developer whose code sometimes works.",
			images: {
				url: image ?? "/images/card-image.png",
				alt:
					imageAlt ??
					"Text reading 'Nick Oates' on a blue to purple gradient background.",
			},
		},
		description: description ?? "Web developer whose code sometimes works.",
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
