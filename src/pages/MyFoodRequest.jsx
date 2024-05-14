import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
// import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { Fade } from "react-awesome-reveal";

const MyFoodRequest = () => {
    // const foods = useLoaderData();
    const { user } = useContext(AuthContext)
    const [foods, setFoods] = useState([]);

    useEffect(() => {
        axios(`${import.meta.env.VITE_URL}/requestFoods/${user.email}`, { withCredentials: true })
            .then(res => {
                setFoods(res.data)
            })
    }, [user.email])

    return (
        <div>
            <Helmet>
                <title>FOOD HUT | My Food Request </title>
            </Helmet>

            <Fade cascade duration={2000}>
                <div>
                    <div className="overflow-x-auto lg:px-14">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr className=" light:bg-gray-300  text-xl font-bold">
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
            </Fade>
        </div >
    );
};

export default MyFoodRequest;