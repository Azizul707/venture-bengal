import { Outlet } from "react-router-dom";
import Navbar from "../components/navBar/Navbar";
import Footer from "../pages/footer/Footer";

const MainLayouts = () => {

    return (
        <div className="max-w-screen-2xl mx-auto">
            <Navbar />
            <Outlet />
            <Footer/>

        </div>
    );
};

export default MainLayouts;