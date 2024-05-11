import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
// import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const MyFoodRequest = () => {
    // const foods = useLoaderData();
    const { user } = useContext(AuthContext)
    const [foods, setFoods] = useState([]);

    useEffect(() => {
        axios(`${import.meta.env.VITE_URL}/requestFoods/${user.email}`)
            .then(res => {
                setFoods(res.data)
            })
    }, [user.email])

    return (
        <div>
            <Helmet>
                <title>FOOD HUT | My Food Request </title>
            </Helmet>

            <div>
                <div className="overflow-x-auto px-14">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className=" text-xl font-bold">
                                <th>No</th>
                                <th>Image</th>
                                <th>Food Name</th>
                                <th>Donar Name</th>
                                <th>Pickup Location</th>
                                <th>Expire Date</th>
                                <th>Request Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                foods.map((food, inx) => <tr key={inx} className="hover">
                                    <th>{inx + 1}</th>
                                    <td><img className="w-[70px] rounded-lg" src={food.foodImage} alt="" /></td>
                                    <td>{food.foodName}</td>
                                    <td>{food.donatorName}</td>
                                    <td>{food.pickupLocation}</td>
                                    <td> {new Date(food.expiredDate).toLocaleDateString('en-GB', {
                                        day: '2-digit',
                                        month: '2-digit',
                                        year: 'numeric'
                                    })}</td>
                                    <td>{new Date(food.requestDate).toLocaleDateString('en-GB', {
                                        day: '2-digit',
                                        month: '2-digit',
                                        year: 'numeric'
                                    })}</td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div >
    );
};

export default MyFoodRequest;