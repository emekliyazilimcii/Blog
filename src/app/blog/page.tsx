import BlogList from "@/_components/blog/BlogList";
import getSortedAllPosts from "@/_components/blog/getSortedAllPosts";

const Home = () => {
	const posts = getSortedAllPosts();

	return <BlogList posts={posts} />;
};

export default Home;
