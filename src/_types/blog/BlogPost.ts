import type { MDXRemoteSerializeResult } from "next-mdx-remote";

export interface BlogPost {
	id: string;
	title: string;
	date: Date;
	description: string;
	author: string;
	content: string;
}

export interface BlogPostMain {
	id: string;
	title: string;
	date: Date;
	description: string;
	author: string;
	content: MDXRemoteSerializeResult;
}
