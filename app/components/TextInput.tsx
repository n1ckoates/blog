import clsx from "clsx";

export default function TextInput(
	props: React.InputHTMLAttributes<HTMLInputElement>,
) {
	return (
		<input
			type="text"
			{...props}
			className={clsx(
				"box-border border border-zinc-300 bg-white/80 px-3 py-2 placeholder-zinc-500 shadow-xs transition hover:border-zinc-400 focus:border-blue-500 dark:border-zinc-700 dark:bg-zinc-900/80 dark:placeholder-zinc-500 dark:hover:border-zinc-600 dark:focus:border-blue-500",
				props.className,
			)}
		/>
	);
}
