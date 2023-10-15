import { useEffect } from "react";
import { register } from "@teamhanko/hanko-elements";

const hankoApi = process.env.NEXT_PUBLIC_HANKO_API_URL;

export default function HankoProfile() {
    if (!hankoApi) {
        return <div>Missing Hanko API URL</div>;
    }

    useEffect(() => {
        register(hankoApi).catch((error) => {
            console.log(error);
        });
    }, []);

    return <hanko-profile />;
}
