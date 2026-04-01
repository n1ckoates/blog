import "./globals.css";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import mergeMetadata from "@/lib/mergeMetadata";
import { ThemeProvider } from "next-themes";

export const metadata = mergeMetadata();

export const viewport = {
	themeColor: [
		{ color: "#008080" },
	],
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang="en"
			suppressHydrationWarning
			className="scroll-smooth [scrollbar-gutter:stable]"
		>
			<body
				className="max-w-7xl gap-8 px-6 pb-8 text-black lg:mx-auto lg:flex lg:flex-row lg:py-8 2xl:px-0"
				style={{
					background: "#008080",
					fontFamily: '"MS Sans Serif", Tahoma, Arial, sans-serif',
					fontSize: "11px",
				}}
			>
				{/* Tiled desktop wallpaper pattern */}
				<div
					className="fixed top-0 left-0 -z-50 size-full"
					style={{
						background: "#008080",
						backgroundImage: `url("data:image/svg+xml,%3Csvg width='4' height='4' viewBox='0 0 4 4' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='0' y='0' width='2' height='2' fill='%23007070' opacity='0.5'/%3E%3C/svg%3E")`,
						backgroundSize: "4px 4px",
					}}
				/>

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
