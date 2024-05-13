import { Helmet } from "react-helmet";
import Slider from "../components/Slider";
import FeaturedFoods from "../components/FeaturedFoods";
import ContactUs from "./ContactUs";
import Accorodian from "../components/Accorodian";
import Top from "../components/Top";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>FOOD HUT | Home</title>
            </Helmet>
            <Slider />
            <FeaturedFoods />
            <Top />
            <Accorodian />
            <ContactUs />
        </div>
    );
};

export default Home;