import withRequireAuth from "hocs/withRequireAuth"
import ShowChatTemplate from "ui/templates/ShowChatTemplate";

const ShowChatPage = () => {
    return <ShowChatTemplate />
}

export default withRequireAuth(ShowChatPage);