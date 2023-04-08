import { useState } from "react";
import { IconLoader2, IconMail } from "@tabler/icons-react";
import clsx from "clsx";

const formId = process.env.NEXT_PUBLIC_LOOPS_FORM_ID;

export default function NewsletterForm({
	title = "Subscribe to my newsletter",
}) {
	const [state, setState] = useState(null);
	const [message, setMessage] = useState(title);

	const loading = state === "loading";
	const success = state === "success";
	const error = state === "error";

	const icon = loading ? (
		<IconLoader2 className="animate-spin" />
	) : (
		<IconMail className="" />
	);

	const subscribe = async (e) => {
		e.preventDefault();
		setState("loading");

		const email = e.target.email.value;

		const res = await fetch(
			"https://app.loops.so/api/newsletter-form/" + formId,
			{
				body: "email=" + encodeURIComponent(email),
				headers: {
					"Content-Type": "application/x-www-form-urlencoded",
				},
				method: "POST",
			}
		);

		if (!res.ok) {
			setMessage(
				res.status === 400
					? "Your email address is invalid or you're already subscribed!"
					: "Something went wrong. Please try again later."
			);
			setState("error");
			return;
		}

		setMessage("Thank you for subscribing!");
		setState("success");
	};

	return (
		<div className="mx-auto max-w-lg rounded-lg border border-slate-200 bg-neutral-100/50 p-4 dark:border-slate-800 dark:bg-neutral-900/50 print:hidden md:text-lg">
			<span
				className={clsx(
					{ "text-red-600 dark:text-red-400": error },
					"font-semibold"
				)}
			>
				{message}
			</span>

			<form
				className={clsx(
					"mt-2 flex w-full flex-wrap justify-between gap-2 drop-shadow",
					{ hidden: success }
				)}
				onSubmit={subscribe}
			>
				<input
					className="grow rounded-md bg-slate-50 px-4 py-2 dark:bg-slate-950"
					type="email"
					id="email"
					name="email"
					placeholder="Enter your email..."
					required
					disabled={loading}
				/>

				<button
					className="flex grow items-center justify-center gap-1 rounded-md bg-emerald-300 px-4 py-2 transition ease-in-out hover:bg-emerald-200 dark:bg-emerald-700 dark:hover:bg-emerald-800"
					disabled={loading}
					type="submit"
				>
					{icon} Subscribe
				</button>
			</form>
		</div>
	);
}
