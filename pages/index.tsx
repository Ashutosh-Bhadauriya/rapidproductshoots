import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { FeaturesSection } from "../components/FeaturesSection";

const Home: NextPage = () => {
    return (
        <div className="flex max-w-6xl mx-auto flex-col items-center justify-center py-2 min-h-screen">
            <Head>
                <title>AI Product Shoots</title>
            </Head>
            <Header />
            <main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 sm:mt-28 mt-20">
                <h1 className="mx-auto max-w-4xl font-display text-5xl font-bold text-slate-900 sm:text-7xl">
                    Create product shoots
                    <br className="md:invisible md:hidden" />{" "}
                    <span className="bg-yellow-300 inline-block my-4 mr-1">
                        with AI
                    </span>
                    <br className="md:invisible md:hidden" /> in 2 minutes.
                </h1>

                <p className="mx-auto mt-6 max-w-xl text-lg text-slate-700 leading-7">
                    Need to create beautiful, branded product shoots fast? Let
                    our AI do the hard work for you and create stunning product
                    shoots in minutes.
                </p>
                <div className="flex justify-center space-x-4">
                    <a
                        className="bg-white rounded-xl text-black font-medium px-4 py-3 sm:mt-10 mt-8 hover:bg-gray-100 border"
                        href="https://github.com/varun-balani/product-shoots"
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
                <div className="flex justify-between items-center w-full flex-col sm:mt-10 mt-6">
                    <div className="flex flex-col space-y-10 mt-4 mb-16">
                        <div className="flex space-y-6 flex-col ">
                            <div>
                                <h2 className="mb-1 font-medium text-lg">
                                    Uploaded Photo
                                </h2>
                                <Image
                                    alt="Original photo of my bro"
                                    src="/michael.jpg"
                                    className="w-96 h-96 rounded-2xl m-auto"
                                    width={400}
                                    height={400}
                                />
                            </div>
                            <div className="sm:mt-0 mt-8">
                                <h2 className="mb-1 font-medium text-lg">
                                    ✨AI Generated Product Shoots✨
                                </h2>
                                <div className="flex sm:flex-row sm:space-x-2 flex-col">
                                    <Image
                                        alt="Restored photo of my bro"
                                        width={200}
                                        height={200}
                                        src="/michael-new.jpg"
                                        className="w-48 h-48 rounded-2xl sm:mt-0 mt-2"
                                    />
                                    <Image
                                        alt="Restored photo of my bro"
                                        width={200}
                                        height={200}
                                        src="/michael-new.jpg"
                                        className="w-48 h-48 rounded-2xl sm:mt-0 mt-2"
                                    />
                                    <Image
                                        alt="Restored photo of my bro"
                                        width={200}
                                        height={200}
                                        src="/michael-new.jpg"
                                        className="w-48 h-48 rounded-2xl sm:mt-0 mt-2"
                                    />
                                    <Image
                                        alt="Restored photo of my bro"
                                        width={200}
                                        height={200}
                                        src="/michael-new.jpg"
                                        className="w-48 h-48 rounded-2xl sm:mt-0 mt-2"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <FeaturesSection />
            <Footer />
        </div>
    );
};

export default Home;
