"use client";

import Link from "next/link";
import ThemeSwitch from "./ThemeSwitch";
import { social, name, navLinks } from "../metadata.js";
import clsx from "clsx";
import { usePathname } from "next/navigation";

function SidebarLink({ title, href, Icon }) {
	let pathname = usePathname();
	if (pathname.startsWith("/blog")) pathname = "/blog";
	const active = pathname === href;

	return (
		<Link
			key={href}
			href={href}
			className="group w-56 py-1 text-2xl font-semibold"
		>
			<div
				className={clsx(
					"flex items-center gap-4 rounded-lg px-4 py-2 transition-colors ease-in-out",
					{
						"bg-slate-300/70 dark:bg-slate-700/70": active,
						"group-hover:bg-slate-300/50 dark:group-hover:bg-slate-700/50":
							!active,
					}
				)}
			>
				<Icon size={32} className="inline-block align-middle" />
				{title}
			</div>
		</Link>
	);
}

export default function Sidebar() {
	return (
		<nav className="z-50 hidden flex-shrink-0 lg:block lg:w-72">
			<div className="sticky top-20 flex flex-col">
				<div className="flex flex-row items-center">
					<Link
						className="w-56 align-middle text-4xl font-bold"
						href="/"
					>
						{name}
					</Link>

					<ThemeSwitch />
				</div>

				<div className="mt-4 flex flex-col">
					{navLinks.map((data) => (
						<SidebarLink {...data} key={data.href} />
					))}
				</div>

				<div className="fixed bottom-20 flex w-72 flex-row justify-center gap-6">
					{social.map(({ href, Icon, label }) => (
						<a
							href={href}
							key={href}
							className="rounded-md p-2 transition ease-in-out hover:bg-slate-300/50 dark:hover:bg-slate-700/50"
							title={label}
						>
							<Icon size={28} />
						</a>
					))}
				</div>
			</div>
		</nav>
	);
}
