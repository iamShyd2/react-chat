import { Grid } from "@material-ui/core";
import SignInOrganism from "../organisms/SignInOrganism"

const SignInTemplate = () => {
    return (
        <Grid container justifyContent="center">
            <Grid lg={4}>
                <SignInOrganism />
            </Grid>
        </Grid>
    )
}

export default SignInTemplate;