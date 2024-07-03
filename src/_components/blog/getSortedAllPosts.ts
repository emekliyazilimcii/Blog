import fs from "node:fs";
import path from "node:path";
import type { BlogPost } from "@/_types/blog/BlogPost";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "contents");

const getSortedAllPosts = (): BlogPost[] => {
	// Get file names under /contents
	const fileNames = fs.readdirSync(postsDirectory);
	const allPostsData = fileNames.map((fileName) => {
		// Remove ".mdx" from file name to get id
		const id = fileName.replace(/\.mdx$/, "");

		// Read markdown file as string
		const fullPath = path.join(postsDirectory, fileName);
		const fileContents = fs.readFileSync(fullPath, "utf8");

		// Use gray-matter to parse the post metadata section
		const matterResult = matter(fileContents);

		// Combine the data with the id
		return {
			id,
			title: matterResult.data.title,
			date: new Date(matterResult.data.date),
			description: matterResult.data.description,
			author: matterResult.data.author,
			content: matterResult.content,
			tags: matterResult.data.tags,
		} as BlogPost;
	});

	// Sort posts by date
	return allPostsData.sort((a, b) => b.date.getTime() - a.date.getTime());
};

export default getSortedAllPosts;
