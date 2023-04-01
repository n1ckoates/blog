import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html className="scroll-smooth" lang="en">
			<Head />
			<body className="mx-auto max-w-4xl bg-white px-6 text-black dark:bg-black dark:text-white xl:px-0">
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
