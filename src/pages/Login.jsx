import { useState } from "react";
import { LuEyeOff, LuEye } from "react-icons/lu";
import { Link } from "react-router-dom";

const Login = () => {

    const [showpassword, setshowpassword] = useState(false);

    return (
        <div className="mt-20 font-algeria">
            {/* <ToastContainer /> */}
            {/* <Helmet className="text-sm">
                <title className="">Peaceful Tour | Login</title>
            </Helmet> */}
            <h2 className="mb-4 text-center font-bold text-5xl">Please Login</h2>
            <form className="card-body mb-6 border rounded-lg border-gray-400 lg:w-1/2 mx-auto">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-2xl font-medium">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="Your Email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-2xl font-medium">Password</span>
                    </label>
                    <div className="mb-4 relative" >
                        <input placeholder="Your Password" className=" w-full py-2 px-4  input input-bordered rounded-lg"
                            type={showpassword ? 'text' : 'password'} name="password" id="" required />
                        <span className="absolute top-3 right-4 " onClick={() => { setshowpassword(!showpassword) }}>
                            {showpassword ? <LuEyeOff /> : <LuEye />}
                        </span>
                    </div>
                </div>
                <div className="form-control lg:mt-6">
                    <button className="btn btn-secondary text-2xl font-medium">Login</button>
                </div>
                <div>
                    <p className="text-xl">Are You New? Please <Link className="text-blue-500 font-medium" to="/signUp">Register</Link></p>
                </div>
                <div className=" flex justify-center items-center">
                    <div className="flex lg:mt-4 w-4/5">
                        <div className="w-1/2"><button className=" w-2/5"><img src="https://i.ibb.co/vJN54YQ/Google-2015-logo-svg.png" alt="google image" /></button></div>
                        <div className="w-1/2"><button className=" w-2/5"><img src="https://i.ibb.co/nrsgX6d/images.png" alt="githubimage" /></button></div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Login;