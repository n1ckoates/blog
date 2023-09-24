"use client";

import { IconMenu, IconX } from "@tabler/icons-react";
import Link from "next/link";
import { useEffect } from "react";
import { links, social } from "../lib/navData";

export default function Menu() {
	function handleLinkClick() {
		const checkbox = document.getElementById("nav") as HTMLInputElement;
		checkbox.checked = false;
		document.body.style.overflow = "auto";
	}

	function handleStateChange(e: React.ChangeEvent<HTMLInputElement>) {
		if (e.target.checked) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}
	}

	// Close mobile nav when window is resized to desktop
	useEffect(() => {
		function handleResize() {
			if (window.innerWidth >= 1024) {
				const checkbox = document.getElementById(
					"nav",
				) as HTMLInputElement;
				checkbox.checked = false;
				document.body.style.overflow = "auto";
			}
		}

		window.addEventListener("resize", handleResize);

		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<>
			<label htmlFor="nav" className="sr-only lg:hidden">
				Toggle navigation
			</label>
			<input
				type="checkbox"
				id="nav"
				className="peer sr-only lg:hidden"
				onChange={handleStateChange}
			/>

			<label
				htmlFor="nav"
				className="flex items-center rounded-md p-2 transition-colors hover:cursor-pointer hover:bg-zinc-300/50 peer-focus-visible:[outline:auto] dark:hover:bg-zinc-700/50 lg:mx-auto lg:hidden"
			>
				<IconMenu
					className="[#nav:checked_~_label_&]:hidden"
					size={24}
				/>
				<IconX
					className="hidden [#nav:checked_~_label_&]:inline"
					size={24}
				/>
			</label>
			<div className="pointer-events-none absolute left-0 top-0 -z-10 h-screen w-screen bg-white/50 opacity-0 backdrop-blur-lg transition ease-in-out peer-checked:pointer-events-auto peer-checked:opacity-100 dark:bg-black/50 lg:!hidden">
				<div className="flex flex-col divide-y divide-zinc-400/50 p-6 pt-20 text-2xl font-semibold dark:divide-zinc-600/50">
					{links.map(({ title, href }) => (
						<Link
							key={href}
							href={href}
							className="group -translate-x-80 py-4 duration-300 [#nav:checked_~_div_&]:translate-x-0 [#nav:checked_~_div_&]:transition [&:nth-child(2)]:delay-75 [&:nth-child(3)]:delay-150"
							onClick={handleLinkClick}
						>
							<div className="transition ease-in-out group-hover:text-zinc-600 dark:group-hover:text-zinc-400">
								{title}
							</div>
						</Link>
					))}
				</div>

				<div className="fixed bottom-32 flex w-full flex-row justify-center gap-8">
					{social.map(({ href, Icon, label }) => (
						<a
							href={href}
							key={href}
							className="rounded-md p-2 transition ease-in-out hover:bg-zinc-300/50 dark:hover:bg-zinc-700/50"
							title={label}
						>
							<Icon size={28} />
						</a>
					))}
				</div>
			</div>
		</>
	);
}
