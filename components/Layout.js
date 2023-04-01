import Link from "next/link";
import ThemeSwitch from "./ThemeSwitch.js";
import { social, blogSource, navLinks, name } from "../metadata.js";
import MobileNav from "./MobileNav.js";

export default function Layout({ children }) {
	return (
		<>
			<nav className="relative z-50 flex items-center justify-between py-8">
				<Link href="/">
					<h1 className="text-2xl font-bold transition-colors hover:text-neutral-600 dark:hover:text-neutral-400 max-[380px]:text-xl md:text-3xl">
						{name}
					</h1>
				</Link>
				<span className="hidden print:block">nchristopher.me</span>
				<div className="flex print:hidden">
					{Object.entries(navLinks).map(([title, href]) => (
						<Link
							key={href}
							href={href}
							className="hidden px-6 text-lg font-medium transition-colors hover:text-neutral-600 dark:hover:text-neutral-400 md:block md:text-xl"
						>
							{title}
						</Link>
					))}

					<ThemeSwitch />
					<MobileNav />
				</div>
			</nav>

			<main>{children}</main>

			<footer className="mt-16 flex items-center justify-between border-t-2 border-neutral-300 py-4 text-neutral-700 dark:border-neutral-700 dark:text-neutral-300">
				<a href={blogSource} className="">
					&copy; 2023 {name}
				</a>

				<div className="print:hidden">
					{social.map((item) => (
						<a
							href={item.href}
							key={item.href}
							className="inline-block px-2 transition-transform ease-in-out hover:scale-110"
						>
							<item.Icon aria-label={item.label} />
						</a>
					))}
				</div>
			</footer>
		</>
	);
}
