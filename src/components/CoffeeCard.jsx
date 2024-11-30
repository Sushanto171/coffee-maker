import { Link } from "react-router";

const CoffeeCard = ({coffee, setCoffees, coffees}) => {
    console.log(coffee)

    const deleteHandler = (id)=>{
        fetch(`http://localhost:3000/deleteCoffee/${id}`, {
            method: "DELETE"
        })
        .then(res => res.json())
        .then(data => {
            const remaining = coffees.filter(item => item._id !== coffee._id)
            setCoffees(remaining)
            console.log(data)})
    }
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl">
        <figure className="p-8">
          <img className="max-h-64 rounded-lg"
            src={coffee.photo}
            alt="Movie"
          />
        </figure>
        <div className="card-body flex-row justify-between ">
          <div className="flex flex-col justify-center gap-2">
            <h2 className="flex gap-1 font-semibold">Name:<span className="font-normal">{coffee.name}</span></h2>
            <h2 className="flex gap-1 font-semibold">Chief:<span className="font-normal">{coffee.chief}</span></h2>
            <h2 className="flex gap-1 font-semibold">Price:<span className="font-normal">{coffee.price}</span></h2>
          </div>
          <div className="card-actions justify-end">
            <div className="join join-vertical space-y-2 mt-8" >
              <button className="btn join-item">👁</button>
              <Link to={`/updateCoffee/${coffee._id}`} >
              <button className="btn join-item bg-black/70">📝</button>
              </Link>
              <button onClick={()=> deleteHandler(coffee._id)} className="btn join-item btn-error">✖</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
