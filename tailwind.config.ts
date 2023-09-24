import defaultTheme from "tailwindcss/defaultTheme";
import typography from "@tailwindcss/typography";

module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./app/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	plugins: [typography],
	darkMode: "class",
	future: {
		hoverOnlyWhenSupported: true,
	},
	theme: {
		extend: {
			fontFamily: {
				sans: [
					"var(--font-be-vietnam-pro)",
					...defaultTheme.fontFamily.sans,
				],
			},
		},
	},
};
