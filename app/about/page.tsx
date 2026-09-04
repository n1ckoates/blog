import { Prose } from "@/components/Prose";
import mergeMetadata from "@/lib/mergeMetadata";
import Image from "next/image";
import me from "../../public/images/nick-oates.webp";
import { CustomLink } from "@/components/typography";

export const metadata = mergeMetadata({
	title: "About",
});

export default function About() {
	return (
		<Prose>
			<h1>
				About<span className="sr-only"> Nick Oates</span>
			</h1>

			<figure className="float-right mt-0! mb-4! ml-5">
				<Image
					src={me}
					width={144}
					alt="Nick Oates standing in front of a tree"
					placeholder="blur"
					className="w-32 rounded-lg outline -outline-offset-1 outline-white/10 sm:w-36"
				/>
				<figcaption className="text-xs!">
					Photo by{" "}
					<CustomLink
						href="https://ajdimke.com"
						className="not-prose underline hover:text-orange-500"
					>
						AJ Dimke
					</CustomLink>
				</figcaption>
			</figure>

			<p className="lead">
				I&apos;m a software engineer at Vercel, where I work on the{" "}
				<CustomLink href="https://ai-sdk.dev">AI SDK</CustomLink>. I care about
				thoughtful developer tools, open-source software, and the small details
				that make technology feel good to use.
			</p>

			<p>
				I&apos;m a strong believer in internet freedom and privacy, and I
				believe those values are essential to a healthy, open web. They&apos;re
				reflected in much of <CustomLink href="/projects">my work</CustomLink>.
			</p>

			<p>
				I <CustomLink href="/blog/graduating-high-school">graduated</CustomLink>{" "}
				from Benson Polytechnic High School in 2026, where I majored in radio
				broadcasting and gave a valedictorian speech. While I was there, I
				helped start the school newspaper,{" "}
				<CustomLink href="https://bensonorbit.com/staff_name/nick-oates/">
					The Benson Orbit
				</CustomLink>
				, and served as Chief of Music at{" "}
				<CustomLink href="https://kbps.am">KBPS</CustomLink>, the oldest high
				school radio station in America.
			</p>

			<p>
				Outside of work, I like writing on{" "}
				<CustomLink href="/blog">my blog</CustomLink> and playing video games
				with friends. My favorites are{" "}
				<CustomLink href="https://en.wikipedia.org/wiki/Portal_2">
					Portal 2
				</CustomLink>
				,{" "}
				<CustomLink href="https://en.wikipedia.org/wiki/Minecraft">
					Minecraft
				</CustomLink>
				, and{" "}
				<CustomLink href="https://en.wikipedia.org/wiki/The_Legend_of_Zelda:_Skyward_Sword">
					Zelda: Skyward Sword
				</CustomLink>
				, in that order.
			</p>

			<p>
				You can follow me on{" "}
				<CustomLink href="https://x.com/nickoates_">Twitter</CustomLink>, see
				what I&apos;m building on{" "}
				<CustomLink href="https://github.com/n1ckoates">GitHub</CustomLink>, or
				email me at{" "}
				<CustomLink href="mailto:hey@nickoates.com">
					hey@nickoates.com
				</CustomLink>
				. Thanks for stopping by my website!
			</p>
		</Prose>
	);
}
