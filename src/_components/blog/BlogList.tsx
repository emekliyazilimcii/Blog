import type { BlogPost } from "@/_types/blog/BlogPost";
import Image from "next/image";

interface BlogListProps {
	posts: BlogPost[];
}

const BlogList: React.FC<BlogListProps> = ({ posts }) => {
	return (
		<div className="p-6">
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
				{posts.map((post) => (
					<div
						key={post.title}
						className="bg-gray-100 p-4 rounded-lg flex flex-col justify-between h-full"
					>
						<Image
							src={`/${post.id}.png`}
							alt={post.title}
							className="w-full h-48 object-cover mb-4 rounded-lg"
							width={512}
							height={512}
							priority={true}
						/>

						<div className="flex-grow">
							<h2 className="text-2xl font-bold mb-2 text-gray-900">
								{post.title}
							</h2>
							<p className="text-gray-700 mb-2">{post.description}</p>
						</div>
						<div>
							<a
								href={`blog/${post.id}`}
								className="text-blue-500 hover:underline"
							>
								Oku →
							</a>
							<p className="text-gray-500 mt-2">
								{post.date.toLocaleDateString("tr-TR")}
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default BlogList;
