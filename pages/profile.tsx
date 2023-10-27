import { NextPage } from "next";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Head from "next/head";
import useSWR from "swr";
import dynamic from "next/dynamic";

const Home: NextPage = () => {
    const fetcher = (url: string) => fetch(url).then((res) => res.json());
    const { data: user_data } = useSWR("/api/getuser", fetcher);

    const HankoProfile = dynamic(
        () => import("../components/hanko/HankoProfile"),
        {
            ssr: false,
        }
    );
    const HankoLogout = dynamic(
        () => import("../components/hanko/HankoLogout"),
        {
            ssr: false,
        }
    );

    return (
        <div className="flex max-w-6xl mx-auto flex-col items-center justify-center py-2 min-h-screen">
            <Head>
                <title>AI Product Shoots</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {user_data && (
                <>
                    <Header user_id={user_data.user_id} />
                    <main className="flex flex-1 w-full flex-col items-center justify-start text-center px-4 mt-4 mb-16">
                        <div className="flex space-x-8 w-full justify-between items-start">
                            <div className="flex flex-col w-full items-center justify-center h-1/2 border-2 border-slate-300 rounded-2xl p-8 bg-slate-200">
                                <h3 className="text-slate-900 sm:text-2xl text-lg text-center font-bold underline">
                                    Profile Details
                                </h3>
                                <HankoProfile />
                                <HankoLogout />
                            </div>
                        </div>
                    </main>
                    <Footer />
                </>
            )}
        </div>
    );
};

export default Home;
