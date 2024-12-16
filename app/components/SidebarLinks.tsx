"use client";

import Link from "next/link";
import { links } from "@/lib/navData";
import clsx from "clsx";
import { usePathname } from "next/navigation";

export default function SidebarLinks() {
	let pathname = usePathname();
	if (pathname.startsWith("/blog")) pathname = "/blog";

	return (
		<div className="mt-4 flex flex-col">
			{links.map((link) => (
				<Link
					key={link.href}
					href={link.href}
					className="group w-56 py-1 text-2xl font-semibold"
				>
					<div
						className={clsx("flex items-center gap-4 rounded-lg px-4 py-2", {
							"text-zinc-700 hover:text-black group-hover:bg-zinc-200 dark:text-zinc-300 dark:hover:text-white dark:group-hover:bg-zinc-800":
								pathname !== link.href,
							"bg-zinc-200 dark:bg-zinc-800": pathname === link.href,
						})}
					>
						<link.Icon size={32} className="inline-block align-middle" />
						{link.title}
					</div>
				</Link>
			))}
		</div>
	);
}
