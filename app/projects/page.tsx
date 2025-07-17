import { OrbContainer, Orb } from "@/components/Orb";
import getBlurDataURL from "@/lib/getBlurDataURL";
import mergeMetadata from "@/lib/mergeMetadata";
import { IconExternalLink } from "@tabler/icons-react";
import Image from "next/image";

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
		cover: "quoter.png",
		coverAlt: "Quoter's logo, a speech bubble with three dots inside.",
		noCrop: true,
		description:
			"Quote book for Discord servers, built with Discord.js, MongoDB, and Typescript. The bot allows users to add, remove, edit, and search for quotes. You can also add quotes from Discord messages, or generate images from them. I created the bot, which has grown to over 2,000 servers and 200,000+ users.",
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
			"The site you're on! I built my blog with Next.js, Tailwind CSS, Typescript, and MDX. Hosted on Vercel.",
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

			<h2 className="mb-4 text-3xl font-extrabold md:text-4xl">Projects</h2>

			<p className="mb-4 max-w-2xl text-lg md:text-xl">
				Here&apos;s a few of the projects I&apos;ve worked on. To see everything
				I&apos;ve contributed to, check out{" "}
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

async function ProjectCard([name, data]: [string, Project]) {
	return (
		<div
			className="flex flex-col overflow-hidden rounded-xl border border-zinc-200 bg-neutral-100/30 backdrop-blur-sm transition-transform hover:scale-[1.01] dark:border-zinc-800 dark:bg-neutral-900/30"
			key={name}
		>
			{data.cover && data.coverAlt && (
				<div className="relative h-48">
					<Image
						alt={data.coverAlt}
						src={"/images/projects/" + data.cover}
						fill
						className={data.noCrop ? "object-contain" : "object-cover"}
						sizes="(max-width:768px) 100vw, 470px"
						placeholder="blur"
						blurDataURL={await getBlurDataURL("/images/projects/" + data.cover)}
					/>
				</div>
			)}

			<h1 className="px-6 pt-6 text-2xl font-bold">{name}</h1>
			<p className="prose dark:prose-invert grow px-6">{data.description}</p>

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
