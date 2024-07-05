"use client";

import Modal from "@/_components/Model";
import handleMarkdownSubmit from "@/_components/admin/blog/[slug]/handleFormSubmit";
import dynamic from "next/dynamic";
import { useState } from "react";

const MarkdownEditor = dynamic(
	() => import("@/_components/admin/blog/[slug]/MarkdownEditor"),
	{ ssr: false },
);

const Home: React.FC = () => {
	const [content, setContent] = useState<string>("");
	const [teaserImage, setTeaserImage] = useState("");
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [dialogTitle, setDialogTitle] = useState<string>("");
	const [dialogMessage, setDialogMessage] = useState<string>("");

	const handleSave = async () => {
		try {
			setDialogTitle("Yükleniyor");
			setDialogMessage("Yazı oluşturuluyor. Lütfen bekleyin...");
			setIsOpen(true);

			const success = await handleMarkdownSubmit({
				TeaserImage: teaserImage,
				Content: content,
			});
			if (success) {
				setDialogTitle("Success");
				setDialogMessage("Başarı ile oluşturuldu");
			} else {
				setDialogTitle("Error");
				setDialogMessage("Hata meydana geldi.");
			}
		} catch (error) {
			setDialogTitle("Error");
			setDialogMessage(`Hata meydana geldi. ${error}`);
		}
	};

	return (
		<div className="flex flex-col items-center justify-center min-h-screen py-2">
			<Modal
				isOpen={isOpen}
				onClose={() => setIsOpen(false)}
				title={dialogTitle}
				message={dialogMessage}
			/>
			<h1 className="text-2xl font-bold mb-4">Yeni Yazı Oluştur</h1>
			<div className="w-full max-w-3xl p-4 bg-white rounded-lg shadow-md">
				<div className="mb-4">
					<label
						htmlFor="teaserImage"
						className="block text-sm font-medium text-gray-700"
					>
						Yazı Görseli
					</label>
					<input
						type="text"
						id="teaserImage"
						value={teaserImage}
						onChange={(e) => setTeaserImage(e.target.value)}
						className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
						placeholder="Enter teaser image URL"
					/>
				</div>
				<MarkdownEditor content={content} onChange={setContent} />
				<button
					type="button"
					onClick={handleSave}
					className="bg-blue-500 text-white py-2 px-4 mt-4 rounded"
				>
					Kaydet
				</button>
			</div>
		</div>
	);
};

export default Home;
