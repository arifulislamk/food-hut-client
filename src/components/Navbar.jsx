import { Link, NavLink } from "react-router-dom";

const Navbar = () => {

    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/availableFoods'>Available Foods</NavLink></li>
        <li><NavLink to='/addFood'>Add Food</NavLink></li>
        <li><NavLink to='/manageMyFoods'>Manage My Foods</NavLink></li>
        <li><NavLink to='/myFoodRequest'>My Food Request</NavLink></li>
    </>
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
                <Link to="/"><button className=" btn text-3xl font-extrabold">FOOD HUT</button></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <Link to="/login"><button className="btn">Login</button></Link>
            </div>
        </div>
    );
};

export default Navbar;