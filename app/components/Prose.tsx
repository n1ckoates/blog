export function Prose({
	as,
	...props
}: React.HTMLAttributes<HTMLDivElement> & { as?: React.ElementType }) {
	const Component = as || "article";

	return (
		<Component
			className="prose prose-zinc prose-headings:font-semibold prose-headings:tracking-tight prose-headings:text-balance prose-h1:text-3xl prose-h2:text-2xl prose-p:leading-7 prose-a:font-medium prose-a:text-blue-600 prose-a:no-underline prose-a:decoration-blue-600/30 prose-a:underline-offset-4 prose-a:hover:underline prose-pre:bg-zinc-100 prose-figcaption:text-center prose-img:rounded-lg prose-img:drop-shadow-sm dark:prose-invert dark:prose-a:text-blue-400 dark:prose-a:decoration-blue-400/30 dark:prose-pre:bg-zinc-900 mx-auto max-w-3xl lg:mx-0"
			{...props}
		/>
	);
}
