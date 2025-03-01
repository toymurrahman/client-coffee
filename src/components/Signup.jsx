import { Link } from "react-router-dom";
import Header from "./Header";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Signup = () => {
  
const {createUser} = useContext(AuthContext)
 

  const handleSignup = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log(email, password);

    createUser(email, password)
    .then(res => {
        console.log("User created successfully", res);
        // Redirect to login page
        // history.push("/login");
      })
      .catch(err => {
        console.error("Error creating user", err);
       
      })
  };

  return (
   <div>
        <Header/>
     <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="card w-96 bg-red-900 text-white shadow-xl p-6">
        <h2 className="text-center text-2xl font-bold mb-4">Sign Up</h2>
        <form className="flex flex-col gap-4" onSubmit={handleSignup}>
          <input
            type="text"
            name="Name"
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
          Already have an account? <Link to="/signin" className="text-white hover:text-blue-400 hover:underline">Sign In</Link>
        </p>
      </div>
    </div>
   </div>
  );
};

export default Signup;