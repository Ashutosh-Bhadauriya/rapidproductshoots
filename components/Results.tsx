import { useState } from "react";
import ResultImage from "./ResultImage";

export default function Results({ images }: any) {
    return (
        // <div className="flex flex-wrap justify-center space-x-4 space-y-4">
        //     <h2 className="mx-auto max-w-4xl font-display text-xl font-bold tracking-normal text-slate-900 sm:text-3xl mb-5">
        //         Original Images
        //         <div className="flex justify-between items-center mt-4 m-auto space-x-32">
        //             <ResultImage src={images[5]} alt="Original product photo" />
        //             <ResultImage
        //                 src={images[0]}
        //                 alt="Product photo without background"
        //             />
        //         </div>
        //     </h2>
        //     <h2 className="mx-auto max-w-4xl font-display text-xl font-bold tracking-normal text-slate-900 sm:text-3xl mb-5">
        //         Generated Product Shoots
        //         <div className="flex justify-between items-center mt-4 flex-wrap">
        //             {images.map((image: string, index: number) => {
        //                 if (index > 0 && index < 5) {
        //                     return (
        //                         <ResultImage
        //                             src={image}
        //                             alt="Generated product shoot"
        //                         />
        //                     );
        //                 }
        //             })}
        //         </div>
        //     </h2>
        // </div>
        <div className="grid grid-cols-3 grid-rows-2 text-xl font-bold tracking-normal text-slate-900 sm:text-3xl gap-8">
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
    );
}
