"use client";

import { useEffect, useState } from "react";
import Menu from "./Menu";
import ThemeSwitch from "./ThemeSwitch";
import Link from "next/link";
import clsx from "clsx";

export default function Navbar() {
	const [open, setOpen] = useState(false);
	const [solid, setSolid] = useState(false);

	useEffect(() => {
		function handleScroll() {
			if (window.scrollY >= 20) {
				setSolid(true);
			} else {
				setSolid(false);
			}
		}

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	});

	return (
		<nav
			className={clsx(
				"fixed left-0 top-0 z-50 flex w-full items-center justify-between px-4 py-2 before:absolute before:left-0 before:-z-10 before:h-full before:w-full before:rounded-b-2xl before:border-b before:bg-zinc-50/70 before:backdrop-blur-lg before:transition dark:before:bg-zinc-950/70 lg:hidden",
				{
					"before:border-zinc-200/70 before:opacity-100 before:drop-shadow-lg dark:before:border-zinc-800/70":
						solid,
					"before:border-transparent before:opacity-0": !solid,
				},
			)}
		>
			<Menu open={open} setOpen={setOpen} />

			<Link
				className="text-3xl font-semibold transition-colors hover:text-zinc-600 dark:hover:text-zinc-400"
				href="/"
			>
				Nick Oates
			</Link>

			<ThemeSwitch />
		</nav>
	);
}
