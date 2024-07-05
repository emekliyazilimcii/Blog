import { MDXRemote } from "next-mdx-remote/rsc";
import dynamic from "next/dynamic";
import { Suspense, useState } from "react";
import "react-markdown-editor-lite/lib/index.css";
import { markdownComponents } from "../markdownComponent";

const MdEditor = dynamic(() => import("react-markdown-editor-lite"), {
	ssr: false,
});

interface MarkdownEditorProps {
	content: string;
	onChange: (content: string) => void;
}

const MarkdownEditor: React.FC<MarkdownEditorProps> = ({
	content,
	onChange,
}) => {
	const [markdown, setMarkdown] = useState(content);

	const handleEditorChange = ({ text }: { text: string }) => {
		setMarkdown(text);
		onChange(text);
	};

	return (
		<MdEditor
			value={markdown}
			style={{ height: "500px" }}
			renderHTML={(text: string) => (
				<Suspense fallback={<>Yükleniyor...</>}>
					<MDXRemote source={text} components={markdownComponents} />
				</Suspense>
			)}
			onChange={handleEditorChange}
		/>
	);
};

export default MarkdownEditor;
