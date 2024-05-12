import axios from "axios";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useLoaderData } from "react-router-dom";

const UpdatePages = () => {
    const food = useLoaderData();

    const { _id, foodName, foodQuantity, foodImage, pickupLocation, expiredDate, additionalNotes, donatorName, donatorEmail, donatorImage, foodStatus } = food;

    console.log(food, foodStatus)
    const [startDate, setStartDate] = useState(new Date(expiredDate) || new Date());

    const handleUpdate = e => {
        e.preventDefault()
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
        console.log("updated", _id)

        const updateFood = {
            foodName, foodQuantity, foodImage, pickupLocation, expiredDate, additionalNotes, donatorName, donatorEmail, donatorImage, foodStatus
        }

        axios.put(`${import.meta.env.VITE_URL}/allFoodsupdate/${_id}`, updateFood)
            .then(res => {
                console.log(res.data)
                if(res.data.modifiedCount > 0){
                    alert('Updated Done')
                }
            })
    }

    return (
        <div>
            <form onSubmit={handleUpdate} className="font-open-sans card-body space-y-4 mb-6 border rounded-lg border-gray-400 lg:w-5/6 mx-auto">
                <h2 className="font-poppins font-medium  text-2xl lg:text-5xl text-center font-extrabold">Update Your Food</h2>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-xl font-medium">Food Name :</span>
                    </label>
                    <input type="text" defaultValue={foodName} name="foodname" placeholder="Food Name" className="input input-bordered" required />
                </div>
                <div className=" flex gap-5 ">
                    <div className="form-control md:w-1/2 ">
                        <label className="label">
                            <span className="label-text text-xl font-medium">Food Quantity :</span>
                        </label>
                        <input type="text" defaultValue={foodQuantity} name="foodquantity" placeholder="Food Quantity" className="input input-bordered" required />
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-xl font-medium">Food Image</span>
                        </label>
                        <input type="text" defaultValue={foodImage} name="foodimage" placeholder="Food Image" className="input input-bordered" required />
                    </div>
                </div>
                <div className=" flex gap-5 ">
                    <div className="form-control  md:w-1/2">
                        <label className="label">
                            <span className="label-text text-xl font-medium">Pickup Location :</span>
                        </label>
                        <input type="text" defaultValue={pickupLocation} name="pickuplocation" placeholder="Pickup Location" className="input input-bordered" required />
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-xl font-medium">Expired Date/Time :</span>
                        </label>
                        <DatePicker dateFormat="dd/MM/YYYY" className=" border border-gray-500 p-3 text-xl rounded-lg" name="expiredDate" selected={startDate} onChange={(date) => setStartDate(date)} />
                    </div>
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-xl font-medium">Additional Notes :</span>
                    </label>

                    <textarea defaultValue={additionalNotes} cols={10} rows={5} name="additionalnotes" placeholder="Additional Notes" type="text" className=" outline-none border border-gray-500 rounded-lg"></textarea>
                </div>

                <div className=" flex justify-between">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Donator Name :</span>
                        </label>
                        <input type="text" defaultValue={donatorName} name="name" placeholder="User Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Donator Email :</span>
                        </label>
                        <input defaultValue={donatorEmail} type="text" name="email" placeholder="User Email" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Donator Image :</span>
                        </label>

                        <input defaultValue={donatorImage} type="text" name="userimage" placeholder="User Image" className="input input-bordered" required />
                    </div>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text"> Food Status :</span>
                    </label>
                    <input type="text" defaultValue="available" name="foodstatus" placeholder="Food Status" className="input input-bordered" required />
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-secondary">Update Food</button>
                </div>
            </form>
        </div>
    );
};

export default UpdatePages;