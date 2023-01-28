import {
    CircularProgress,
    IconButton,
    TextField
} from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import { makeStyles } from '@material-ui/core/styles';
import useFetch from "lib/useFetch";
import { useRef } from "react";
import { useParams } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    messageInputContainer: {
        display: "flex",
        justifyContent: "space-between",
        position: "absolute",
        bottom: 0,
        right: 10,
        left: 0,
        margin: 16
    },
    messageInput: {
        flex: 1
    }
}));

const MessagesForm = () => {

    const classes = useStyles();

    const {
        id
    } = useParams();

    let user_id = id;

    const {
        onPost,
        isFetching,
    } = useFetch(`/messages`, () => { });

    const messageRef = useRef();

    const onCreateMessage = () => {
        // @ts-ignore
        let body = messageRef.current.value;
        onPost({
            body,
            user_id: user_id
        })
        // @ts-ignore
        messageRef.current.value = "";
    }

    return (
        <div className={classes.messageInputContainer}>
            <TextField
                placeholder="Type your message here ..."
                className={classes.messageInput}
                inputRef={messageRef}
            />
            <div>
                <IconButton onClick={onCreateMessage}>
                    {
                        isFetching ? 
                        <CircularProgress />
                        : <SendIcon />
                    }
                </IconButton>
            </div>
        </div>
    );
};

export default MessagesForm;
