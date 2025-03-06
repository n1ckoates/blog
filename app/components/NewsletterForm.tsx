"use client";

import { IconLoader2, IconMail } from "@tabler/icons-react";
import clsx from "clsx";
import { subscribe, type State } from "@/lib/actions";
import { useActionState } from "react";
import TextInput from "@/components/TextInput";

export default function NewsletterForm({
	title = "Subscribe to my newsletter",
}: {
	title?: string;
}) {
	const [{ message, status }, formAction, isPending] = useActionState<
		State,
		FormData
	>(subscribe, {
		status: "idle",
		message: title,
	});

	const icon = isPending ? (
		<IconLoader2 className="animate-spin" />
	) : (
		<IconMail />
	);

	return (
		<div className="mx-auto max-w-lg rounded-3xl border border-zinc-400/50 bg-neutral-100/50 p-4 backdrop-blur-sm dark:border-zinc-600/50 dark:bg-neutral-900/50 md:text-lg print:hidden">
			<span
				className={clsx(
					{
						"text-red-600 dark:text-red-400": status === "error",
					},
					"font-semibold",
				)}
			>
				{message}
			</span>

			<form
				className={clsx("mt-2 flex w-full flex-wrap justify-between gap-2", {
					hidden: status === "success",
				})}
				action={formAction}
			>
				<TextInput
					className="grow rounded-xl"
					type="email"
					id="email"
					name="email"
					placeholder="Enter your email..."
					required
					aria-label="Email address"
					autoComplete="email"
				/>

				<button
					className="box-border flex grow cursor-default flex-row items-center justify-center gap-2 rounded-xl border-t border-white/30 bg-linear-to-b from-teal-600 to-teal-800 px-4 py-2 font-semibold text-white drop-shadow-xs active:opacity-70 enabled:hover:from-teal-500 enabled:hover:to-teal-700 disabled:opacity-70 dark:from-teal-700 dark:to-teal-900 dark:enabled:hover:from-teal-600 dark:enabled:hover:to-teal-800"
					disabled={isPending}
					type="submit"
				>
					{icon} Subscribe
				</button>
			</form>
		</div>
	);
}
