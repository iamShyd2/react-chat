import { useLocation } from "react-router-dom";
import BackHeader from "ui/molecules/back_header/BackHeader"

const ShowChatHeader = () => {

    const location = useLocation();

    let user = location.state;

    return(
        <BackHeader
            title={user.name}
        />
    )
}

export default ShowChatHeader;