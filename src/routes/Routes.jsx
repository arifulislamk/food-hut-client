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
import FoodDetails from "../pages/FoodDetails";

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
                path: "/foodDetails/:id",
                element: <HiddenRoutes><FoodDetails /></HiddenRoutes>,
                loader: ({ params }) => fetch(`${import.meta.env.VITE_URL}/allFoods/${params.id}`)
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