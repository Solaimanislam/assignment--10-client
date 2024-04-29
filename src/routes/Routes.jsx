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
import MyCraft from "../pages/MyCraft/MyCraft";
import UpdateCraft from "../pages/UpdateCraft/UpdateCraft";
import CateDetails from "../pages/ViewDetails/CateDetails";


const routes = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/craft'),
                
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
                path: '/aCraft/:id',
                element: <PrivateRoutes><CateDetails></CateDetails> </PrivateRoutes>,
                loader: () => fetch('http://localhost:5000/ArtcraftS')
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
            },
            {
                path: 'myCraft',
                element: <PrivateRoutes><MyCraft></MyCraft></PrivateRoutes>
            },
            {
                path: 'myCraft/updateCraft/:id',
                element: <UpdateCraft></UpdateCraft>,
                loader: ({params}) => fetch(`http://localhost:5000/craft/${params.id}`)
            }

        ]
    }
]);

export default routes;
