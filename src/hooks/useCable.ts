import { useEffect, useState } from "react";
import ActionCable from 'actioncable';
import { host } from "../config";

const useCable = (currentUser) => {

    const [cable, setCable] = useState(null);

    useEffect(() => {
        if (!currentUser) return;

        const headers = localStorage.getItem("headers");
        const {
            accessToken,
            client,
            uid
        } = JSON.parse(headers);
        const c = ActionCable.createConsumer(`${host}/cable?token=${accessToken}&client=${client}&uid=${uid}`);
        setCable(c);
        return () => c.disconnect();
    }, [currentUser])

    return {
        cable
    }
}

export default useCable;