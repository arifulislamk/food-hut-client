import { Helmet } from "react-helmet";
import Slider from "../components/Slider";
import FeaturedFoods from "../components/FeaturedFoods";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>FOOD HUT | Home</title>
            </Helmet>

            <Slider />
            <FeaturedFoods />
        </div>
    );
};

export default Home;