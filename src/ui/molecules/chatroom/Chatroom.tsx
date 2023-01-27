import {
  ListItem,
  Avatar,
  ListItemText,
} from "@material-ui/core";
import useAuth from "hooks/useAuth";
import useChatroom from "./useChatroom";

const Chatroom = ({ chatroom }) => {

  const {
    currentUser
  } = useAuth();

  let user = chatroom.other_user;

  const {
    onClickChatroom,
  } = useChatroom(user);

  return (
    <>
      <ListItem button alignItems="flex-start" onClick={onClickChatroom}>
        <Avatar src={``} />
        <ListItemText style={{ marginLeft: "20px", marginTop: 0 }}
          primary={user.name}
          secondary={`${chatroom.last_message.user_id === currentUser.id ? 'You:' : ''} ${chatroom.last_message.body}`}
        />
      </ListItem>
    </>
  )
};

export default Chatroom;
