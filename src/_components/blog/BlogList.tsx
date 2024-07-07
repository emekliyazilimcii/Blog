import type { BlogPostInfo } from "@/_types/blog/BlogPost";
import Image from "next/image";

interface BlogListProps {
	posts: BlogPostInfo[];
}

const BlogList: React.FC<BlogListProps> = ({ posts }) => {
	return (
		<div className="p-6">
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
				{posts.map((post) => (
					<div
						key={post.blogPost.title}
						className="bg-gray-100 p-4 rounded-lg flex flex-col justify-between h-full"
					>
						<a
							href={`blog/${post.blogPost.id}`}
							className="text-blue-500 hover:underline"
						>
							<Image
								src={post.blogpostTeaserImage}
								alt={post.blogPost.title}
								className="w-full h-48 object-cover mb-4 rounded-lg"
								width={512}
								height={512}
								priority={true}
							/>
						</a>
						<div className="flex-grow">
							<h2 className="text-2xl font-bold mb-2 text-gray-900">
								{post.blogPost.title}
							</h2>
							<p className="text-gray-700 mb-2">{post.blogPost.description}</p>
							<div className="flex flex-wrap mb-2">
								{post.blogPost.tags?.map((tag) => (
									<span
										key={tag}
										className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded"
									>
										{tag}
									</span>
								))}
							</div>
						</div>
						<div>
							<a
								href={`blog/${post.blogPost.id}`}
								className="text-blue-500 hover:underline"
							>
								Oku →
							</a>
							<p className="text-gray-500 mt-2">
								{new Date(post.blogPost.date).toLocaleDateString("tr-TR")}
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default BlogList;
