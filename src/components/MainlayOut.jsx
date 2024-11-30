import { Outlet } from "react-router";
import Footer from "./Footer";
import Navbar from "./Navbar";

const MainlayOut = () => {
    return (
        <div className="font-Rancho">
            <Navbar />
            <div className="">
            <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default MainlayOut;