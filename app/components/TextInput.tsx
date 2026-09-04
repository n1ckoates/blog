import clsx from "clsx";

export default function TextInput(
	props: React.InputHTMLAttributes<HTMLInputElement>,
) {
	return (
		<input
			type="text"
			{...props}
			className={clsx(
				"border-border-strong placeholder:text-muted-foreground hover:border-border-hover focus:border-ring box-border border bg-white/80 px-3 py-2 focus-visible:outline-none dark:bg-zinc-900/80",
				props.className,
			)}
		/>
	);
}
