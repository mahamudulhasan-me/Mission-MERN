import { Rating } from "@smastrom/react-rating";
import React, { useContext } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../../provider/AuthProvider";

const ToyCard = ({ toyDetails }) => {
  const { user } = useContext(AuthContext);
  const { _id, name, image1, image2, price, rating } = toyDetails;

  return (
    <div className="rounded-lg group transition-shadow duration-150 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] flex flex-col justify-between ">
      <div className="h-3/4  relative overflow-hidden">
        <img src={image1} className=" rounded-t-lg transition-all " alt="" />
        <div className=" transition-all group-hover:duration-500  absolute group-hover:left-0 group-hover:right-0 left-1/2 right-1/2 group-hover:bottom-0 group-hover:top-0 bottom-1/2 top-1/2 ">
          <img src={image2} alt="" className="w-full" />
        </div>
      </div>
      <div className="flex py-2 justify-between items-center bg-slate-100 group-hover:bg-pri rounded-b-lg transition-all duration-300 px-4">
        <div className=" p-1">
          <h4 className="text-xl font-medium font-nunito text-slate-950">
            {name}
          </h4>
          <h5 className="text-gray-500">
            Price: <span className="text-sec">${price}</span>
          </h5>
          <p className="flex text-sm text-gray-600">
            <Rating style={{ maxWidth: 100 }} value={rating} readOnly />
            {rating}/5
          </p>
        </div>

        <Link
          to={`toy-details/${_id}`}
          onClick={() =>
            !user ? toast.warning("Please login for view details") : ""
          }
        >
          <div
            title="View Details"
            className="w-10 h-10 hover:pl-2 duration-150 rounded-full bg-pri flex justify-center items-center text-xl group-hover:border text-sec"
          >
            <AiOutlineArrowRight />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ToyCard;
