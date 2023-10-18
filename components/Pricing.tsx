import { useState } from "react";

export default function Pricing() {
    const [isMonthly, setIsMonthly] = useState(true);
    const pricing = {
        monthly: {
            free: "$0",
            pro: "$4.99",
            ultimate: "$19.99",
        },
        annually: {
            free: "$0",
            pro: "$49.99",
            ultimate: "$199.99",
        },
    };

    const changePlan = (plan: string) => () => {
        console.log(plan);
        if (plan === "monthly") {
            setIsMonthly(true);
            document.getElementById("monthly-btn")?.classList.add("text-white");
            document
                .getElementById("monthly-btn")
                ?.classList.remove("text-[#636262]");
            document
                .getElementById("annually-btn")
                ?.classList.add("text-[#636262]");
            document
                .getElementById("annually-btn")
                ?.classList.remove("text-white");
        } else {
            setIsMonthly(false);
            document
                .getElementById("monthly-btn")
                ?.classList.add("text-[#636262]");
            document
                .getElementById("monthly-btn")
                ?.classList.remove("text-white");
            document
                .getElementById("annually-btn")
                ?.classList.add("text-white");
            document
                .getElementById("annually-btn")
                ?.classList.remove("text-[#636262]");
        }
    };

    return (
        <section id="pricing">
            <div className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24">
                <div className="mx-auto mb-8 max-w-3xl text-center md:mb-12">
                    <h2 className="text-3xl font-bold md:text-5xl">
                        Available Plans
                    </h2>
                    <p className="mx-auto mt-4 max-w-xl text-sm text-[#636262] md:text-base">
                        Choose from our dynamic pricing plans, crafted to fit
                        individuals and businesses of diverse requirements and
                        scale. Experience value instantly, see results, and feel
                        the return on your investment
                    </p>
                </div>
                <div className="relative mx-auto mb-8 flex w-fit cursor-pointer flex-row rounded-xl bg-[#f2f2f2] md:mb-8">
                    <button
                        className="relative z-[5] px-10 py-4"
                        onClick={changePlan("monthly")}
                    >
                        <p
                            id="monthly-btn"
                            className="text-sm font-semibold text-white sm:text-base"
                        >
                            Monthly
                        </p>
                    </button>
                    <button
                        className="relative z-[5] px-10 py-4"
                        onClick={changePlan("annually")}
                    >
                        <p
                            id="annually-btn"
                            className="text-sm font-semibold text-[#636262] sm:text-base"
                        >
                            Annually
                        </p>
                    </button>
                    {isMonthly ? (
                        <div className="absolute left-2 top-[6px] z-0 h-4/5 w-[45%] rounded-md bg-black"></div>
                    ) : (
                        <div className="absolute left-[52%] top-[6px] z-0 h-4/5 w-[45%] rounded-md bg-black"></div>
                    )}
                </div>
                <div className="border w-max m-auto rounded-2xl py-1 px-4 text-slate-500 text-sm mb-5 hover:text-slate-600 transition duration-300 ease-in-out">
                    <span className="font-semibold">Get 2 months free</span>{" "}
                    when you sign up for an annual plan
                </div>
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 md:gap-4">
                    <div className="mx-auto max-w-md items-start rounded-md border border-[#cdcdcd] p-8">
                        <div className="mb-4 w-fit rounded-[5px] bg-black px-4 py-1.5">
                            <p className="text-sm font-bold text-white">FREE</p>
                        </div>
                        <p className="mb-6 text-sm font-light text-[#636262] sm:text-base md:mb-10">
                            Dip your toes into our product shoot AI with our
                            no-cost Free Plan, a perfect way to get a taste of
                            what we offer before upgrading to a premium plan for
                            professional use.
                        </p>
                        <h2 className="mb-5 text-3xl font-bold md:mb-6 md:text-5xl">
                            {isMonthly
                                ? pricing.monthly.free
                                : pricing.annually.free}
                            <span className="text-sm font-light sm:text-sm">
                                {isMonthly ? "/month" : "/year"}
                            </span>
                        </h2>
                        <a
                            href="#"
                            className="mb-5 inline-block w-full rounded-md bg-black px-6 py-3 text-center font-semibold text-white md:mb-6"
                        >
                            Get started
                        </a>
                        <div className="mt-2 flex flex-row items-center">
                            <div className="mr-2 flex w-4 flex-row items-center">
                                <img
                                    src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a94a84be6cf60_check-mark.svg"
                                    alt=""
                                    className="mr-2 inline-block w-4"
                                />
                            </div>
                            <p className="text-sm sm:text-base">
                                12 product shoots per month
                            </p>
                        </div>
                        <div className="mt-2 flex flex-row items-center">
                            <div className="mr-2 flex w-4 flex-row items-center">
                                <img
                                    src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a94a84be6cf60_check-mark.svg"
                                    alt=""
                                    className="mr-2 inline-block w-4"
                                />
                            </div>
                            <p className="text-sm sm:text-base">
                                Low resolution pictures
                            </p>
                        </div>
                        <div className="mt-2 flex flex-row items-center">
                            <div className="mr-2 flex w-4 flex-row items-center">
                                <img
                                    src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a94a84be6cf60_check-mark.svg"
                                    alt=""
                                    className="mr-2 inline-block w-4"
                                />
                            </div>
                            <p className="text-sm sm:text-base">
                                Higher waiting time
                            </p>
                        </div>
                        <div className="mt-2 flex flex-row items-center">
                            <div className="mr-2 flex w-4 flex-row items-center">
                                <img
                                    src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a94a84be6cf60_check-mark.svg"
                                    alt=""
                                    className="mr-2 inline-block w-4"
                                />
                            </div>
                            <p className="text-sm sm:text-base">
                                Watermark on images
                            </p>
                        </div>
                    </div>
                    <div className="mx-auto max-w-md items-start rounded-md border border-[#cdcdcd] bg-[#f2f2f7] p-8">
                        <div className="mb-4 w-fit rounded-[5px] bg-black px-4 py-1.5">
                            <p className="text-sm font-bold text-white">PRO</p>
                        </div>
                        <p className="mb-6 text-sm font-light text-[#636262] sm:text-base md:mb-10">
                            Take your product photography up a notch with our
                            Pro Plan, designed for commercial and professional
                            use-cases enabling high resolution product photos
                            and more.
                        </p>
                        <h2 className="mb-5 text-3xl font-bold md:mb-6 md:text-5xl">
                            {isMonthly
                                ? pricing.monthly.pro
                                : pricing.annually.pro}
                            <span className="text-sm font-light sm:text-sm">
                                {isMonthly ? "/month" : "/year"}
                            </span>
                        </h2>
                        <a
                            href="#"
                            className="mb-5 inline-block w-full rounded-md bg-black px-6 py-3 text-center font-semibold text-white md:mb-6"
                        >
                            Get started
                        </a>
                        <div className="mt-2 flex flex-row items-center">
                            <div className="mr-2 flex w-4 flex-row items-center">
                                <img
                                    src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a94a84be6cf60_check-mark.svg"
                                    alt=""
                                    className="mr-2"
                                />
                            </div>
                            <p className="text-sm sm:text-base">
                                100 product shoots per month
                            </p>
                        </div>
                        <div className="mt-2 flex flex-row items-center">
                            <div className="mr-2 flex w-4 flex-row items-center">
                                <img
                                    src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a94a84be6cf60_check-mark.svg"
                                    alt=""
                                    className="mr-2"
                                />
                            </div>
                            <p className="text-sm sm:text-base">
                                High resolution pictures
                            </p>
                        </div>
                        <div className="mt-2 flex flex-row">
                            <div className="mr-2 flex w-4">
                                <img
                                    src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a94a84be6cf60_check-mark.svg"
                                    alt=""
                                    className="mr-2"
                                />
                            </div>
                            <p className="text-sm sm:text-base">
                                No waiting time
                            </p>
                        </div>
                        <div className="mt-2 flex flex-row">
                            <div className="mr-2 flex w-4">
                                <img
                                    src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a94a84be6cf60_check-mark.svg"
                                    alt=""
                                    className="mr-2"
                                />
                            </div>
                            <p className="text-sm sm:text-base">
                                No watermark on images
                            </p>
                        </div>
                        <div className="mt-2 flex flex-row">
                            <div className="mr-2 flex w-4">
                                <img
                                    src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a94a84be6cf60_check-mark.svg"
                                    alt=""
                                    className="mr-2"
                                />
                            </div>
                            <p className="text-sm sm:text-base">
                                Prompt Enhancement using AI
                            </p>
                        </div>
                        <div className="mt-2 flex flex-row">
                            <div className="mr-2 flex w-4">
                                <img
                                    src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a94a84be6cf60_check-mark.svg"
                                    alt=""
                                    className="mr-2"
                                />
                            </div>
                            <p className="text-sm sm:text-base">
                                Fast Customer Support
                            </p>
                        </div>
                    </div>
                    <div className="mx-auto max-w-md items-start rounded-md border border-[#cdcdcd] p-8">
                        <div className="mb-4 w-fit rounded-[5px] bg-black px-4 py-1.5">
                            <p className="text-sm font-bold text-white">
                                ULTIMATE
                            </p>
                        </div>
                        <p className="mb-6 text-sm font-light text-[#636262] sm:text-base md:mb-10">
                            Dive into the ultimate product photography
                            experience with our Ultimate Plan, tailored for
                            those who demand the best in AI-generated product
                            visuals.
                        </p>
                        <h2 className="mb-5 text-3xl font-bold md:mb-6 md:text-5xl">
                            {isMonthly
                                ? pricing.monthly.ultimate
                                : pricing.annually.ultimate}
                            <span className="text-sm font-light sm:text-sm">
                                {isMonthly ? "/month" : "/year"}
                            </span>
                        </h2>
                        <a
                            href="#"
                            className="mb-5 inline-block w-full rounded-md bg-black px-6 py-3 text-center font-semibold text-white md:mb-6"
                        >
                            Get started
                        </a>
                        <div className="mt-2 flex flex-row items-center">
                            <div className="mr-2 flex w-4 flex-row items-center">
                                <img
                                    src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a94a84be6cf60_check-mark.svg"
                                    alt=""
                                    className="mr-2"
                                />
                            </div>
                            <p className="text-sm sm:text-base">
                                500 product shoots per month
                            </p>
                        </div>
                        <div className="mt-2 flex flex-row items-center">
                            <div className="mr-2 flex w-4 flex-row items-center">
                                <img
                                    src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a94a84be6cf60_check-mark.svg"
                                    alt=""
                                    className="mr-2"
                                />
                            </div>
                            <p className="text-sm sm:text-base">
                                High resolution pictures
                            </p>
                        </div>
                        <div className="mt-2 flex flex-row">
                            <div className="mr-2 flex w-4">
                                <img
                                    src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a94a84be6cf60_check-mark.svg"
                                    alt=""
                                    className="mr-2"
                                />
                            </div>
                            <p className="text-sm sm:text-base">
                                No waiting time
                            </p>
                        </div>
                        <div className="mt-2 flex flex-row">
                            <div className="mr-2 flex w-4">
                                <img
                                    src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a94a84be6cf60_check-mark.svg"
                                    alt=""
                                    className="mr-2"
                                />
                            </div>
                            <p className="text-sm sm:text-base">
                                No watermark on images
                            </p>
                        </div>
                        <div className="mt-2 flex flex-row">
                            <div className="mr-2 flex w-4">
                                <img
                                    src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a94a84be6cf60_check-mark.svg"
                                    alt=""
                                    className="mr-2"
                                />
                            </div>
                            <p className="text-sm sm:text-base">
                                Prompt Enhancement using AI
                            </p>
                        </div>
                        <div className="mt-2 flex flex-row">
                            <div className="mr-2 flex w-4">
                                <img
                                    src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a94a84be6cf60_check-mark.svg"
                                    alt=""
                                    className="mr-2"
                                />
                            </div>
                            <p className="text-sm sm:text-base">
                                Fast Customer Support
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
