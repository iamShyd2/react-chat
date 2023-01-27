import {
    AppBar,
    Typography,
    Toolbar,
    Avatar
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import useAuth from "hooks/useAuth";

const useStyles = makeStyles(() => ({
    toolbar: {
        display: "flex",
        justifyContent: "space-between"
    },
}));

const AppHeader = () => {

    const classes = useStyles();

    const {
        currentUser
    } = useAuth();

    const avatar = currentUser.avatar ? currentUser.avatar.url : "";


    return (
        <AppBar position="static">
            <Toolbar className={classes.toolbar}>
                <Typography variant="h6">
                    Chats
                </Typography>
                <Avatar
                    component={Link}
                    to="/profile"
                    src={avatar}
                />
            </Toolbar>
        </AppBar>
    )
}

export default AppHeader;