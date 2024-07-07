import type { BlogPost } from "@/_types/blog/BlogPost";
import natural from "natural";

const calculateSimilarity = (post1: BlogPost, post2: BlogPost): number => {
	const tokenizer = new natural.WordTokenizer();
	const post1Tokens = tokenizer.tokenize(post1.content.toLowerCase());
	const post2Tokens = tokenizer.tokenize(post2.content.toLowerCase());

	const tfidf = new natural.TfIdf();
	tfidf.addDocument(post1Tokens);
	tfidf.addDocument(post2Tokens);

	const similarity = tfidf.tfidf(post1Tokens.join(" "), 1);

	return similarity;
};

export default calculateSimilarity;
