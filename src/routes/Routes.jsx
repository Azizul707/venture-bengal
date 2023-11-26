import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import AllPackages from "../pages/Home/AllPackages";
import PackagesDetails from "../pages/Home/PackagesDetails";

const Routes = createBrowserRouter( [
    {
        path: '/',
        element: <MainLayouts></MainLayouts>,
        children: [
            {
                path: '/',
                element:<Home/>
            },
            {
                path: 'login',
                element:<Login/>
            },
            {
                path: 'register',
                element:<Register/>
            },
            {
                path: 'all-packages',
                element:<AllPackages/>
            },
            {
                path: 'package-details/:id',
                element:<PackagesDetails/>
            }
        ]
    }
] )

export default Routes;