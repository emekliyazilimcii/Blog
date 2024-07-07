"use server";

import request from "@/_components/request";

export interface HandleFormSubmitInterface {
	Subject: string;
	Comment: string;
	Email: string;
}

const handleFormSubmit = async (
	formData: HandleFormSubmitInterface,
): Promise<boolean> => {
	const result = await request<HandleFormSubmitInterface, boolean>({
		id: "contact-form-create",
		url: `https://budibase.app/api/public/v1/tables/${process.env.BUDIBASE_CONTACT_TABLE_ID}/rows`,
		method: "POST",
		headers: {
			"x-budibase-api-key": process.env.BUDIBASE_API_KEY || "",
			"x-budibase-app-id": process.env.BUDIBASE_APP_ID || "",
		},
		data: formData,
	});

	return result?.status === 200;
};

export default handleFormSubmit;
