import { useContext, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const FoodDetails = () => {

    const [startDate, setStartDate] = useState(new Date());
    const { user } = useContext(AuthContext)
    const foods = useLoaderData();

    // const { id } = useParams()
    // // const intId = parseInt(id)
    // console.log(foods, id);
    // const spots = foods.find(spot => spot._id == id);

    const {
        _id,
        foodName,
        foodQuantity,
        foodImage,
        pickupLocation,
        expiredDate,
        additionalNotes,
        donatorName,
        donatorEmail,
        donatorImage,
        foodStatus } = foods;

    const handleRequest = e => {
        e.preventDefault()
        const form = e.target;
        const foodName = form.foodname.value;
        const additionalNotes = form.additionalnotes.value;
        console.log(foodName, additionalNotes, 'okkk')
    }
    return (
        <div className="font-algeria space-y-5 mx-4 lg:mx-12 ">
            <Helmet className="text-sm">
                <title className="">FOOD HUT | {foodName}</title>
            </Helmet>
            <Fade cascade duration={1000}>

                <div className=" flex">
                    <div className=" w-2/3">
                        <img className="w-full lg:h-[500px] rounded-lg" src={foodImage} alt="" />
                    </div>

                    <div className="text-xl flex flex-col justify-between lg:px-10">
                        <div className=" flex items-center gap-10">

                            <div className=" space-y-5">
                                <h1 className=" font-bold text-center text-red-500">Donar Information</h1>
                                <p><span className=" mr-6"> Name :</span> {donatorName ? donatorName : "Name Not Found"}</p>
                                <p> <span className=" mr-6">Email : </span> {donatorEmail ? donatorEmail : "email not found"}</p>
                                <p> <span className=" mr-6">Pickup Location : </span> {pickupLocation ? pickupLocation : "location not found"}</p>
                            </div>

                            <div>
                                <img className=" rounded-full" src={donatorImage} alt="" />
                            </div>
                        </div>
                        <div className="flex flex-col ">
                            <div className="mb-5 space-y-5 flex-grow">
                                <p> <span className="text-2xl font-medium mr-5"> Food Name : {foodName} </span> </p>
                                <p> <span className="text-2xl font-medium mr-5">Quantity : </span> {foodQuantity}</p>
                                <p> <span className="text-2xl font-medium mr-5">Expire Date/Time :</span> {new Date(expiredDate).toLocaleDateString('en-GB', {
                                    day: '2-digit',
                                    month: '2-digit',
                                    year: 'numeric'
                                })}</p>
                            </div>
                            {/* <button className="btn w-full bg-secondary ">Request</button> */}
                            {/* Open the modal using document.getElementById('ID').showModal() method */}
                            <button className="btn  bg-secondary" onClick={() => document.getElementById('my_modal_2').showModal()}>Request</button>
                            <dialog id="my_modal_2" className="modal">
                                <div className="modal-box max-w-[800px]">
                                    <form onSubmit={handleRequest} className="   font-algeria card-body mb-6 border rounded-lg border-gray-400 lg:w-5/6 mx-auto">
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text font-medium">Food Name :</span>
                                            </label>
                                            <input type="text" defaultValue={foodName} name="foodname" className="input outline-none border-gray-200" readOnly />
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text font-medium">Food Image</span>
                                            </label>
                                            <input type="text" defaultValue={foodImage} name="foodimage" className="input input-bordered" readOnly />
                                        </div>
                                        <div className="form-control  ">
                                            <label className="label">
                                                <span className="label-text font-medium">Food Id :</span>
                                            </label>
                                            <input type="text" name="foodquantity" defaultValue={_id} className="input input-bordered" readOnly />
                                        </div>

                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Donator Email :</span>
                                            </label>
                                            <input type="text" defaultValue={donatorEmail} name="email" placeholder="User Email" className="input input-bordered" readOnly />
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Donator Name :</span>
                                            </label>
                                            <input type="text" defaultValue={donatorName} name="name" placeholder="User Name" className="input input-bordered" readOnly />
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">User Email :</span>
                                            </label>
                                            <input type="text" defaultValue={user.email} name="email" placeholder="User Email" className="input input-bordered" readOnly />
                                        </div>
                                        <div className="form-control ">
                                            <label className="label">
                                                <span className="label-text font-medium">Request Date/Time :</span>
                                            </label>
                                        </div>
                                        <DatePicker dateFormat="dd/MM/YYYY" readOnly className=" border border-gray-500 p-3 text-xl rounded-lg" name="expiredDate" selected={startDate} onChange={(date) => setStartDate(date)} />
                                        <div className="form-control ">
                                            <label className="label">
                                                <span className="label-text font-medium">Pickup Location :</span>
                                            </label>
                                            <input type="text" name="pickuplocation"
                                                defaultValue={pickupLocation} className="input input-bordered" readOnly />
                                        </div>
                                        <div className="form-control ">
                                            <label className="label">
                                                <span className="label-text font-medium">Expire Date/Time :</span>
                                            </label>
                                            <DatePicker dateFormat="dd/MM/YYYY" readOnly defaultValue={expiredDate} className=" border border-gray-500 p-3 text-xl rounded-lg" name="expiredDate" selected={expiredDate} onChange={(date) => setStartDate(date)} />
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text font-medium">Additional Notes :</span>
                                            </label>

                                            <textarea defaultValue={additionalNotes} cols={5} rows={2} name="additionalnotes" placeholder="Additional Notes" type="text" className=" outline-none border border-gray-500 rounded-lg"></textarea>
                                        </div>
                                        <div className="form-control mt-2">
                                            <button className="btn btn-secondary">Request</button>
                                        </div>
                                    </form>
                                </div>
                                <form method="dialog" className="modal-backdrop">
                                    <button>close</button>
                                </form>
                            </dialog>
                        </div>
                    </div>
                </div>


            </Fade>
        </div>
    );
};

export default FoodDetails;