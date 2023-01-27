import { useNavigate } from "react-router-dom";
import useFetch from "lib/useFetch";

const useSignIn = () => {


    const navigate = useNavigate();

    const handleSuccess = (body: any, headers: any) => {
        const expiry = headers.get("expiry");
        const uid = headers.get("uid");
        const client = headers.get("client");
        const accessToken = headers.get("access-token");
        const _headers = {
            expiry,
            uid,
            client,
            accessToken
        };
        localStorage.setItem("headers", JSON.stringify(_headers));
        navigate("/");
    }

    const {
        onPost,
        isFetching,
    } = useFetch("/sign_in", handleSuccess);

    return {
        onPost,
        isFetching,
    }
}

export default useSignIn;