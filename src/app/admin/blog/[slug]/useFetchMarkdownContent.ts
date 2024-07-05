import { type Dispatch, type SetStateAction, useEffect, useState } from "react";

interface UseFetchContentReturn {
	content: string;
	setContent: Dispatch<SetStateAction<string>>;
	loading: boolean;
	error: string | null;
}

const useFetchContent = (slug: string): UseFetchContentReturn => {
	const [content, setContent] = useState<string>("");
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				// Replace with your actual data fetching logic
				// const data = await fetchItemContent(slug);
				const code = `**Hello world!!!**
                \`\`\`js
                function demo() {}
                \`\`\`
                `;
				setContent(code);
			} catch (error) {
				setError("Error fetching content");
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, []);

	return { content, setContent, loading, error };
};

export default useFetchContent;
