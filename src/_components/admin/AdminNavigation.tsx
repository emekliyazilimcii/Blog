// components/AdminNavigation.js
import Link from "next/link";

const AdminNavigation = () => {
	return (
		<nav className="bg-gray-800 p-4 flex justify-center items-center min-h-[64px]">
			<ul className="flex space-x-4">
				<li>
					<Link href="/admin" className="text-white hover:text-gray-300">
						Ana Sayfa
					</Link>
				</li>
				<li>
					<Link href="/admin/blog" className="text-white hover:text-gray-300">
						Blog
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default AdminNavigation;
