import * as jose from "jose";
import type { NextApiRequest, NextApiResponse } from "next";
// @ts-ignore
import cookie from "cookie";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const cookies = req.headers.cookie;
    if(cookies === undefined) {
        return res.status(200).send({ user_id: null });
    }
    const parsed_cookies = cookie.parse(cookies);
    const token = parsed_cookies.hanko;
    const payload = jose.decodeJwt(token ?? "");
    return res.status(200).send({ user_id: payload.sub });
}
