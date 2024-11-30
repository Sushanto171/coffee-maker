import logo from "./../assets/images/more/logo1.png"
const Navbar = () => {
    return (
        <nav className="bg-nav-bg h-20 bg-center">
           <div className="flex justify-center items-center gap-2">
            <img className="w-14" src={logo} alt=""  />
            <h2 className="text-white text-2xl font-bold tracking-wider">Espresso Emporium</h2>
           </div>
        </nav>
    );
};

export default Navbar;