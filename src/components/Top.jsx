import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";

const Top = () => {
    return (
        <div>
            <Fade cascade duration={2000}>
                <section className=" mt-6 md:mt-10 lg:mt-20 font-poppins dark:bg-gray-100 dark:text-gray-800">
                    <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left md:space-y-10 lg:space-y-20">
                            <div>
                                <h1 className=" text-xl md:text-5xl md:mb-5 font-bold ">Add More Foods
                                </h1>
                                <h2 className=" md:text-3xl font-bold">Get Your Rewards</h2>
                            </div>
                            <p className="mt-6 mb-8 md:text-2xl ">
                                When you added more foods in our website . We are gift your a rewards that is surprize . So, Let get it,
                            </p>
                            <div>
                                <Link to='/addFood'>
                                    <button className=" btn btn-warning">Add Now</button>
                                </Link>
                            </div>
                        </div>
                        <div className=" lg:w-1/2 rounded-lg">
                            <img src="https://i.ibb.co/H4hgN7b/THAILAND-24.png" alt="" className="" />
                        </div>
                    </div>
                </section>
            </Fade>
        </div>
    );
};

export default Top;