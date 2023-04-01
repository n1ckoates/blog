import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypeHighlight from "rehype-highlight";
import rehypeImgSize from "rehype-img-size";
import readingTime from "reading-time";
import smartypants from "remark-smartypants";

function getReadingTime(post) {
	const minutes = readingTime(post.body.raw).minutes;
	const rounded = Math.round(minutes);
	return rounded < 1 ? 1 : rounded;
}

export const Post = defineDocumentType(() => ({
	name: "Post",
	filePathPattern: `**/*.{md,mdx}`,
	contentType: "mdx",
	fields: {
		title: {
			type: "string",
			required: true,
		},
		date: {
			type: "string",
			required: true,
		},
		cover: {
			type: "string",
			required: true,
		},
		coverAlt: {
			type: "string",
			required: true,
		},
		coverCredit: {
			type: "string",
			required: false,
		},
		summary: {
			type: "string",
		},
		tags: {
			type: "list",
			of: { type: "string" },
		},
	},
	computedFields: {
		url: {
			type: "string",
			resolve: (post) => `/blog/${post._raw.flattenedPath}`,
		},
		readingTime: {
			type: "number",
			resolve: getReadingTime,
		},
		formattedDate: {
			type: "string",
			resolve: ({ date }) =>
				Intl.DateTimeFormat({}, { dateStyle: "long" }).format(
					new Date(date)
				),
		},
	},
}));

const settings = {
	rehypePlugins: [
		rehypeHighlight,
		[rehypeImgSize, { dir: `${process.cwd()}/public` }],
	],
	remarkPlugins: [[smartypants, { dashes: true }]],
};

export default makeSource({
	contentDirPath: "blog",
	documentTypes: [Post],
	mdx: settings,
	markdown: settings,
});
