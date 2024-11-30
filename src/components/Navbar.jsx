import { Link } from "react-router";
import logo from "./../assets/images/more/logo1.png"
const Navbar = () => {
    return (
        <>
        <nav className="bg-nav-bg h-20 bg-center">
           <div className="flex justify-center items-center gap-2">
        <Link to="/" >
        <span className="flex justify-center items-center gap-2">
            <img className="w-14" src={logo} alt=""  />
            <h2 className="text-white text-2xl font-bold tracking-wider">Espresso Emporium</h2>
            </span>
        </Link>
           </div>
        </nav>
        <div className="h-10 bg-black/95 text-center space-x-2 flex justify-center items-center">
        <Link to="/login" >
        <button className="btn btn-sm">Log in</button>
        </Link>
        <Link to="/signUp" >
        <button className="btn btn-sm">Sign up</button>
        </Link>
        </div>
        </>
    );
};

export default Navbar;