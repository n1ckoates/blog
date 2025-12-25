import { Prose } from "@/components/Prose";
import mergeMetadata from "@/lib/mergeMetadata";
import Image from "next/image";
import me from "../../public/images/nick-oates.webp";
import { Orb } from "@/components/Orb";
import { OrbContainer } from "@/components/Orb";
import { S, CustomLink } from "@/components/typography";

export const metadata = mergeMetadata({
    title: "About",
});

export default function About() {
    return (
        <Prose>
            <OrbContainer>
                <Orb className="right-0 bg-blue-400/30 dark:bg-blue-600/30" />
                <Orb className="top-28 right-36 bg-purple-400/30 dark:bg-purple-600/30" />
            </OrbContainer>

            <h1 className="mb-4 text-3xl font-extrabold md:text-4xl">About<span className="sr-only"> Nick Oates</span></h1>

            <figure className="float-right ml-4 mb-4! mt-0!">
                <Image src={me} width={176} alt="Nick Oates standing in front of of a tree" placeholder="blur" className="outline -outline-offset-1 outline-white/10 w-36 sm:w-44" />
                <figcaption className="text-xs!">Photo of me by <CustomLink href="https://ajdimke.com" className="not-prose underline hover:text-orange-500">AJ Dimke</CustomLink></figcaption>
            </figure>

            <p style={{ viewTransitionName: "about-lead" }}>
                Hey, I&apos;m <S>Nick Oates</S>, a software engineer with a passion for designing and building cool things on the web. I love obsessing over the small details of my work, and I&apos;m always looking for new things to learn and ways to improve my skills.
            </p>

            <p>
                I&apos;m a strong believer in internet freedom & privacy, and I believe those values are essential to a healthy, open web. I&apos;m also a big fan of open-source software, reflected in much of <CustomLink href="/projects">my work</CustomLink>.
            </p>

            <p>
                Outside of tech, I&apos;m an editor of my high school&apos;s newspaper, <CustomLink href="https://bensonorbit.com/staff_name/nick-oates/">The Benson Orbit</CustomLink>, which I helped start in 2024. I cover school news and culture, and handle our digital presence. I&apos;m also the Chief of Music at <CustomLink href="https://kbps.am">KBPS</CustomLink>, the oldest high school radio station in America, where I help manage the music library, DJ on-air, and write and announce news. I have a lot of fun playing video games, especially with friends, with my favorites being <CustomLink href="https://en.wikipedia.org/wiki/Portal_2">Portal 2</CustomLink>, <CustomLink href="https://en.wikipedia.org/wiki/Minecraft">Minecraft</CustomLink>, and <CustomLink href="https://en.wikipedia.org/wiki/The_Legend_of_Zelda:_Skyward_Sword">Zelda: Skyward Sword</CustomLink>, in that order.
            </p>

            <p>
                You can follow me on <CustomLink href="https://x.com/nickoates_">Twitter</CustomLink> or check out my code on <CustomLink href="https://github.com/n1ckoates">GitHub</CustomLink> to see what I&apos;m working on, or if you&apos;d like to get in touch, send me an email at <CustomLink href="mailto:nick@nickoates.com">nick@nickoates.com</CustomLink>.
            </p>

        </Prose>
    )
}