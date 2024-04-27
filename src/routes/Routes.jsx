import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Error from "../pages/Error/Error";
import AddCraft from "../pages/AddCraft/AddCraft";
import PrivateRoutes from "./PrivateRoutes";
import AllCraft from "../pages/AllCraft/AllCraft";
import Details from "../pages/ViewDetails/Details";


const routes = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/craft')
            },
            {
                path: 'allArtCraft',
                element: <AllCraft></AllCraft>,
                loader: () => fetch('http://localhost:5000/craft')
            },
            {
                path: '/craft/:id',
                element: <PrivateRoutes><Details></Details></PrivateRoutes>,
                loader: () => fetch('http://localhost:5000/craft')
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: 'addCraft',
                element: <PrivateRoutes><AddCraft></AddCraft></PrivateRoutes>
            }

        ]
    }
]);

export default routes;
