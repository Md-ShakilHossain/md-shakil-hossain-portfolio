import { Helmet } from "react-helmet-async";


const Home = () => {
    return (
        <div>
            <Helmet><title>Home</title></Helmet>
            <h2 className="text-4xl">This is Home Page</h2>
        </div>
    );
};

export default Home;