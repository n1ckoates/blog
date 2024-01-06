import { social } from "@/lib/navData";
import clsx from "clsx";

export default function SocialIcons() {
	const iconColors = {
		blue: "hover:text-blue-600 dark:hover:text-blue-400",
		purple: "hover:text-purple-600 dark:hover:text-purple-400",
		red: "hover:text-red-600 dark:hover:text-red-400",
	};

	return social.map(({ href, Icon, IconFilled, label, color }) => (
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
	));
}
