import type { NextApiRequest, NextApiResponse } from "next";
// @ts-ignore
import cookie from "cookie";
import * as jose from "jose";
import { PrismaClient } from "@prisma/client";

type Data = string;
interface ExtendedNextApiRequest extends NextApiRequest {
    body: {
        id: string;
        email: string;
    };
}

export default async function handler(
    req: ExtendedNextApiRequest,
    res: NextApiResponse<Data>
) {
    const reqCookies = req.headers.cookie;
    if (reqCookies === undefined) {
        return res.status(500).send("Error: No cookies found");
    }
    const parsed_cookies = cookie.parse(reqCookies);
    const hanko = parsed_cookies.hanko;
    const data = await req.body;
    const payload = await jose.decodeJwt(hanko ?? "");

    if (payload.sub !== data.id) {
        return new Response(null, {
            status: 403,
        });
    }

    const userCookie = parsed_cookies.user;
    if (!userCookie || userCookie === "") {
        const user = await createUserOrGetUser(data.id, data.email);
        res.setHeader(
            "set-cookie",
            `user=${JSON.stringify(user)}; path=/; samesite=lax; httponly;`
        );
        return res.status(200).json(JSON.stringify(user));
    }
    return res.status(200).json(userCookie);
}

const createUserOrGetUser = async (id: string, email: string) => {
    const prisma = new PrismaClient();
    const user = await prisma.user.findUnique({
        where: {
            id: id,
        },
    });

    if (!user) {
        console.log("POST api/auth: creating new user");
        const newUser = await prisma.user.create({
            data: {
                id,
                email,
                credits: 40,
            },
        });

        return newUser;
    }

    console.log("POST api/auth: retrieving existing user");
    return user;
};
