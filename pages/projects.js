import { OrbContainer, Orb } from "../components/Orb";
import ProjectCard from "../components/ProjectCard";
import { projects, github } from "../metadata";

export default function Projects() {
	return (
		<>
			<OrbContainer>
				<Orb className="right-0 -top-20 bg-fuchsia-400/30 dark:bg-fuchsia-600/30" />
				<Orb className="right-86 top-40 bg-cyan-400/30 dark:bg-cyan-600/30" />
			</OrbContainer>

			<h2 className="mb-4 text-3xl font-extrabold md:text-4xl">
				Projects
			</h2>

			<p className="mb-4 max-w-2xl text-lg md:text-xl">
				Here&apos;s a few of the projects I&apos;ve worked on. To see
				everything I&apos;ve contributed to, check out{" "}
				<a
					href={github}
					className="text-blue-600 transition-colors ease-in-out hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
				>
					my GitHub profile
				</a>
				.
			</p>

			<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
				{Object.entries(projects).map(([name, data]) => (
					<ProjectCard key={name} name={name} {...data} />
				))}
			</div>

			<OrbContainer>
				<Orb className="-top-52 left-52 bg-emerald-400/30 dark:bg-emerald-600/30" />
			</OrbContainer>
		</>
	);
}

export function getStaticProps() {
	return {
		props: {
			seo: {
				title: "Projects",
			},
		},
	};
}
