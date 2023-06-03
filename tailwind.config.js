const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./app/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	plugins: [require("@tailwindcss/typography")],
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
