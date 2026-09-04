import { Metadata } from "next";
import { origin } from "@/lib/origin";

const defaultDescription =
	"Software engineer at Vercel working on the AI SDK, open-source software, and thoughtful developer tools.";

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
		metadataBase: new URL(origin),
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
