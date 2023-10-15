import { cookies } from "next/headers";
import * as jose from "jose";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const token = cookies().get("hanko")?.value;
    const payload = jose.decodeJwt(token ?? "");
    return res.status(200).send({ user_id: payload.sub });
}
