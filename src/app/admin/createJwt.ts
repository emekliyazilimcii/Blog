"use server";

import { sign } from "jsonwebtoken";

interface CreateJwtProps {
	username: string;
	password: string;
}

const createJwt = async ({
	username,
	password,
}: CreateJwtProps): Promise<string | undefined> => {
	console.log({ username, password });
	if (
		username === "emekliyazilimci" &&
		password === process.env.ADMIN_PASSWORD
	) {
		const secret = process.env.NEXTAUTH_SECRET;

		if (secret === undefined) {
			return undefined;
		}

		const token = sign({}, secret, { expiresIn: "24h" });

		return token;
	}

	return undefined;
};

export default createJwt;
