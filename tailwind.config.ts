import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
	content: ["./app/**/*.{js,ts,jsx,tsx}"],
	plugins: [typography],
	darkMode: "class",
	future: {
		hoverOnlyWhenSupported: true,
	},
};

export default config;
