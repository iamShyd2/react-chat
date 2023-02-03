import useFetch from "lib/useFetch";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const useReadMessages = () => {

    const [state, setState] = useState();

    const onSuccess = (body: any) => {
    }

    const {
        id
    } = useParams();

    const {
        onPut,
    } = useFetch(`/messages/read?user_id=${id}`, onSuccess);

    useEffect(() => {
        onPut()
    }, []);

    return {
        state
    }
}

export default useReadMessages;