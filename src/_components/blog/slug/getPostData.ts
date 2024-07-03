import fs from "node:fs";
import path from "node:path";
import type { BlogPost } from "@/_types/blog/BlogPost";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "contents");

const getPostData = (slug: string): BlogPost | null => {
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
		tags: matterResult.data.tags,
	};
};

export default getPostData;
