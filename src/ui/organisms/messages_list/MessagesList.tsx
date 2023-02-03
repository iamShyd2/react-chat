import useChannel from "hooks/useChannel";
import Message from "ui/molecules/message/Message";
import useMessagesList from "./useMessagesList";
import useReadMessages from "./useReadMessages";

const MessagesList = () => {

    const {
        messages,
        messagesRef,
        setMessages,
    } = useMessagesList();


    useReadMessages();

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