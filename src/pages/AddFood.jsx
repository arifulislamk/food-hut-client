import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Fade } from "react-awesome-reveal";


const AddFood = () => {

    useEffect(() => {
        window.scroll(0, 0)
    }, [])
    const [startDate, setStartDate] = useState(new Date());
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const { mutate } = useMutation({
        mutationFn: async (food) => {
            return await axios.post(`${import.meta.env.VITE_URL}/allFoods`, food)
        },
        onSuccess: () => {
            navigate('/manageMyFoods');
            Swal.fire({
                title: 'Food Added done',
                icon: 'success',
                confirmButtonText: 'OK'
            })
        },
        onError: () => {
            toast.error('error fount')
        }
    })

    const handleAddFood = async event => {
        event.preventDefault();
        const form = event.target;
        const foodName = form.foodname.value;
        const foodQuantity = form.foodquantity.value;
        const foodImage = form.foodimage.value;
        const pickupLocation = form.pickuplocation.value;
        const expiredDate = startDate;
        const additionalNotes = form.additionalnotes.value;
        const donatorName = form.name.value;
        const donatorEmail = form.email.value;
        const donatorImage = form.userimage.value;
        const foodStatus = form.foodstatus.value;
        console.log(foodName, foodQuantity, foodImage, pickupLocation, expiredDate, additionalNotes, donatorName, donatorEmail, donatorImage, foodStatus)
        const food = {
            foodName,
            foodQuantity,
            foodImage,
            pickupLocation,
            expiredDate,
            additionalNotes,
            donatorName,
            donatorEmail,
            donatorImage,
            foodStatus
        }

        mutate(food)
    }

    return (
        <div>
            <Helmet>
                <title>FOOD HUT | Add Food</title>
            </Helmet>
            <Fade cascade duration={3000} >
                <form onSubmit={handleAddFood} className="font-open-sans card-body space-y-4 mb-6 border rounded-lg border-gray-400 md:w-5/6 mx-auto">
                    <h2 className="font-poppins font-medium  text-2xl lg:text-5xl text-center ">Add Food</h2>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-medium">Food Name :</span>
                        </label>
                        <input type="text" name="foodname" placeholder="Food Name" className="input input-bordered" required />
                    </div>
                    <div className=" flex flex-col md:flex-row gap-5 ">
                        <div className="form-control md:w-1/2 ">
                            <label className="label">
                                <span className="label-text text-xl font-medium">Food Quantity :</span>
                            </label>
                            <input type="text" name="foodquantity" placeholder="Food Quantity" className="input input-bordered" required />
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-xl font-medium">Food Image</span>
                            </label>
                            <input type="text" name="foodimage" placeholder="Food Image" className="input input-bordered" required />
                        </div>
                    </div>
                    <div className=" flex flex-col md:flex-row gap-5 ">
                        <div className="form-control  md:w-1/2">
                            <label className="label">
                                <span className="label-text text-xl font-medium">Pickup Location :</span>
                            </label>
                            <input type="text" name="pickuplocation" placeholder="Pickup Location" className="input input-bordered" required />
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-xl font-medium">Expired Date/Time :</span>
                            </label>
                            <DatePicker dateFormat="dd/MM/YYYY" className=" border w-[90%] light:border-gray-500 p-3 text-xl rounded-lg" name="expiredDate" selected={startDate} onChange={(date) => setStartDate(date)} />
                        </div>
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-medium">Additional Notes :</span>
                        </label>

                        <textarea cols={10} rows={5} name="additionalnotes" placeholder="Additional Notes" type="text" className=" outline-none border light:border-gray-500 rounded-lg"></textarea>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Donator Name :</span>
                            </label>
                            <input type="text" defaultValue={user.displayName} name="name" placeholder="User Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Donator Email :</span>
                            </label>
                            <input type="text" defaultValue={user.email} name="email" placeholder="User Email" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Donator Image :</span>
                            </label>

                            <input type="text" defaultValue={user.photoURL} name="userimage" placeholder="User Image" className="input input-bordered" required />
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text"> Food Status :</span>
                        </label>
                        <input type="text" defaultValue="available" name="foodstatus" placeholder="Food Status" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-orange-400  ">Add Food</button>
                    </div>
                </form>
            </Fade>
            <ToastContainer />
        </div>
    );
};

export default AddFood;