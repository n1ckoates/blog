"use client";

import Link from "next/link";
import { links } from "@/lib/navData";
import clsx from "clsx";
import { usePathname } from "next/navigation";

export default function SidebarLinks() {
	let pathname = usePathname();
	if (pathname.startsWith("/blog")) pathname = "/blog";

	return (
		<div className="mt-6 flex w-48 flex-col gap-1">
			{links.map((link) => (
				<Link
					key={link.href}
					href={link.href}
					className="group text-base font-medium"
				>
					<div
						className={clsx("flex items-center gap-3 rounded-md px-3 py-2", {
							"text-zinc-600 group-hover:bg-zinc-200/70 group-hover:text-zinc-950 dark:text-zinc-400 dark:group-hover:bg-zinc-800/70 dark:group-hover:text-zinc-50":
								pathname !== link.href,
							"bg-zinc-200 text-zinc-950 dark:bg-zinc-800 dark:text-zinc-50":
								pathname === link.href,
						})}
					>
						<link.Icon size={18} stroke={1.8} aria-hidden />
						{link.title}
					</div>
				</Link>
			))}
		</div>
	);
}
