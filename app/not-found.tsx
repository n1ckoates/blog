"use client";

import Link from "next/link";
import { IconCat, IconHome, IconLoader2 } from "@tabler/icons-react";
import Image from "next/image";
import { useState } from "react";
import clsx from "clsx";

export const metadata = {
	title: "404: That page doesn't exist",
};

export default function NotFound() {
	const UNSPLASH_URL =
		"https://source.unsplash.com/collection/4870076/800x600?t=";

	const [src, setSrc] = useState(UNSPLASH_URL);
	const [loading, setLoading] = useState(true);

	function handleClick() {
		setLoading(true);

		setSrc(UNSPLASH_URL + Date.now()); // Force a new image to be loaded
	}

	return (
		<div className="text-lg md:text-xl">
			<h1 className="mb-2 bg-gradient-to-b from-red-600 to-red-700 bg-clip-text text-4xl font-extrabold text-transparent dark:from-red-400 dark:to-red-300 md:h-14 md:text-5xl">
				404: That page doesn&apos;t exist.
			</h1>
			<p>To make up for it, here&apos;s a picture of a cat.</p>

			<div className="relative mx-auto mt-6 w-fit overflow-hidden rounded-2xl border-zinc-400/50 bg-zinc-200 drop-shadow-sm dark:bg-zinc-800">
				{loading && (
					<IconLoader2
						className="absolute inset-0 m-auto animate-spin"
						size={48}
					/>
				)}

				<Image
					src={src}
					alt="A cat"
					className={clsx("relative z-10", {
						"opacity-0": loading && typeof window !== "undefined", // Don't hide image on server, allowing NoScript users to see it
					})}
					width={800}
					height={600}
					unoptimized
					onLoad={() => setLoading(false)}
				/>
			</div>

			<div className="mx-auto mt-4 flex w-full flex-row justify-center gap-4 md:w-fit">
				<button
					className="box-border flex grow cursor-default flex-row items-center justify-center gap-2 rounded-xl border-t border-white/30 bg-gradient-to-b from-zinc-200 to-zinc-400 px-4 py-2 font-semibold drop-shadow-sm active:opacity-70 enabled:hover:from-zinc-100 enabled:hover:to-zinc-300 disabled:opacity-70 dark:from-zinc-700 dark:to-zinc-900 dark:enabled:hover:from-zinc-600 dark:enabled:hover:to-zinc-800"
					onClick={handleClick}
					disabled={loading}
				>
					<IconCat />
					New Cat
				</button>
				<Link
					href={"/"}
					className="box-border flex grow cursor-default flex-row items-center justify-center gap-2 rounded-xl border-t border-white/30 bg-gradient-to-b from-blue-600 to-blue-800 px-4 py-2 font-semibold text-white drop-shadow-sm hover:from-blue-500 hover:to-blue-700 active:opacity-70 dark:from-blue-700 dark:to-blue-900 dark:hover:from-blue-600 dark:hover:to-blue-800"
				>
					<IconHome /> Home
				</Link>
			</div>
		</div>
	);
}
