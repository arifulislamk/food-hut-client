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
import ErrorPage from "../pages/ErrorPage";
import UpdatePages from "../pages/UpdatePages";
import ContactUs from "../pages/ContactUs";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <ErrorPage />,
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
                element: <HiddenRoutes><MyFoodRequest /></HiddenRoutes>,
                // loader: () => fetch(`${import.meta.env.VITE_URL}/requestFoods`)
            },
            {
                path: "/foodDetails/:id",
                element: <HiddenRoutes><FoodDetails /></HiddenRoutes>,
                loader: ({ params }) => fetch(`${import.meta.env.VITE_URL}/allFoods/${params.id}`)
            },
            {
                path: "/updatedPages/:id",
                element: <UpdatePages></UpdatePages>,
                loader: ({ params }) => fetch(`${import.meta.env.VITE_URL}/allFoods/${params.id}`)
            },
            {
                path: "/contactUs",
                element: <ContactUs />
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