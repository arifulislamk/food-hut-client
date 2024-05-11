import axios from "axios";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const AvailableFoods = () => {

    const [foods, setFoods] = useState([]);
    useEffect(() => {
        // axios(`${import.meta.VITE_URL}/allFoods`)
        //     .then(res => {
        //         console.log(res.data)
        //         setFoods(res.data)
        //     })
        const getData = async () => {
            const { data } = await axios(`${import.meta.env.VITE_URL}/allFoods`)
            console.log(data)
            setFoods(data)
        }
        getData()
    }, [])
    return (
        <div>
            <Helmet>
                <title>FOOD HUT | Available Foods</title>
            </Helmet>
            <h2 className="text-center">AvailableFoods section : {foods.length} </h2>
            <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    foods.map(food => <div key={food._id} className="card card-compact bg-base-100 shadow-xl">
                        <figure><img src={food.foodImage} alt="Shoes" /></figure>
                        <div className="card-body space-y-3">
                            <h2 className="card-title">{food.foodName}</h2>
                            <p> Quantity : {food.foodQuantity}</p>
                            <p> Pickup : {food.pickupLocation}</p>
                            <p> Expired Date/Time :  {food.expiredDate}</p>
                            <p> Additional Notes {food.additionalNotes}</p>

                            <div className="card-actions mt-14 justify-between">
                                <div className=" flex items-center gap-5" >
                                    <img className="w-1/6 rounded-full" src={food.donatorImage} alt="" />
                                    <p className=" text-xl">{food.donatorName}</p>
                                </div>
                                <Link to={`/foodDetails/${food._id}`}>
                                    <button className="btn btn-secondary">View Details</button>
                                </Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default AvailableFoods;