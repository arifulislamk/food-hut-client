import { Helmet } from "react-helmet";
import Slider from "../components/Slider";
import FeaturedFoods from "../components/FeaturedFoods";
import ContactUs from "./ContactUs";
import Accorodian from "../components/Accorodian";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>FOOD HUT | Home</title>
            </Helmet>

            <Slider />
            <FeaturedFoods />
            <Accorodian />
            <ContactUs />
        </div>
    );
};

export default Home;