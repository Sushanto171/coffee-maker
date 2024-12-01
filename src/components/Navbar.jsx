import { Link, NavLink, useNavigate } from "react-router";
import logo from "./../assets/images/more/logo1.png"
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
const Navbar = () => {
    const {user, signOutUser} = useContext(AuthContext);
    const navigate = useNavigate();

    const signOutHandler = async ()=>{
    await  signOutUser();
        navigate("/login") 
    }
    return (
        <>
        <nav className="bg-nav-bg h-20 bg-center">
           <div className="flex justify-center items-center gap-2">
        <Link to="/" >
        <span className="flex justify-center items-center gap-2">
            <img className="w-14" src={logo} alt=""  />
            <h2 className="text-white text-2xl font-bold tracking-wider">Coffee Maker</h2>
            </span>
        </Link>
           </div>
        </nav>
        <div className="h-10 bg-black/95 text-center space-x-2 flex justify-center items-center">
            { !user ? <>
                        <Link to="/login" >
                        <button className="btn btn-sm">Log in</button>
                        </Link>
                        <Link to="/signUp" >
                        <button className="btn btn-sm">Sign up</button>
                        </Link>
            </> : 
            <>
            <h1 className="text-white">{user.displayName}</h1>
            <NavLink to="/users" className="btn btn-sm">Users</NavLink>
            <button onClick={signOutHandler} className="btn btn-sm">Sign Out</button>
            </>
            }
            
        </div>
        </>
    );
};

export default Navbar;