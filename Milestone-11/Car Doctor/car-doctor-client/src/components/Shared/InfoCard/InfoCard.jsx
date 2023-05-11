/* eslint-disable react/prop-types */
import React from "react";
import {
  FaPhoneAlt,
  FaRegEnvelope,
  FaTimesCircle,
  FaUserCog,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const InfoCard = ({ appointInfo, setAppointState, appointState }) => {
  const { _id, name, img, email, phone, date, price } = appointInfo;

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5050/appointment/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              const remainingAppointments = appointState.filter(
                (appoint) => appoint._id !== _id
              );
              setAppointState(remainingAppointments);
            }
          });
      }
    });
  };
  return (
    <div className="flex justify-between items-center font-semibold bg-[#f3f3f3] p-2 rounded-md ">
      <div className="flex justify-between items-center gap-4">
        <Link onClick={() => handleDelete(_id)}>
          <FaTimesCircle className="text-xl text-rose-600" />
        </Link>
        <img src={img} alt="" className="w-36 h-32 rounded-md" />
        <div className="">
          <h3 className=" text-xl">{appointInfo["service-title"]}</h3>
          <p className="flex items-center gap-2">
            <FaUserCog className="text-primary" /> {name}
          </p>
          <p className="text-sm flex items-center gap-2">
            <FaPhoneAlt className="text-primary" /> {phone}
          </p>
          <p className="text-sm flex items-center gap-2">
            <FaRegEnvelope className="text-primary" /> {email}
          </p>
        </div>
      </div>
      <p className="text-xl">${price}</p>
      <p className="text-xl">{date}</p>
      <div className="myPrimary-btn">Pending</div>
    </div>
  );
};

export default InfoCard;
