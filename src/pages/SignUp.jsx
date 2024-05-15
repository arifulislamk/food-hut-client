import { useContext, useEffect, useState } from "react";
import { LuEyeOff, LuEye } from "react-icons/lu";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";


const SignUp = () => {

    useEffect(() => {
        window.scroll(0, 0)
    }, [])

    const { register, handleSubmit, formState: { errors }, watch } = useForm()
    const navigate = useNavigate()
    const { createUser, updateUser } = useContext(AuthContext);
    const [showpassword, setshowpassword] = useState(false);

    const handleSignUP = form => {
        console.log(form)
        const { name, email, password, photo } = form;
        // event.preventDefault();
        // const form = event.target;
        // const name = form.name.value;
        // const email = form.email.value;
        // const photo = form.photo.value;
        // const password = form.password.value;
        console.log(name, email, password, photo)


        // if (!password) {
        //     toast.error('Please Input password')
        //     return;
        // }
        // else if (password.length < 6) {
        //     toast.error('password must be at least 6 charecter or more charecter!')
        //     return;
        // }
        // else if (!/[A-Z]/.test(password)) {
        //     toast.error('Password Shounld be uppercase at least one charecter')
        //     return;
        // }
        // else if (!/[a-z]/.test(password)) {
        //     toast.error('Password Shounld be lowwercase at least one charecter')
        //     return;
        // }
        createUser(email, password)
            .then(res => {
                console.log(res.user);
                // const user = { email, photo, name };

                updateUser(name, photo)
                    .then(() => {
                        console.log('done')
                        toast.success('updated okk');
                        Swal.fire({
                            title: 'Registration Success',
                            text: 'Do you want to continue',
                            icon: 'success',
                            confirmButtonText: 'OK'
                        })
                        navigate("/")
                    })
            })
            .catch(error => {
                console.log(error)
                toast.error('Email Already Use or There Is an Issue')
            })

    }
    return (
        <div className="mt-20 font-open-sans">
            <Helmet>
                <title>FOOD HUT | Sign UP</title>
            </Helmet>
            <h2 className="font-poppins font-medium mb-4 text-center text-5xl">Please Register</h2>
            <form onSubmit={handleSubmit(handleSignUP)} className="card-body mb-6 border rounded-lg border-gray-400 lg:w-1/2 mx-auto">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-2xl font-medium">Name</span>
                    </label>
                    <input {...register('name', { required: 'invaild name', minLength: { value: 4, message: 'min 4 charecter type Please' }, maxLength: { value: 10, message: 'max 10 charecter type' } })} type="text" placeholder="Your Name" className={errors?.name?.message ? 'border border-red-500  p-3 rounded-lg' : ' input  input-bordered'} />
                    <p>{errors?.name?.message}</p>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-2xl font-medium">Email</span>
                    </label>
                    <input {...register('email', { required: 'invalid Email' })} type="email" placeholder="Your Email" className={errors?.email?.message ? 'border border-red-500  p-3 rounded-lg' : ' input  input-bordered'} />
                    <p>{errors?.email?.message}</p>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-2xl font-medium">PhotoURL</span>
                    </label>
                    <input {...register('photo', { required: 'invaild PhotoUrl' })} type="text" placeholder="PhotoURL" className={errors?.photo?.message ? 'border border-red-500  p-3 rounded-lg' : ' input  input-bordered'} />
                    <p>{errors?.photo?.message}</p>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-2xl font-medium">Password</span>
                    </label>
                    <div className="mb-4 relative" >
                        <input {...register('pass', { pattern: /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/ , required: true})} placeholder="New Password" className=" w-full py-2 px-4  input input-bordered rounded-lg"
                            type={showpassword ? 'text' : 'password'} />

                        {
                            errors?.pass?.type === 'pattern' && <p>Please Type Password at least 6 Charecter, Uppercase(A-Z), Lowercase</p>
                        }
                         {errors?.pass?.type === 'required' && <p>Password is required.</p>}
                        <span className="absolute top-3 right-4 " onClick={() => { setshowpassword(!showpassword) }}>
                            {showpassword ? <LuEyeOff /> : <LuEye />}
                        </span>
                    </div>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-2xl font-medium">Re-Type Password</span>
                    </label>
                    <div className="mb-4 relative" >
                        <input {...register('password', {
                            validate: data => {
                                if (watch('pass') !== data)
                                    return 'Password not match'
                            }
                        })} placeholder="Re-Type Password" className={errors?.password?.message ? 'border border-red-500 w-full py-2 px-4  rounded-lg' : ' input w-full py-2 px-4  input-bordered'}
                            type={showpassword ? 'text' : 'password'} />
                        <p>{errors?.password?.message}</p>
                        <span className="absolute top-3 right-4 " onClick={() => { setshowpassword(!showpassword) }}>
                            {showpassword ? <LuEyeOff /> : <LuEye />}
                        </span>
                    </div>
                </div>
                <div className="form-control mt-6">
                    <button className="btn bg-orange-400   text-2xl font-medium">Register</button>
                </div>
                <div>
                    <p className=" text-xl">Already have an account? Please <Link className="text-blue-500 font-medium" to="/login">Login</Link></p>
                </div>
            </form>
            <ToastContainer />
        </div>
    );
};

export default SignUp;