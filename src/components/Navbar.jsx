import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

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
        <li><NavLink to='/contactUs'>Contact Us</NavLink></li>
    </>
    const handleLogOut = () => {
        logOut()
            .then(res => {
                console.log(res.user)
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div className="navbar font-open-sans font-medium fixed top-0  z-50 shadow-lg bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <Link to="/"><img className=" md:w-48 rounded-lg md:hover:btn" src='https://i.ibb.co/5knk6Gb/Screenshot-2024-05-13-005057.png' alt="" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu text-[16px] menu-horizontal px-1 gap-2">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <div className=" lg:mr-5">
                    <label className="flex cursor-pointer md:gap-2">
                        <svg className="hidden md:block" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                        <input type="checkbox" value="synthwave" className="toggle theme-controller" />
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                    </label>
                </div>
                {
                    user ? <>
                        <button onClick={handleLogOut} className="btn btn-xs md:btn-md bg-orange-400  ">LogOut</button>
                    </> :
                        <>
                            <Link to="/login"><button className="btn">Login</button></Link>
                        </>
                }
            </div>
        </div>
    );
};

export default Navbar;