import { HiArrowRight } from "react-icons/hi2";

const ServiceCard = ({ service }) => {
  const { title, img, price } = service;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl h-52" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div className="flex justify-between items-center">
          <p className="text-xl text-orange-600 font-semibold">
            Price : ${price}
          </p>
          <button className="btn btn-circle bg-gray-100">
            <HiArrowRight className="text-xl text-orange-600"></HiArrowRight>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
