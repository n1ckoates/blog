import { name, url } from "metadata";

export default function mergeMetadata({
	title,
	description,
	image,
	imageAlt,
} = {}) {
	/** @type {import('next').Metadata} */
	const metadata = {
		title: title ? `${title} • ${name}` : name,
		openGraph: {
			siteName: name,
			title: title ?? name,
			description:
				description ??
				"Aspiring web developer whose code sometimes works.",
			images: {
				url: image ?? "/images/card-image.png",
				alt:
					imageAlt ??
					"Text reading 'Nick Oates' on a blue to purple gradient background.",
			},
		},
		description:
			description ?? "Aspiring web developer whose code sometimes works.",
		themeColor: "#2563eb",
		twitter: {
			card: "summary_large_image",
			site: "@nickoates_",
		},
		metadataBase: url,
	};

	return metadata;
}
