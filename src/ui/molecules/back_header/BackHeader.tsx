import {
    AppBar,
    Toolbar,
    IconButton
} from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { useNavigate } from "react-router-dom";

const BackHeader = ({ title }) => {

    const navigate = useNavigate();

    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton onClick={() => navigate(-1)} color="inherit">
                    <ArrowBackIcon />
                </IconButton>
                {title}
            </Toolbar>
        </AppBar>
    )
}

export default BackHeader;
