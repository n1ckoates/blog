import Link from "next/link";
import SidebarLinks from "@/components/SidebarLinks";
import SocialIcons from "@/components/SocialIcons";

export default function Sidebar() {
	return (
		<nav className="z-50 hidden lg:block">
			<div className="sticky top-14 flex flex-col">
				<p
					className="w-fit text-2xl font-bold tracking-tight"
				>
					Nick Oates
				</p>
				<p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
					Software Engineer
				</p>

				<SidebarLinks />

				<div className="mt-5 flex w-48 items-center justify-center border-t border-zinc-200 pt-4 dark:border-zinc-800">
					<SocialIcons />
				</div>
			</div>
		</nav>
	);
}
