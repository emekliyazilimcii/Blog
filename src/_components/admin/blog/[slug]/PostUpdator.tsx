"use client";

import Modal from "@/_components/Modal";
import MarkdownEditor from "@/_components/admin/blog/MarkdownEditor";
import handleMarkdownPostUpdate from "@/_components/admin/blog/[slug]/handleMarkdownPostUpdate";
import { useState } from "react";

interface PostUpdatorProps {
	postId: string;
	initTeaserImage: string;
	initPostName: string;
	initPostContent: string;
}

const PostUpdator: React.FC<PostUpdatorProps> = ({
	postId,
	initTeaserImage,
	initPostContent,
	initPostName,
}) => {
	const [content, setContent] = useState<string>(initPostContent);
	const [name, setName] = useState<string>(initPostName);
	const [teaserImage, setTeaserImage] = useState(initTeaserImage);
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [dialogTitle, setDialogTitle] = useState<string>("");
	const [dialogMessage, setDialogMessage] = useState<string>("");

	const handleSave = async () => {
		try {
			setDialogTitle("Yükleniyor");
			setDialogMessage("İşleminiz yapılıyor. Lütfen bekleyin...");
			setIsOpen(true);

			const success = await handleMarkdownPostUpdate(
				{
					TeaserImage: teaserImage,
					Content: content,
					Name: name,
				},
				postId,
			);
			if (success) {
				setDialogTitle("Başarı");
				setDialogMessage("Başarı ile işleminiz yapıldı!");
			} else {
				setDialogTitle("Hata");
				setDialogMessage("Hata meydana geldi.");
			}
		} catch (error) {
			setDialogTitle("Hata");
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
			<h1 className="text-2xl font-bold mb-4">Yazıyı Güncelle</h1>
			<div className="w-full p-4 bg-white rounded-lg shadow-md">
				<div className="mb-4">
					<label
						htmlFor="teaserImage"
						className="block text-sm font-medium text-gray-700 mb-1"
					>
						Yazı Görseli
					</label>
					<input
						type="text"
						id="teaserImage"
						value={teaserImage}
						onChange={(e) => setTeaserImage(e.target.value)}
						className="block w-full p-2 border border-gray-300 rounded-md"
						placeholder="Görsel URL'si girin"
					/>
				</div>
				<div className="mb-4">
					<label
						htmlFor="teaserName"
						className="block text-sm font-medium text-gray-700 mb-1"
					>
						Yazı İsmi
					</label>
					<input
						type="text"
						id="teaserName"
						value={name}
						onChange={(e) => setName(e.target.value)}
						className="block w-full p-2 border border-gray-300 rounded-md"
						placeholder="Yazının ismini girin"
					/>
				</div>
				<label
					htmlFor="content"
					className="block text-sm font-medium text-gray-700 mb-1"
				>
					Yazı
				</label>
				<MarkdownEditor content={content} setContent={setContent} />
				<div className="flex space-x-4 mt-4">
					<button
						type="button"
						onClick={handleSave}
						className="bg-blue-500 text-white py-2 px-4 rounded"
					>
						Kaydet
					</button>
				</div>
			</div>
		</div>
	);
};

export default PostUpdator;
