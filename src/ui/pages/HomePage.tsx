import withRequireAuth from "hocs/withRequireAuth";
import HomeTemplate from "ui/templates/HomeTemplate";

const HomePage = () => {
    return <HomeTemplate />;
}

export default withRequireAuth(HomePage);