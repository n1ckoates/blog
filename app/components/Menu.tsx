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
	const main = document && document.getElementById("main");

	if (open && main) {
		main.inert = true;
		document?.body.classList.add("overflow-hidden");
	} else if (main) {
		main.inert = false;
		document?.body.classList.remove("overflow-hidden");
	}

	useEffect(() => {
		function handleResize() {
			if (window.innerWidth >= 1024) {
				setOpen(false);
			}
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
				className="grid size-10 items-center justify-center gap-1.5 rounded-md p-4 transition-colors hover:bg-zinc-300/50 dark:hover:bg-zinc-700/50"
			>
				<span
					className={clsx(
						"h-0.5 w-4 rounded-full bg-black transition ease-in-out dark:bg-white",
						{ "translate-y-1 rotate-45 scale-125": open },
					)}
				/>
				<span
					className={clsx(
						"h-0.5 w-4 rounded-full bg-black transition ease-in-out dark:bg-white",
						{ "-translate-y-1 -rotate-45 scale-125": open },
					)}
				/>
			</button>

			<div
				className={clsx(
					"absolute left-0 top-0 -z-10 h-screen w-screen bg-white/50 backdrop-blur-lg transition ease-in-out dark:bg-black/50",
					{ "pointer-events-none opacity-0": !open },
				)}
			>
				<div className="flex flex-col divide-y divide-zinc-400/50 p-6 pt-16 text-2xl font-semibold dark:divide-zinc-600/50">
					{links.map(({ title, href }) => (
						<Link
							key={href}
							href={href}
							className="group py-4"
							onClick={() => setOpen(false)}
						>
							<div
								className={clsx({
									"transition ease-in-out group-[:nth-of-type(2)]:delay-100 group-[:nth-of-type(3)]:delay-200":
										open,
									"-translate-x-40": !open,
								})}
							>
								<span className="transition-colors ease-in-out group-hover:text-zinc-600 dark:group-hover:text-zinc-400">
									{title}
								</span>
							</div>
						</Link>
					))}
				</div>

				<div className="fixed bottom-32 flex w-full flex-row justify-center gap-8">
					<SocialIcons />
				</div>
			</div>
		</>
	);
}
