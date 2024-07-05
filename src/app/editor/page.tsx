"use client";

import createJwt from "@/app/admin/createJwt";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Home = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const router = useRouter();

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		try {
			const token = await createJwt({ username, password });
			if (token !== undefined) {
				sessionStorage.setItem("token", token);
				router.push("/admin");
			} else {
				alert("Invalid credentials");
			}
		} catch (error) {
			console.error("Login failed", error);
		}
	};

	return (
		<div className="flex items-center justify-center min-h-screen bg-gray-100">
			<div className="p-8 bg-white shadow-md rounded">
				<h1 className="text-2xl font-bold mb-4">Login</h1>
				<form onSubmit={handleSubmit}>
					<div className="mb-4">
						<label className="block text-gray-700">Kullanıcı Adı</label>
						<input
							type="text"
							value={username}
							onChange={(e) => setUsername(e.target.value)}
							className="w-full p-2 border border-gray-300 rounded mt-1"
						/>
					</div>
					<div className="mb-4">
						<label className="block text-gray-700">Şifre</label>
						<input
							type="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							className="w-full p-2 border border-gray-300 rounded mt-1"
						/>
					</div>
					<button
						type="submit"
						className="w-full bg-blue-500 text-white py-2 rounded"
					>
						Giriş Yap
					</button>
				</form>
			</div>
		</div>
	);
};

export default Home;
