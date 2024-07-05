// components/AdminNavigation.js
import Link from "next/link";

const AdminNavigation = () => {
	return (
		<nav className="bg-gray-800 p-4 flex justify-center items-center min-h-[64px]">
			<ul className="flex space-x-4">
				<li>
					<Link href="/admin/blog" className="text-white hover:text-gray-300">
						Blog
					</Link>
				</li>
				<li>
					<Link href="/admin/x" className="text-white hover:text-gray-300">
						Page X
					</Link>
				</li>
				<li>
					<Link href="/admin/y" className="text-white hover:text-gray-300">
						Page Y
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default AdminNavigation;
