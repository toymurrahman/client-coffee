import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Result } from "postcss";


const SignIn = () => {
const { signIn } = useContext(AuthContext);

  const handleSignIN = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);





    signIn(email, password)
     .then(result => {
      

      // update logged in time 
      const lastSignInTime = result?.user?.metadata?.lastSignInTime;
      const loginInfo = { email, lastSignInTime };

      fetch('https://server-coffee-store.vercel.app/users', {
        method: "PATCH" ,
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(loginInfo)
      })
      .then(response => response.json())
      .then(data => {
       console.log('User data updated:', data);
      })
      


     })
     .catch(error => {
      console.error('Error signing in:', error);
     });
              









  };
  return (
    <div>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="card w-96 bg-red-900 text-gray-100 shadow-xl p-6">
          <h2 className="text-center text-2xl font-bold mb-4">Login</h2>
          <form onSubmit={handleSignIN} class="flex flex-col gap-4">
            <input
              type="text"
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
              Login
            </button>
          </form>
          <p className="text-center text-sm mt-6 ">
            Don't have an account? <a href="/signup" className="hover:text-blue-400 hover:underline font-bold">Register Here</a>
          </p>
        </div>
      </div>

    
    </div>
  );
};

export default SignIn;
