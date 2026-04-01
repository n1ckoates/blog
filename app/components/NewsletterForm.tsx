"use client";

import { IconLoader2, IconMail } from "@tabler/icons-react";
import { subscribe, type State } from "@/lib/actions";
import { useActionState } from "react";

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

	return (
		<div className="print:hidden">
			<p
				style={{
					fontFamily: '"MS Sans Serif", Tahoma, Arial, sans-serif',
					fontSize: "11px",
					fontWeight: "bold",
					color: status === "error" ? "#cc0000" : "#000",
					marginBottom: "6px",
				}}
			>
				{message}
			</p>

			{status !== "success" && (
				<form
					action={formAction}
					style={{
						display: "flex",
						flexWrap: "wrap",
						gap: "4px",
					}}
				>
					<input
						type="email"
						id="email"
						name="email"
						placeholder="Enter your email address..."
						required
						aria-label="Email address"
						autoComplete="email"
						style={{
							flex: "1 1 180px",
							background: "#fff",
							borderTop: "2px solid #404040",
							borderLeft: "2px solid #404040",
							borderRight: "2px solid #ffffff",
							borderBottom: "2px solid #ffffff",
							boxShadow: "inset 1px 1px 0 #808080",
							padding: "2px 6px",
							fontFamily: '"MS Sans Serif", Tahoma, Arial, sans-serif',
							fontSize: "11px",
							color: "#000",
							outline: "none",
						}}
					/>
					<button
						type="submit"
						disabled={isPending}
						style={{
							display: "flex",
							alignItems: "center",
							gap: "4px",
							padding: "2px 10px",
							background: "#d4d0c8",
							borderTop: "2px solid #ffffff",
							borderLeft: "2px solid #ffffff",
							borderRight: "2px solid #404040",
							borderBottom: "2px solid #404040",
							boxShadow: "inset 1px 1px 0 #dfdfdf, inset -1px -1px 0 #808080",
							fontFamily: '"MS Sans Serif", Tahoma, Arial, sans-serif',
							fontSize: "11px",
							color: "#000",
							cursor: "default",
							opacity: isPending ? 0.6 : 1,
							whiteSpace: "nowrap",
						}}
					>
						{isPending ? (
							<IconLoader2 size={14} className="animate-spin" aria-hidden />
						) : (
							<IconMail size={14} aria-hidden />
						)}
						Subscribe
					</button>
				</form>
			)}
		</div>
	);
}
