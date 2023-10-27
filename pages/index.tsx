import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { FeaturesSection } from "../components/FeaturesSection";
import Pricing from "../components/Pricing";
import autoAnimate from "@formkit/auto-animate";
import { useState, useRef, useEffect } from "react";
import HowItWorks from "../components/HowItWorks";

const Home: NextPage = () => {
    const parent = useRef(null);

    useEffect(() => {
        parent.current && autoAnimate(parent.current);
    }, [parent]);

    return (
        <div className="flex md:max-w-6xl mx-auto flex-col items-center justify-center py-2 min-h-screen">
            <Head>
                <title>AI Product Shoots</title>
            </Head>
            <Header />
            <main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 sm:mt-28 mt-20">
                <h1 className="mx-auto max-w-4xl font-display text-5xl font-bold text-slate-900 sm:text-7xl">
                    Create
                    <span className="animate-text-rainbow bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent my-4 mr-1">
                        {" "}
                        beautiful
                    </span>
                    <br className="md:invisible md:hidden" /> product shoots on
                    a budget
                </h1>

                <p className="mx-auto mt-6 max-w-xl text-md md:text-lg text-slate-700 leading-7">
                    Need to create beautiful product shoots fast but can't spend
                    thousands on a professional photographer? Let our AI do the
                    hard work for you and create stunning product shoots that
                    boost sales.
                </p>
                <div className="flex justify-center space-x-4">
                    <a
                        className="bg-white rounded-xl text-black font-medium px-4 py-3 sm:mt-10 mt-8 hover:bg-gray-100 border"
                        href="https://github.com/varun-balani/rapidproductshoots"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Source Code
                    </a>

                    <Link
                        className="bg-black rounded-xl text-white font-medium px-4 py-3 sm:mt-10 mt-8 hover:bg-black/80"
                        href="/create"
                    >
                        Get Started
                    </Link>
                </div>
                <HowItWorks />
                <FeaturesSection />
                <Pricing />
                <Footer />
            </main>
        </div>
    );
};

export default Home;
