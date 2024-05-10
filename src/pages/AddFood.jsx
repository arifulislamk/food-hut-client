import { useContext } from "react";
import { Helmet } from "react-helmet";
import { AuthContext } from "../provider/AuthProvider";

const AddFood = () => {
    const { user } = useContext(AuthContext)

    const handleAddFood = event => {
        event.preventDefault();
        const form = event.target;
        const foodName = form.foodname.value;
        const foodquantity = form.foodquantity.value;
        const foodImage = form.foodimage.value;
        const pickuplocation = form.pickuplocation.value;
        const expiredDate = form.expiredDate.value;
        const additionalnotes = form.additionalnotes.value;
        const username = form.name.value;
        const useremail = form.email.value;
        const userimage = form.userimage.value;
        const foodstatus = form.foodstatus.value;
        console.log(foodName, foodquantity, foodImage, pickuplocation, expiredDate, additionalnotes, username, useremail, userimage, foodstatus)
    }
    return (
        <div>
            <Helmet>
                <title>FOOD HUT | Add Food</title>
            </Helmet>
            <form onSubmit={handleAddFood} className="font-algeria card-body space-y-4 mb-6 border rounded-lg border-gray-400 lg:w-5/6 mx-auto">
                <h2 className=" text-2xl lg:text-5xl text-center font-extrabold">Add Food</h2>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-xl font-medium">Food Name :</span>
                    </label>
                    <input type="text" name="foodname" placeholder="Food Name" className="input input-bordered" required />
                </div>
                <div className=" flex gap-5 ">
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
                <div className=" flex gap-5 ">
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
                        <input type="text" name="expiredDate" placeholder="Expired Date/Time" className="input input-bordered" required />
                    </div>
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-xl font-medium">Additional Notes :</span>
                    </label>

                    <textarea cols={10} rows={5} name="additionalnotes" placeholder="Additional Notes" type="text" className=" outline-none border border-gray-500 rounded-lg"></textarea>
                </div>

                <div className=" flex justify-between">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">User Name :</span>
                        </label>
                        <input type="text" defaultValue={user.displayName} name="name" placeholder="User Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email :</span>
                        </label>
                        <input type="text" defaultValue={user.email} name="email" placeholder="User Email" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text"> Image :</span>
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
                    <button className="btn btn-secondary">Add Food</button>
                </div>
            </form>
        </div>
    );
};

export default AddFood;