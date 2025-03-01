import React from "react";
import Header from "./Header";

const SignIn = () => {
  return (
    <div>
      <Header />
     

      <div class="flex items-center justify-center min-h-screen bg-gray-100">
        <div class="card w-96 bg-red-900 text-white shadow-xl p-6">
          <h2 class="text-center text-2xl font-bold mb-4">Login</h2>
          <form class="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Username"
              class="input input-bordered w-full text-black"
            />
            <input
              type="password"
              placeholder="Password"
              class="input input-bordered w-full text-black"
            />
            <button
              type="submit"
              class="btn btn-primary bg-white text-red-900 hover:bg-red-800 hover:text-white"
            >
              Login
            </button>
          </form>
          <p class="text-center text-sm mt-6 ">
            Don't have an account? <a href="/signup" className="hover:text-blue-400 hover:underline">Sign-Up</a>
          </p>
        </div>
      </div>

    
    </div>
  );
};

export default SignIn;
