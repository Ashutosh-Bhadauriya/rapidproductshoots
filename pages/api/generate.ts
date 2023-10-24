import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
// @ts-ignore
import cookie from "cookie";
import * as jose from "jose";

type Data = any;
interface ExtendedNextApiRequest extends NextApiRequest {
    body: {
        imageUrl: string;
        prompt: string;
        product_size: string;
        image_resolution: string;
        negative_prompt: string;
        enhance_prompt: boolean;
    };
}

export default async function handler(
    req: ExtendedNextApiRequest,
    res: NextApiResponse<Data>
) {
    const cookies = req.headers.cookie;
    if (cookies === undefined) {
        return res.status(500).send("Error: No cookies found");
    }
    const parsed_cookies = cookie.parse(cookies);
    const token = parsed_cookies.hanko;
    const payload = jose.decodeJwt(token ?? "");

    const prisma = new PrismaClient();
    const credits = await prisma.user.findUnique({
        select: {
            credits: true,
        },
        where: {
            id: payload.sub,
        },
    });
    if (credits === null || credits.credits < 4) {
        return res.status(500).json({ error: "Not enough credits" });
    }

    const imageUrl = req.body.imageUrl;
    const prompt = req.body.prompt;
    const product_size = req.body.product_size;
    const image_resolution = req.body.image_resolution;
    const negative_prompt = req.body.negative_prompt;
    const enhance_prompt = req.body.enhance_prompt;

    // POST request to Replicate to start the prediction process
    let startResponse = await fetch(
        "https://api.replicate.com/v1/predictions",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Token " + process.env.REPLICATE_API_KEY,
            },
            body: JSON.stringify({
                version:
                    "b1c17d148455c1fda435ababe9ab1e03bc0d917cc3cf4251916f22c45c83c7df",
                input: {
                    image_path: imageUrl,
                    scale: 3,
                    prompt: prompt,
                    negative_prompt: negative_prompt,
                    image_num: 4,
                    guidance_scale: 7.5,
                    pixel: image_resolution,
                    product_size: product_size,
                    api_key: enhance_prompt ? process.env.OPENAI_API_KEY : "",
                    manual_seed: 10,
                },
            }),
        }
    );

    let jsonStartResponse = await startResponse.json();
    console.log(jsonStartResponse);
    let endpointUrl = jsonStartResponse.urls.get;

    // GET request to get the status of the generation & return the result when it's ready
    let productImages: string[] | null = null;
    while (!productImages) {
        // Loop in 1s intervals until the alt text is ready
        console.log("polling for result...");
        let finalResponse = await fetch(endpointUrl, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Token " + process.env.REPLICATE_API_KEY,
            },
        });
        let jsonFinalResponse = await finalResponse.json();
        console.log(jsonFinalResponse);

        if (jsonFinalResponse.status === "succeeded") {
            productImages = jsonFinalResponse.output;
            await prisma.user.update({
                where: {
                    id: payload.sub,
                },
                data: {
                    credits: {
                        decrement: 4,
                    },
                },
            });
        } else if (jsonFinalResponse.status === "failed") {
            break;
        } else {
            await new Promise((resolve) => setTimeout(resolve, 1000));
        }
    }
    if (productImages !== null) {
        res.status(200).send(productImages);
    } else {
        res.status(500).json({ error: "Failed to generate image" });
    }
}
