import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffe, setCoffe }) => {
  const { _id, name, chef, supplier, taste, category, details, photo } = coffee;

  const handleDelete = (id) => {
    console.log("Deleting ID:", id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://server-coffee-store.vercel.app/coffee/${id}`, {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("Delete Response:", data);

            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Coffee has been deleted!", "success");
              const remainingCoffees = coffe.filter((cof) => cof._id.toString() !== id.toString());
              setCoffe(remainingCoffees);
            } else {
              Swal.fire("Error", "Failed to delete coffee.", "error");
            }
          })
          .catch((error) => {
            console.error("Delete Error:", error);
            Swal.fire("Error", "Something went wrong!", "error");
          });
      }
    });
  };
  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <img src={photo} />
      </figure>
      <div className="card-body flex flex-row w-full m-4 items-center justify-between">
        <div>
          <h2 className="card-title"> Name: {name} </h2>
          <p>Chef: {chef} </p>
        </div>
        <div className="join join-vertical card-actions justify-end">
          <button className="btn join-item bg-blue-500">ADD</button>
          <Link to={`updateCoffee/${_id}`}>
            <button className="btn join-item bg-green-500">Update</button>
          </Link>

          <button
            onClick={() => handleDelete(_id)}
            className="btn join-item bg-orange-500"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
