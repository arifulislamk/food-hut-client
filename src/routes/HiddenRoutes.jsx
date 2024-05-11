import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const HiddenRoutes = ({ children }) => {
    const { loading, user } = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return <div className=" mt-6 flex justify-center"><span className="loading text-yellow-400 loading-spinner loading-lg"></span></div>
    }
    else if (user) {
        return children
    }

    return <Navigate state={location.pathname} to="/login" replace={true}></Navigate>
};

export default HiddenRoutes;