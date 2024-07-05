"use server";

import { verify } from "jsonwebtoken";

interface CreateJwtProps {
	token: string;
}

const checkJwt = async ({ token }: CreateJwtProps): Promise<boolean> => {
	const secret = process.env.NEXTAUTH_SECRET;

	if (secret === undefined) {
		return false;
	}

	try {
		verify(token, secret);

		return true;
	} catch (err) {
		return false;
	}
};

export default checkJwt;
