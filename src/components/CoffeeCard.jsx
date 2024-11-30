import { Link } from "react-router";
import Swal from "sweetalert2";
import 'animate.css';

const CoffeeCard = ({coffee, setCoffees, coffees}) => {

    const deleteHandler = (id)=>{

      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          fetch(`http://localhost:3000/deleteCoffee/${id}`, {
            method: "DELETE"
        })
        .then(res => res.json())
        .then(data => {
            const remaining = coffees.filter(item => item._id !== coffee._id)
            setCoffees(remaining)
          data.deletedCount > 0 && ( Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"
            }));
          })
    
        }
      });    
   
    }
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl h-full">
        <figure className="p-2">
          <img className=""
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
              <Link to={`/coffeeDetails/${coffee._id}`} >
              <button className="btn join-item">👁</button>
              </Link>
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
