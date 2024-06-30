import { SiInstagram, SiGithub, SiYoutube, SiX } from "react-icons/si";

const Footer: React.FC = () => {
	return (
		<footer className="bg-white py-4 border-t border-gray-300">
			<div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between">
				<div className="flex space-x-4 max-lg:m-4">
					<a
						href="www.google.com"
						target="_blank"
						rel="noreferrer"
						aria-label="Instagram"
						className="text-gray-600 hover:text-gray-800 hidden"
					>
						<SiInstagram className="h-6 w-6" />
					</a>
					<a
						href="https://x.com/emekliyazilimc"
						target="_blank"
						rel="noreferrer"
						aria-label="X"
						className="text-gray-600 hover:text-gray-800"
					>
						<SiX className="h-6 w-6" />
					</a>
					<a
						href="https://github.com/emekliyazilimcii/blog"
						target="_blank"
						rel="noreferrer"
						aria-label="GitHub"
						className="text-gray-600 hover:text-gray-800"
					>
						<SiGithub className="h-6 w-6" />
					</a>
					<a
						href="www.google.com"
						target="_blank"
						rel="noreferrer"
						aria-label="YouTube"
						className="text-gray-600 hover:text-gray-800 hidden"
					>
						<SiYoutube className="h-6 w-6" />
					</a>
				</div>
				<b className="text-gray-600 text-sm">
					Burada yazılanların hiçbiri yatırım tavsiyesi değildir!
				</b>
			</div>
		</footer>
	);
};

export default Footer;
