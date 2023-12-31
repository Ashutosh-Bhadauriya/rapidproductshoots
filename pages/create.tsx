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
import { Hanko } from "@teamhanko/hanko-elements";
// @ts-ignore
import Loading from "react-loading-components";

const Home: NextPage = () => {
    const router = useRouter();
    const [originalPhoto, setOriginalPhoto] = useState<string | null>(null);
    const fetcher = (url: string) => fetch(url).then((res) => res.json());
    const { data, mutate } = useSWR("/api/remaining", fetcher);

    const { data: user_data } = useSWR("/api/getuser", fetcher);

    useEffect(() => {
        if (router.isReady) {
            setOriginalPhoto(router.query.image as string);
        }
    }, [router.isReady]);

    const [hanko, setHanko] = useState<Hanko>();

    useEffect(() => {
        const importHanko = async () => {
            const hankoApi = process.env.NEXT_PUBLIC_HANKO_API_URL;
            if (!hankoApi) return;

            import("@teamhanko/hanko-elements").then(({ Hanko }) =>
                setHanko(new Hanko(hankoApi))
            );
        };
        importHanko();
        // Cleanup function
        return () => {};
    }, []);

    useEffect(() => {
        const createOrGetUser = async () => {
            if (hanko === undefined) return;

            const { id, email } = await hanko.user.getCurrent();

            fetch("/api/createuser", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ id, email }),
            });
        };
        createOrGetUser();
    }, [hanko]);

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

    const UploadDropZone = ({ disabled }: { disabled: boolean }) => (
        <UploadDropzone
            className={`${
                disabled === true ? "pointer-events-none blur-[2px]" : ""
            }`}
            options={options}
            onUpdate={({ uploadedFiles }) => {
                if (uploadedFiles.length !== 0) {
                    const image = uploadedFiles[0];
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
            {(!user_data || !data) && (
                <div className="flex justify-center items-center flex-col">
                    <h1 className="text-2xl mb-4 font-bold">
                        Preparing Dashboard
                    </h1>
                    <Loading
                        type="three_dots"
                        fill="#000"
                        height={"20%"}
                        width={"20%"}
                    />
                </div>
            )}
            {user_data && data && (
                <>
                    <Header user_id={user_data.user_id} />
                    <main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 mt-4 sm:mb-0 mb-8">
                        <h1 className="mx-auto max-w-4xl font-display text-4xl font-bold tracking-normal text-slate-900 sm:text-6xl mb-5">
                            Generate Product Shoots
                        </h1>
                        {data.remainingGenerations < 4 && (
                            <p className="text-slate-500">
                                You are out of generations for this month.{" "}
                                <Link
                                    href="/upgrade"
                                    className="font-bold text-slate-900 underline"
                                >
                                    Upgrade
                                </Link>{" "}
                                your plan now!
                            </p>
                        )}
                        {data.remainingGenerations >= 4 && (
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
                                your plan now!
                            </p>
                        )}

                        <div className="flex justify-between items-center w-full flex-col mt-8">
                            {!originalPhoto &&
                                data.remainingGenerations < 4 && (
                                    <UploadDropZone disabled={true} />
                                )}
                            {!originalPhoto &&
                                data.remainingGenerations >= 4 && (
                                    <UploadDropZone disabled={false} />
                                )}
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
                </>
            )}
        </div>
    );
};

export default Home;
