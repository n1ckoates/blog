import "./globals.css";
import { Mona_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import mergeMetadata from "@/lib/mergeMetadata";
import { ThemeProvider } from "next-themes";

export const metadata = mergeMetadata();

export const viewport = {
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "#fafafa" },
		{ media: "(prefers-color-scheme: dark)", color: "#09090b" },
		{ color: "#2563eb" },
	],
};

const monaSans = Mona_Sans({ subsets: ["latin"] });

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang="en"
			suppressHydrationWarning
			className={`${monaSans.className} scroll-smooth [scrollbar-gutter:stable]`}
		>
			<body className="max-w-7xl gap-8 bg-zinc-50 px-6 pb-8 text-black lg:mx-auto lg:flex lg:flex-row lg:py-20 2xl:px-0 dark:bg-zinc-950 dark:text-white">
				<div className="bg-grid fixed top-0 left-0 -z-50 size-full [mask-image:radial-gradient(ellipse_at_top_left,black,transparent_50%)] text-zinc-200 dark:text-zinc-900" />

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
