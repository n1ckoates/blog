import Link from "next/link";
import NewsletterForm from "@/components/NewsletterForm";
import allPosts from "@/lib/posts";
import Image from "next/image";
import { ViewTransition } from "react";
import Win2kWindow from "@/components/Win2kWindow";
import Win2kPostGrid from "@/components/Win2kPostGrid";

export default function Page() {
	return (
		<>
			<h1 className="sr-only">Nick Oates - Software Engineer</h1>

			{/* About window */}
			<Win2kWindow
				title="About Nick Oates"
				icon="👤"
				className="mb-3"
			>
				<ViewTransition name="about-lead">
					<p style={{ fontFamily: '"MS Sans Serif", Tahoma, Arial, sans-serif', fontSize: "11px", lineHeight: "1.5", color: "#000" }}>
						Hey, I&apos;m{" "}
						<strong style={{ color: "#0a246a" }}>Nick Oates</strong>, a software
						engineer with a passion for designing and building cool things on the
						web. I love obsessing over the small details of my work, and I&apos;m
						always looking for new things to learn and ways to improve my
						skills.{" "}
						<Link
							href="/about"
							className="whitespace-nowrap"
							style={{ color: "#0000ee", textDecoration: "underline" }}
						>
							Read more&hellip;
						</Link>
					</p>
				</ViewTransition>
			</Win2kWindow>

			{/* Blog Posts window */}
			<Win2kWindow
				title="Blog Posts"
				icon="📰"
				className="mb-3"
				headerAction={
					<Link
						href="/blog"
						style={{
							fontFamily: '"MS Sans Serif", Tahoma, Arial, sans-serif',
							fontSize: "11px",
							color: "#0000ee",
							textDecoration: "underline",
						}}
					>
						View All &rarr;
					</Link>
				}
			>
				<Win2kPostGrid posts={allPosts.slice(0, 2)} />
			</Win2kWindow>

			{/* Newsletter window */}
			<Win2kWindow
				title="Newsletter"
				icon="✉️"
			>
				<p style={{ fontFamily: '"MS Sans Serif", Tahoma, Arial, sans-serif', fontSize: "11px", marginBottom: "8px", color: "#000" }}>
					Occasionally, I send out a newsletter to share my thoughts about the
					latest tech news and other things I find interesting &mdash; I
					won&apos;t spam you, promise!
				</p>
				<NewsletterForm />
			</Win2kWindow>
		</>
	);
}
