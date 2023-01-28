import NewChatContent from "ui/organisms/NewChatContent"
import NewChatHeader from "ui/organisms/new_chat_header/NewChatHeader"

const NewChatTemplate = () => {
    return(
        <>
            <NewChatHeader />
            <NewChatContent />
        </>
    )
}

export default NewChatTemplate;