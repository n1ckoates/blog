import Link from "next/link";
import ThemeSwitch from "./ThemeSwitch";
import SidebarLinks from "@/components/SidebarLinks";
import SocialIcons from "@/components/SocialIcons";

export default function Sidebar() {
	return (
		<nav className="z-50 hidden shrink-0 lg:block lg:w-72">
			<div className="sticky top-20 flex flex-col">
				<div className="flex flex-row items-center">
					<Link
						className="min-w-56 align-middle text-4xl font-bold transition-colors hover:text-zinc-600 dark:hover:text-zinc-400"
						href="/"
					>
						Nick Oates
					</Link>

					<ThemeSwitch />
				</div>

				<SidebarLinks />

				<div className="fixed bottom-20 flex w-72 flex-row justify-center gap-6">
					<SocialIcons />
				</div>
			</div>
		</nav>
	);
}
