// hooks/useApiSender.ts
import axios, { type AxiosResponse, type AxiosError, type Method } from "axios";

interface ApiSenderParams<T> {
	url: string;
	method: Method;
	headers?: Record<string, string>;
	data?: T;
}

const request = async <T, R>({
	url,
	method,
	headers = {},
	data,
}: ApiSenderParams<T>): Promise<AxiosResponse<R> | null> => {
	try {
		const response: AxiosResponse<R> = await axios({
			url,
			method,
			headers: {
				"Content-Type": "application/json",
				...headers,
			},
			data,
		});

		return response;
	} catch (error) {
		const axiosError = error as AxiosError;
		if (axiosError.response) {
			console.error("Error response:", axiosError.response.data);
		} else if (axiosError.request) {
			console.error("Error request:", axiosError.request);
		} else {
			console.error("Error message:", axiosError.message);
		}
		return null;
	}
};

export default request;
