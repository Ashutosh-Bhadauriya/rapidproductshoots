import { useEffect, useCallback, useState } from "react";
import { useRouter } from "next/router";
import { register, Hanko } from "@teamhanko/hanko-elements";

const hankoApi = process.env.NEXT_PUBLIC_HANKO_API_URL;

export default function HankoAuth() {
    const router = useRouter();

    const [hanko, setHanko] = useState<Hanko>();

    if (!hankoApi) {
        return <div>Missing Hanko API URL</div>;
    }

    useEffect(() => {
        import("@teamhanko/hanko-elements").then(({ Hanko }) =>
            setHanko(new Hanko(hankoApi))
        );
    }, []);

    const redirectAfterLogin = useCallback(() => {
        router.replace("/create");
    }, [router]);

    useEffect(
        () =>
            hanko?.onAuthFlowCompleted(() => {
                console.log("Auth flow complete");
                redirectAfterLogin();
            }),
        [hanko, redirectAfterLogin]
    );

    useEffect(() => {
        register(hankoApi).catch((error) => {
            console.log(error);
        });
    }, []);

    return <hanko-auth />;
}
