"use server";

import request from "@/_components/request";

export interface HandleFormSubmitInterface {
	Name: string;
	TeaserImage: string;
	Content: string;
}

const handleMarkdownPostUpdate = async (
	formData: HandleFormSubmitInterface,
	postId: string,
): Promise<boolean> => {
	const result = await request<HandleFormSubmitInterface, boolean>({
		url: `https://budibase.app/api/public/v1/tables/${process.env.BUDIBASE_POST_TABLE_ID}/rows/${postId}`,
		method: "PUT",
		headers: {
			"x-budibase-api-key": process.env.BUDIBASE_API_KEY || "",
			"x-budibase-app-id": process.env.BUDIBASE_APP_ID || "",
		},
		data: formData,
	});

	return result?.status === 200;
};

export default handleMarkdownPostUpdate;
