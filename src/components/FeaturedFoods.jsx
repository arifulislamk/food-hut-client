import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";

const FeaturedFoods = () => {
    const { isLoading, data: foods } = useQuery({
        queryKey: ['foods'],
        queryFn: async () => {
            return await fetch(`${import.meta.env.VITE_URL}/allFoods`)
                .then(res => res.json())
        }
    })

    // console.log(data, foods)
    if (isLoading) {
        return <div className=" mt-6 flex justify-center"><span className="loading w-20 text-yellow-400 loading-spinner "></span></div>
    }

    return (
        <div>
            <h2 className="font-poppins font-medium  text-center text-2xl md:text-3xl  lg:text-5xl mb-10">Featured Foods </h2>

            <Fade cascade duration={3000}>
                <motion.div
                    initial={{ y: -500 }}
                    animate={{ y: 0 }}
                    transition={{ delay: 4, type: 'spring', stiffness: 120 }}
                    className=" grid md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5">
                    {
                        foods?.map(food => <div key={food._id} className="card font-open-sans card-compact bg-base-100 shadow-xl">
                            <figure><img src={food.foodImage} alt="Shoes" /></figure>
                            <div className="card-body space-y-3">
                                <h2 className="font-poppins font-bold card-title">{food.foodName}</h2>
                                <p> Quantity : {food.foodQuantity}</p>
                                <p> Pickup : {food.pickupLocation}</p>
                                <p> Expired Date/Time :  {new Date(food.expiredDate).toLocaleDateString('en-GB', {
                                    day: '2-digit',
                                    month: '2-digit',
                                    year: 'numeric'
                                })}</p>
                                <p> Additional Notes {food.additionalNotes}</p>

                                <div className="card-actions mt-14 justify-between">
                                    <div className=" flex items-center gap-5" >
                                        <img className="w-1/6 rounded-full" src={food.donatorImage} alt="" />
                                        <p className=" text-xl">{food.donatorName}</p>
                                    </div>
                                    <Link to={`/foodDetails/${food._id}`}>
                                        <button className="btn bg-orange-400  ">View Details</button>
                                    </Link>
                                </div>
                            </div>
                        </div>)
                    }
                </motion.div>
                <div className=" text-center mt-10">
                    <Link to='/availableFoods'><button className="btn btn-warning text-white ">Show All</button></Link>
                </div>
            </Fade>

        </div>
    );
};

export default FeaturedFoods;