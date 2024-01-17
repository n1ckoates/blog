"use client";

import { useState } from "react";
import { IconLoader2, IconMail } from "@tabler/icons-react";
import clsx from "clsx";

const formId = process.env.NEXT_PUBLIC_LOOPS_FORM_ID;

export default function NewsletterForm({
	title = "Subscribe to my newsletter",
}: {
	title?: string;
}) {
	const [state, setState] = useState<"loading" | "success" | "error" | null>(
		null,
	);
	const [message, setMessage] = useState(title);

	const loading = state === "loading";
	const success = state === "success";
	const error = state === "error";

	const icon = loading ? (
		<IconLoader2 className="animate-spin" />
	) : (
		<IconMail />
	);

	const subscribe = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setState("loading");

		const formData = new FormData(e.target as HTMLFormElement);
		const email = formData.get("email");

		if (!email || typeof email !== "string") {
			setMessage("Please enter an email address.");
			setState("error");
			return;
		}

		const res = await fetch(
			"https://app.loops.so/api/newsletter-form/" + formId,
			{
				body: "email=" + encodeURIComponent(email),
				headers: {
					"Content-Type": "application/x-www-form-urlencoded",
				},
				method: "POST",
			},
		);

		if (!res.ok) {
			setMessage(
				res.status === 400
					? "Your email address is invalid or you're already subscribed!"
					: "Something went wrong. Please try again later.",
			);
			setState("error");
			return;
		}

		setMessage("Thank you for subscribing!");
		setState("success");
	};

	return (
		<div className="mx-auto max-w-lg rounded-3xl border border-zinc-400/50 bg-neutral-100/50 p-4 dark:border-zinc-600/50 dark:bg-neutral-900/50 md:text-lg print:hidden">
			<span
				className={clsx(
					{ "text-red-600 dark:text-red-400": error },
					"font-semibold",
				)}
			>
				{message}
			</span>

			<form
				className={clsx(
					"mt-2 flex w-full flex-wrap justify-between gap-2",
					{ hidden: success },
				)}
				onSubmit={subscribe}
			>
				<input
					className="box-border flex grow flex-row items-center justify-center gap-2 rounded-xl border border-zinc-400/50 bg-white px-4 py-2 placeholder-zinc-500 drop-shadow-sm hover:border-zinc-500/50 disabled:opacity-70 dark:border-zinc-600/50 dark:bg-zinc-900 dark:placeholder-zinc-500 dark:hover:border-zinc-500/50"
					type="email"
					id="email"
					name="email"
					placeholder="Enter your email..."
					required
					disabled={loading}
					aria-label="Email address"
				/>

				<button
					className="box-border flex grow cursor-default flex-row items-center justify-center gap-2 rounded-xl border-t border-white/30 bg-gradient-to-b from-teal-600 to-teal-800 px-4 py-2 font-semibold text-white drop-shadow-sm active:opacity-70 enabled:hover:from-teal-500 enabled:hover:to-teal-700 disabled:opacity-70 dark:from-teal-700 dark:to-teal-900 dark:enabled:hover:from-teal-600 dark:enabled:hover:to-teal-800"
					disabled={loading}
					type="submit"
				>
					{icon} Subscribe
				</button>
			</form>
		</div>
	);
}
