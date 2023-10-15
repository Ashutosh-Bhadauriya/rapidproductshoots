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
            await hanko?.user.logout();
            router.replace("/");
            return;
        } catch (error) {
            console.error("Error during logout:", error);
        }
    };

    return <button onClick={logout}>Logout</button>;
}
