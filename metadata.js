import {
	IconMail,
	IconBrandGithub,
	IconBrandTwitter,
	IconNotebook,
	IconCode,
	IconHome,
} from "@tabler/icons-react";

export const name = "Nick Oates";

export const github = "https://github.com/n1ckoates";
export const blogSource = github + "/blog";

export const email = "nick@nickoates.com";

export const navLinks = [
	{ title: "Home", href: "/", Icon: IconHome },
	{ title: "Projects", href: "/projects", Icon: IconCode },
	{ title: "Blog", href: "/blog", Icon: IconNotebook },
];

export const social = [
	{
		Icon: IconBrandTwitter,
		label: `Visit ${name} on Twitter`,
		href: "https://twitter.com/nickoates_",
	},
	{
		Icon: IconBrandGithub,
		label: `Visit ${name} on GitHub`,
		href: github,
	},
	{
		Icon: IconMail,
		label: `Email ${name}`,
		href: `mailto:${email}`,
	},
];

export const projects = {
	Quoter: {
		cover: "/images/projects/quoter.png",
		coverAlt: "Quoter's logo.",
		noCrop: true,
		description:
			"Quote book for Discord servers. Built with Node.js, Discord.js, and MongoDB, the bot allows users to add, remove, edit, and search for quotes. You can also add quotes from Discord messages, or generate images from them.",
		links: {
			Website: "https://quoter.cc",
			"Source Code": github + "/quoter",
		},
	},
	"Steam Deck Emulation Guide": {
		cover: "/images/projects/steam-deck.jpg",
		coverAlt:
			"Close-up of the Steam Deck's front right side on a blue and purple background.",
		description:
			"A comprehensive guide to emulating video games on the Steam Deck. I wrote step-by-step instructions on how to install and configure a range of emulators, as well as how to add individual games to your Steam library for a streamlined gaming experience.",
		links: {
			"Visit Guide": github + "/steamdeck-emulation",
		},
	},
	"nickoates.com": {
		cover: "/images/projects/blog.png",
		coverAlt: "Home page of nickoates.com",
		description:
			"The site you're on! I built my blog with Next.js, Tailwind CSS, Contentlayer, and MDX. Hosted on Vercel.",
		links: {
			"Source Code": blogSource,
		},
	},
	"Peroxaan Website": {
		cover: "/images/projects/peroxaan.png",
		coverAlt: "Home page of Peroxaan.com",
		description:
			"I was commissioned to rebuild the website for Peroxaan, a small app development company. I unified the newsroom with the main website, improved SEO, and overhauled the design.",
		links: {
			Website: "https://peroxaan.com",
			"Source Code": "https://github.com/peroxaan/website",
		},
	},
	"talon.link": {
		description:
			"I rebuilt the backend for talon.link, a link shortening service for the Talon app. I moved the API to a serverless architecture (on Cloudflare Workers), greatly improving performance while reducing costs.",
		links: {
			"Learn more": "https://peroxaan.com/talon",
		},
	},
	Needle: {
		cover: "/images/projects/needle.jpg",
		coverAlt:
			"Discord screenshot showing automatic thread creation with Needle.",
		description:
			"Discord bot that creates threads automatically. I contributed by adding Docker support, implementing new features, and refactoring the codebase.",
		links: {
			Website: "https://needle.gg",
		},
	},
	"dylanmcd.com": {
		cover: "/images/projects/dylanmcd.png",
		coverAlt: "Home page of dylanmcd.com",
		description:
			"Dylan commissioned me to build his website based on a design he created. I used Astro and Tailwind CSS.",
		links: {
			Website: "https://dylanmcd.com",
		},
	},
};

function getURL() {
	if (process.env.NEXT_PUBLIC_URL) {
		return process.env.NEXT_PUBLIC_URL;
	}

	if (process.env.NEXT_PUBLIC_VERCEL_URL) {
		return `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`;
	}

	return "http://localhost:3000";
}

export const url = getURL();
