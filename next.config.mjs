/** @type {import('next').NextConfig} */
const config = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		deviceSizes: [320, 448, 640, 768, 896],
	},
	experimental: {
		optimizePackageImports: ["@tabler/icons-react"],
	},
};

export default config;
