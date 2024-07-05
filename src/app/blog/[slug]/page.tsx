import fs from "node:fs";
import path from "node:path";
import Recommendation from "@/_components/blog/slug/Recommendation";
import getPostData from "@/_components/blog/slug/getPostData";
import { markdownComponents } from "@/_components/markdownComponent";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Suspense } from "react";

interface HomeProps {
	params: {
		slug: string;
	};
}

const Home: React.FC<HomeProps> = ({ params }) => {
	const post = getPostData(params.slug);

	if (!post) {
		return <div>Post not found</div>;
	}

	return (
		<div className="max-w-4xl mx-auto p-4">
			<h1 className="text-3xl font-bold mb-2">{post.title}</h1>
			<p className="text-sm text-gray-600 mb-4">
				<b>{post.author}</b> tarafından{" "}
				<b>{new Date(post.date).toLocaleDateString("en-GB")}</b> tarihinde
				yazıldı
			</p>
			<p className="text-lg mb-4">{post.description}</p>
			<div className="flex flex-wrap mb-4">
				{post.tags.map((tag: string) => (
					<span
						key={tag}
						className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded"
					>
						{tag}
					</span>
				))}
			</div>
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
				<MDXRemote source={post.content} components={markdownComponents} />
			</Suspense>

			<Recommendation currentPost={post} />
		</div>
	);
};

export const generateStaticParams = async () => {
	const postsDirectory = path.join(process.cwd(), "contents");
	const fileNames = fs.readdirSync(postsDirectory);
	return fileNames.map((fileName) => ({
		slug: fileName.replace(/\.mdx$/, ""),
	}));
};

export default Home;
