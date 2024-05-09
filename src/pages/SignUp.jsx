import { useState } from "react";
import { LuEyeOff, LuEye } from "react-icons/lu";
import { Link } from "react-router-dom";


const SignUp = () => {

    const [showpassword, setshowpassword] = useState(false);

    return (
        <div className="mt-20 font-algeria">
            <h2 className="mb-4 text-center font-medium text-5xl">Please Register</h2>
            <form  className="card-body mb-6 border rounded-lg border-gray-400 lg:w-1/2 mx-auto">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-2xl font-medium">Name</span>
                    </label>
                    <input type="text" name="name" placeholder="Your Name" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-2xl font-medium">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="Your Email" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-2xl font-medium">PhotoURL</span>
                    </label>
                    <input type="text" name="photo" placeholder="PhotoURL" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-2xl font-medium">Password</span>
                    </label>
                    <div className="mb-4 relative" >
                        <input placeholder="New Password" className=" w-full py-2 px-4  input input-bordered rounded-lg"
                            type={showpassword ? 'text' : 'password'} name="password" id="" />
                        <span className="absolute top-3 right-4 " onClick={() => { setshowpassword(!showpassword) }}>
                            {showpassword ? <LuEyeOff /> : <LuEye />}
                        </span>
                    </div>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-secondary text-2xl font-medium">Register</button>
                </div>
                <div>
                    <p className=" text-xl">Already have an account? Please <Link className="text-blue-500 font-medium" to="/login">Login</Link></p>
                </div>
            </form>
        </div>
    );
};

export default SignUp;