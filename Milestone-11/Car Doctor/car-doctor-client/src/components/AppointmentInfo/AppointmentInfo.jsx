import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import CheckoutBanner from "../Shared/CheckoutBanner/CheckoutBanner";
import InfoCard from "../Shared/InfoCard/InfoCard";

const AppointmentInfo = () => {
  const [appointInfo, setAppointInfo] = useState([]);
  const { user } = useContext(AuthContext);
  const url = `http://localhost:5050/appointment?uid=${user.uid}`;
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setAppointInfo(data));
  }, []);
  return (
    <div>
      <CheckoutBanner title="Appointment Details" pathName="Appoint" />
      <div className="my-20 space-y-6">
        {appointInfo.map((appoint) => (
          <InfoCard
            appointInfo={appoint}
            key={appoint._id}
            appointState={appointInfo}
            setAppointState={setAppointInfo}
          />
        ))}
      </div>
    </div>
  );
};

export default AppointmentInfo;
