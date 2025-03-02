import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";

const Signup = () => {
  const { createUser } = useContext(AuthContext);

  const handleSignup = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log(name, email, password);

    createUser(email, password)
      .then((res) => {
        console.log("User created successfully", res);
        const createdAt = res?.user?.metadata?.creationTime;
        const newUser = { name, email, createdAt };
        fetch("https://server-coffee-store.vercel.app/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.inseredId) {
              Swal.fire({
                title: "Success!",
                text: "New user has been created!",
                icon: "success",
                confirmButtonText: "Okay",
              });
            }
          });
      })
      .catch((err) => {
        console.error("Error creating user", err);
        Swal.fire({
          title: "Error!",
          text: "Failed to create user.",
          icon: "error",
          confirmButtonText: "Okay",
        });
      });
  };

  return (
    <div>
     
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="card w-96 bg-red-900 text-white shadow-xl p-6">
          <h2 className="text-center text-2xl font-bold mb-4">Sign Up</h2>
          <form className="flex flex-col gap-4" onSubmit={handleSignup}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="input input-bordered w-full text-black"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input input-bordered w-full text-black"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="input input-bordered w-full text-black"
            />

            <button
              type="submit"
              className="btn btn-primary bg-white text-red-900 hover:bg-red-800 hover:text-white"
            >
              Sign Up
            </button>
          </form>
          <p className="text-center text-sm mt-6">
            Already have an account?{" "}
            <Link
              to="/signin"
              className="text-white hover:text-blue-400 hover:underline"
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
