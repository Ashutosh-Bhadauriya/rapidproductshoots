import Image from "next/image";
import Link from "next/link";
import { Hanko } from "@teamhanko/hanko-elements";
import dynamic from "next/dynamic";
import { Suspense } from "react";

export default function Header({ user_id }: { user_id?: string | undefined }) {
    const HankoProfile = dynamic(
        () => import("../components/hanko/HankoProfile"),
        {
            ssr: false,
        }
    );
    return (
        <header className="flex justify-between items-center w-full mt-5 border-b-2 pb-2 sm:px-4 px-2">
            <Link href="/" className="flex space-x-2">
                <h1 className="sm:text-4xl text-2xl font-bold ml-2 tracking-tight">
                    ✨AI Product Shoots
                </h1>
            </Link>

            {user_id ? (
                <div className="flex justify-between">
                    <Link
                        className="mr-2 rounded-xl text-slate-900 font-medium px-4 py-3 hover:bg-slate-100"
                        href="/create"
                    >
                        Create
                    </Link>
                    <Suspense fallback={"Loading ..."}>
                        <HankoProfile />
                    </Suspense>
                </div>
            ) : (
                <div className="flex justify-between">
                    <Link
                        className="mr-2 rounded-xl text-slate-900 font-medium px-4 py-3 hover:bg-slate-100"
                        href="#features"
                    >
                        Benefits
                    </Link>
                    <Link
                        className="mr-4 rounded-xl text-slate-900 font-medium px-4 py-3 hover:bg-slate-100"
                        href="#pricing"
                    >
                        Pricing
                    </Link>
                    <Link
                        className="bg-black rounded-xl text-white font-medium px-4 py-3 hover:bg-black/80"
                        href="/create"
                    >
                        Get Started
                    </Link>
                </div>
            )}
        </header>
    );
}
