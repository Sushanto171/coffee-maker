import Swal from "sweetalert2";

const AddCoffee = () => {
  const formHandler = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const chief = form.chief.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const price = form.price.value;
    const coffee = { name, chief, supplier, taste, category, details, photo, price };
    console.log(coffee);

    fetch('http://localhost:3000/addCoffee', {
        method: "POST",
        headers: {
            "content-type" : "application/json"
        },
        body: JSON.stringify(coffee)
    }).then(res => res.json())
    .then(data => {
      
     data.insertedId && ( Swal.fire({
        title: 'successfully added coffee!',
        icon: 'success',
        showConfirmButton: false,
        timer: 2000,
        showClass: {
          popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `
        },
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `
        }
      })) 
      console.log(data)})
  };
  return (
    <div className="bg-base-200 py-8">
      <h1 className="text-center text-3xl font-semibold my-8">
        Add New Coffee
      </h1>
      <form
        onSubmit={formHandler}
        className="grid grid-cols-2 gap-4 max-w-xl  mx-auto"
      >
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Name</span>
          </div>
          <input
            type="text"
            name="name"
            placeholder="Type name"
            className="input input-bordered w-full max-w-xs "
            required
          />
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Chief</span>
          </div>
          <input
            type="text"
            name="chief"
            placeholder="Type chief"
            className="input input-bordered w-full max-w-xs "
            required
          />
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Supplier</span>
          </div>
          <input
            type="text"
            name="supplier"
            placeholder="Type supplier"
            className="input input-bordered w-full max-w-xs "
            required
          />
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Taste</span>
          </div>
          <input
            type="text"
            name="taste"
            placeholder="Type taste"
            className="input input-bordered w-full max-w-xs "
            required
          />
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Category</span>
          </div>
          <input
            type="text"
            name="category"
            placeholder="Type category"
            className="input input-bordered w-full max-w-xs "
            required
          />
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Details</span>
          </div>
          <input
            type="text"
            name="details"
            placeholder="Type details"
            className="input input-bordered w-full max-w-xs "
            required
          />
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Price</span>
          </div>
          <input
            type="text"
            name="price"
            placeholder="Type price"
            className="input input-bordered w-full max-w-xs "
            required
          />
        </label>
        <label className="form-control w-full max-w-sm ">
          <div className="label">
            <span className="label-text">Photo</span>
          </div>
          <input
            type="text"
            name="photo"
            placeholder="Type photo URL"
            className="input input-bordered w-full "
            required
          />
        </label>
        <button className="btn col-span-2 bg-stone-400 text-lg mt-4">
          Add Coffee
        </button>
      </form>
    </div>
  );
};

export default AddCoffee;
