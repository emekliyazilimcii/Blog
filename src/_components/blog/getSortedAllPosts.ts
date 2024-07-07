import fetchPosts from "@/_components/fetchPosts";
import type { BlogPost, BlogPostInfo } from "@/_types/blog/BlogPost";
import matter from "gray-matter";

const getSortedAllPosts = async (): Promise<BlogPostInfo[]> => {
	try {
		const data = await fetchPosts();

		const allPostsData: BlogPostInfo[] = data
			.map((post) => {
				if (!post.Content) {
					return undefined;
				}

				const matterResult = matter(post.Content);

				if (
					!matterResult.data.title ||
					!matterResult.data.date ||
					!matterResult.data.description ||
					!matterResult.data.author
				) {
					return undefined;
				}

				const blogPost: BlogPost = {
					id: post._id,
					title: matterResult.data.title,
					date: new Date(matterResult.data.date),
					description: matterResult.data.description,
					author: matterResult.data.author,
					content: matterResult.content,
					tags: matterResult.data.tags,
				};

				return {
					blogPost,
					blogpostTeaserImage: post.TeaserImage,
				} as BlogPostInfo;
			})
			.filter((post): post is BlogPostInfo => post !== undefined);

		return allPostsData.sort(
			(a, b) => b.blogPost.date.getTime() - a.blogPost.date.getTime(),
		);
	} catch (error) {
		console.error("Failed to fetch and sort posts:", error);
		return [];
	}
};

export default getSortedAllPosts;
