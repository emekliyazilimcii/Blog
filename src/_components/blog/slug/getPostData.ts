import type { BlogPost } from "@/_types/blog/BlogPost";
import matter from "gray-matter";

interface GetMarkdownPostDataProps {
	id: string;
	markdownContent: string;
}

const getMarkdownPostData = ({
	id,
	markdownContent,
}: GetMarkdownPostDataProps): BlogPost => {
	const matterResult = matter(markdownContent);

	return {
		id: id,
		title: matterResult.data.title,
		date: new Date(matterResult.data.date),
		description: matterResult.data.description,
		author: matterResult.data.author,
		content: matterResult.content,
		tags: matterResult.data.tags,
	};
};

export default getMarkdownPostData;
