import { useEffect, useState } from "react";
import CoffeeCard from "./CoffeeCard";
import { Link } from "react-router";

const Home = () => {
  const [coffees, setCoffees] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/coffees")
      .then((res) => res.json())
      .then((data) => setCoffees(data));
  }, []);
  return (
    <div>
      <div className="text-center py-8">
        <h1 className="font-bold text-3xl pb-5">Our Popular Products</h1>
        <Link to="/addCoffee">
          <button className="btn">Add Coffee</button>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {coffees.map((coffee) => (
          <CoffeeCard
            key={coffee._id}
            coffee={coffee}
            setCoffees={setCoffees}
            coffees={coffees}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
