import type { Metadata } from "next";

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
    alternates: {
      types: {
        "application/rss+xml": "/feed.xml",
      },
    },
    description: description ?? defaultDescription,
    metadataBase: new URL(origin),
    openGraph: {
      description: description ?? defaultDescription,
      images: {
        alt:
          imageAlt ??
          "Text reading 'Nick Oates' on a blue to purple gradient background.",
        url: image ?? "/images/card-image.png",
      },
      siteName: "Nick Oates",
      title: title ?? "Nick Oates",
    },
    title: title ? `${title} • Nick Oates` : "Nick Oates — Software Engineer",
    twitter: {
      card: "summary_large_image",
      site: "@nickoates_",
      title: title ?? "Nick Oates",
    },
  };
}
