import type { NextApiRequest, NextApiResponse } from "next";
// @ts-ignore
import cookie from "cookie";
import * as jose from "jose";
import { PrismaClient } from "@prisma/client";

type Data = string;

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const reqCookies = req.headers.cookie;
    if (reqCookies === undefined) {
        return res.status(500).send("Error: No cookies found");
    }
    const parsed_cookies = cookie.parse(reqCookies);
    const userCookie = parsed_cookies.user;
    if (userCookie) {
        res.setHeader("set-cookie", `user=""; path=/; samesite=lax; httponly;`);
    }
    return res.status(200).json("Successfully logged out");
}
