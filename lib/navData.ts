import {
	IconMail,
	IconBrandGithub,
	IconNotebook,
	IconCode,
	IconHome,
	IconCloud,
	IconCloudFilled,
	IconBrandGithubFilled,
	IconMailFilled,
	TablerIconsProps,
} from "@tabler/icons-react";

export const links = [
	{ title: "Home", href: "/", Icon: IconHome },
	{ title: "Projects", href: "/projects", Icon: IconCode },
	{ title: "Blog", href: "/blog", Icon: IconNotebook },
];

interface SocialLink {
	Icon: (props: TablerIconsProps) => JSX.Element;
	IconFilled: (props: TablerIconsProps) => JSX.Element;
	label: string;
	href: string;
}

export const social: SocialLink[] = [
	{
		Icon: IconCloud,
		IconFilled: IconCloudFilled,
		label: "Visit Nick Oates on Bluesky",
		href: "https://bsky.app/profile/nickoates.com",
	},
	{
		Icon: IconBrandGithub,
		IconFilled: IconBrandGithubFilled,
		label: "Visit Nick Oates on GitHub",
		href: "https://github.com/n1ckoates",
	},
	{
		Icon: IconMail,
		IconFilled: IconMailFilled,
		label: "Email Nick Oates",
		href: "mailto:nick@nickoates.com",
	},
];
