import { Link } from "react-router-dom";

const CardServices = ({service}) => {
    const {_id, title, img} = service;
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img
            src={img}
            alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <Link to={`/checkout/${_id}`} className="btn btn-primary">Book Now</Link>
          </div>
        </div>
      </div>
    );
};

export default CardServices;