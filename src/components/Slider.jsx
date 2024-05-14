import { Fade, Slide } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Lottie from "lottie-react";

import animation2 from "../assets/Animation - 1715711207732.json";

const Slider = () => {
    return (
        <div>
            {/* <!-- slider or curosal  --> */}
            <Fade cascade duration={3000}>
                <div className="font-open-sans lg:mb-20  rounded-2xl carousel w-full lg:h-[550px] ">
                    <div id="slide1" className="carousel-item relative w-full">
                        <div className="flex flex-col lg:flex-row-reverse p-4 lg:p-20 gap-14">
                            <motion.div
                                initial={{ y: -500 }}
                                animate={{ y: 0 }}
                                transition={{ delay: 1, type: 'spring', stiffness: 10 }}
                                className="space-y-3 flex-1">
                                <h2 className="font-poppins  text-xl text-secondary md:text-4xl font-bold">Kacchi is Layers of partially boiled basmati rice and raw meat</h2>
                                <p className=" text-2xl , md:text-4xl font-medium text-error "> Sultan Dain, Dhaka</p>
                                <div className=" flex gap-10 items-center">
                                    <div>
                                        <Link to="/foodDetails/663f495e442329bb0c45555a">
                                            <Slide triggerOnce>
                                                <button className="btn lg:mt-10 bg-orange-400  text-white">View Details</button>
                                            </Slide>
                                        </Link>
                                    </div>
                                    <div>
                                        <Lottie className="w-[70%]" loop={true} animationData={animation2}></Lottie>
                                    </div>
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ y: 500 }}
                                animate={{ y: 0 }}
                                transition={{ delay: 1, type: 'spring', stiffness: 10 }}
                                className="flex-1 relative">
                                <img src="https://i.ibb.co/mGHFGt8/THAILAND-14.png" className="w-full rounded-2xl" />
                            </motion.div>
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <motion.div
                            initial={{ y: -500 }}
                            animate={{ y: 0 }}
                            transition={{ delay: 1, type: 'spring', stiffness: 10 }}
                            className="flex flex-col lg:flex-row-reverse p-4 lg:p-24 gap-20">
                            <div className="space-y-7 flex-1">
                                <h2 className="font-poppins   text-xl text-secondary lg:text-4xl font-bold">Check the juices run clear by pulling the leg away from the body</h2>
                                <p className=" text-2xl lg:text-4xl font-medium text-error "> Red Chicken,
                                    Dhaka-1230</p>
                                <Link to="/foodDetails/663f49b1442329bb0c45555b">
                                    <Slide triggerOnce>
                                        <button className="btn lg:mt-10 bg-orange-400  text-white">View Details</button>
                                    </Slide>
                                </Link>
                            </div>
                            <div className="flex-1 relative">
                                <Slide direction="right" cascade delay={100} triggerOnce>
                                    <img src="https://i.ibb.co/DK7pFyR/THAILAND-16.png" className="w-full rounded-2xl" />
                                </Slide>
                            </div>
                        </motion.div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <motion.div
                            initial={{ y: -500 }}
                            animate={{ y: 0 }}
                            transition={{ delay: 1, type: 'spring', stiffness: 10 }}
                            className="flex flex-col lg:flex-row-reverse p-4 lg:p-24 gap-20">
                            <div className="space-y-7 flex-1">
                                <h2 className="font-poppins text-xl text-secondary lg:text-4xl font-bold">Hilsa deep-fried in mustard oil until crunchy and sizzling</h2>
                                <p className=" text-2xl lg:text-4xl font-medium text-error "> Uttara
                                    ,
                                    Dhaka-1230</p>
                                <Link to="/foodDetails/663f4a4e442329bb0c45555e">
                                    <Slide cascade duration={3000} triggerOnce>
                                        <button className="btn lg:mt-10 bg-orange-400  text-white">View Details</button>
                                    </Slide>
                                </Link>
                            </div>
                            <div className="flex-1 relative">
                                <Slide direction="right" cascade delay={200} triggerOnce>
                                    <img src="https://i.ibb.co/TrzjRmm/THAILAND-19.png" className="w-full rounded-2xl" />
                                </Slide>
                            </div>
                        </motion.div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </Fade>
        </div >
    );
};

export default Slider;