import Image from "next/image";

export default function LoginPageHero() {
    return (
        <div className="w-2/3 rounded-2xl bg-slate-900 flex justify-around items-center flex-col">
            <div className="text-3xl font-bold text-slate-50 max-w-prose pt-8 px-8">
                Generate beautiful product shoots instantly with the power of AI
                to
                <span className="animate-text-rainbow bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-black">
                    {" "}
                    boost your sales{" "}
                </span>
                while saving time and money
            </div>
            <div className="flex justify-center items-center h-1/2 w-2/3">
                <Image
                    alt="product shoot of a necklace "
                    src="/handmade-necklace.jpg"
                    width={512}
                    height={512}
                    className="w-full h-full rounded-2xl m-4"
                />
                <Image
                    alt="product shoot of a handbag "
                    src="/handbag.jpg"
                    width={512}
                    height={512}
                    className="w-full h-full rounded-2xl m-4"
                />
            </div>
        </div>
    );
}
