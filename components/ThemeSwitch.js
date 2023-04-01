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
			className="noscript-hidden px-2 transition-colors hover:text-neutral-600 dark:hover:text-neutral-400 md:pr-0"
		>
			<Icon size={24} />
		</button>
	);
}
