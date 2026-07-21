"use client";

import { useEffect, useState } from "react";
import Menu from "./Menu";
import Link from "next/link";
import clsx from "clsx";

export default function Navbar() {
	const [open, setOpen] = useState(false);
	const [solid, setSolid] = useState(false);

	useEffect(() => {
		function handleScroll() {
			setSolid(window.scrollY >= 20);
		}

		handleScroll();
		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<nav
			className={clsx(
				"fixed top-0 left-0 z-50 flex w-full items-center justify-between px-5 py-3 before:absolute before:inset-0 before:-z-10 before:border-b before:bg-zinc-50/80 before:backdrop-blur-xl before:transition lg:hidden dark:before:bg-zinc-950/80",
				{
					"before:border-zinc-200/70 before:opacity-100 before:drop-shadow-lg dark:before:border-zinc-800/70":
						solid,
					"before:border-transparent before:opacity-0": !solid,
				},
			)}
		>
			<Link
				className="text-lg font-bold tracking-tight transition-colors hover:text-zinc-600 dark:hover:text-zinc-400"
				href="/"
			>
				Nick Oates
			</Link>

			<Menu open={open} setOpen={setOpen} />
		</nav>
	);
}
