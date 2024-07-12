import clsx from "clsx";
import {
	IconMail,
	IconBrandGithub,
	IconBrandTwitter,
	IconBrandGithubFilled,
	IconBrandTwitterFilled,
	IconMailFilled,
} from "@tabler/icons-react";

const social = [
	{
		Icon: IconBrandTwitter,
		IconFilled: IconBrandTwitterFilled,
		label: "Visit Nick Oates on Twitter",
		href: "https://twitter.com/nickoates_",
		color: "text-blue-600 dark:text-blue-400",
	},
	{
		Icon: IconBrandGithub,
		IconFilled: IconBrandGithubFilled,
		label: "Visit Nick Oates on GitHub",
		href: "https://github.com/n1ckoates",
		color: "text-purple-600 dark:text-purple-400",
	},
	{
		Icon: IconMail,
		IconFilled: IconMailFilled,
		label: "Email Nick Oates",
		href: "mailto:nick@nickoates.com",
		color: "text-red-600 dark:text-red-400",
	},
];

export default function SocialIcons() {
	return social.map(({ href, Icon, IconFilled, label, color }) => (
		<a
			href={href}
			key={href}
			className="group relative h-11 w-11 rounded-md p-2 transition ease-in-out hover:bg-zinc-300/50 dark:hover:bg-zinc-700/50"
			title={label}
			target="_blank"
		>
			<Icon
				size={28}
				className="absolute transition ease-in-out group-hover:opacity-0"
			/>
			<IconFilled
				size={28}
				className={clsx(
					"absolute opacity-0 transition ease-in-out group-hover:opacity-100",
					color,
				)}
			/>
		</a>
	));
}
