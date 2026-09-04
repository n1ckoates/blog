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
			<h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
				Projects
			</h1>

			<p className="text-subtle-foreground mt-3 mb-8 max-w-2xl text-base leading-7">
				Here are a few projects I&apos;ve designed and built. To see everything
				I&apos;ve contributed to, check out{" "}
				<a
					href="https://github.com/n1ckoates"
					className="text-primary decoration-primary/30 hover:decoration-primary font-medium underline underline-offset-4"
				>
					my GitHub profile
				</a>
				.
			</p>

			<div className="divide-border border-border bg-surface divide-y overflow-hidden rounded-xl border backdrop-blur-sm">
				{Object.entries(projects).map(ProjectCard)}
			</div>
		</>
	);
}

async function ProjectCard([name, data]: [string, Project]) {
	return (
		<article
			className={clsx(
				"grid gap-5 p-4 sm:p-5",
				data.cover && "sm:grid-cols-[10rem_minmax(0,1fr)]",
			)}
			key={name}
		>
			{data.cover && data.coverAlt && (
				<div className="border-border bg-muted relative aspect-[4/3] overflow-hidden rounded-lg border">
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
									className="text-primary flex items-center gap-1 text-sm font-medium hover:underline"
									target="_blank"
								>
									{title} <IconExternalLink size={14} aria-hidden />
								</a>
							))}
						</div>
					)}
				</div>

				<p className="text-subtle-foreground mt-2 text-sm leading-6">
					{data.description}
				</p>
			</div>
		</article>
	);
}
