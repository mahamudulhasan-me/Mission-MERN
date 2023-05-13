import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../provider/AuthProvider";
import CheckoutBanner from "../Shared/CheckoutBanner/CheckoutBanner";
import InfoCard from "../Shared/InfoCard/InfoCard";

const AppointmentInfo = () => {
  const [appointInfo, setAppointInfo] = useState([]);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const url = `http://localhost:5050/appointment?uid=${user.uid}`;
  useEffect(() => {
    fetch(url, {
      method: "GET",
      headers: {
        authentication: `Bearer ${localStorage.getItem("car-access-token")}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (!data.error) {
          setAppointInfo(data);
        } else {
          navigate("/");
        }
      });
  }, [url]);

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
              const remainingAppointments = appointInfo.filter(
                (appoint) => appoint._id !== _id
              );
              setAppointInfo(remainingAppointments);
            }
          });
      }
    });
  };
  const handleConfirmStatus = (_id) => {
    fetch(`http://localhost:5050/appointment/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "confirm" }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          const remainingAppointments = appointInfo.filter(
            (appoint) => appoint._id !== _id
          );
          const updatedAppointments = appointInfo.find(
            (appoint) => appoint._id === _id
          );
          updatedAppointments.status = "confirm";
          setAppointInfo([updatedAppointments, ...remainingAppointments]);
        }
      });
  };
  return (
    <div>
      <CheckoutBanner title="Appointment Details" pathName="Appoint" />
      <div className="my-20 space-y-6">
        {appointInfo?.map((appoint) => (
          <InfoCard
            handleDelete={handleDelete}
            handleConfirm={handleConfirmStatus}
            appointInfo={appoint}
            key={appoint._id}
          />
        ))}
      </div>
    </div>
  );
};

export default AppointmentInfo;
