import { Grid } from "@material-ui/core";
import Paper from "ui/atoms/Paper";
import MessagesForm from "ui/molecules/message_form/MessageForm"
import MessagesList from "./MessagesList"

const ShowChatContent = () => {
    return (
        <>
            <Grid container justifyContent="center" style={{ marginTop: 40 }}>
                <Grid item lg={6} xs={12}>
                    <Paper>
                        <MessagesList />
                        <MessagesForm />
                    </Paper>
                </Grid>
            </Grid>
        </>
    )
}

export default ShowChatContent;