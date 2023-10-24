import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
// @ts-ignore
import cookie from "cookie";
import * as jose from "jose";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const prisma = new PrismaClient();
    const cookies = req.headers.cookie;
    if (cookies === undefined) {
        return res.status(200).send({ credits: 0 });
    }
    const parsed_cookies = cookie.parse(cookies);
    const token = parsed_cookies.hanko;
    const payload = jose.decodeJwt(token ?? "");
    const credits = await prisma.user.findUnique({
        select: {
            credits: true,
        },
        where: {
            id: payload.sub,
        },
    });
    res.status(200).json({
        remainingGenerations: credits === null ? 0 : credits.credits,
    });
}
