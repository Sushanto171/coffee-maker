import { Outlet } from "react-router";
import Footer from "./Footer";
import Navbar from "./Navbar";

const MainlayOut = () => {
    return (
        <div>
            <Navbar />
            <div className="w-10/12 mx-auto">
            <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default MainlayOut;