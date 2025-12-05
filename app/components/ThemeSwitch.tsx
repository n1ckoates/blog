"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { IconSunFilled, IconMoonFilled } from "@tabler/icons-react";

export default function ThemeSwitch() {
	const [mounted, setMounted] = useState(false);
	const { setTheme, resolvedTheme } = useTheme();

	// This is needed to avoid a hydration error
	// eslint-disable-next-line react-hooks/set-state-in-effect
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
			className="flex items-center rounded-md p-2 transition-colors hover:bg-zinc-300/50 dark:hover:bg-zinc-700/50"
			type="button"
		>
			<Icon size={24} />
		</button>
	);
}
