import "./globals.css";
import localFont from "next/font/local";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import mergeMetadata from "@/lib/mergeMetadata";
import { ThemeProvider } from "next-themes";

export const metadata = mergeMetadata();

export const viewport = {
	themeColor: "#2563eb",
};

const MonaSans = localFont({
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
			className={`${MonaSans.className} scroll-smooth [scrollbar-gutter:stable]`}
		>
			<body className="max-w-7xl gap-8 bg-zinc-50 px-6 pb-8 text-black dark:bg-zinc-950 dark:text-white lg:mx-auto lg:flex lg:flex-row lg:py-20 2xl:px-0">
				<div className="bg-grid fixed left-0 top-0 -z-50 size-full text-zinc-200 [mask-image:radial-gradient(ellipse_at_top_left,black,transparent_50%)] dark:text-zinc-900" />

				<ThemeProvider attribute="class" disableTransitionOnChange>
					<Navbar />

					<Sidebar />

					<main id="main" className="mt-16 grow lg:mt-0">
						{children}
					</main>
				</ThemeProvider>

				<Analytics />
				<SpeedInsights />
			</body>
		</html>
	);
}
