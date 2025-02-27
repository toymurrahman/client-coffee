

const CoffeeCard = ({coffee}) => {

    const  { name, chef, supplier, taste, category, details, photo } = coffee;
    return (
        <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img
            src={photo}
            />
        </figure>
        <div className="card-body">
          <h2 className="card-title"> Name: {name} </h2>
          <p>Chef: {chef} </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Watch</button>
          </div>
        </div>
      </div>
    );
};

export default CoffeeCard;