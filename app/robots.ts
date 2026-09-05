import type { MetadataRoute } from "next";

import { origin } from "@/lib/origin";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      allow: "/",
      userAgent: "*",
    },
    sitemap: `${origin}/sitemap.xml`,
  };
}
