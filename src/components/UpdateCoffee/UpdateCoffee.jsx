import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  const { _id, name, chef, supplier, taste, category, details, photo } = coffee;

  const handleUpdateCoffee = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const chef = e.target.chef.value;
    const supplier = e.target.supplier.value;
    const taste = e.target.taste.value;
    const category = e.target.category.value;
    const details = e.target.details.value;
    const photo = e.target.photo.value;
    const updatedCoffee = { name, chef, supplier, taste, category, details, photo };

    fetch(`http://localhost:5000/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then(() => {
        Swal.fire({
          title: "Success!",
          text: "Coffee has been updated successfully!",
          icon: "success",
          confirmButtonText: "Okay",
        });
      });
  };

  return (
    <div className="lg:w-3/4 mx-auto p-6">
      {/* Title Section */}
      <div className="text-center mb-10">
        <h1 className="text-5xl font-extrabold text-red-900 mb-3">Update Coffee</h1>
        <p className="text-gray-600 mb-4 text-lg">
          Modify the details of your coffee. Please fill out the form and save your changes.
        </p>
      </div>

      {/* Form Card */}
      <div className="card bg-white shadow-xl rounded-xl p-8">
        <form onSubmit={handleUpdateCoffee} className="space-y-6">
          {/* Row 1 */}
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text text-red-900 text-lg font-semibold">Name</span>
              </label>
              <input
                type="text"
                name="name"
                defaultValue={name}
                placeholder="Coffee Name"
                className="input input-bordered p-4 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-red-900 transition-all"
                required
              />
            </div>
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text text-red-900 text-lg font-semibold">Chef</span>
              </label>
              <input
                type="text"
                name="chef"
                defaultValue={chef}
                placeholder="Chef Name"
                className="input input-bordered p-4 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-red-900 transition-all"
                required
              />
            </div>
          </div>

          {/* Row 2 */}
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text text-red-900 text-lg font-semibold">Supplier</span>
              </label>
              <input
                type="text"
                name="supplier"
                defaultValue={supplier}
                placeholder="Supplier Name"
                className="input input-bordered p-4 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-red-900 transition-all"
                required
              />
            </div>
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text text-red-900 text-lg font-semibold">Taste</span>
              </label>
              <input
                type="text"
                name="taste"
                defaultValue={taste}
                placeholder="Taste Profile"
                className="input input-bordered p-4 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-red-900 transition-all"
                required
              />
            </div>
          </div>

          {/* Row 3 */}
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text text-red-900 text-lg font-semibold">Category</span>
              </label>
              <input
                type="text"
                name="category"
                defaultValue={category}
                placeholder="Coffee Category"
                className="input input-bordered p-4 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-red-900 transition-all"
                required
              />
            </div>
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text text-red-900 text-lg font-semibold">Details</span>
              </label>
              <input
                type="text"
                name="details"
                defaultValue={details}
                placeholder="Coffee Details"
                className="input input-bordered p-4 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-red-900 transition-all"
                required
              />
            </div>
          </div>

          {/* Photo URL */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-red-900 text-lg font-semibold">Photo URL</span>
            </label>
            <input
              type="text"
              name="photo"
              defaultValue={photo}
              placeholder="Photo URL"
              className="input input-bordered p-4 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-red-900 transition-all"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="form-control mt-6">
            <button className="btn bg-gradient-to-r from-red-900 to-red-700 text-white hover:shadow-xl p-4 rounded-lg transition duration-300 ease-in-out">
              Update Coffee
            </button>
          </div>
        </form>
      </div>

      {/* Back Button */}
      <div className="mt-8 text-center">
        <a href="/">
          <button className="btn btn-outline text-red-900 border-red-900 hover:bg-red-900 hover:text-white p-4 rounded-lg transition duration-300 ease-in-out">
            ⬅ Back to Home
          </button>
        </a>
      </div>
    </div>
  );
};

export default UpdateCoffee;
