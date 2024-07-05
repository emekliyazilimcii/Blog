import { useEffect, useState } from "react";
import checkJwt from "@/app/admin/checkJwt";

interface UseAuthReturn {
	isAuthenticated: boolean;
	loading: boolean;
}

const useAuth = (): UseAuthReturn => {
	const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		const token = sessionStorage.getItem("token");

		if (!token) {
			setLoading(false);
			return;
		}

		const validateToken = async () => {
			try {
				const isValid = await checkJwt({ token });
				setIsAuthenticated(isValid);
			} catch (error) {
				console.error("Token validation error:", error);
				setIsAuthenticated(false);
			} finally {
				setLoading(false);
			}
		};

		validateToken();
	}, []);

	return { isAuthenticated, loading };
};

export default useAuth;
