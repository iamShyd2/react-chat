import {
    Fab as FAB,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    fab: {
        position: 'absolute',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    }
}));

const Fab = () => {

    const classes = useStyles();

    return (
        <FAB className={classes.fab} color="primary" component={Link} to="/chatrooms/new">
            <AddIcon />
        </FAB>
    )
}

export default Fab;