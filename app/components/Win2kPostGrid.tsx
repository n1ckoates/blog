import Link from "next/link";
import Image from "next/image";
import { ViewTransition } from "react";
import type { Post } from "@/lib/.content-collections/generated";

interface Win2kPostGridProps {
	posts: Post[];
}

export default function Win2kPostGrid({ posts }: Win2kPostGridProps) {
	return (
		<div
			style={{
				display: "grid",
				gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
				gap: "8px",
			}}
		>
			{posts.map((post) => (
				<Link
					key={post._meta.path}
					href={"/blog/" + post._meta.path}
					style={{ textDecoration: "none", display: "block" }}
					aria-label={post.title}
				>
					{/* Each post is a little Win2k file icon panel */}
					<div
						style={{
							background: "#d4d0c8",
							borderTop: "2px solid #ffffff",
							borderLeft: "2px solid #ffffff",
							borderRight: "2px solid #404040",
							borderBottom: "2px solid #404040",
							boxShadow: "inset 1px 1px 0 #dfdfdf, inset -1px -1px 0 #808080",
							overflow: "hidden",
							cursor: "default",
						}}
						className="group"
					>
						{/* Mini titlebar */}
						<div
							style={{
								background: "linear-gradient(to right, #0a246a, #a6caf0)",
								padding: "2px 4px",
								display: "flex",
								alignItems: "center",
								gap: "4px",
							}}
						>
							<span style={{ fontSize: "10px" }} aria-hidden>📄</span>
							<span
								style={{
									fontFamily: '"MS Sans Serif", Tahoma, Arial, sans-serif',
									fontSize: "10px",
									fontWeight: "bold",
									color: "#fff",
									overflow: "hidden",
									textOverflow: "ellipsis",
									whiteSpace: "nowrap",
								}}
							>
								{post._meta.path}.html
							</span>
						</div>

						{/* Image preview */}
						<div
							style={{
								position: "relative",
								height: "120px",
								background: "#000",
								borderBottom: "1px solid #808080",
							}}
						>
							<Image
								src={post.cover}
								alt={post.coverAlt}
								fill
								className="object-cover"
								sizes="(max-width: 768px) 100vw, 400px"
								placeholder="blur"
								blurDataURL={post.blurDataURL}
								style={{ filter: "saturate(0.9) contrast(1.05)" }}
							/>
						</div>

						{/* Post details */}
						<div
							style={{
								padding: "6px 8px",
								background: "#d4d0c8",
							}}
						>
							<ViewTransition name={`${post._meta.path}-grid-title`}>
								<p
									style={{
										fontFamily: '"MS Sans Serif", Tahoma, Arial, sans-serif',
										fontSize: "11px",
										fontWeight: "bold",
										color: "#000",
										marginBottom: "2px",
										lineHeight: "1.3",
									}}
								>
									{post.title}
								</p>
							</ViewTransition>
							<ViewTransition name={`${post._meta.path}-grid-time`}>
								<p
									style={{
										fontFamily: '"MS Sans Serif", Tahoma, Arial, sans-serif',
										fontSize: "10px",
										color: "#444",
									}}
								>
									{post.date.toLocaleDateString(undefined, { dateStyle: "medium" })} &bull; {post.readingTime} min
								</p>
							</ViewTransition>
							<div
								style={{
									marginTop: "6px",
									display: "inline-block",
									background: "#d4d0c8",
									borderTop: "2px solid #ffffff",
									borderLeft: "2px solid #ffffff",
									borderRight: "2px solid #404040",
									borderBottom: "2px solid #404040",
									boxShadow: "inset 1px 1px 0 #dfdfdf, inset -1px -1px 0 #808080",
									padding: "1px 8px",
									fontFamily: '"MS Sans Serif", Tahoma, Arial, sans-serif',
									fontSize: "11px",
									color: "#000",
								}}
							>
								Open
							</div>
						</div>
					</div>
				</Link>
			))}
		</div>
	);
}
