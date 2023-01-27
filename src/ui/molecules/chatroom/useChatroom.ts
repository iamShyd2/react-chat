import { useNavigate } from "react-router-dom";

const useChatroom = (user) => {
    
    const navigate = useNavigate();

    const onClickChatroom = () => navigate(`/chat/${user.id}`, {
        state: user
    })
    
    return{
        onClickChatroom
    }
}

export default useChatroom;