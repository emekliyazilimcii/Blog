"use server";

import axios, { type AxiosError } from "axios";

export interface HandleFormSubmitInterface {
	Subject: string;
	Comment: string;
	Email: string;
}

const handleFormSubmit = async ({
	Subject,
	Comment,
	Email,
}: HandleFormSubmitInterface): Promise<boolean> => {
	try {
		const response = await axios.post(
			`https://budibase.app/api/public/v1/tables/${process.env.BUDIBASE_CONTACT_TABLE_ID}/rows`,
			{ Subject, Comment, Email },
			{
				headers: {
					"Content-Type": "application/json",
					"x-budibase-api-key": process.env.BUDIBASE_API_KEY || "",
					"x-budibase-app-id": process.env.BUDIBASE_APP_ID || "",
				},
			},
		);

		return response.status === 200;
	} catch (error) {
		const axiosError = error as AxiosError;
		if (axiosError.response) {
			console.error("Error response:", axiosError.response.data);
		} else if (axiosError.request) {
			console.error("Error request:", axiosError.request);
		} else {
			console.error("Error message:", axiosError.message);
		}
		return false;
	}
};

export default handleFormSubmit;
