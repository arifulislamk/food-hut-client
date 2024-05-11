import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { AuthContext } from "../provider/AuthProvider";
import { Link } from "react-router-dom";

const ManageMyFoods = () => {
    const { user } = useContext(AuthContext)
    const [foods, setMyFoods] = useState([])
    useEffect(() => {
        const getData = async () => {
            const { data } = await axios(`${import.meta.env.VITE_URL}/allFood/${user.email}`)
            console.log(data)
            setMyFoods(data)
        }
        getData()
    }, [user])

    const handleDeleteFood = _id => {
        console.log('delete', _id)
        axios.delete(`${import.meta.env.VITE_URL}/allFoodsdelete/${_id}`)
            .then(res => {
                console.log(res.data)
                if (res.data.deletedCount > 0) {
                    const remeningFood = foods.filter(food => food._id !== _id);
                    setMyFoods(remeningFood)
                }

            })
    }
    return (
        <div>
            <Helmet>
                <title>FOOD HUT | Manage My Foods </title>
            </Helmet>
            <h2>ManageMyFoods section : {foods.length}</h2>

            <div>
                <div className="overflow-x-auto px-14">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className=" text-xl font-bold">
                                <th>No</th>
                                <th>Image</th>
                                <th>Food Name</th>
                                <th>Quantity</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                foods.map((food, inx) => <tr key={inx} className="hover">
                                    <th>{inx + 1}</th>
                                    <td><img className="w-[70px] rounded-lg" src={food.foodImage} alt="" /></td>
                                    <td>{food.foodName}</td>
                                    <td>{food.foodQuantity}</td>
                                    <td> <Link to={`/updatedPages/${food._id}`}>
                                    <button className="btn btn-info hover:btn-ghost">Update</button>
                                    </Link></td>
                                    <td><button onClick={() => handleDeleteFood(food._id)} className="btn btn-error hover:btn-ghost">X</button></td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageMyFoods;