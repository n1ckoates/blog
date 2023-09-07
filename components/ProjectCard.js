import Image from "next/image";
import { IconArrowUpRight } from "@tabler/icons-react";

export default function ProjectCard({
	cover,
	coverAlt,
	name,
	description,
	links,
	noCrop,
}) {
	return (
		<div className="flex flex-col overflow-hidden rounded-xl border border-zinc-200 bg-neutral-100/30 transition-transform ease-in-out hover:scale-[1.01] dark:border-zinc-800 dark:bg-neutral-900/30">
			{cover && (
				<div className="relative h-48">
					<Image
						alt={coverAlt}
						src={cover}
						fill
						className={noCrop ? "object-contain" : "object-cover"}
					/>
				</div>
			)}

			<h1 className="px-6 pt-6 text-2xl font-bold">{name}</h1>
			<p className="prose grow px-6 dark:prose-invert">{description}</p>

			{links && (
				<div className="mt-4 space-x-8 px-6 pb-6 font-bold text-blue-500">
					{Object.entries(links).map(([title, href]) => (
						<a
							key={href}
							href={href}
							className="group"
							target="_blank"
						>
							{title}{" "}
							<IconArrowUpRight className="inline-block transition ease-in-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
						</a>
					))}
				</div>
			)}
		</div>
	);
}
