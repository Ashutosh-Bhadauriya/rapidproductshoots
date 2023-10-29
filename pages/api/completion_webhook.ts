import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const query = req.query;
    const user_id = query.user_id;
    const generation_id = query.generation_id;
    const original_image = query.original_image;
    const webhookData = req.body;
    const prisma = new PrismaClient();
    await prisma.generations.update({
        where: {
            id: generation_id as string,
        },
        data: {
            generated_images: webhookData.output,
        },
    });
    res.send(200);
}
