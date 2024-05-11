import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/availableFoods'>Available Foods</NavLink></li>
        {
            user && <>  <li><NavLink to='/addFood'>Add Food</NavLink></li>
                <li><NavLink to='/manageMyFoods'>Manage My Foods</NavLink></li>
                <li><NavLink to='/myFoodRequest'>My Food Request</NavLink></li></>
        }
    </>
    const handleLogOut = () => {
        logOut()
            .then(() => toast.error('LogOut Now'))
    }
    return (
        <div className="navbar shadow-lg bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <Link to="/"><img className=" w-48 rounded-lg hover:btn" src='https://i.ibb.co/ZgpbBQg/Screenshot-2024-05-11-005112.png' alt="" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-3">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <>
                        <button onClick={handleLogOut} className="btn btn-secondary">LogOut</button>
                    </> :
                        <>
                            <Link to="/login"><button className="btn">Login</button></Link>
                        </>
                }
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Navbar;