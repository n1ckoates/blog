export function Prose({
	as,
	...props
}: React.HTMLAttributes<HTMLDivElement> & { as?: React.ElementType }) {
	const Component = as || "article";

	return (
		<Component
			className="prose prose-headings:font-semibold prose-headings:tracking-tight prose-headings:text-balance prose-h1:text-3xl prose-h2:text-2xl prose-p:leading-7 prose-a:font-medium prose-a:text-primary prose-a:no-underline prose-a:decoration-primary/30 prose-a:underline-offset-4 prose-a:hover:underline prose-figcaption:text-center prose-img:rounded-lg mx-auto max-w-3xl lg:mx-0"
			{...props}
		/>
	);
}
