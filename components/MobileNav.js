import { IconMenu, IconX } from "@tabler/icons-react";
import Link from "next/link";
import { useEffect } from "react";
import { navLinks } from "../metadata";

export default function MobileNav() {
	function handleLinkClick() {
		document.getElementById("nav").checked = false;
		document.body.style.overflow = "auto";
	}

	function handleStateChange(e) {
		if (e.target.checked) {
			document.body.style.overflow = "hidden";
			window.scrollTo(0, 0);
		} else {
			document.body.style.overflow = "auto";
		}
	}

	// Close mobile nav when window is resized to desktop
	useEffect(() => {
		function handleResize() {
			if (window.innerWidth >= 768) {
				document.getElementById("nav").checked = false;
				document.body.style.overflow = "auto";
			}
		}

		window.addEventListener("resize", handleResize);

		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<>
			<label htmlFor="nav" className="sr-only md:hidden">
				Toggle navigation
			</label>
			<input
				type="checkbox"
				id="nav"
				className="peer sr-only md:hidden"
				onChange={handleStateChange}
			/>

			<label
				htmlFor="nav"
				className="pl-2 transition-colors hover:cursor-pointer hover:text-neutral-600 peer-focus-visible:[outline:auto] dark:hover:text-neutral-400 md:hidden"
			>
				<IconMenu
					className="[#nav:checked_~_label_&]:hidden"
					size={24}
				/>
				<IconX
					className="hidden [#nav:checked_~_label_&]:block"
					size={24}
				/>
			</label>
			<div className="pointer-events-none fixed left-0 top-0 -z-10 h-full w-full bg-white/50 opacity-0 backdrop-blur-lg transition ease-in-out peer-checked:pointer-events-auto peer-checked:opacity-100 dark:bg-black/50 md:!hidden">
				<div className="flex flex-col divide-y divide-neutral-300 p-6 pt-20 text-2xl font-semibold dark:divide-neutral-700">
					{Object.entries(navLinks).map(([title, href]) => (
						<Link
							key={href}
							href={href}
							className="group -translate-x-80 py-4 duration-300 [#nav:checked_~_div_&]:translate-x-0 [#nav:checked_~_div_&]:transition [&:nth-child(2)]:delay-75 [&:nth-child(3)]:delay-150"
							onClick={handleLinkClick}
						>
							<div className="transition ease-in-out group-hover:text-neutral-600 dark:group-hover:text-neutral-400">
								{title}
							</div>
						</Link>
					))}
				</div>
			</div>
		</>
	);
}
