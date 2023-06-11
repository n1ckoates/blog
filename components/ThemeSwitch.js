"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { IconSunFilled, IconMoonFilled } from "@tabler/icons-react";

export default function ThemeSwitch() {
	const [mounted, setMounted] = useState(false);
	const { setTheme, resolvedTheme } = useTheme();

	useEffect(() => setMounted(true), []);

	const toggleTheme = () => {
		setTheme(resolvedTheme === "dark" ? "light" : "dark");
	};
	const Icon =
		mounted && resolvedTheme === "dark" ? IconSunFilled : IconMoonFilled;

	return (
		<button
			aria-label="Switch themes"
			onClick={toggleTheme}
			className="noscript-hidden flex items-center rounded-md p-2 transition-colors hover:bg-slate-300/50 dark:hover:bg-slate-700/50"
		>
			<Icon size={24} />
		</button>
	);
}
