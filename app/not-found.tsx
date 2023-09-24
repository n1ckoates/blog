import Link from "next/link";
import { IconArrowRight, IconLoader2 } from "@tabler/icons-react";
import Image from "next/image";

export const metadata = {
	title: "404: That page doesn't exist",
};

export default function NotFound() {
	return (
		<div className="text-lg md:text-xl">
			<h1 className="mb-2 bg-gradient-to-b from-red-600 to-red-700 bg-clip-text text-4xl font-extrabold text-transparent dark:from-red-400 dark:to-red-300 md:h-14 md:text-5xl">
				404: That page doesn&apos;t exist.
			</h1>
			<p>To make up for it, here&apos;s a picture of a cat.</p>

			<div className="relative mx-auto mt-6 w-fit overflow-hidden rounded-md bg-zinc-200 shadow-md dark:bg-zinc-800">
				<IconLoader2
					className="absolute inset-0 m-auto animate-spin"
					size={48}
				/>

				<Image
					src="https://source.unsplash.com/collection/4870076/800x600"
					alt="A cat"
					className="relative z-10"
					width={800}
					height={600}
					unoptimized
				/>
			</div>

			<div className="mt-8 text-center">
				<Link
					href="/"
					className="rounded-md bg-blue-400 px-6 py-4 transition ease-in-out hover:bg-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700"
				>
					Go home <IconArrowRight className="inline-block" />
				</Link>
			</div>
		</div>
	);
}
