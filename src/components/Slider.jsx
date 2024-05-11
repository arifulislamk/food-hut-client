import { Slide } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import { useTypewriter } from "react-simple-typewriter";

const Slider = () => {
    const [text] = useTypewriter({
        words: ["Kacchi is Layers of partially boiled basmati rice and raw meat, be it beef or mutton -- marin all cooked in a big pot."],
        loop: 0
    })
    return (
        <div>
            {/* <!-- slider or curosal  --> */}
            <div className="font-algeria mt-20 lg:mb-20  rounded-2xl carousel w-full lg:h-[550px] ">
                {/* <!-- slider 1 --> */}
                <div id="slide1" className="carousel-item relative w-full">
                    <div className="flex flex-col lg:flex-row-reverse p-4 lg:p-24 gap-20">
                        <div className="space-y-7 flex-1">

                            <h2 className=" text-xl text-secondary lg:text-4xl font-bold">{text}</h2>
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
                                <img src="https://i.ibb.co/mGHFGt8/THAILAND-14.png" className="w-full rounded-2xl" />
                            </Slide>
                        </div>

                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>

            </div>
        </div >
    );
};

export default Slider;