import Swal from "sweetalert2";
import { useState } from "react";
import Header from "../Header";

const AddCoffee = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleAddCoffee = async (e) => {
    e.preventDefault();
    const form = e.target;
    const newCoffee = {
      name: form.name.value,
      chef: form.chef.value,
      supplier: form.supplier.value,
      taste: form.taste.value,
      category: form.category.value,
      details: form.details.value,
      photo: form.photo.value,
    };

    setIsLoading(true); // Set loading state

    try {
      const res = await fetch("http://localhost:5000/coffee", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newCoffee),
      });

      if (res.ok) {
        const data = await res.json();
        Swal.fire({
          title: "Success!",
          text: "New coffee has been added!",
          icon: "success",
          confirmButtonText: "Okay",
        });
        form.reset(); // Reset form after submission
      } else {
        throw new Error("Failed to add coffee.");
      }
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: error.message,
        icon: "error",
        confirmButtonText: "Okay",
      });
    } finally {
      setIsLoading(false); // Reset loading state
    }
  };

  return (
    <div>
      <Header/>
        <div className="max-w-4xl mx-auto p-6">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-red-900">☕ Add a New Coffee</h1>
        <p className="text-gray-500 mt-2">Add a new coffee to our collection. Fill in the details below.</p>
      </div>

      <div className="card bg-base-100 shadow-xl p-6">
        <form onSubmit={handleAddCoffee} className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="form-control">
              <label className="label"><span className="label-text text-red-900">Name</span></label>
              <input type="text" name="name" placeholder="Coffee Name" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label"><span className="label-text text-red-900">Chef</span></label>
              <input type="text" name="chef" placeholder="Chef Name" className="input input-bordered" required />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="form-control">
              <label className="label"><span className="label-text text-red-900">Supplier</span></label>
              <input type="text" name="supplier" placeholder="Supplier Name" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label"><span className="label-text text-red-900">Taste</span></label>
              <input type="text" name="taste" placeholder="Taste Profile" className="input input-bordered" required />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="form-control">
              <label className="label"><span className="label-text text-red-900">Category</span></label>
              <input type="text" name="category" placeholder="Category" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label"><span className="label-text text-red-900">Details</span></label>
              <textarea name="details" placeholder="Coffee Details" className="textarea textarea-bordered" required></textarea>
            </div>
          </div>

          <div className="form-control">
            <label className="label"><span className="label-text text-red-900">Photo URL</span></label>
            <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" required />
          </div>

          <div className="form-control mt-6">
            <button
              type="submit"
              className={`btn ${isLoading ? "bg-gray-400 cursor-not-allowed" : "bg-gradient-to-r from-red-500 to-red-900 text-white hover:shadow-lg"}`}
              disabled={isLoading}
            >
              {isLoading ? "Adding..." : "Add Coffee"}
            </button>
          </div>
        </form>
      </div>

      <div className="mt-6 text-center">
        <a href="/" className="btn btn-outline text-red-900 border-red-900 hover:bg-red-900 hover:text-white">
          ⬅ Back to Home
        </a>
      </div>
    </div>
    </div>
  
  );
};

export default AddCoffee;
