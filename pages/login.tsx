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
            <main className="flex flex-1 w-full h-full flex-row items-stretch justify-start text-center px-4 mt-4 ">
                <LoginPageHero />
                <div className="w-1/3 flex items-center justify-center rounded-2xl bg-slate-200">
                    <Suspense fallback={<div>Loading...</div>}>
                        <HankoAuth />
                    </Suspense>
                </div>
            </main>
        </div>
    );
}
