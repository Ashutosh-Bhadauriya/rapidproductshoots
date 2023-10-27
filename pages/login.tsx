import dynamic from "next/dynamic";
import { Suspense } from "react";
import { NextPage } from "next";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Head from "next/head";
import LoginPageHero from "../components/LoginPageHero";

export default function LoginPage() {
    const HankoAuth = dynamic(() => import("../components/hanko/HankoAuth"), {
        ssr: false,
    });
    return (
        <div className="flex max-w-6xl mx-auto flex-col items-center justify-center py-2 min-h-screen">
            <Head>
                <title>AI Product Shoots</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />
            <main className="flex flex-1 w-full h-full flex-row items-stretch justify-start text-center px-4 md:mt-4 ">
                <LoginPageHero />
                <div className="hidden invisible md:visible w-2/3 md:flex flex-col items-center justify-center rounded-xl bg-slate-200">
                    <div className="text-3xl font-bold text-slate-900 max-w-prose px-8">
                        Generate beautiful product shoots instantly that
                        <span className="animate-text-rainbow bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent">
                            {" "}
                            boost your sales{" "}
                        </span>
                        and save time and money
                    </div>
                    <div className="border-2 border-slate-500 rounded-2xl py-1 mt-4 px-4 text-slate-500 text-sm mb-5 hover:scale-105 transition duration-300 ease-in-out">
                        <span className="font-semibold">1000+</span> product
                        photos generated till date!
                    </div>
                    <Suspense fallback={<div>Loading...</div>}>
                        <HankoAuth />
                    </Suspense>
                </div>
                <div className="md:hidden md:invisible rounded-xl bg-[url('/collage.png')] bg-cover">
                    <div className="rounded-xl opacity-95">
                        <Suspense fallback={<div>Loading...</div>}>
                            <HankoAuth />
                        </Suspense>
                    </div>
                </div>
            </main>
        </div>
    );
}
