export const markdownComponents = {
	h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
		<h1 className="text-4xl font-bold mb-4" {...props} />
	),
	h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
		<h2 className="text-3xl font-bold mb-3" {...props} />
	),
	h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
		<h3 className="text-2xl font-bold mb-2" {...props} />
	),
	h4: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
		<h3 className="text-xl font-bold mb-1" {...props} />
	),
	p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
		<p className="text-lg mb-4" {...props} />
	),
	a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
		<a className="text-blue-500 hover:underline" {...props} />
	),
	ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
		<ul className="list-disc list-inside mb-4" {...props} />
	),
	ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
		<ol className="list-decimal list-inside mb-4" {...props} />
	),
	li: (props: React.HTMLAttributes<HTMLLIElement>) => (
		<li className="mb-2" {...props} />
	),
	blockquote: (props: React.HTMLAttributes<HTMLElement>) => (
		<blockquote
			className="border-l-4 border-gray-300 pl-4 italic mb-4"
			{...props}
		/>
	),
	code: (props: React.HTMLAttributes<HTMLElement>) => (
		<code className="bg-gray-100 rounded p-1 font-mono text-sm" {...props} />
	),
	pre: (props: React.HTMLAttributes<HTMLElement>) => (
		<pre className="bg-gray-100 rounded p-4 overflow-x-auto mb-4" {...props} />
	),
	table: (props: React.TableHTMLAttributes<HTMLTableElement>) => (
		<div className="overflow-x-auto">
			<table
				className="min-w-full bg-white border border-gray-300"
				{...props}
			/>
		</div>
	),
	thead: (props: React.HTMLAttributes<HTMLElement>) => (
		<thead
			className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal"
			{...props}
		/>
	),
	tbody: (props: React.HTMLAttributes<HTMLElement>) => (
		<tbody className="text-gray-600 text-sm font-light" {...props} />
	),
	tr: (props: React.HTMLAttributes<HTMLTableRowElement>) => (
		<tr className="border-b border-gray-300" {...props} />
	),
	th: (props: React.ThHTMLAttributes<HTMLTableCellElement>) => (
		<th className="py-3 px-6 text-left border-r border-gray-300" {...props} />
	),
	td: (props: React.TdHTMLAttributes<HTMLTableCellElement>) => (
		<td className="py-3 px-6 text-left border-r border-gray-300" {...props} />
	),
	br: (props: React.HTMLAttributes<HTMLElement>) => <br {...props} />,
};
