import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root.jsx";
import Home from "../pages/Home/Home.jsx";
import Login from "../pages/Login/Login.jsx";
import Register from "../pages/Register/Register.jsx";
import CardDetails from "../pages/Card-details/CardDetails.jsx";
import UserProfile from "../pages/User-Profile/UserProfile.jsx";
import UpdateProfile from "../pages/Update-profile/UpdateProfile.jsx";
import PrivateRoute from "./PrivateRoute.jsx";
import Contact from "../pages/Contact/Contact.jsx";
import ErrorPage from "../pages/ErrorPage/ErrorPage.jsx";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('real-estate.json')
            },
            {
                path: '/estate/:id',
                element: <PrivateRoute><CardDetails></CardDetails></PrivateRoute>,
                loader: () => fetch('real-estate.json')
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/update-profile",
                element: <PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>
            },
            {
                path: "/user-profile",
                element: <PrivateRoute><UserProfile></UserProfile></PrivateRoute>
            },
            {
                path: "/contact",
                element: <Contact></Contact>
            }
        ]
    },
]);

export default router;