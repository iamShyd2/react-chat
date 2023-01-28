import { Avatar, Divider } from "@material-ui/core";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useUser from "./useUser";

const useStyles = makeStyles(() => ({
    container: {
        display: "flex",
        flexDirection: "row",
        padding: 10
    },
    image: {
        width: 40,
        height: 40,
        borderRadius: 50
    },
    userDetails: {
        marginLeft: 15
    },
    userName: {
        margin: 0,
    }
}))

const User = ({ user }) => {

    const classes = useStyles();

    const {
        onClickUser,
    } = useUser(user);

    return (
        <>
            <div className={classes.container} onClick={onClickUser}>
                <Avatar
                    src=""
                />
                <div className={classes.userDetails}>
                    <p className={classes.userName}>{user.name}</p>
                    <p className={classes.userName}>{user.email}</p>
                </div>
            </div>
            <Divider />
        </>
    );

};

export default User;
