import Link from "next/link";
import { User } from "lucide-react";
import Image from "next/image";

export default function Header({ user_id }: { user_id?: string | undefined }) {
    return (
        <header className="flex justify-between items-center w-full mt-2 border-b-2 pb-2 sm:px-4 px-2">
            <Link
                href="/"
                className="flex space-x-2 items-center justify-center"
            >
                <Image
                    alt="app logo"
                    src="/logo2.png"
                    width={2000}
                    height={2000}
                    className="w-16 h-16"
                />
                <h1 className="sm:text-2xl text-xl font-bold ml-2 tracking-tight">
                    RapidProductShoots
                </h1>
            </Link>

            <button
                data-collapse-toggle="navbar-default"
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden "
                aria-controls="navbar-default"
                aria-expanded="false"
            >
                <span className="sr-only">Open main menu</span>
                <svg
                    className="w-5 h-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 17 14"
                >
                    <path
                        stroke="#000000"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 1h15M1 7h15M1 13h15"
                    />
                </svg>
            </button>

            {user_id ? (
                <div
                    className="md:justify-end md:items-center hidden w-full md:flex"
                    id="navbar-default"
                >
                    <Link
                        className="mr-2 rounded-xl text-slate-900 font-medium px-4 py-3 hover:bg-slate-100"
                        href="/create"
                    >
                        Create
                    </Link>
                    <Link
                        href="/profile"
                        className="hover:bg-slate-100 px-4 py-3 rounded-xl"
                    >
                        <User />
                    </Link>
                </div>
            ) : (
                <div
                    className="md:justify-end md:items-center hidden w-full md:flex"
                    id="navbar-default"
                >
                    <Link
                        className="mr-2 rounded-xl text-slate-900 font-medium px-4 py-3 hover:bg-slate-100"
                        href="/#howitworks"
                    >
                        How it works
                    </Link>
                    <Link
                        className="mr-2 rounded-xl text-slate-900 font-medium px-4 py-3 hover:bg-slate-100"
                        href="/#features"
                    >
                        Benefits
                    </Link>
                    <Link
                        className="mr-4 rounded-xl text-slate-900 font-medium px-4 py-3 hover:bg-slate-100"
                        href="/#pricing"
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
