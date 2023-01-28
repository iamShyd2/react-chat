import { Grid } from "@material-ui/core"
import { FC } from "react";
import Paper from "./Paper"

const CenteredPage: FC = ({ children }) => {
    return (
        <Grid container justifyContent="center" style={{ marginTop: 40 }}>
            <Grid item lg={6} xs={12}>
                <Paper>
                    {children}
                </Paper>
            </Grid>
        </Grid>
    )
}

export default CenteredPage;