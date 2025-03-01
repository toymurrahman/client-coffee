import { Link } from "react-router-dom";

const Header = () => {
 

  return (
    <div className="navbar bg-base-200 shadow-lg px-6 rounded-md">
      <div className="flex-1">
        <Link to="/" className="text-2xl font-bold  text-red-900">☕ Coffee Store</Link>
      </div>
      
      <div className="flex gap-4 text-red-900">
        <Link to="/" className="btn btn-ghost">Home</Link>
        <Link to="/addCoffee" className="btn btn-ghost">Add Coffee</Link>
        <Link to="/" className="btn btn-ghost">Update</Link>
        <Link to="/contact" className="btn btn-ghost">Contact</Link>
      </div>

     
    </div>
  );
};

export default Header;
