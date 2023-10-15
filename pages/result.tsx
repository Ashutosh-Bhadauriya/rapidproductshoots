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

const Home: NextPage = () => {
    const router = useRouter();
    const [images, setImages] = useState<string[]>([]);
    const { reward, isAnimating } = useReward("rewardId", "confetti", {
        lifetime: 200,
        elementCount: 200,
        spread: 360,
    });
    useEffect(() => {
        if (router.isReady) {
            setImages(router.query.images as string[]);
            reward();
        }
    }, [router.isReady]);

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
                            Results
                        </h1>
                        <h3>
                            Don't like the results?{" "}
                            <Link
                                href={"/create?image=" + images[5]}
                                className="text-slate-900 font-bold underline"
                            >
                                Try again
                            </Link>
                        </h3>
                        <span id="rewardId" />
                        <Results images={images} />
                    </main>
                    <Footer />
                </>
            )}
        </div>
    );
};

export default Home;
