import { Link } from "react-router-dom";

const Header = () => {
 

  return (
    <div className="navbar  flex flex-row bg-base-200 shadow-lg px-6 rounded-md items-center border border-spacing-x-1 ">
      
    <div className="flex-1">
      <Link to="/" className="text-2xl font-bold text-red-900">☕ Coffee Store</Link>
    </div>
 
    <div className="flex gap-4 text-red-900 justify-center items-center flex-1 ml-10">
      <Link to="/" className="btn btn-ghost">Home</Link>
      <Link to="/addCoffee" className="btn btn-ghost">Add Coffee</Link>
      <Link to="/about" className="btn btn-ghost">About us</Link>
    </div>
    
    <div className="flex justify-end flex-1">
      <Link to="/signin" className="btn bg-red-900 text-white">Sign In</Link>
    </div>
  </div>
  );
};

export default Header;
