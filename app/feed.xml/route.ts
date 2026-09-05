import RSS from "rss";

import { origin } from "@/lib/origin";
import allPosts from "@/lib/posts";

export const dynamic = "force-static";

export function GET() {
  const feed = new RSS({
    categories: ["Blog", "Programming"],
    description: "Notes on software, the web, and things I'm learning.",
    feed_url: `${origin}/feed.xml`,
    image_url: `${origin}/favicon.ico`,
    language: "en",
    site_url: origin,
    title: "Nick Oates",
  });

  for (const post of allPosts) {
    feed.item({
      date: post.date,
      description: post.summary,
      guid: post._meta.path,
      title: post.title,
      url: `${origin}/blog/${post._meta.path}`,
    });
  }

  return new Response(feed.xml({ indent: true }), {
    headers: { "Content-Type": "application/xml" },
  });
}
