import CenteredPage from "ui/atoms/CenteredPage";
import MessagesForm from "ui/molecules/message_form/MessageForm"
import MessagesList from "./messages_list/MessagesList"

const ShowChatContent = () => {
    return (
        <>
            <CenteredPage>
                <MessagesList />
                <MessagesForm />
            </CenteredPage>
        </>
    )
}

export default ShowChatContent;