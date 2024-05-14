import { Fade, Slide } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import { useTypewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

const Slider = () => {
    const [text1] = useTypewriter({
        words: ["Kacchi is Layers of partially boiled basmati rice and raw meat"],
        loop: 0
    })
    const [text2] = useTypewriter({
        words: ["Check the juices run clear by pulling the leg away from the body  ."],
        loop: 0
    })
    const [text3] = useTypewriter({
        words: ["Hilsa deep-fried in mustard oil until crunchy and sizzling"],
        loop: 0
    })
    return (
        <div>
            {/* <!-- slider or curosal  --> */}
            <Fade cascade duration={3000}>
                <div className="font-open-sans lg:mb-20  rounded-2xl carousel w-full lg:h-[550px] ">
                    <div id="slide1" className="carousel-item relative w-full">
                        <div className="flex flex-col lg:flex-row-reverse p-4 lg:p-24 gap-20">
                            <div className="space-y-7 flex-1">
                                <h2 className="font-poppins  text-xl text-secondary lg:text-4xl font-bold">{text1}</h2>
                                <p className=" text-2xl lg:text-4xl font-medium text-error "> Sultan Dain, Dhaka</p>
                                <Link to="/foodDetails/663f495e442329bb0c45555a">
                                    <Slide triggerOnce>
                                        <button className="btn lg:mt-10 bg-orange-400  text-white">View Details</button>
                                    </Slide>
                                </Link>
                            </div>
                            <div className="flex-1 relative">
                                <Slide direction="right" cascade delay={100} triggerOnce>
                                    <img src="https://i.ibb.co/mGHFGt8/THAILAND-14.png" className="w-full rounded-2xl" />
                                </Slide>
                                <motion.div
                                    animate={{
                                        y: -20, // Animate the div up by 20px
                                        rotate: 360, // Rotate 360 degrees
                                        color: ['#FF008C', '#00E7FF', '#13D8AA', '#FF7A00'], // Change color continuously
                                    }}
                                    transition={{
                                        duration: 4, // Animation duration: 4 seconds
                                        repeat: Infinity, // Repeat indefinitely
                                        ease: 'linear', // Linear easing
                                    }}
                                    style={{
                                        position: 'absolute',
                                        top: "50%",
                                        left: '50%',
                                        transform: 'translateX(-50%)',
                                        fontSize: 30,
                                        fontWeight: 'bold',
                                        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                                        cursor: 'pointer',
                                    }}
                                >
                                    KACCHI VAI!
                                </motion.div>
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
                                <h2 className="font-poppins   text-xl text-secondary lg:text-4xl font-bold">{text2}</h2>
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
                                <motion.div
                                    animate={{
                                        y: -20, // Animate the div up by 20px
                                        rotate: 360, // Rotate 360 degrees
                                        color: ['#FF008C', '#00E7FF', '#13D8AA', '#FF7A00'], // Change color continuously
                                    }}
                                    transition={{
                                        duration: 4, // Animation duration: 4 seconds
                                        repeat: Infinity, // Repeat indefinitely
                                        ease: 'linear', // Linear easing
                                    }}
                                    style={{
                                        position: 'absolute',
                                        top: "50%",
                                        left: '50%',
                                        transform: 'translateX(-50%)',
                                        fontSize: 30,
                                        fontWeight: 'bold',
                                        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                                        cursor: 'pointer',
                                    }}
                                >
                                    Chickhen!
                                </motion.div>
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
                                <h2 className="font-poppins text-xl text-secondary lg:text-4xl font-bold">{text3}</h2>
                                <p className=" text-2xl lg:text-4xl font-medium text-error "> Uttara
                                    ,
                                    Dhaka-1230</p>
                                <Link to="/foodDetails/663f4a4e442329bb0c45555e">
                                    <Slide triggerOnce>
                                        <button className="btn lg:mt-10 bg-orange-400  text-white">View Details</button>
                                    </Slide>
                                </Link>
                            </div>
                            <div className="flex-1 relative">
                                <Slide direction="right" cascade delay={100} triggerOnce>
                                    <img src="https://i.ibb.co/TrzjRmm/THAILAND-19.png" className="w-full rounded-2xl" />
                                </Slide>
                                <motion.div
                                    animate={{
                                        y: -20, // Animate the div up by 20px
                                        rotate: 360, // Rotate 360 degrees
                                        color: ['#FF008C', '#00E7FF', '#13D8AA', '#FF7A00'], // Change color continuously
                                    }}
                                    transition={{
                                        duration: 4, // Animation duration: 4 seconds
                                        repeat: Infinity, // Repeat indefinitely
                                        ease: 'linear', // Linear easing
                                    }}
                                    style={{
                                        position: 'absolute',
                                        top: "50%",
                                        left: '50%',
                                        transform: 'translateX(-50%)',
                                        fontSize: 30,
                                        fontWeight: 'bold',
                                        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                                        cursor: 'pointer',
                                    }}
                                >
                                    Hilsha!
                                </motion.div>
                            </div>
                        </div>
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