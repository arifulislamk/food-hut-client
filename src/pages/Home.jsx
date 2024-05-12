import { Helmet } from "react-helmet";
import Slider from "../components/Slider";
import FeaturedFoods from "../components/FeaturedFoods";
import ContactUs from "./ContactUs";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>FOOD HUT | Home</title>
            </Helmet>

            <Slider />
            <FeaturedFoods />
            <ContactUs />
        </div>
    );
};

export default Home;