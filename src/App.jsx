
import { useLoaderData } from "react-router-dom";
import "./App.css";
import CoffeeCard from "./components/CoffeeCard";

function App() {
  const coffees = useLoaderData();

  return (
    <>
      <div className="flex flex-col gap-10">
        <h1 className="text-2xl">Coffee for you....</h1>
        <p>
          Choose your favorite coffee and enjoy a cup of joy! We have a variety of
          coffees to meet your taste buds.
        </p>
   
        <h2 className="text-xl">Our Coffee Options: {coffees.length} </h2>

     <div className="grid md:grid-cols-2 gap-5">
     {
        coffees.map((coffee) => <CoffeeCard
        key={coffee._id}
        coffee={coffee}
        ></CoffeeCard>)
      }
     </div>


        <br />
        <br />
        <a href="/addcoffee">
          <button className="btn btn-circle bg-indigo-600 text-white">
            Add Coffee
          </button>
        </a>
      </div>
    </>
  );
}

export default App;
