import PostUpdator from "@/_components/admin/blog/[slug]/PostUpdator";
import fetchPost from "@/_components/fetchPost";

interface HomeProps {
	params: {
		slug: string;
	};
}

const Home: React.FC<HomeProps> = async ({ params }) => {
	const slug = params.slug;

	const post = await fetchPost({ id: slug });

	if (!post) {
		return (
			<div className="min-h-screen flex items-center justify-center">
				Failed to load the post!
			</div>
		);
	}

	const initTeaserImage = post.TeaserImage;
	const initPostName = post.Name;
	const initPostContent = post.Content;

	return (
		<PostUpdator
			initTeaserImage={initTeaserImage ?? ""}
			initPostName={initPostName ?? ""}
			initPostContent={initPostContent ?? ""}
			postId={slug}
		/>
	);
};

export default Home;
