import Link from "next/link";
import Image from "next/image";
import Balancer from "react-wrap-balancer";

// TODO - Add via-black/70 once 2 blog posts have been published.
// TODO - Remove last: modifiers once 5 blog posts have been published.
// TODO - Add drop-shadow-lg to card when https://bugzilla.mozilla.org/show_bug.cgi?id=1801750 is fixed.
export default function PostCard({
	url,
	cover,
	coverAlt,
	formattedDate,
	readingTime,
	title,
}) {
	return (
		<Link
			href={url}
			className="group relative h-60 overflow-hidden rounded-xl text-white first:col-span-2 only:col-span-full max-md:last:even:col-span-full md:h-80 md:last:[&:nth-child(3)]:col-span-full last:[&:nth-child(4)]:col-span-2"
		>
			<Image
				src={cover}
				alt={coverAlt}
				fill
				className="object-cover transition ease-in-out group-hover:scale-105"
				sizes="(max-width: 896px) 100vw, 896px"
				priority
			/>

			<div className="absolute h-min w-full bg-gradient-to-b from-black/70 via-black/70 via-80% p-4 group-first:via-black/70">
				<div className="text-base drop-shadow-sm">
					{formattedDate} &bull; {readingTime} min read
				</div>

				<h1 className="max-w-lg text-2xl font-bold drop-shadow-sm md:group-first:text-3xl">
					<Balancer>{title}</Balancer>
				</h1>
			</div>

			<div className="absolute bottom-4 left-4 rounded-lg bg-slate-600/30 px-4 py-2 text-sm backdrop-blur transition hover:bg-slate-600/60 md:text-base">
				Read post
			</div>
		</Link>
	);
}
