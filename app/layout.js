import "../styles/globals.css";
import Providers from "./providers";
import localFont from "next/font/local";
import { name } from "../metadata.js";
import Navbar from "components/Navbar";
import Sidebar from "components/Sidebar";
import { Analytics } from "@vercel/analytics/react";

/** @type {import('next').Metadata} */
export const metadata = {
	title: {
		default: name,
		template: "%s • " + name,
	},
	openGraph: {
		siteName: name,
		title: name,
		description: "Aspiring web developer whose code sometimes works.",
	},
	description: "Aspiring web developer whose code sometimes works.",
	themeColor: "#2563eb",
	twitter: {
		card: "summary_large_image",
	},
	metadataBase: process.env.NEXT_PUBLIC_URL,
};

const BeVietnamPro = localFont({
	src: "../public/BeVietnamPro.woff2",
});

export default function RootLayout({ children }) {
	return (
		<html
			lang="en"
			suppressHydrationWarning
			className={`${BeVietnamPro.className} scroll-smooth [scrollbar-gutter:stable]`}
		>
			<body className="max-w-7xl gap-8 bg-slate-50 px-6 pb-8 text-black dark:bg-slate-950 dark:text-white lg:mx-auto lg:flex lg:flex-row lg:py-20 2xl:px-0">
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
