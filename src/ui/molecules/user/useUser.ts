import { useNavigate } from "react-router-dom";

const useUser = (user) => {
    
    const navigate = useNavigate();

    const onClickUser = () => navigate(`/chat/${user.id}`, {
        state: user
    })
    
    return{
        onClickUser
    }
}

export default useUser;