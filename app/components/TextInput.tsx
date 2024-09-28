import clsx from "clsx";

export default function TextInput(
	props: React.InputHTMLAttributes<HTMLInputElement>,
) {
	return (
		<input
			{...props}
			type="text"
			className={clsx(
				"box-border border border-zinc-400/50 bg-white px-4 py-2 placeholder-zinc-500 drop-shadow-sm focus-within:outline-none hover:border-zinc-500/50 focus:border-blue-500 dark:border-zinc-600/50 dark:bg-zinc-900 dark:placeholder-zinc-500 dark:hover:border-zinc-500/50 dark:focus:border-blue-500",
				props.className,
			)}
		/>
	);
}
