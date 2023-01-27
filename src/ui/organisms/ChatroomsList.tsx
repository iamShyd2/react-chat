import { Divider, List } from "@material-ui/core";
import { Fragment, useEffect, useState } from "react";
import useFetch from "lib/useFetch";
import Chatroom from "ui/molecules/chatroom/Chatroom";

const ChatroomsList = () => {

    const [chatrooms, setChatrooms] = useState([]);

    const {  
        onFetch,
    } = useFetch("/chatrooms", setChatrooms);

    useEffect(() => {
        onFetch();
    }, []);

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