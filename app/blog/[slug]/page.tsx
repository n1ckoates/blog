import { notFound } from "next/navigation";

import { Prose } from "@/components/Prose";
import { CustomMDX } from "@/components/typography";
import mergeMetadata from "@/lib/mergeMetadata";

import "./code.css";
import allPosts from "@/lib/posts";

export const dynamicParams = false; // Blog posts are static, don't attempt to generate dynamic routes

interface Props { params: Promise<{ slug: string }> }

export default async function Post(props: Props) {
  const { slug } = await props.params;
  const post = allPosts.find((post) => post._meta.path === slug);
  if (!post) {notFound();}

  return (
    <Prose>
      <span>
        <time dateTime={post.date.toISOString()}>
          {post.date.toLocaleDateString(undefined, { dateStyle: "long" })}
        </time>{" "}
        &bull; {post.readingTime} min read
      </span>

      <h1>{post.title}</h1>

      <CustomMDX code={post.mdx} />
    </Prose>
  );
}

export function generateStaticParams() {
  return allPosts.map((post) => ({ slug: post._meta.path }));
}

export async function generateMetadata(props: Props) {
  const { slug } = await props.params;
  const post = allPosts.find((post) => post._meta.path === slug);

  if (!post) {return mergeMetadata();}

  return mergeMetadata({
    description: post.summary,
    image: post.cover,
    imageAlt: post.coverAlt,
    title: post.title,
  });
}
