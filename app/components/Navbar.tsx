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
				"fixed left-0 top-0 z-50 flex w-full items-center justify-between px-6 py-2 before:absolute before:left-0 before:-z-10 before:h-full before:w-full before:rounded-b-2xl before:bg-zinc-50/70 before:backdrop-blur-lg before:transition before:ease-in-out lg:hidden before:dark:bg-zinc-950/70",
				{ "before:opacity-100": solid, "before:opacity-0": !solid },
			)}
		>
			<Menu open={open} setOpen={setOpen} />

			<Link className="text-3xl font-semibold" href="/">
				Nick Oates
			</Link>

			<ThemeSwitch />
		</nav>
	);
}
