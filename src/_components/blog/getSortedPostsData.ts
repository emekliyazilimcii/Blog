import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import type { BlogPost } from "@/_types/blog/BlogPost";

const postsDirectory = path.join(process.cwd(), "contents");

const getSortedPostsData = async (): Promise<BlogPost[]> => {
	const fileNames = fs.readdirSync(postsDirectory);
	const allPostsData: BlogPost[] = fileNames.map((fileName) => {
		const id = fileName.replace(/\.mdx$/, "");
		const fullPath = path.join(postsDirectory, fileName);
		const fileContents = fs.readFileSync(fullPath, "utf8");
		const matterResult = matter(fileContents);

		return {
			id,
			title: matterResult.data.title,
			date: new Date(matterResult.data.date),
			description: matterResult.data.description,
			author: matterResult.data.author,
			content: matterResult.content,
		} as BlogPost;
	});

	return allPostsData.sort(
		(a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
	);
};

export default getSortedPostsData;
