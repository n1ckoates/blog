import { createContentCollectionPlugin } from "@content-collections/next";

const withContent = createContentCollectionPlugin({
	configPath: "./app/lib/content.ts",
});

export default withContent({
	images: {
		deviceSizes: [320, 448, 640, 768, 896],
	},
});
