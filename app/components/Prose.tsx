export function Prose(props: React.HTMLAttributes<HTMLDivElement> & { as?: React.ElementType }) {
    const Component = props.as || "article";
    return <Component className="prose prose-lg prose-zinc dark:prose-invert md:prose-xl prose-h1:tracking-tight prose-a:text-blue-600 prose-a:no-underline prose-a:hover:underline prose-pre:bg-zinc-100 dark:prose-a:text-blue-400 dark:prose-pre:bg-zinc-900 mx-auto lg:mx-0 prose-figcaption:text-center prose-img:rounded-lg prose-img:drop-shadow-sm prose-headings:text-balance" {...props} />
}