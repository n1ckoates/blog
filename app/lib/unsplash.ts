const fallback = {
	src: "https://images.unsplash.com/photo-1583142551012-ac2bbc1089d4?ixid=M3w2NTE1NDV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjU5Mjc3MjB8&ixlib=rb-4.0.3&q=80&w=800&h=600&auto=format&fit=crop",
	url: "https://unsplash.com/photos/orange-tabby-cat-lying-on-brown-wooden-floor-ZsWlzqbAgC4?utm_source=nickoates&utm_medium=referral",
	author: "Tobias Flyckt",
	authorUrl:
		"https://unsplash.com/@flyckt?utm_source=nickoates&utm_medium=referral",
};

export async function getCatPhoto(): Promise<{
	src: string;
	url: string;
	author: string;
	authorUrl: string;
}> {
	if (!process.env.UNSPLASH_ACCESS_KEY) {
		console.warn(
			"UNSPLASH_ACCESS_KEY not set. Falling back to placeholder cat image.",
		);
		return fallback;
	}

	const response = await fetch(
		"https://api.unsplash.com/photos/random?collections=12276674",
		{
			headers: {
				Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}`,
			},
		},
	);

	if (!response.ok) {
		console.error("Failed to fetch cat photo from Unsplash");
		return fallback;
	}

	const data = await response.json();

	return {
		src: `${data.urls.raw}&q=80&w=800&h=600&auto=format&fit=crop`,
		url: data.links.html + "?utm_source=nickoates&utm_medium=referral",
		author: data.user.name,
		authorUrl:
			data.user.links.html + "?utm_source=nickoates&utm_medium=referral",
	};
}
