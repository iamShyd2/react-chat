import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import withAuth from "./withAuth";

const withRequireAuth = (Component: React.FC) => {
    return withAuth(() => {
        const {
            currentUser,
            isFetching,
        } = useAuth();

        const location = useLocation();        

        if(isFetching) return null;        

        if (currentUser == null) return <Navigate
            to="/sign_in"
            state={{ from: location }}
            replace
        />;

        return <Component />
    })
}

export default withRequireAuth;