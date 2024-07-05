"use client";

import "@/app/globals.css";
import useAuth from "@/app/admin/useAuth";
import Link from "next/link";

interface RootLayoutProps {
	children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
	const { isAuthenticated, loading } = useAuth();

	if (loading) return <div>Yükleniyor...</div>;
	if (!isAuthenticated) {
		return (
			<Link href="/editor" className="text-center text-xl font-bold">
				Lütfen giriş yapınız
			</Link>
		);
	}

	return children;
};

export default RootLayout;
