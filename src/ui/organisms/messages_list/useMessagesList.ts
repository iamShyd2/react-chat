import useFetch from "lib/useFetch";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";

const useMessagesList = () => {

    const [messages, setMessages] = useState([]);
    const messagesRef = useRef<any[]>();

    useEffect(() => {
        messagesRef.current = messages
        let message = messages[messages.length - 1];
        if (message) {
            const section = document.querySelector(`#message-${message.id}`);
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }

    }, [messages])

    const onSuccess = (body: any) => setMessages(body.messages);

    const {
        id
    } = useParams();

    const {
        onFetch,
    } = useFetch(`/chatroom?user_id=${id}`, onSuccess);

    useEffect(() => {
        onFetch();
    }, []);

    return {
        messages,
        messagesRef,
        setMessages,
    }
}

export default useMessagesList;