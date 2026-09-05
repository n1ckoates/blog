import mergeMetadata from "@/lib/mergeMetadata";
import allPosts from "@/lib/posts";

import { BlogClient } from "./page-client";

export const metadata = mergeMetadata({ title: "Blog" });

export default function Blog() {
  // Remove unneeded fields from posts before sending them to the client
  const posts = allPosts.map((post) => ({
    blurDataURL: post.blurDataURL,
    cover: post.cover,
    coverAlt: post.coverAlt,
    date: post.date,
    readingTime: post.readingTime,
    slug: post._meta.path,
    summary: post.summary,
    title: post.title,
  }));

  return <BlogClient posts={posts} />;
}
