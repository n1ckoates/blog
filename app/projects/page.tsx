import { OrbContainer, Orb } from "@/components/Orb";
import mergeMetadata from "@/lib/mergeMetadata";
import { IconExternalLink } from "@tabler/icons-react";
import Image from "next/image";
import sharp from "sharp";

export const metadata = mergeMetadata({
	title: "Projects",
	description: "Here's a few of the projects I've worked on.",
});

interface Project {
	cover?: string;
	coverAlt?: string;
	noCrop?: boolean;
	description: string;
	links?: Record<string, string>;
}

const projects: Record<string, Project> = {
	Quoter: {
		cover: "/images/projects/quoter.png",
		coverAlt: "Quoter's logo, a speech bubble with three dots inside.",
		noCrop: true,
		description:
			"Quote book for Discord servers, Built with Discord.js, MongoDB, and Typescript. The bot allows users to add, remove, edit, and search for quotes. You can also add quotes from Discord messages, or generate images from them. I created the bot, which has grown to over 1,600 servers and 190,000+ users.",
		links: {
			Website: "https://quoter.cc",
			"Source Code": "https://github.com/quoter/quoter",
		},
	},

	"Steam Deck Emulation Guide": {
		cover: "/images/projects/steam-deck.jpg",
		coverAlt:
			"Close-up of the Steam Deck's front right side on a blue and purple background.",
		description:
			"A comprehensive guide to emulating video games on the Steam Deck. I wrote step-by-step instructions on how to install and configure a range of emulators, as well as how to add individual games to your Steam library for a streamlined gaming experience.",
		links: {
			"Visit Guide": "https://github.com/n1ckoates/steamdeck-emulation",
		},
	},

	"nickoates.com": {
		cover: "/images/projects/blog.png",
		coverAlt: "Home page of nickoates.com",
		description:
			"The site you're on! I built my blog with Next.js, Tailwind CSS, Typescript, and MDX. Hosted on Vercel.",
		links: {
			"Source Code": "https://github.com/n1ckoates/blog",
		},
	},

	"Peroxaan Website": {
		cover: "/images/projects/peroxaan.png",
		coverAlt: "Home page of Peroxaan.com",
		description:
			"I was commissioned to rebuild the website for Peroxaan, a small app development company. I unified the newsroom with the main website, improved SEO, and overhauled the design.",
		links: {
			Website: "https://archive.peroxaan.com",
			"Source Code": "https://github.com/peroxaan/website",
		},
	},

	"talon.link": {
		description:
			"I rebuilt the backend for talon.link, a link shortening service for the Talon app. I moved the API to a serverless architecture (on Cloudflare Workers), greatly improving performance while reducing costs.",
		links: {
			Website: "https://talonapp.xyz",
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

	"Magic Spell": {
		cover: "/images/projects/magic-spell.png",
		coverAlt: "Screenshot of Magic Spell",
		description:
			"I built this demo of the Vercel AI SDK in collaboration with Guillermo Rauch at Vercel. It edits or writes text based on a prompt, using Groq for ultra-fast inference and streaming.",
		links: {
			Website: "https://magic-spell.vercel.app",
			"Source Code": "https://github.com/ai-ng/magic-spell",
		},
	},
};

export default function Page() {
	return (
		<>
			<OrbContainer>
				<Orb className="-top-20 right-0 bg-fuchsia-400/30 dark:bg-fuchsia-600/30" />
				<Orb className="right-86 top-40 bg-cyan-400/30 dark:bg-cyan-600/30" />
			</OrbContainer>

			<h2 className="mb-4 text-3xl font-extrabold md:text-4xl">
				Projects
			</h2>

			<p className="mb-4 max-w-2xl text-lg md:text-xl">
				Here&apos;s a few of the projects I&apos;ve worked on. To see
				everything I&apos;ve contributed to, check out{" "}
				<a
					href="https://github.com/n1ckoates"
					className="font-semibold text-blue-600 hover:underline dark:text-blue-400"
				>
					my GitHub profile
				</a>
				.
			</p>

			<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
				{Object.entries(projects).map(ProjectCard)}
			</div>

			<OrbContainer>
				<Orb className="-top-52 left-52 bg-emerald-400/30 dark:bg-emerald-600/30" />
			</OrbContainer>
		</>
	);
}

function ProjectCard([name, data]: [string, Project]) {
	return (
		<div
			className="flex flex-col overflow-hidden rounded-xl border border-zinc-200 bg-neutral-100/30 transition-transform ease-in-out hover:scale-[1.01] dark:border-zinc-800 dark:bg-neutral-900/30"
			key={name}
		>
			{data.cover && data.coverAlt && (
				<div className="relative h-48">
					<Image
						alt={data.coverAlt}
						src={data.cover}
						fill
						className={
							data.noCrop ? "object-contain" : "object-cover"
						}
						sizes="(max-width:768px) 100vw, 470px"
					/>
				</div>
			)}

			<h1 className="px-6 pt-6 text-2xl font-bold">{name}</h1>
			<p className="prose grow px-6 dark:prose-invert">
				{data.description}
			</p>

			{data.links && (
				<div className="mt-4 flex flex-row gap-8 px-6 pb-6">
					{Object.entries(data.links).map(([title, href]) => (
						<a
							key={href}
							href={href}
							className="flex flex-row items-center gap-1 font-semibold text-blue-600 hover:underline dark:text-blue-400"
							target="_blank"
						>
							{title} <IconExternalLink size={20} />
						</a>
					))}
				</div>
			)}
		</div>
	);
}
