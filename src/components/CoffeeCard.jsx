import Swal from "sweetalert2";

const CoffeeCard = ({ coffee }) => {
  const {_id, name, chef, supplier, taste, category, details, photo } = coffee;

  const handleDelete = (_id) => {
   console.log(_id);
  
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
    
      fetch(`http://localhost:5000/coffee/${_id}`,{
        method: 'DELETE',
        headers: {
          'content-type': 'application/json'
        }
      })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        Swal.fire({
          title: 'Deleted!',
          text: 'Coffee has been deleted!',
          icon:'success',
          confirmButtonText: 'Okay'
        })
      })

  }
});
  };
  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <img src={photo} />
      </figure>
      <div className="card-body flex flex-row w-full m-4 items-center justify-between">
        <div >
          <h2 className="card-title"> Name: {name} </h2>
          <p>Chef: {chef} </p>
        </div>
        <div className="join join-vertical card-actions justify-end">
          <button className="btn join-item bg-blue-500">ADD</button>
          <button className="btn join-item bg-green-500">Update</button>
          <button
            onClick={() => handleDelete(_id)}
          className="btn join-item bg-orange-500">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
