import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Users = () => {
  const loadusers = useLoaderData();
  const [users, setUsers] = useState(loadusers);

  const handleDelete = (id) => {
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
        //   delete from database
        fetch(`https://server-coffee-store.vercel.app/users/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              const updatedUsers = users.filter((user) => user._id !== id);
              setUsers(updatedUsers);
            }
          });
      }
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      <h2 className="text-3xl font-bold text-red-900 mb-6">
        Users ({users.length})
      </h2>
      <div className="overflow-x-auto w-full max-w-4xl bg-white shadow-lg rounded-lg p-4">
        <table className="table w-full border-collapse">
          <thead>
            <tr className="bg-red-900 text-white">
              <th className="p-3"></th>
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Created At</th>
              <th className="p-3">lastSignInTime</th>
              <th className="p-3 "></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id} className="border-b hover:bg-gray-200">
                <th className="p-3 text-center">{index + 1}</th>
                <td className="p-3">{user.name}</td>
                <td className="p-3">{user.email}</td>
                <td className="p-3">
                  {new Date(user.createdAt).toLocaleDateString()}
                </td>
                <td className="p-3">{user.lastSignInTime}</td>
                <td className="p-3 text-right">
                  <button
                    onClick={() => handleDelete(user._id)}
                    className="btn btn-sm btn-outline font-bold text-red-900 border-red-900 hover:bg-red-900 hover:text-white"
                  >
                    ✂
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
