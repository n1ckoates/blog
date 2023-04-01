import clsx from "clsx";

export function OrbContainer({ children }) {
	return (
		<div className="absolute left-0 -z-10 w-screen overflow-x-clip md:relative md:w-full md:overflow-x-visible">
			{children}
		</div>
	);
}

export function Orb({ className }) {
	return (
		<div
			className={clsx(
				className,
				"absolute h-72 w-72 rounded-full blur-3xl"
			)}
		/>
	);
}
