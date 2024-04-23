"use server";

const { RESEND_API_KEY, RESEND_AUDIENCE_ID } = process.env;

export type State = {
	message: string;
	status: "idle" | "success" | "error";
};

export async function subscribe(
	prevState: State,
	formData: FormData,
): Promise<State> {
	if (!RESEND_API_KEY || !RESEND_AUDIENCE_ID) {
		return {
			status: "error",
			message:
				"RESEND_API_KEY or RESEND_AUDIENCE_ID environment variables are not set.",
		};
	}

	const email = formData.get("email") as string;
	if (!email) {
		return { status: "error", message: "Please enter an email address." };
	}

	const response = await fetch(
		`https://api.resend.com/audiences/${RESEND_AUDIENCE_ID}/contacts`,
		{
			method: "POST",
			headers: {
				Authorization: `Bearer ${RESEND_API_KEY}`,
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				email,
			}),
		},
	);

	if (!response.ok) {
		return {
			status: "error",
			message: "Something went wrong, please try again later.",
		};
	}

	return { status: "success", message: "Thank you for subscribing!" };
}
