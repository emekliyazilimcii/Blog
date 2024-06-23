"use client";

import Giscus from "@giscus/react";

const Comments = () => {
	return (
		<Giscus
			repo="emekliyazilimcii/blog"
			repoId="R_kgDOL290zQ"
			category="Announcements"
			categoryId="DIC_kwDOL290zc4CfIa9"
			mapping="pathname"
			reactionsEnabled="1"
			emitMetadata="0"
			inputPosition="top"
			theme="preferred_color_scheme"
			lang="en"
			loading="lazy"
		/>
	);
};

export default Comments;
