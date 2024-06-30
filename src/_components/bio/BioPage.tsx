import Image from "next/image";
import profilePic from "@/../public/profile.png";

interface BioPageProps {
	name: string;
	profession: string;
	description: string;
	backgroundImage: string;
}

const BioPage: React.FC<BioPageProps> = ({
	name,
	profession,
	description,
	backgroundImage,
}) => {
	return (
		<div className="relative">
			<div
				className="h-96 bg-cover bg-center"
				style={{ backgroundImage: `url(${backgroundImage})` }}
			>
				<div className="h-96 inset-0 bg-black opacity-50" />
			</div>
			<div className="absolute top-24 left-0 right-0 text-center">
				<Image
					src={profilePic}
					alt={name}
					className="mx-auto rounded-full border-4 border-white h-24 w-24"
					placeholder="blur"
				/>
				<h1 className="text-white text-2xl font-semibold mt-2">{name}</h1>
				<p className="text-white">{profession}</p>
				<div className="flex justify-center mt-4 space-x-8">
					<div className="text-white text-center">
						<p className="text-lg">100/100</p>
						<p className="text-sm">Finansal özgür olma isteği</p>
					</div>
					<div className="text-white text-center">
						<p className="text-lg">90/100</p>
						<p className="text-sm">Motivasyonu</p>
					</div>
					<div className="text-white text-center">
						<p className="text-lg">80/100</p>
						<p className="text-sm">Harekete geçme isteği</p>
					</div>
				</div>
				<div className="mt-12">
					<a
						href="/blog"
						className="bg-blue-500 text-white px-4 py-2 rounded-full"
					>
						Blog Yazılarım
					</a>
				</div>
			</div>
			<div className="bg-white p-8 mt-16 text-center">
				<h2 className="text-xl font-semibold">Hakkımda</h2>
				<p className="mt-4 text-gray-600">{description}</p>
			</div>
		</div>
	);
};

export default BioPage;
