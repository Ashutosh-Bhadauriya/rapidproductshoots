import Image from "next/image";

export default function LoginPageHero() {
    return (
        <>
            <div className="hidden invisible md:visible w-1/3 md:flex">
                <Image
                    alt="product shoot collage "
                    src="/collage.png"
                    width={512}
                    height={512}
                    className="w-full h-full rounded-xl"
                />
            </div>
        </>
    );
}
