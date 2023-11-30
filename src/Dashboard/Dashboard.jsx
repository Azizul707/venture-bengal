import { NavLink, Outlet } from "react-router-dom";
import Navbar from "../components/navBar/Navbar";
import useAuth from "../hooks/useAuth";

const Dashboard = () => {
    const { user } = useAuth();
    console.log(user?.role);
    return (
        <div>
            <Navbar></Navbar>
            <div className="max-w-screen-xl mx-auto mt-3 px-5 flex gap-10 ">
                <div className="">
                    <div className=" bg-orange-600 text-white h-screen w-60 rounded-md">
                        <ul className="menu md:pt-20">
                            <li>
                                <NavLink to='/dashboard/my-profile'>My Profile</NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/my-bookings'>My Bookings</NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/my-wishlist'>My WishList</NavLink>
                            </li>
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