import { Helmet } from "react-helmet";
import Slider from "../components/Slider";
import FeaturedFoods from "../components/FeaturedFoods";
import ContactUs from "./ContactUs";
import Accorodian from "../components/Accorodian";
import Top from "../components/Top";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Home = () => {
    
    useEffect(() => {
        window.scroll(0, 0)
    }, [])
    return (
        <div>
            <Helmet>
                <title>FOOD HUT | Home</title>
            </Helmet>

            <div className=" flex font-open-sans">
                <button className="btn hidden md:inline-block md:text-xl bg-lime-200">
                    Rank Annauncment
                </button>
                <Marquee speed={100}>
                    <div>
                        <p className=" text-orange-900 md:text-2xl">Fuel Your Passion for Food! <Link className=" text-blue-600" to="/addFood">Add More</Link> and Climb the Ranks to Top Contributor!</p>
                    </div>
                </Marquee>
            </div>
            <Slider />
            <FeaturedFoods />
            <Top />
            <Accorodian />
            <ContactUs />
        </div>
    );
};

export default Home;