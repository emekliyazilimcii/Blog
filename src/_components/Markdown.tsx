import type React from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkCollapse from "remark-collapse";
import remarkDirective from "remark-directive";
import remarkEmoji from "remark-emoji";
import remarkFrontmatter from "remark-frontmatter";
import remarkGfm from "remark-gfm";
import remarkHtml from "remark-html";
import remarkImages from "remark-images";
import remarkLint from "remark-lint";
import remarkMath from "remark-math";
import remarkSlug from "remark-slug";
import remarkToc from "remark-toc";
import remarkUnwrapImages from "remark-unwrap-images";

interface MarkdownProps {
	content: string;
}

const Markdown: React.FC<MarkdownProps> = ({ content }) => (
	<ReactMarkdown
		remarkPlugins={[
			remarkGfm,
			remarkLint,
			remarkToc,
			remarkMath,
			remarkFrontmatter,
			remarkHtml,
			remarkImages,
			remarkEmoji,
			remarkSlug,
			remarkDirective,
			remarkUnwrapImages,
			[remarkCollapse, { test: /^details$/ }],
		]}
		rehypePlugins={[rehypeRaw]}
	>
		{content}
	</ReactMarkdown>
);

export default Markdown;
