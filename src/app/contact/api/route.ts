import { type NextRequest, NextResponse } from "next/server";
import axios, { type AxiosError } from "axios";

export const POST = async (req: NextRequest) => {
	try {
		const body = await req.json();
		const response = await axios.post(
			`https://budibase.app/api/public/v1/tables/${process.env.BUDIBASE_CONTACT_TABLE_ID}/rows`,
			body,
			{
				headers: {
					"Content-Type": "application/json",
					"x-budibase-api-key": process.env.BUDIBASE_API_KEY || "",
					"x-budibase-app-id": process.env.BUDIBASE_APP_ID || "",
				},
			},
		);

		return NextResponse.json(response.data, { status: response.status });
	} catch (error) {
		const axiosError = error as AxiosError;
		if (axiosError.response) {
			console.error("Error response:", axiosError.response.data);
			return NextResponse.json(axiosError.response.data, {
				status: axiosError.response.status,
			});
		}
		if (axiosError.request) {
			console.error("Error request:", axiosError.request);
			return NextResponse.json(
				{ error: "No response received from the server" },
				{ status: 500 },
			);
		}
		console.error("Error message:", axiosError.message);
		return NextResponse.json({ error: axiosError.message }, { status: 500 });
	}
};
