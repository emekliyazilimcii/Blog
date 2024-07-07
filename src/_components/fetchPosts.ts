"use server";

import request from "./request";

interface PostResponse {
	data: PostDataRow[];
}

const fetchPosts = async (): Promise<PostDataRow[]> => {
	try {
		const response = await request<undefined, PostResponse>({
			url: `https://budibase.app/api/public/v1/tables/${process.env.BUDIBASE_POST_TABLE_ID}/rows/search`,
			method: "POST",
			headers: {
				"x-budibase-api-key": process.env.BUDIBASE_API_KEY || "",
				"x-budibase-app-id": process.env.BUDIBASE_APP_ID || "",
			},
		});

		if (response?.status === 200) {
			return response.data.data;
		}

		console.log(new Error("Failed to fetch data"));
		return [];
	} catch (error) {
		console.error(error);
		return [];
	}
};

export default fetchPosts;
