import { NextPage } from "next";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Head from "next/head";

const Home: NextPage = () => {
    return (
        <div className="flex max-w-6xl mx-auto flex-col items-center justify-center py-2 min-h-screen">
            <Head>
                <title>AI Product Shoots</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* <Header photo={session?.user?.image || undefined} /> */}
            <Header photo={undefined} />
            <main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 mt-4 sm:mb-0 mb-8">
                <h1 className="mx-auto max-w-4xl font-display text-4xl font-bold tracking-normal text-slate-900 sm:text-6xl mb-5">
                    Results
                </h1>
                {/* {status === "authenticated" && data && ( */}
            </main>
            <Footer />
        </div>
    );
};

export default Home;
