import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { AuthContext } from "../provider/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { Fade } from "react-awesome-reveal";
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";

const ManageMyFoods = () => {
    
    useEffect(() => {
        window.scroll(0, 0)
    }, [])
    const { user } = useContext(AuthContext)
    const [foods, setMyFoods] = useState([])
    useEffect(() => {
        const getData = async () => {
            const { data } = await axios(`${import.meta.env.VITE_URL}/allFood/${user.email}`, { withCredentials: true })
            console.log(data)
            setMyFoods(data)
        }
        getData()
    }, [user])

    const handleDeleteFood = _id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                console.log('delete', _id)
                axios.delete(`${import.meta.env.VITE_URL}/allFoodsdelete/${_id}`)
                    .then(res => {
                        console.log(res.data)
                        if (res.data.deletedCount > 0) {
                            const remeningFood = foods.filter(food => food._id !== _id);
                            setMyFoods(remeningFood)
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }

                    })
            }
        });

    }
    return (
        <div>
            <Helmet>
                <title>FOOD HUT | Manage My Foods </title>
            </Helmet>
            <Fade cascade duration={2000}>
                <h2 className="font-poppins font-medium  text-3xl lg:hidden  text-center mb-10  mt-5">Manage My Foods</h2>

                <div>
                    <div className="overflow-x-auto md:px-8 lg:px-14">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr className=" light:bg-gray-200 text-xl font-bold">
                                    <th>No</th>
                                    <th>Image</th>
                                    <th>Food Name</th>
                                    <th>Quantity</th>
                                    <th>Status</th>
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
                                        <td > <button className={" btn text-white " + (food.foodStatus === 'available' ? 'bg-green-500' : 'bg-red-500')}>{food.foodStatus}</button></td>
                                        <td> <Link to={`/updatedPages/${food._id}`}>
                                            <button className="btn  hover:btn-info"><FaRegEdit className=" text-2xl" /></button>
                                        </Link></td>
                                        <td><button onClick={() => handleDeleteFood(food._id)} className="btn  hover:btn-ghost"><MdDelete className=" text-red-600 text-3xl" /></button></td>
                                    </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </Fade>
        </div>
    );
};

export default ManageMyFoods;