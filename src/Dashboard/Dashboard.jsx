import { Outlet } from "react-router-dom";
import Navbar from "../components/navBar/Navbar";

const Dashboard = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            
        </div>
    );
};

export default Dashboard;