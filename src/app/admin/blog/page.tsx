import fetchPosts from "@/_components/fetchPosts";
import Link from "next/link";
import type React from "react";

const Home: React.FC = async () => {
	const data = await fetchPosts();

	return (
		<div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
			<div className="relative py-3 sm:max-w-xl sm:mx-auto">
				<div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl" />
				<div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
					<h1 className="text-3xl font-bold mb-6 text-center">Blog Postları</h1>
					<ul className="space-y-4">
						{data.map((row) => (
							<li
								key={row._id}
								className="bg-gray-50 shadow-md rounded-lg p-6 hover:bg-gray-100 transition duration-200"
							>
								<Link href={`/admin/blog/${encodeURIComponent(row._id)}`}>
									<div className="block text-lg font-semibold text-gray-700 hover:text-gray-900">
										{row.Name}
									</div>
									<p className="mt-2 text-sm text-gray-500">
										Oluşturuldu: {new Date(row.createdAt).toLocaleString()}
									</p>
									<p className="text-sm text-gray-500">
										Güncellendi: {new Date(row.updatedAt).toLocaleString()}
									</p>
								</Link>
							</li>
						))}
					</ul>
					<div className="mt-6 text-center">
						<Link
							href="/admin/blog/create"
							className="text-lg font-semibold text-teal-500 hover:text-teal-700"
						>
							Yeni Oluştur
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
