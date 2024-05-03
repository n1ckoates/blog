/** @type {import('next').NextConfig} */
const config = {
	images: {
		deviceSizes: [320, 448, 640, 768, 896],
	},
	transpilePackages: ["next-mdx-remote"],
};

export default config;
