"use client";

import AdminNavigation from "@/_components/admin/AdminNavigation";
import useAuth from "@/_components/admin/useAuth";
import "@/app/globals.css";
import Link from "next/link";

interface RootLayoutProps {
	children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
	const { isAuthenticated, loading } = useAuth();

	if (loading) return <div>Yükleniyor...</div>;
	if (!isAuthenticated) {
		return (
			<Link href="/admin-login" className="text-center text-xl font-bold">
				Lütfen giriş yapınız
			</Link>
		);
	}

	return (
		<>
			<AdminNavigation />
			{children}
		</>
	);
};

export default RootLayout;
