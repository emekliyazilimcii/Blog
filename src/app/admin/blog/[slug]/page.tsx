"use client";

import useFetchContent from "@/app/admin/blog/[slug]/useFetchMarkdownContent";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const MarkdownEditor = dynamic(
	() => import("@/_components/admin/MarkdownEditor"),
	{ ssr: false },
);

interface HomeProps {
	params: {
		slug: string;
	};
}

const Home: React.FC<HomeProps> = ({ params }) => {
	const slug = params.slug;

	const { content, setContent, loading, error } = useFetchContent(slug);

	const handleSave = async () => {
		try {
			// Update item content
		} catch (error) {
			// Handle error
		}
	};

	if (loading) return <div>Yükleniyor...</div>;
	if (error) return <div>Hata: {error}</div>;

	return (
		<div>
			<h1 className="text-2xl font-bold mb-4">Edit {slug}</h1>
			<MarkdownEditor content={content} onChange={setContent} />
			<button
				type="button"
				onClick={handleSave}
				className="bg-blue-500 text-white py-2 px-4 mt-4 rounded"
			>
				Kaydet
			</button>
		</div>
	);
};

export default Home;
