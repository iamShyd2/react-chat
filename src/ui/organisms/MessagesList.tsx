import { Grid } from "@material-ui/core";
import useAuth from "hooks/useAuth";
import useChannel from "hooks/useChannel";
import useFetch from "lib/useFetch";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import Message from "ui/molecules/message/Message";

const MessagesList = () => {

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


    const onReceived = (message) => {
        setMessages([...messagesRef.current, message.message]);
    }
    
    useChannel("UserChannel", { received: onReceived });

    return (
        <ul
            style={{
                height: "60vh",
                overflowY: "scroll",
            }}
        >
            {
                messages.map((item, i) => <Message
                    message={item}
                    key={i}
                />)
            }
        </ul>
    )
}

export default MessagesList;