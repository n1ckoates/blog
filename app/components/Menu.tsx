"use client";

import Link from "next/link";
import { useEffect } from "react";
import { links } from "@/lib/navData";
import clsx from "clsx";
import SocialIcons from "@/components/SocialIcons";

export default function Menu({
	open,
	setOpen,
}: {
	open: boolean;
	setOpen: (open: boolean) => void;
}) {
	useEffect(() => {
		const main = document.getElementById("main");
		main?.toggleAttribute("inert", open);
		document.body.classList.toggle("overflow-hidden", open);

		return () => {
			main?.removeAttribute("inert");
			document.body.classList.remove("overflow-hidden");
		};
	}, [open]);

	useEffect(() => {
		function handleResize() {
			if (window.innerWidth >= 1024) setOpen(false);
		}

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, [setOpen]);

	return (
		<>
			<button
				aria-label="Toggle navigation"
				aria-expanded={open}
				onClick={() => setOpen(!open)}
				className="grid size-8 items-center justify-center gap-1.5 rounded-md p-2 transition-colors hover:bg-zinc-200/70 dark:hover:bg-zinc-800/70"
				type="button"
			>
				<span
					className={clsx(
						"h-0.5 w-4 rounded-full bg-black transition dark:bg-white",
						{ "translate-y-1 scale-125 rotate-45": open },
					)}
				/>
				<span
					className={clsx(
						"h-0.5 w-4 rounded-full bg-black transition dark:bg-white",
						{ "-translate-y-1 scale-125 -rotate-45": open },
					)}
				/>
			</button>

			<div
				aria-hidden={!open}
				inert={!open}
				className={clsx(
					"absolute top-0 left-0 -z-10 h-dvh w-screen bg-zinc-50/90 backdrop-blur-xl transition dark:bg-zinc-950/90",
					{ "pointer-events-none opacity-0": !open },
				)}
			>
				<div className="flex flex-col divide-y divide-zinc-200 px-5 pt-20 text-lg font-medium dark:divide-zinc-800">
					{links.map(({ title, href }) => (
						<Link
							key={href}
							href={href}
							className="group py-3.5"
							onClick={() => setOpen(false)}
						>
							<div
								className={clsx({
									"transition group-nth-of-type-2:delay-100 group-nth-of-type-3:delay-175 group-nth-of-type-4:delay-225":
										open,
									"-translate-x-40": !open,
								})}
							>
								<span className="transition-colors group-hover:text-zinc-600 dark:group-hover:text-zinc-400">
									{title}
								</span>
							</div>
						</Link>
					))}
				</div>

				<div className="mx-5 mt-5 flex items-center justify-center gap-1 border-t border-zinc-200 pt-4 dark:border-zinc-800">
					<SocialIcons />
				</div>
			</div>
		</>
	);
}
