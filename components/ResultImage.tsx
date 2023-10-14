import { useState, useEffect } from "react";
import downloadPhoto from "../utils/downloadPhoto";
import LoadingDots from "./LoadingDots";

export default function ResultImage({ src, alt, generated }: any) {
    const [image, setImage] = useState("");
    useEffect(() => {
        setImage(src);
    }, [src]);

    return (
        <div className="flex-col justify-center items-center">
            <img
                src={src}
                alt={alt}
                className="w-96 h-96 rounded-2xl mt-4 mb-2 p-2 border-2 border-slate-300"
            />
            {!generated && <div className="text-base mt-4">{alt}</div>}
            {generated && (
                <div className="flex justify-center items-center basis-0">
                    <button
                        className="text-base mr-2 rounded-xl text-slate-900 bg-slate-200 font-medium w-1/2 py-3 hover:bg-slate-300"
                        onClick={() =>
                            downloadPhoto(image, "product-shoot.png")
                        }
                    >
                        Download
                    </button>
                </div>
            )}
        </div>
    );
}
