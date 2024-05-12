import { Slide } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import { useTypewriter } from "react-simple-typewriter";

const Slider = () => {
    const [text1] = useTypewriter({
        words: ["Kacchi is Layers of partially boiled basmati rice and raw meat, be it beef or mutton -- marin all cooked in a big pot."],
        loop: 0
    })
    const [text2] = useTypewriter({
        words: ["Check the juices run clear by pulling the leg away from the body and skewering between it - juices should flow out ."],
        loop: 0
    })
    const [text3] = useTypewriter({
        words: ["Hilsa deep-fried in mustard oil until crunchy and sizzling, served with a drizzle of hilsa oil and green chillies"],
        loop: 0
    })
    return (
        <div>
            {/* <!-- slider or curosal  --> */}
            <div className="font-open-sans lg:mb-20  rounded-2xl carousel w-full lg:h-[550px] ">
                {/* <!-- slider 1 --> */}
                <div id="slide1" className="carousel-item relative w-full">
                    <div className="flex flex-col lg:flex-row-reverse p-4 lg:p-24 gap-20">
                        <div className="space-y-7 flex-1">

                            <h2 className="font-poppins font-medium  text-xl text-secondary lg:text-4xl font-bold">{text1}</h2>
                            <p className=" text-2xl lg:text-4xl font-medium text-error "> Sultan Dain
                                ,
                                Dhaka</p>
                            <Link to="/foodDetails/662d0e07c8172d24f14b619b">
                                <Slide triggerOnce>
                                    <button className="btn lg:mt-10 btn-warning text-white">View Details</button>
                                </Slide>
                            </Link>

                        </div>
                        <div className="flex-1">
                            <Slide direction="right" cascade delay={100} triggerOnce>
                                <img src="https://i.ibb.co/mGHFGt8/THAILAND-14.png" className="w-full rounded-2xl" />
                            </Slide>
                        </div>

                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <div className="flex flex-col lg:flex-row-reverse p-4 lg:p-24 gap-20">
                        <div className="space-y-7 flex-1">

                            <h2 className="font-poppins font-medium  text-xl text-secondary lg:text-4xl font-bold">{text2}</h2>
                            <p className=" text-2xl lg:text-4xl font-medium text-error "> Red Chicken,
                                Dhaka-1230</p>
                            <Link to="/foodDetails/662d0e07c8172d24f14b619b">
                                <Slide triggerOnce>
                                    <button className="btn lg:mt-10 btn-warning text-white">View Details</button>
                                </Slide>
                            </Link>

                        </div>
                        <div className="flex-1">
                            <Slide direction="right" cascade delay={100} triggerOnce>
                                <img src="https://i.ibb.co/DK7pFyR/THAILAND-16.png" className="w-full rounded-2xl" />
                            </Slide>
                        </div>

                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <div className="flex flex-col lg:flex-row-reverse p-4 lg:p-24 gap-20">
                        <div className="space-y-7 flex-1">

                            <h2 className="font-poppins font-medium  text-xl text-secondary lg:text-4xl font-bold">{text3}</h2>
                            <p className=" text-2xl lg:text-4xl font-medium text-error "> Uttara
                                ,
                                Dhaka-1230</p>
                            <Link to="/foodDetails/662d0e07c8172d24f14b619b">
                                <Slide triggerOnce>
                                    <button className="btn lg:mt-10 btn-warning text-white">View Details</button>
                                </Slide>
                            </Link>

                        </div>
                        <div className="flex-1">
                            <Slide direction="right" cascade delay={100} triggerOnce>
                                <img src="https://i.ibb.co/TrzjRmm/THAILAND-19.png" className="w-full rounded-2xl" />
                            </Slide>
                        </div>

                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>

            </div>
        </div >
    );
};

export default Slider;