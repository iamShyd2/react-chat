import { makeStyles, Paper as P, PaperProps } from "@material-ui/core";
import { FC } from "react";

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(3),
    },
}));


const Paper: FC<PaperProps> = ({ children }) => {

    const classes = useStyles();    

    return (
        <P
            className={classes.paper}
        >
            {children}
        </P>
    )
}

export default Paper;