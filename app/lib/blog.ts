import path from "path";
import fs from "fs/promises";
import sharp from "sharp";
import matter from "gray-matter";

export type BlogPost = {
	slug: string;
	title: string;
	date: Date;
	summary: string;
	cover: string;
	coverAlt: string;
	content: string;
	blurDataURL: string;
	readingTime: number;
};

let allPosts: BlogPost[] = []; // Cache posts
export async function getAllPosts(): Promise<BlogPost[]> {
	if (!allPosts.length) {
		const files = await fs.readdir(path.join(process.cwd(), "content"));
		const posts = await Promise.all(files.map(getPost));
		allPosts = posts.sort((a, b) => b.date.getTime() - a.date.getTime());
	}

	return allPosts;
}

async function getPost(file: string): Promise<BlogPost> {
	const { data, content } = matter.read(
		path.join(process.cwd(), "content", file),
	);

	return {
		slug: path.basename(file, ".mdx"),
		title: data.title,
		date: new Date(data.date),
		summary: data.summary,
		cover: data.cover,
		coverAlt: data.coverAlt,
		content,
		blurDataURL: await getBlurDataURL(data.cover),
		readingTime: getReadingTime(content),
	};
}

function getReadingTime(content: string) {
	const words = content.split(/\s+/g).length;
	const minutes = Math.ceil(words / 200); // 200 words per minute
	return minutes;
}

async function getBlurDataURL(filePath: string) {
	const fullPath = path.join(process.cwd(), "public", filePath);
	const image = await sharp(fullPath).resize(10).toBuffer();
	const base64 = image.toString("base64");
	return `data:image/png;base64,${base64}`;
}
