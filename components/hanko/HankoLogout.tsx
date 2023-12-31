import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Hanko } from "@teamhanko/hanko-elements";

const hankoApi = process.env.NEXT_PUBLIC_HANKO_API_URL;

export default function HankoLogout() {
    const router = useRouter();
    const [hanko, setHanko] = useState<Hanko>();

    useEffect(() => {
        import("@teamhanko/hanko-elements").then(({ Hanko }) =>
            setHanko(new Hanko(hankoApi ?? ""))
        );
    }, []);

    const logout = async () => {
        try {
            fetch("/api/logout", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            await hanko?.user.logout();
            router.push("/").then(() => {
                router.reload();
            });
            return;
        } catch (error) {
            console.error("Error during logout:", error);
        }
    };

    return (
        <button
            className="py-2 px-6 border-2 border-red-900 bg-red-500/95 text-slate-900 rounded-xl"
            onClick={logout}
        >
            Logout
        </button>
    );
}
