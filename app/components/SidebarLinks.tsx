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
							"text-muted-foreground group-hover:bg-secondary/70 group-hover:text-foreground":
								pathname !== link.href,
							"bg-secondary text-foreground": pathname === link.href,
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
