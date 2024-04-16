import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root.jsx";
import Home from "../pages/Home/home.jsx";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            }
        ]
    },
]);

export default router;