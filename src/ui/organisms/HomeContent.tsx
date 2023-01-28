import CenteredPage from "ui/atoms/CenteredPage";
import Fab from "ui/atoms/Fab";
import H2 from "ui/atoms/H2";
import ChatroomsOrganism from "./ChatroomsList";

const HomeContent = () => {
    return (
        <CenteredPage>
            <H2>Chats</H2>
            <ChatroomsOrganism />
            <Fab />
        </CenteredPage>
    )
}

export default HomeContent;