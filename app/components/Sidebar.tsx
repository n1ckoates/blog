import Link from "next/link";
import ThemeSwitch from "./ThemeSwitch";
import SidebarLinks from "@/components/SidebarLinks";
import SocialIcons from "@/components/SocialIcons";

export default function Sidebar() {
	return (
		<nav className="z-50 hidden flex-shrink-0 lg:block lg:w-72">
			<div className="sticky top-20 flex flex-col">
				<div className="flex flex-row items-center">
					<Link
						className="min-w-[14rem] align-middle text-4xl font-bold"
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
