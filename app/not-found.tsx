import { IconLoader2 } from "@tabler/icons-react";
import Image from "next/image";
import { getCatPhoto } from "@/lib/unsplash";

export const revalidate = 3600;

export const metadata = {
	title: "404: That page doesn't exist",
};

export default async function NotFound() {
	const photo = await getCatPhoto();

	return (
		<div className="text-base leading-7">
			<h1 className="mb-3 bg-linear-to-b from-red-600 to-red-700 bg-clip-text text-2xl font-semibold tracking-tight text-transparent sm:text-3xl dark:from-red-300 dark:to-red-400">
				404: That page doesn&apos;t exist
			</h1>

			<p>
				To make up for it, here&apos;s a cat photo{" "}
				<span className="text-zinc-700 *:underline dark:text-zinc-300">
					(by <a href={photo.authorUrl}>{photo.author}</a> on{" "}
					<a href={photo.url}>Unsplash</a>)
				</span>
				.
			</p>

			<div className="relative mt-5 w-fit overflow-hidden rounded-xl border border-zinc-200 bg-zinc-200 dark:border-zinc-800 dark:bg-zinc-800">
				<IconLoader2
					className="absolute inset-0 m-auto animate-spin"
					size={32}
				/>

				<Image
					src={photo.src}
					alt="A cat"
					className="relative z-10"
					width={800}
					height={600}
					unoptimized
				/>
			</div>
		</div>
	);
}
