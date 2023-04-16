import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import Layout from "../components/Layout";
import Head from "next/head";
import localFont from "next/font/local";
import { name } from "../metadata.js";
import { Analytics } from "@vercel/analytics/react";

const BeVietnamPro = localFont({
	src: "../public/BeVietnamPro.woff2",
});

export default function MyApp({ Component, pageProps }) {
	const pageTitle = pageProps.seo?.title
		? pageProps.seo.title + " • " + name
		: name;
	const title = pageProps.seo?.title || name;
	const description =
		pageProps.seo?.description ||
		"Aspiring web developer whose code sometimes works.";
	const image =
		process.env.NEXT_PUBLIC_URL +
		(pageProps.seo?.image || "/images/card-image.png");
	const imageAlt =
		pageProps.seo?.imageAlt ||
		"Text reading 'Nick Oates' on a black background.";

	return (
		<ThemeProvider attribute="class" disableTransitionOnChange>
			<Layout>
				<Head>
					<title>{pageTitle}</title>
					<meta name="description" content={description} />
					<meta name="theme-color" content="#2563eb" />

					<meta property="og:title" content={title} />
					<meta name="og:site_name" content={name} />
					<meta name="og:description" content={description} />
					<meta name="og:image" content={image} />
					<meta name="og:image:alt" content={imageAlt} />
					<meta name="twitter:card" content="summary_large_image" />

					<link
						rel="apple-touch-icon"
						sizes="180x180"
						href="/apple-touch-icon.png"
					/>
					<link
						rel="icon"
						type="image/png"
						sizes="32x32"
						href="/favicon-32x32.png"
					/>
					<link
						rel="icon"
						type="image/png"
						sizes="16x16"
						href="/favicon-16x16.png"
					/>

					<noscript>
						<style>
							{".noscript-hidden {display: none !important;}"}
						</style>
					</noscript>
				</Head>

				<style jsx global>
					{`
						:root {
							--font-be-vietnam-pro: ${BeVietnamPro.style
								.fontFamily};
						}
					`}
				</style>

				<Component {...pageProps} />

				<Analytics />
			</Layout>
		</ThemeProvider>
	);
}
