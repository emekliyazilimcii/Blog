import BlogList from "@/_components/blog/BlogList";
import getSortedPostsData from "@/_components/blog/getSortedPostsData";

const Home = async () => {
	const posts = await getSortedPostsData();

	return <BlogList posts={posts} />;
};

export default Home;
