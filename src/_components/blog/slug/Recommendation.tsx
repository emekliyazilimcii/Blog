import getSortedAllPosts from "@/_components/blog/getSortedAllPosts";
import calculateSimilarity from "@/_components/blog/slug/calculateSimilarity";
import type { BlogPost } from "@/_types/blog/BlogPost";
import Link from "next/link";

interface RecommendationProps {
	currentPost: BlogPost;
}

const Recommendation: React.FC<RecommendationProps> = async ({
	currentPost,
}) => {
	const allPosts = await getSortedAllPosts();

	if (!currentPost) return null;

	const recommendedPosts = allPosts
		.filter((post) => post.id !== currentPost.id)
		.map((post) => ({
			...post,
			similarity: calculateSimilarity(currentPost, post),
		}))
		.sort((a, b) => b.similarity - a.similarity)
		.slice(0, 4);

	return (
		<div className="mt-8">
			<h2 className="text-2xl font-bold mb-4">Önerilen Blog Yazıları</h2>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
				{recommendedPosts.map((post) => (
					<div key={post.id} className="bg-gray-100 p-4 rounded-lg">
						<h3 className="text-xl font-semibold mb-2">{post.title}</h3>
						<p className="text-gray-700 mb-4">{post.description}</p>
						<Link
							href={`/blog/${post.id}`}
							className="text-blue-500 hover:underline"
						>
							Oku →
						</Link>
					</div>
				))}
			</div>
		</div>
	);
};

export default Recommendation;
