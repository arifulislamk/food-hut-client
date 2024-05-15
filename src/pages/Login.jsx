import { useContext, useEffect, useState } from "react";
import { LuEyeOff, LuEye } from "react-icons/lu";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider";
import { Helmet } from "react-helmet";
import axios from "axios";
import { useForm } from "react-hook-form";

const Login = () => {
    
    useEffect(() => {
        window.scroll(0, 0)
    }, [])

    const { register, handleSubmit } = useForm()
    const { loginUser, googleLogin, githubLogin } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation()
    const [showpassword, setshowpassword] = useState(false);

    const handleLoginbtn = data => {
        const { email, password } = data;
        // event.preventDefault();
        // const form = event.target;
        // const email = form.email.value;
        // const password = form.password.value;
        console.log( email, password, data);

        loginUser(email, password)
            .then(res => {
                console.log(res.user)
                const user = { email }
                axios.post(`${import.meta.env.VITE_URL}/jwt`, user, { withCredentials: true })
                    .then(res => {
                        console.log(res.data)
                    })
                Swal.fire({
                    title: 'Login Success',
                    text: 'Do you want to continue',
                    icon: 'success',
                    confirmButtonText: 'OK'
                })
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                console.log(error)
                toast.error('Please Type Corrrct Information')
            })
    }

    const handleGoogleLogin = () => {
        console.log('google')
        googleLogin()
            .then(res => {
                const email = res.user.email
                const user = { email }
                axios.post(`${import.meta.env.VITE_URL}/jwt`, user, { withCredentials: true })
                    .then(res => {
                        console.log(res.data, 'serect')
                    })
                Swal.fire({
                    title: 'Login With Google',
                    icon: 'success',
                    confirmButtonText: 'OK'
                })
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                console.log(error)
                toast.error('Ooops! issues. Please try again')
            })
    }
    const handleGithubLogin = () => {
        githubLogin()
            .then(res => {
                const email = res.user.email
                const user = { email }
                axios.post(`${import.meta.env.VITE_URL}/jwt`, user, { withCredentials: true })
                    .then(res => {
                        console.log(res.data, 'serect')
                    })
                Swal.fire({
                    title: 'Login With Github',
                    icon: 'success',
                    confirmButtonText: 'OK'
                })
                navigate(location?.state ? location.state : '/')
                console.log(res.user)
            })
            .catch(error => {
                console.log(error)
                toast.error('Ooops! issues. Please try again')
            })
    }

    return (
        <div className="mt-20 font-open-sans">
            <Helmet>
                <title>FOOD HUT | Login</title>
            </Helmet>
            <h2 className="font-poppins font-medium mb-4 text-center text-5xl">Please Login</h2>
            <form onSubmit={handleSubmit(handleLoginbtn)} className="card-body mb-6 border rounded-lg border-gray-400 lg:w-1/2 mx-auto">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-2xl font-medium">Email</span>
                    </label>
                    <input {...register('email')} type="email" placeholder="Your Email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-2xl font-medium">Password</span>
                    </label>
                    <div className="mb-4 relative" >
                        <input {...register('password')} placeholder="Your Password" className=" w-full py-2 px-4  input input-bordered rounded-lg"
                            type={showpassword ? 'text' : 'password'} id="" required />
                        <span className="absolute top-3 right-4 " onClick={() => { setshowpassword(!showpassword) }}>
                            {showpassword ? <LuEyeOff /> : <LuEye />}
                        </span>
                    </div>
                </div>
                <div className="form-control lg:mt-6">
                    <button className="btn bg-orange-400   text-2xl font-medium">Login</button>
                </div>
                <div>
                    <p className="text-xl">Are You New? Please <Link className="text-blue-500 font-medium" to="/signUp">Register</Link></p>
                </div>
                <div className=" flex justify-center items-center">
                    <div className="flex lg:mt-4 w-4/5">
                        <div className="w-1/2"><button onClick={handleGoogleLogin} className=" w-2/5"><img src="https://i.ibb.co/vJN54YQ/Google-2015-logo-svg.png" alt="google image" /></button></div>
                        <div className="w-1/2"><button onClick={handleGithubLogin} className=" w-2/5"><img src="https://i.ibb.co/nrsgX6d/images.png" alt="githubimage" /></button></div>
                    </div>
                </div>
            </form>
            <ToastContainer />
        </div>
    );
};

export default Login;