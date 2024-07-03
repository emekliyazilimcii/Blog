import Hero from "@/_components/Hero";
import BlogList from "@/_components/blog/BlogList";

import getSortedAllPosts from "@/_components/blog/getSortedAllPosts";

const Home: React.FC = () => {
	const posts = getSortedAllPosts();

	return (
		<>
			<Hero />
			<h1 className="pl-5 font-display font-medium tracking-tight text-slate-900 text-3xl">
				Blog Yazıları
			</h1>
			<BlogList posts={posts} />
		</>
	);
};

export default Home;
