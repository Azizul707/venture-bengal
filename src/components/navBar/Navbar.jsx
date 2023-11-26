import { FaAlignLeft, FaAngleDown, FaArrowRotateLeft, FaColonSign, FaUser } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";
import logo from './../../../public/bengal-venture-logo.png';
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const Navbar = () => {
    const { user,singOut } = useAuth();

    const handleSingout = () => {
        
        singOut()
            .then( () => {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Logout Successfully",
                    showConfirmButton: false,
                    timer: 1500
                  });
        })
    }
    return (
        <>
            <div className="border-b py-3 bg-base-300 md:bg-transparent">
                <div className="drawer">
                    <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">
                        {/* Page content here */ }
                        <div className="flex items-center justify-around">
                            <div className="h-20">
                                <img className="h-full" src={ logo } alt="" /></div>

                            <label htmlFor="my-drawer" className="btn md:hidden drawer-button"><FaAlignLeft /> </label>

                            <div className="">
                                <ul className="hidden md:block md:flex justify-between gap-5">
                                    <li><NavLink to='/'>Home</NavLink></li>
                                    <li><NavLink to='/'>Community</NavLink></li>
                                    <li><NavLink to='/'>Blog</NavLink></li>
                                    <li><NavLink to='/'>Contact</NavLink></li>
                                </ul>
                            </div>
                            {
                                user ? <div className="">
                                    <div className="dropdown dropdown-bottom dropdown-end">
                                        <label tabIndex={ 0 } className=" cursor-pointer m-1">
                                            <div className="avatar">
                                                <div className="w-12 rounded-full ring ring-red-600   ">
                                                    <img src={ user.photoURL } />
                                                </div>
                                                <FaAngleDown className="text-[#FE5C24]" />
                                            </div>
                                        </label>
                                        <div tabIndex={ 0 } className="dropdown-content z-[10]  w p-2 shadow bg-white">
                                            <div className="space-y-3">
                                                <p>{ user.displayName }</p><hr />
                                                <p>{ user.email }</p><hr />
                                                <button onClick={handleSingout} className="flex  items-center gap-3 text-red-600">Logout<FaArrowRotateLeft />  </button>
                                            </div>
                                        </div>
                                    </div>
                                </div> :
                                    <Link to='/login'>
                                        <button className="bg-[#FE5C24] py-3 px-6 text-white flex items-center gap-2 border-none font-semibold hover:bg-blue-500"><FaUser></FaUser> Login</button>
                                    </Link>
                            }

                        </div>
                    </div>
                    <div className="drawer-side z-[10]">
                        <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                        <ul className="menu p-4 w-80 min-h-full bg-[#FE5C24] text-base-content flex-col gap-5">
                            {/* Sidebar content here */ }
                            <li><NavLink to='/'>Home</NavLink></li>
                            <li><NavLink to='/'>Community</NavLink></li>
                            <li><NavLink to='/'>Blog</NavLink></li>
                            <li><NavLink to='/'>Contact</NavLink></li>

                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;