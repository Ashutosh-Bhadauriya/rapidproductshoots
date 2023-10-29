import { useState } from "react";
import ResultImage from "./ResultImage";

export default function Results({ images }: any) {
    return (
        <>
            <div className="hidden invisible md:visible md:grid grid-cols-3 grid-rows-2 text-xl font-bold tracking-normal text-slate-900 sm:text-3xl gap-8">
                <ResultImage src={images[5]} alt="Original product photo" />
                <ResultImage
                    src={images[1]}
                    alt="Generated product shoot"
                    generated={true}
                />
                <ResultImage
                    src={images[2]}
                    alt="Generated product shoot"
                    generated={true}
                />
                <ResultImage
                    src={images[0]}
                    alt="Product photo without background"
                />
                <ResultImage
                    src={images[3]}
                    alt="Generated product shoot"
                    generated={true}
                />
                <ResultImage
                    src={images[4]}
                    alt="Generated product shoot"
                    generated={true}
                />
            </div>
            <div className="md:hidden md:invisible flex flex-col text-xl font-bold tracking-normal text-slate-900 sm:text-3xl">
                <ResultImage src={images[5]} alt="Original product photo" />
                <ResultImage
                    src={images[0]}
                    alt="Product photo without background"
                />
                <ResultImage
                    src={images[1]}
                    alt="Generated product shoot"
                    generated={true}
                />
                <ResultImage
                    src={images[2]}
                    alt="Generated product shoot"
                    generated={true}
                />
                <ResultImage
                    src={images[3]}
                    alt="Generated product shoot"
                    generated={true}
                />
                <ResultImage
                    src={images[4]}
                    alt="Generated product shoot"
                    generated={true}
                />
            </div>
        </>
    );
}
