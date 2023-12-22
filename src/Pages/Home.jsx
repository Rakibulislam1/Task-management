import { Helmet } from "react-helmet";
import Banner from "../Components/Banner/Banner";
import Users from "../Components/Others/Users";

const Home = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Task Management - Home</title>
      </Helmet>
      <Banner />
      <Users />
    </div>
  );
};

export default Home;
