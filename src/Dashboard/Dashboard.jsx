// /* eslint-disable no-unused-vars */
// import { NavLink, Outlet } from "react-router-dom";
// import Navbar from "../components/navBar/Navbar";
// import useAuth from "../hooks/useAuth";
// import { useEffect, useState } from "react";

// const Dashboard = () => {
//     const { user } = useAuth();

    

//     const [ admin, setAdmin ] = useState( false );

//     useEffect( () => {
//         if ( user?.email === "arafinazizul@gmail.com" ) {
//             setAdmin( true );
//        }
//     },[user?.email])



//     return (
//         <div>
//             <Navbar></Navbar>
//             <div className="max-w-screen-xl mx-auto mt-3 px-5 flex gap-10 ">
//                 <div className="">
//                     <div className=" bg-orange-600 text-white h-screen w-60 rounded-md">
//                         <ul className="menu md:pt-20">
                            
//                             {
//                                 admin ? <>
//                                     <h1 className="text-center text-2xl font-semibold mb-10">Admin Dashboard</h1>
//                                     <li>
//                                         <NavLink to='/dashboard/my-profile'>My Profile</NavLink>
//                                     </li>
//                                     <li> <NavLink to='/dashboard/manage-users'>Manage Users</NavLink>
//                                     </li>
//                                     <li> <NavLink to='/dashboard/add-package'>Add Package</NavLink></li>
//                                 </> :
//                                     <>
//                                         <h1 className="text-center text-2xl font-semibold mb-10">User Dashboard</h1>
//                                         <li>
//                                             <NavLink to='/dashboard/my-profile'>My Profile</NavLink>
//                                         </li>
//                                         <li>
//                                             <NavLink to='/dashboard/my-bookings'>My Bookings</NavLink>
//                                         </li>
//                                         <li>
//                                             <NavLink to='/dashboard/my-wishlist'>My WishList</NavLink>
//                                         </li>
//                                     </>
//                             }
//                             <>
//                                         <h1 className="text-center text-2xl font-semibold mb-10">User Dashboard</h1>
//                                         <li>
//                                             <NavLink to='/dashboard/my-profile'>My Profile</NavLink>
//                                         </li>
//                                         <li>
//                                             <NavLink to='/dashboard/my-bookings'>My Bookings</NavLink>
//                                         </li>
//                                         <li>
//                                             <NavLink to='/dashboard/my-wishlist'>My WishList</NavLink>
//                                         </li>
//                                     </>

//                         </ul>
//                     </div>
//                 </div>

//                 <div className="w-full">
//                     <Outlet></Outlet>
//                 </div>
//             </div>

//         </div>
//     );
// };

// export default Dashboard;

/* eslint-disable no-unused-vars */
import { NavLink, Outlet } from "react-router-dom";
import Navbar from "../components/navBar/Navbar";
import { useEffect, useState } from "react";
import useUserRole from "../hooks/useUserRole";

const Dashboard = () => {
    
    const [ userRole, isPending ] = useUserRole();

    const [isAdmin, setIsAdmin] = useState(false);
    const [ isGuide, setIsGuide ] = useState( false );
    
    isPending ? "loading....." : '';

    useEffect(() => {
        // Check if the user is an admin
        if (userRole.role === "admin") {
            setIsAdmin(true);
        }

        // Check if the user is a guide (you can customize this condition based on your logic)
        if (userRole?.role === "guide") {
            setIsGuide(true);
        }
    }, [ userRole?.role ] );
    

    return (
        <div>
            <Navbar></Navbar>
            <div className="max-w-screen-xl mx-auto mt-3 px-5 flex gap-10 ">
                <div className="">
                    <div className="bg-orange-600 text-white h-screen w-60 rounded-md">
                        <ul className="menu md:pt-20">
                            <h1 className="text-center text-2xl font-semibold mb-10">
                                {isAdmin ? "Admin Dashboard" : isGuide ? "Guide Dashboard" : "User Dashboard"}
                            </h1>
                            <li>
                                <NavLink to='/dashboard/my-profile'>My Profile</NavLink>
                            </li>
                            {isAdmin && (
                                <>
                                    <li>
                                        <NavLink to='/dashboard/manage-users'>Manage Users</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/dashboard/add-package'>Add Package</NavLink>
                                    </li>
                                </>
                            )}
                            {isGuide && (
                                <>
                                    <li>
                                        <NavLink to='/dashboard/manage-tours'>Manage Tours</NavLink>
                                    </li>
                                </>
                            )}
                            {!isAdmin && !isGuide && (
                                <>
                                    <li>
                                        <NavLink to='/dashboard/my-bookings'>My Bookings</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/dashboard/my-wishlist'>My WishList</NavLink>
                                    </li>
                                </>
                            )}
                        </ul>
                    </div>
                </div>
                <div className="w-full">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
