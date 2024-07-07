"use server";

import BlogPostFetchOperation from "@/_types/blog/BlogPostFetchOperation";
import request from "./request";

interface PostResponse {
	data: PostDataRow;
}

interface FetchPostProps {
	id: string;
}

const fetchPost = async ({
	id,
}: FetchPostProps): Promise<PostDataRow | null> => {
	try {
		const response = await request<undefined, PostResponse>({
			id: BlogPostFetchOperation.LIST_ONE,
			url: `https://budibase.app/api/public/v1/tables/${process.env.BUDIBASE_POST_TABLE_ID}/rows/${id}`,
			method: "GET",
			headers: {
				"x-budibase-api-key": process.env.BUDIBASE_API_KEY || "",
				"x-budibase-app-id": process.env.BUDIBASE_APP_ID || "",
			},
		});

		if (response?.status === 200) {
			return response.data.data;
		}

		console.log(new Error("Failed to fetch data"));
		return null;
	} catch (error) {
		console.error(error);
		return null;
	}
};

export default fetchPost;
