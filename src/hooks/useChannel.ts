import { useEffect } from "react";
import useAuth from "./useAuth";

const useChannel = (channel, options) => {

    const {
        cable,
    } = useAuth();

    useEffect(() => {
        if (!cable) return
        cable.subscriptions.create(channel, {
            connected: () => console.log("connected"),
            ...options
        });
    }, [cable]);

}

export default useChannel;