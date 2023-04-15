import { name } from "../metadata";
import Menu from "./Menu";
import ThemeSwitch from "./ThemeSwitch";
import Link from "next/link";

export default function Navbar() {
	return (
		<nav className="fixed left-0 top-0 z-50 flex w-full items-center justify-between rounded-b-2xl bg-slate-50/70 px-6 py-4 backdrop-blur-lg ease-in-out dark:bg-slate-950/70 lg:hidden [&:has(#nav:checked)]:backdrop-filter-none [&:has(#nav:checked)]:transition">
			<Menu />

			<Link className="text-3xl font-semibold" href="/">
				{name}
			</Link>

			<ThemeSwitch />
		</nav>
	);
}
