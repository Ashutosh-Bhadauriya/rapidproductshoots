import { NextPage } from "next";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Head from "next/head";
import { useRouter } from "next/router";
import Results from "../components/Results";
import { useReward } from "react-rewards";
import { useEffect, useState } from "react";
import Link from "next/link";
import useSWR from "swr";
import HankoProfile from "../components/hanko/HankoProfile";
import HankoLogout from "../components/hanko/HankoLogout";

const Home: NextPage = () => {
    const fetcher = (url: string) => fetch(url).then((res) => res.json());
    const { data: user_data } = useSWR("/api/getuser", fetcher);

    return (
        <div className="flex max-w-6xl mx-auto flex-col items-center justify-center py-2 min-h-screen">
            <Head>
                <title>AI Product Shoots</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {user_data && (
                <>
                    <Header user_id={user_data.user_id} />
                    <main className="flex flex-1 w-full flex-col items-center justify-start text-center px-4 mt-4 sm:mb-0 mb-8">
                        <h1 className="mx-auto max-w-4xl font-display text-3xl font-bold tracking-normal text-slate-900 sm:text-5xl mb-5">
                            Profile
                        </h1>
                    </main>
                    <div className="flex space-x-8 justify-between items-center">
                        <div className="flex flex-col items-center justify-center border-2 border-slate-300 rounded-2xl p-8">
                            <h3 className="text-slate-900 sm:text-2xl text-lg text-center font-bold underline">
                                Profile Details
                            </h3>
                            <HankoProfile />
                            <HankoLogout />
                        </div>
                        <div className="flex flex-col items-center justify-center border-2 border-slate-300 rounded-2xl p-8">
                            <h3 className="text-slate-900 sm:text-2xl text-lg text-center font-bold underline">
                                Plan Details
                            </h3>
                            <HankoProfile />
                            <HankoLogout />
                        </div>
                    </div>
                    <Footer />
                </>
            )}
        </div>
    );
};

export default Home;
