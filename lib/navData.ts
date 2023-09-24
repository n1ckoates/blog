import {
	IconMail,
	IconBrandGithub,
	IconBrandTwitter,
	IconNotebook,
	IconCode,
	IconHome,
} from "@tabler/icons-react";

export const links = [
	{ title: "Home", href: "/", Icon: IconHome },
	{ title: "Projects", href: "/projects", Icon: IconCode },
	{ title: "Blog", href: "/blog", Icon: IconNotebook },
];

export const social = [
	{
		Icon: IconBrandTwitter,
		label: `Visit Nick Oates on Twitter`,
		href: "https://twitter.com/nickoates_",
	},
	{
		Icon: IconBrandGithub,
		label: `Visit Nick Oates on GitHub`,
		href: "https://github.com/n1ckoates",
	},
	{
		Icon: IconMail,
		label: `Email Nick Oates`,
		href: "mailto:nick@nickoates.com",
	},
];
