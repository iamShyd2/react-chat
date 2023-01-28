import React from "react";

export const HOST = "https://serene-escarpment-91662.herokuapp.com";

let host = `${HOST}/api`;

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') host = "http://localhost:3001/api/v1";

export const Host = host;

const useFetch = (path: string, onSuccess: (body: any, headers: any) => void, handleError = (res: any) => {}) => {

    const [isFetching, setIsFetching] = React.useState(false);

    const onFetch = async (method = 'get', _body = undefined) => {
        const _path = path.endsWith('/') ? path.substr(0, path.length - 1) : path;
        let headers = {
            accessToken: "",
            client: "",
            uid: "",
        }, _headers;
        try {
            _headers = localStorage.getItem("headers");
            if(_headers) headers = JSON.parse(_headers);
        } catch (error) {
            console.log(error);
            
        }
        
        try {
            setIsFetching(true);
            const res = await fetch(`${host}${_path}`, {
                method,
                headers: {
                    "accept": "application/json",
                    "content-type": "application/json",
                    "Access-Token": headers.accessToken,
                    "client": headers.client,
                    "uid": headers.uid,
                },
                body: JSON.stringify(_body)
            });
            if (res.ok) {
                const body = await res.json();
                onSuccess(body, res.headers);
            }
            else handleError(res);
        } catch (e) {
            console.log(e);
            
        }finally{
            setIsFetching(false)
        }
    }

    const onPost = async (body?: any) => onFetch("post", body)

    const onPut = async (body?: any) => onFetch("put", body)

    return {
        onFetch,
        isFetching,
        onPost,
        onPut,
    }

}

export default useFetch;