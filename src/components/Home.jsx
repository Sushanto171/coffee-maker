import { useContext, useEffect, useState } from "react";
import CoffeeCard from "./CoffeeCard";
import { Link } from "react-router";
import Banner from "./Banner";
import Badge from "./Badge";
import cup from "./../assets/images/cups/Vector.png"
import FollowUs from "./FollowUs";
import { AuthContext } from "../Providers/AuthProvider";

const Home = () => {
const {setTitle} = useContext(AuthContext)
  useEffect(()=>{
    setTitle ("Home")
},[])
  const [coffees, setCoffees] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/coffees")
      .then((res) => res.json())
      .then((data) => setCoffees(data));
  }, []);
  return (
    <div>
      <Banner />

      <Badge />

      <div className="text-center py-8">
        <p className="opacity-80 text-xs font-sans">---Sip & Savor ---</p>
        <h1
          className="font-bold text-4xl pb-5"
          style={{ textShadow: "2px 2px 4px #331A15" }}
        >
          Our Popular Products
        </h1>
        <Link to="/addCoffee">
          <button className="btn text-white bg-[#E3B577] text-lg rounded-md border-black hover:bg-[#c18f4e]"
          style={{ textShadow: '2px 2px 4px #331A15' }}>
            Add Coffee
            <img src={cup} alt="" />
          </button>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-10/12 mx-auto mt-8">
        {coffees.map((coffee) => (
          <CoffeeCard
            key={coffee._id}
            coffee={coffee}
            setCoffees={setCoffees}
            coffees={coffees}
          />
        ))}
      </div>

      <FollowUs />
    </div>
  );
};

export default Home;
