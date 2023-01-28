import { Divider, List } from "@material-ui/core";
import { Fragment, useEffect, useRef, useState } from "react";
import useFetch from "lib/useFetch";
import Chatroom from "ui/molecules/chatroom/Chatroom";
import useChannel from "hooks/useChannel";

const ChatroomsList = () => {

    const [chatrooms, setChatrooms] = useState([]);
    const chatroomsRef = useRef([]);

    const {  
        onFetch,
    } = useFetch("/chatrooms", setChatrooms);

    useEffect(() => {
        onFetch();
    }, []);

    const onReceived = (message) => {    
        let chatrooms = chatroomsRef.current;
        let messageChatroom = JSON.parse(message.chatroom);  
        const selected = chatrooms.filter((chatroom) => chatroom.id === messageChatroom.id);
        console.log(selected);
        
        if(selected.length > 0){
            const _s = selected[0];
            const i = chatrooms.indexOf(_s);
            chatrooms[i] = messageChatroom;
        }
        else{
            chatrooms.unshift(messageChatroom);
        }
        setChatrooms([...chatrooms]);
    }
    
    useEffect(() => {
        chatroomsRef.current = chatrooms;
    }, [chatrooms])
    
    useChannel("ChatroomsChannel", { received: onReceived });

    return (
        <List>
            {
                chatrooms.map((chatroom, i) => (
                    <Fragment key={i}>
                        <Chatroom chatroom={chatroom} />
                        {chatrooms.length - 1 !== i ? <Divider /> : null}
                    </Fragment>
                ))
            }
        </List>
    )
}

export default ChatroomsList;