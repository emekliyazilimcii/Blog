// components/ShareButtons.tsx
"use client";

import type React from "react";
import {
	EmailIcon,
	EmailShareButton,
	FacebookIcon,
	FacebookShareButton,
	RedditIcon,
	RedditShareButton,
	TwitterShareButton,
	WhatsappIcon,
	WhatsappShareButton,
	XIcon,
} from "react-share";

interface ShareButtonsProps {
	url: string;
	title: string;
}

const ShareButtons: React.FC<ShareButtonsProps> = ({ url, title }) => {
	return (
		<div className="fixed left-0 top-1/4 flex flex-col space-y-2 p-2 bg-white shadow-lg rounded-r-lg z-10">
			<EmailShareButton
				url={url}
				subject={title}
				body={"Bu blog postuna bak!"}
				separator=" "
				openShareDialogOnClick={true}
			>
				<EmailIcon size={32} round={true} />
			</EmailShareButton>

			<div>
				<FacebookShareButton url={url} title={title}>
					<FacebookIcon size={32} round={true} />
				</FacebookShareButton>
			</div>

			<div>
				<RedditShareButton url={url} title={title}>
					<RedditIcon size={32} round={true} />
				</RedditShareButton>
			</div>

			<TwitterShareButton url={url} title={title}>
				<XIcon size={32} round={true} />
			</TwitterShareButton>

			<WhatsappShareButton url={url} title={title}>
				<WhatsappIcon size={32} round={true} />
			</WhatsappShareButton>
		</div>
	);
};

export default ShareButtons;
