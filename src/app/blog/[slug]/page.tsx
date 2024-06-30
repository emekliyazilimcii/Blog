import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import type { BlogPost } from "@/_types/blog/BlogPost";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Suspense } from "react";

const postsDirectory = path.join(process.cwd(), "contents");

async function getPostData(slug: string): Promise<BlogPost | null> {
	const fullPath = path.join(postsDirectory, `${slug}.mdx`);
	if (!fs.existsSync(fullPath)) {
		return null;
	}
	const fileContents = fs.readFileSync(fullPath, "utf8");
	const matterResult = matter(fileContents);

	return {
		id: slug,
		title: matterResult.data.title,
		date: new Date(matterResult.data.date),
		description: matterResult.data.description,
		author: matterResult.data.author,
		content: matterResult.content,
	};
}

const components = {
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

interface PostPageProps {
	params: {
		slug: string;
	};
}

const PostPage: React.FC<PostPageProps> = async ({ params }) => {
	const post = await getPostData(params.slug);

	if (!post) {
		notFound();
	}

	return (
		<div className="max-w-4xl mx-auto p-4">
			<h1 className="text-3xl font-bold mb-2">{post.title}</h1>
			<p className="text-sm text-gray-600 mb-4">
				<b>{post.author}</b> tarafından{" "}
				<b>{new Date(post.date).toLocaleDateString("en-GB")}</b> tarihinde
				yazıldı
			</p>
			<p className="text-lg mb-4">{post.description}</p>
			<div className="relative py-4">
				<div className="absolute inset-0 flex items-center">
					<div className="w-full border-b border-gray-300" />
				</div>
				<div className="relative flex justify-center">
					<span className="bg-white px-4 text-sm text-gray-500">
						Blog Yazısı Başlangıcı
					</span>
				</div>
			</div>

			<Suspense fallback={<>Yükleniyor...</>}>
				<MDXRemote source={post.content} components={components} />
			</Suspense>
		</div>
	);
};

export const generateStaticParams = async () => {
	const fileNames = fs.readdirSync(postsDirectory);
	return fileNames.map((fileName) => ({
		slug: fileName.replace(/\.mdx$/, ""),
	}));
};

export default PostPage;
