import withRequireAuth from "hocs/withRequireAuth";
import NewChatTemplate from "ui/templates/NewChatTemplate";

const NewChatPage = () => {
    return <NewChatTemplate />;
}

export default withRequireAuth(NewChatPage);