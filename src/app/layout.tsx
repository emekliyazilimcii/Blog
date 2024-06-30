import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/_components/Header";
import Footer from "@/_components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Emekli Yazılımcı",
	description: "Emekli Yazılımcı",
};

interface RootLayoutProps {
	children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => (
	<html lang="en">
		<body className={inter.className}>
			<div className="flex flex-col h-screen justify-between">
				<Header />
				<div className="mb-auto">{children}</div>
				<Footer />
			</div>
		</body>
	</html>
);

export default RootLayout;
