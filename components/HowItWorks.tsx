"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useReward } from "react-rewards";
import Image from "next/image";

export default function HowItWorks() {
    const [step, setStep] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setStep((step) => (step + 1) % 3);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const { reward, isAnimating } = useReward("rewardId", "confetti", {
        lifetime: 500,
        elementCount: 100,
        spread: 600,
    });

    const currentStepImage = (step: number) => {
        switch (step) {
            case 0:
                return "/shoot-2-base-solid.jpg";
            case 1:
                return "/mockup-final.png";
            case 2:
                return "/shoot-2-result-3.jpg";
            default:
                return "/shoot-2-base-solid.jpg";
        }
    };

    return (
        <section id="howitworks">
            <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
                <p className="animate-text-rainbow bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-center text-sm font-bold uppercase">
                    3 easy steps
                </p>
                <h2 className="text-center text-3xl font-bold md:text-5xl">
                    How it works
                </h2>
                <p className="mx-auto mb-8 mt-4 max-w-lg text-center text-sm text-[#636262] sm:text-base md:mb-12 lg:mb-16">
                    Generating product shoots is as easy as 1, 2, 3. All you
                    need to do is upload a picture of your product and the
                    setting you want it in and watch the magic happen.
                </p>
                <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
                    <div className="flex h-full flex-col [grid-area:2/1/3/2] lg:[grid-area:1/2/2/3]">
                        <div
                            id="howto-step-1"
                            className={
                                "mb-8 flex max-w-lg justify-center gap-4 rounded-xl px-5 py-5 text-[#222222] box-border border border-solid" +
                                (step === 0
                                    ? " border-slate-900 border-2"
                                    : " border-[#cdcdcd]")
                            }
                        >
                            <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-[#f2f2f7]">
                                <p className="text-sm font-bold sm:text-base">
                                    1
                                </p>
                            </div>
                            <div className="ml-4 flex flex-col gap-2">
                                <h5 className="text-xl font-bold">
                                    Upload Product Picture
                                </h5>
                                <p className="text-sm text-[#636262]">
                                    Just upload a clear picture of your product
                                    taken on your smartphone and upload it to
                                    our website.
                                </p>
                            </div>
                        </div>
                        <div
                            id="howto-step-2"
                            className={
                                "mb-8 flex max-w-lg justify-center gap-4 rounded-xl px-5 py-5 text-[#222222] box-border border border-solid" +
                                (step === 1
                                    ? " border-slate-900 border-2"
                                    : " border-[#cdcdcd]")
                            }
                        >
                            <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-[#f2f2f7]">
                                <p className="text-sm font-bold sm:text-base">
                                    2
                                </p>
                            </div>
                            <div className="ml-4 flex flex-col gap-2">
                                <h5 className="text-xl font-bold">
                                    Describe the Setting
                                </h5>
                                <p className="text-sm text-[#636262]">
                                    Describe the setting you want your product
                                    shoots in like the lighting, aesthetics,
                                    background props and so on.
                                </p>
                            </div>
                        </div>
                        <div
                            id="howto-step-3"
                            className={
                                "mb-8 flex max-w-lg justify-center gap-4 rounded-xl px-5 py-5 text-[#222222] box-border border border-solid" +
                                (step === 2
                                    ? " border-slate-900 border-2"
                                    : " border-[#cdcdcd]")
                            }
                        >
                            <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-[#f2f2f7]">
                                <p className="text-sm font-bold sm:text-base">
                                    3
                                </p>
                            </div>
                            <div className="ml-4 flex flex-col gap-2">
                                <h5 className="text-xl font-bold animate-text-rainbow bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent">
                                    Boost Sales
                                </h5>
                                <p className="text-sm text-[#636262]">
                                    Wait for a few seconds as our AI does the
                                    hard work and use the beautiful product
                                    shoots to boost your sales.
                                </p>
                            </div>
                        </div>
                        <Link
                            className="bg-black rounded-xl text-white font-medium px-4 py-3 hover:bg-black/80"
                            href="/create"
                        >
                            Get Started With Your First Shoot
                        </Link>
                    </div>
                    <span id="rewardId" />
                    <Image
                        src={currentStepImage(step)}
                        alt="Stages of product shoot generation"
                        width={5000}
                        height={5000}
                        className={
                            "rounded-xl block h-full w-full overflow-hidden [grid-area:1/1/2/2] lg:[grid-area:1/1/2/2]" +
                            (step === 1
                                ? " border-2 border-slate-900 border-solid"
                                : "")
                        }
                    />
                </div>
            </div>
        </section>
    );
}
