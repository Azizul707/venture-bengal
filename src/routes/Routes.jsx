import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import AllPackages from "../pages/Home/AllPackages";
import PackagesDetails from "../pages/Home/PackagesDetails";
import TourType from "../components/tourType/TourType";
import Dashboard from "../Dashboard/Dashboard";
import PrivateRoute from "../auth/Private/PrivateRoute";
import Contact from "../pages/Contact";
import Community from "../pages/community/Community";
import AllStory from "../pages/Story/AllStory";
import StoryDetails from "../pages/Story/StoryDetails";
import GuideDetails from "../pages/Home/GuideDetails";
import MyProfile from "../Dashboard/UserDashboard/MyProfile";
import MyBookings from "../Dashboard/UserDashboard/MyBookings";
import MyWishlist from "../Dashboard/UserDashboard/MyWishlist";

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
                path: 'contact',
                element:<Contact/>
            },
            {
                path: 'community',
                element:<Community/>
            },
            {
                path: 'all-packages',
                element:<PrivateRoute><AllPackages/></PrivateRoute>
            },
            {
                path: 'package-details/:id',
                element:<PrivateRoute><PackagesDetails/></PrivateRoute>
            },
            {
                path: 'tour-type/:type',
                element:<PrivateRoute><TourType/></PrivateRoute>
            },
            {
                path: 'story',
                element:<AllStory/>
            },
            {
                path: 'story-details/:title',
                element:<PrivateRoute><StoryDetails/></PrivateRoute>
            },
            {
                path: 'guide-details/:id',
                element:<PrivateRoute><GuideDetails></GuideDetails></PrivateRoute>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <Dashboard />,
        children: [ 
            {
                path: 'my-profile',
                element:<MyProfile/>
            },
            {
                path: 'my-bookings',
                element:<MyBookings/>
            },
            {
                path: 'my-wishlist',
                element:<MyWishlist/>
            },
        ]
    }
   
] )

export default Routes;



