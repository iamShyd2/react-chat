import { Grid, } from "@material-ui/core";
import Fab from "ui/atoms/Fab";
import H2 from "ui/atoms/H2";
import Paper from "ui/atoms/Paper";
import ChatroomsOrganism from "./ChatroomsList";

const HomeContent = () => {
    return (
        <Grid container justifyContent="center" style={{ marginTop: 40 }}>
            <Grid item lg={6} xs={12}>
                <Paper>
                    <H2>Chats</H2>
                    <ChatroomsOrganism />
                </Paper>
                <Fab />
            </Grid>
        </Grid>
    )
}

export default HomeContent;