import useAuth from "hooks/useAuth";
import moment from "moment";

const Message = ({ message, }) => {

    const {
        currentUser
    } = useAuth();

    let isOwner = message.user_id === currentUser.id;

    return (
        <div style={{ flex: 1, display: "flex", justifyContent: isOwner ? 'flex-end' : 'flex-start' }} id={`message-${message.id}`}>
            <div style={{
                display: "flex",
            }}>
                <div
                    style={{
                        padding: 10,
                        borderRadius: 15,
                        marginBottom: 10,
                        backgroundColor: isOwner ? '#3f51b5' : "#fff",
                        color: isOwner ? '#fff' : "",
                        border: isOwner ? '' : "solid thin #bbb",
                        minWidth: 80
                    }}
                >
                    <p style={{ margin: 0 }}>{message.body}</p>
                    <span style={{
                        fontSize: 10,
                        color: (isOwner) && message.read ? '#319ae4' : '#6c757d',
                        textAlign: 'right',
                        display: "block"
                    }}>{moment(message.created_at).format("hh:mm")}</span>
                </div>
            </div>
        </div>
    )
}

export default Message;