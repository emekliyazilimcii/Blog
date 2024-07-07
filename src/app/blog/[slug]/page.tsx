import Markdown from "@/_components/Markdown";
import Recommendation from "@/_components/blog/[slug]/Recommendation";
import ShareButtons from "@/_components/blog/[slug]/ShareButtons";
import getMarkdownPostData from "@/_components/blog/[slug]/getPostData";
import fetchPost from "@/_components/fetchPost";
import type React from "react";
import { Suspense } from "react";

interface HomeProps {
	params: {
		slug: string;
	};
}

const Home: React.FC<HomeProps> = async ({ params }) => {
	const post = await fetchPost({ id: params.slug });

	if (!post || !post.Content) {
		return <div>Yazı bulunamadı</div>;
	}

	const markdownPost = getMarkdownPostData({
		id: post._id,
		markdownContent: post.Content,
	});

	const shareUrl = `www.emekliyazilimci.com/blog/${params.slug}`;
	const title = markdownPost.title;

	return (
		<div className="max-w-4xl mx-auto p-4">
			<h1 className="text-3xl font-bold mb-2">{markdownPost.title}</h1>
			<p className="text-sm text-gray-600 mb-4">
				<b>{markdownPost.author}</b> tarafından{" "}
				<b>{new Date(markdownPost.date).toLocaleDateString("en-GB")}</b>{" "}
				tarihinde yazıldı
			</p>
			<div className="relative py-4">
				<div className="absolute inset-0 flex items-center">
					<div className="w-full border-b border-gray-300" />
				</div>
				<div className="relative flex justify-center">
					<span className="bg-white px-4 text-sm text-gray-500">
						Blog Yazısı Başlangıcı
					</span>
				</div>
			</div>

			<Suspense fallback={<>Yükleniyor...</>}>
				<div className="prose">
					<Markdown content={markdownPost.content} />
				</div>
			</Suspense>

			<ShareButtons url={shareUrl} title={title} />

			<Recommendation currentPost={markdownPost} />
		</div>
	);
};

export default Home;
