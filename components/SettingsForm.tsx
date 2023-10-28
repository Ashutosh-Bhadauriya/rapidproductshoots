import { useState } from "react";
import LoadingDots from "./LoadingDots";
import { useRouter } from "next/router";

export function SettingsForm({ originalImageUrl }: any) {
    const [prompt, setPrompt] = useState("");
    const [productSize, setProductSize] = useState("0.5 * width");
    const [imageResolution, setImageResolution] = useState("512 * 512");
    const [negativePrompt, setNegativePrompt] = useState(
        "text, watermark, painting, cartoons, sketch, worst quality"
    );
    const [aiPromptEnhancement, setAiPromptEnhancement] = useState(false);
    const [loading, setLoading] = useState(false);

    const router = useRouter();

    async function generatePhotos(e: any) {
        e.preventDefault();
        if (prompt === "") {
            alert("Prompt cannot be empty!");
            return;
        }
        await new Promise((resolve) => setTimeout(resolve, 500));
        setLoading(true);

        const res = await fetch("/api/generate", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                imageUrl: originalImageUrl,
                prompt: prompt,
                product_size: productSize,
                image_resolution: imageResolution,
                negative_prompt: negativePrompt,
                aiPromptEnhancement,
            }),
        });

        let resultant_images = await res.json();
        if (res.status !== 200) {
            if (resultant_images.error === "Not enough credits") {
                alert(
                    "Not enough credits! Please upgrade your plan to continue."
                );
            } else {
                alert("Failed to generate product shoots! Try again later.");
            }
        } else {
            resultant_images.push(originalImageUrl);
            console.log(resultant_images);
            router.push({
                pathname: "/result",
                query: { images: resultant_images },
            });
        }
        setLoading(false);
    }

    return (
        <form className="flex flex-col space-y-4 text-left">
            <label htmlFor="prompt" className="font-bold">
                Prompt
            </label>
            <textarea
                className="border-2 border-slate-200 rounded-md p-2 !mt-1"
                id="prompt"
                placeholder="bottle on a wooden platform, adorned with a beautiful flowers and surrounded by colorful decorative elements and greenery"
                onChange={(e) => setPrompt(e.target.value)}
            />
            <label htmlFor="product_size" className="font-bold">
                Product Size
            </label>
            <select
                id="product_size"
                className="border-2 border-slate-200 rounded-md p-2 !mt-1"
                onChange={(e) => setProductSize(e.target.value)}
            >
                <option value="original">Original Product Size</option>
                <option value="0.6 * width">60% Original Product Size</option>
                <option value="0.5 * width" selected={true}>
                    50% Original Product Size
                </option>
                <option value="0.4 * width">40% Original Product Size</option>
                <option value="0.3 * width">30% Original Product Size</option>
                <option value="0.2 * width">20% Original Product Size</option>
            </select>
            <label htmlFor="image_resolution" className="font-bold">
                Image Resolution
            </label>
            <select
                id="image_resolution"
                className="border-2 border-slate-200 rounded-md p-2 !mt-1"
                onChange={(e) => setImageResolution(e.target.value)}
            >
                <option value="512 * 512">512 * 512</option>
                <option disabled={true} value="768 * 768">
                    768 * 768
                </option>
                <option disabled={true} value="1024 * 1024">
                    1024 * 1024
                </option>
            </select>
            <label htmlFor="negative_prompt" className="font-bold">
                Negative Prompt
            </label>
            <input
                id="negative_prompt"
                type="text"
                className="border-2 border-slate-200 rounded-md p-2 !mt-1"
                placeholder="Enter negative prompt for product shoot"
                defaultValue="text, watermark, painting, cartoons, sketch, worst quality"
                onChange={(e) => setNegativePrompt(e.target.value)}
            />
            <div className="whitespace-nowrap">
                <input
                    className="mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-slate-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]"
                    type="checkbox"
                    role="switch"
                    id="ai_prompt_enhancement"
                    onChange={(e) => setAiPromptEnhancement(e.target.checked)}
                />
                <label
                    className="inline pl-[0.15rem] hover:cursor-pointer font-bold"
                    htmlFor="ai_prompt_enhancement"
                >
                    ✨Enhance Prompt with AI✨
                </label>
            </div>
            {loading && (
                <button className="bg-black/80 rounded-xl h-full text-white font-medium px-4 py-3 ">
                    <LoadingDots color="white" style="large" />
                </button>
            )}
            {!loading && (
                <button
                    type="submit"
                    className="bg-black rounded-xl h-full text-white font-medium px-4 py-3 hover:bg-black/80"
                    onClick={(e) => generatePhotos(e)}
                >
                    Generate
                </button>
            )}
        </form>
    );
}
