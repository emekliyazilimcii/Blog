import { promises as fs } from "node:fs";
import { join } from "node:path";
import RSS from "rss";
import matter from "gray-matter";

async function generate() {
	const feed = new RSS({
		title: "Emekli Yazılımcı",
		site_url: "https://emekliyazilimci.com",
		feed_url: "https://emekliyazilimci.com/feed.xml",
	});

	const posts = await fs.readdir(join(__dirname, "..", "pages", "posts"));

	await Promise.all(
		posts.map(async (name) => {
			if (name.startsWith("index.")) return;

			const content = await fs.readFile(
				join(__dirname, "..", "pages", "posts", name),
			);
			const frontmatter = matter(content);

			feed.item({
				title: frontmatter.data.title,
				url: `/posts/${name.replace(/\.mdx?/, "")}`,
				date: frontmatter.data.date,
				description: frontmatter.data.description,
				categories: frontmatter.data.tag.split(", "),
				author: frontmatter.data.author,
			});
		}),
	);

	await fs.writeFile("./public/feed.xml", feed.xml({ indent: true }));
}

generate();
