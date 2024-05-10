import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import AvailableFoods from "../pages/AvailableFoods";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import AddFood from "../pages/AddFood";
import ManageMyFoods from "../pages/ManageMyFoods";
import MyFoodRequest from "../pages/MyFoodRequest";
import HiddenRoutes from "./HiddenRoutes";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/availableFoods",
                element: <AvailableFoods />
            },
            {
                path: "/addFood",
                element: <HiddenRoutes><AddFood /></HiddenRoutes>
            },
            {
                path: "/manageMyFoods",
                element: <HiddenRoutes><ManageMyFoods /></HiddenRoutes>
            },
            {
                path: "/myFoodRequest",
                element: <HiddenRoutes><MyFoodRequest /></HiddenRoutes>
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/signUp",
                element: <SignUp />
            },

        ]
    },
]);

export default router;