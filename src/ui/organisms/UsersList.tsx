import { List } from "@material-ui/core";
import { useEffect, useState } from "react";
import useFetch from "lib/useFetch";
import User from "ui/molecules/user/User";

const UsersList = () => {

    const [users, setUsers] = useState([]);

    const {
        onFetch,
    } = useFetch("/users", setUsers);

    useEffect(() => {
        onFetch();
    }, []);

    return (
        <List>
            {
                users.map((user, i) => (
                    <User
                        key={i}
                        user={user}
                    />
                ))
            }
        </List>
    )
}

export default UsersList;