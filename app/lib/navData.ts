import {
	IconMail,
	IconBrandGithub,
	IconBrandTwitter,
	IconNotebook,
	IconCode,
	IconHome,
	IconBrandGithubFilled,
	IconBrandTwitterFilled,
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
	color: "blue" | "purple" | "red";
}

export const social: SocialLink[] = [
	{
		Icon: IconBrandTwitter,
		IconFilled: IconBrandTwitterFilled,
		label: "Visit Nick Oates on Twitter",
		href: "https://twitter.com/nickoates_",
		color: "blue",
	},
	{
		Icon: IconBrandGithub,
		IconFilled: IconBrandGithubFilled,
		label: "Visit Nick Oates on GitHub",
		href: "https://github.com/n1ckoates",
		color: "purple",
	},
	{
		Icon: IconMail,
		IconFilled: IconMailFilled,
		label: "Email Nick Oates",
		href: "mailto:nick@nickoates.com",
		color: "red",
	},
];
