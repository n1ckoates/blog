import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html className="scroll-smooth" lang="en">
			<Head />
			<body className="max-w-7xl bg-slate-50 px-6 text-black dark:bg-slate-950 dark:text-white lg:mx-auto 2xl:px-0">
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
