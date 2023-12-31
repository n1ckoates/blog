import Link from "next/link";
import ThemeSwitch from "./ThemeSwitch";
import { social } from "@/lib/navData";
import clsx from "clsx";
import SidebarLinks from "@/components/SidebarLinks";

export default function Sidebar() {
	const iconColors = {
		blue: "hover:text-blue-600 dark:hover:text-blue-400",
		purple: "hover:text-purple-600 dark:hover:text-purple-400",
		red: "hover:text-red-600 dark:hover:text-red-400",
	};

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
					{social.map(({ href, Icon, IconFilled, label, color }) => (
						<a
							href={href}
							key={href}
							className={clsx(
								"group relative h-11 w-11 rounded-md p-2 transition ease-in-out hover:bg-zinc-300/50 dark:hover:bg-zinc-700/50",
								iconColors[color],
							)}
							title={label}
							target="_blank"
						>
							<Icon
								size={28}
								className="absolute transition ease-in-out group-hover:opacity-0"
							/>
							<IconFilled
								size={28}
								className="absolute opacity-0 transition ease-in-out group-hover:opacity-100"
							/>
						</a>
					))}
				</div>
			</div>
		</nav>
	);
}
