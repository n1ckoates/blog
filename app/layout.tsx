import "styles/globals.css";
import Providers from "./providers";
import localFont from "next/font/local";
import Navbar from "components/Navbar";
import Sidebar from "components/Sidebar";
import { Analytics } from "@vercel/analytics/react";
import mergeMetadata from "lib/mergeMetadata";

export const metadata = mergeMetadata();

const BeVietnamPro = localFont({
	src: "../public/Mona-Sans.woff2",
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang="en"
			suppressHydrationWarning
			className={`${BeVietnamPro.className} scroll-smooth [scrollbar-gutter:stable]`}
		>
			<body className="max-w-7xl gap-8 bg-zinc-50 px-6 pb-8 text-black dark:bg-zinc-950 dark:text-white lg:mx-auto lg:flex lg:flex-row lg:py-20 2xl:px-0">
				<Providers>
					<Navbar />

					<Sidebar />

					<main className="mt-24 grow lg:mt-0">{children}</main>
				</Providers>

				<Analytics />
			</body>
		</html>
	);
}
