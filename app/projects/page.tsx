import { OrbContainer, Orb } from "@/components/Orb";
import getBlurDataURL from "@/lib/getBlurDataURL";
import mergeMetadata from "@/lib/mergeMetadata";
import { IconExternalLink } from "@tabler/icons-react";
import Image from "next/image";
import clsx from "clsx";

export const metadata = mergeMetadata({
	title: "Projects",
	description: "A selection of projects I've designed and built.",
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
		cover: "quoter.png",
		coverAlt: "Quoter's logo, a speech bubble with three dots inside.",
		noCrop: true,
		description:
			"Quote book for Discord servers, built with Discord.js, MongoDB, and TypeScript. The bot allows users to add, remove, edit, and search for quotes. You can also add quotes from Discord messages, or generate images from them. I created the bot, which has grown to over 2,000 servers and 200,000+ users.",
		links: {
			Website: "https://quoter.cc",
			"Source Code": "https://github.com/quoter/quoter",
		},
	},

	"2txt": {
		cover: "2txt.webp",
		coverAlt: "Screenshot of 2txt: an area to drop an image file.",
		description:
			"Image to text converter, built with Anthropic Claude and the Vercel AI SDK. You can upload an image and get a description of it (for use as alt text), while extracting text from it.",
		links: {
			Website: "https://2txt.vercel.app",
			"Source Code": "https://github.com/ai-ng/2txt",
		},
	},

	Swift: {
		cover: "swift.webp",
		coverAlt: "A text input that says 'Ask me anything' with a submit button.",
		description:
			"Fast voice assistant built with Cartesia's Sonic model, with OpenAI Whisper and Meta Llama3 on Groq. Less than 1 second of latency between user and AI speech.",
		links: {
			Website: "https://swift-ai.vercel.app",
			"Source Code": "https://github.com/ai-ng/swift",
		},
	},

	"Ruby Website": {
		cover: "ruby.webp",
		coverAlt: "Screenshot of the Ruby website",
		description:
			"I designed and built the website for Ruby, a news app for Apple devices. It includes a marketing page and a blog. Built with Next.js, Tailwind CSS, and Content Collections.",
		links: {
			Website: "https://rubyapp.co",
			"Source Code": "https://github.com/getRubyApp/website",
		},
	},

	"nickoates.com": {
		cover: "blog.webp",
		coverAlt: "Home page of nickoates.com",
		description:
			"The site you're on! I built my blog with Next.js, Tailwind CSS, TypeScript, and MDX. Hosted on Vercel.",
		links: {
			"Source Code": "https://github.com/n1ckoates/blog",
		},
	},

	"Magic Spell": {
		cover: "magic-spell.png",
		coverAlt: "Screenshot of Magic Spell",
		description:
			"I built this demo of the Vercel AI SDK in collaboration with Guillermo Rauch at Vercel. It edits or writes text based on a prompt, using Groq for ultra-fast inference and streaming.",
		links: {
			Website: "https://magic-spell.vercel.app",
			"Source Code": "https://github.com/ai-ng/magic-spell",
		},
	},

	"talon.link": {
		description:
			"I rebuilt the backend for talon.link, a link shortening service for the Talon app. I moved the API to a serverless architecture (on Cloudflare Workers), greatly improving performance while reducing costs.",
		links: {
			Website: "https://talonapp.xyz",
		},
	},

	"dylanmcd.com": {
		cover: "dylanmcd.png",
		coverAlt: "Home page of dylanmcd.com",
		description:
			"Dylan commissioned me to build his website based on a design he created. I used Astro and Tailwind CSS.",
		links: {
			Website: "https://dylanmcd.com",
		},
	},
};

export default function Page() {
	return (
		<>
			<OrbContainer>
				<Orb className="-top-20 right-0 bg-fuchsia-400/30 dark:bg-fuchsia-600/30" />
				<Orb className="top-40 right-86 bg-cyan-400/30 dark:bg-cyan-600/30" />
			</OrbContainer>

			<h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
				Projects
			</h1>

			<p className="mt-3 mb-8 max-w-2xl text-base leading-7 text-zinc-600 dark:text-zinc-300">
				Here are a few projects I&apos;ve designed and built. To see everything
				I&apos;ve contributed to, check out{" "}
				<a
					href="https://github.com/n1ckoates"
					className="font-medium text-blue-600 underline decoration-blue-600/30 underline-offset-4 hover:decoration-blue-600 dark:text-blue-400 dark:decoration-blue-400/30 dark:hover:decoration-blue-400"
				>
					my GitHub profile
				</a>
				.
			</p>

			<div className="divide-y divide-zinc-200 overflow-hidden rounded-xl border border-zinc-200 bg-zinc-50/60 backdrop-blur-sm dark:divide-zinc-800 dark:border-zinc-800 dark:bg-zinc-950/50">
				{Object.entries(projects).map(ProjectCard)}
			</div>

			<OrbContainer>
				<Orb className="-top-52 left-52 bg-emerald-400/30 dark:bg-emerald-600/30" />
			</OrbContainer>
		</>
	);
}

async function ProjectCard([name, data]: [string, Project]) {
	return (
		<article
			className={clsx(
				"grid gap-5 p-4 transition-colors hover:bg-white/60 sm:p-5 dark:hover:bg-zinc-900/50",
				data.cover && "sm:grid-cols-[10rem_minmax(0,1fr)]",
			)}
			key={name}
		>
			{data.cover && data.coverAlt && (
				<div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900">
					<Image
						alt={data.coverAlt}
						src={"/images/projects/" + data.cover}
						fill
						className={data.noCrop ? "object-contain" : "object-cover"}
						sizes="(max-width:640px) 100vw, 160px"
						placeholder="blur"
						blurDataURL={await getBlurDataURL("/images/projects/" + data.cover)}
					/>
				</div>
			)}

			<div className="min-w-0">
				<div className="flex flex-wrap items-start justify-between gap-2">
					<h2 className="text-lg font-semibold tracking-tight">{name}</h2>

					{data.links && (
						<div className="flex flex-wrap gap-x-4 gap-y-1">
							{Object.entries(data.links).map(([title, href]) => (
								<a
									key={href}
									href={href}
									className="flex items-center gap-1 text-sm font-medium text-blue-600 hover:underline dark:text-blue-400"
									target="_blank"
								>
									{title} <IconExternalLink size={14} aria-hidden />
								</a>
							))}
						</div>
					)}
				</div>

				<p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
					{data.description}
				</p>
			</div>
		</article>
	);
}
