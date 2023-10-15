import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState, useEffect } from "react";
import { UrlBuilder } from "@bytescale/sdk";
import {
    UploadWidgetConfig,
    UploadWidgetOnPreUploadResult,
} from "@bytescale/upload-widget";
import { UploadDropzone } from "@bytescale/upload-widget-react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import va from "@vercel/analytics";
import useSWR from "swr";
import Link from "next/link";
import { SettingsForm } from "../components/SettingsForm";
import { useRouter } from "next/router";

const Home: NextPage = () => {
    const router = useRouter();
    const [originalPhoto, setOriginalPhoto] = useState<string | null>(null);
    const fetcher = (url: string) => fetch(url).then((res) => res.json());
    const { data, mutate } = useSWR("/api/remaining", fetcher);
    // const { data: session, status } = useSession();
    useEffect(() => {
        if (router.isReady) {
            setOriginalPhoto(router.query.image as string);
        }
    }, [router.isReady]);

    const options: UploadWidgetConfig = {
        apiKey: !!process.env.NEXT_PUBLIC_UPLOAD_API_KEY
            ? process.env.NEXT_PUBLIC_UPLOAD_API_KEY
            : "free",
        maxFileCount: 1,
        mimeTypes: ["image/jpeg", "image/png", "image/jpg"],
        editor: { images: { crop: false } },
        styles: { colors: { primary: "#000" } },
        onPreUpload: async (
            file: File
        ): Promise<UploadWidgetOnPreUploadResult | undefined> => {
            if (data.remainingGenerations === 0) {
                return {
                    errorMessage: "No more generations left for the day.",
                };
            }
            return undefined;
        },
    };

    const UploadDropZone = () => (
        <UploadDropzone
            options={options}
            onUpdate={({ uploadedFiles }) => {
                if (uploadedFiles.length !== 0) {
                    const image = uploadedFiles[0];
                    const imageName = image.originalFile.originalFileName;
                    const imageUrl = UrlBuilder.url({
                        accountId: image.accountId,
                        filePath: image.filePath,
                        options: {
                            transformation: "preset",
                            transformationPreset: "thumbnail",
                        },
                    });
                    setOriginalPhoto(imageUrl);
                }
            }}
            width="670px"
            height="250px"
        />
    );

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
                    Generate Product Shoots
                </h1>
                {/* {status === "authenticated" && data && ( */}
                {data && (
                    <p className="text-slate-500">
                        You have{" "}
                        <span className="font-semibold">
                            {data.remainingGenerations} generations
                        </span>{" "}
                        left this month. Need more generations?{" "}
                        <Link
                            href="/upgrade"
                            className="font-bold text-slate-900 underline"
                        >
                            Upgrade
                        </Link>{" "}
                        to a premium plan now!
                    </p>
                )}
                <div className="flex justify-between items-center w-full flex-col mt-8">
                    {!originalPhoto && <UploadDropZone />}

                    {/* {status === "loading" ? (
                        <div className="max-w-[670px] h-[250px] flex justify-center items-center">
                            <Rings
                                height="100"
                                width="100"
                                color="black"
                                radius="6"
                                wrapperStyle={{}}
                                wrapperClass=""
                                visible={true}
                                ariaLabel="rings-loading"
                            />
                        </div>
                    ) : status === "authenticated" && !originalPhoto ? (
                        <UploadDropZone />
                    ) : (
                        !originalPhoto && (
                            <div className="h-[250px] flex flex-col items-center space-y-6 max-w-[670px] -mt-8">
                                <div className="max-w-xl text-gray-600">
                                    Sign in below with Google to create a free
                                    account and restore your photos today. You
                                    will be able to restore 5 photos per day for
                                    free.
                                </div>
                                <button
                                    onClick={() => signIn("google")}
                                    className="bg-gray-200 text-black font-semibold py-3 px-6 rounded-2xl flex items-center space-x-2"
                                >
                                    <Image
                                        src="/google.png"
                                        width={20}
                                        height={20}
                                        alt="google's logo"
                                    />
                                    <span>Sign in with Google</span>
                                </button>
                            </div>
                        )
                    )} */}
                    {originalPhoto && (
                        <div className="md:flex-row flex-col flex justify-between w-full">
                            <Image
                                alt="original photo"
                                src={originalPhoto}
                                className="rounded-2xl"
                                width={475}
                                height={475}
                            />
                            <div className="settings w-full mt-8 md:mt-0 md:w-1/2">
                                <SettingsForm
                                    originalImageUrl={originalPhoto}
                                />
                            </div>
                        </div>
                    )}
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Home;
