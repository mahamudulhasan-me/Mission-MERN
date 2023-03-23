import React, { useState } from "react";

const MobileBattery = () => {
  const [charge, setCharge] = useState(100);

  const chargeCounter = () => {
    if (charge > 0) {
      setCharge(charge - 10);
    }
  };
  return (
    <div>
      <h2>{charge}</h2>
      <button onClick={chargeCounter}>Battery Down</button>
    </div>
  );
};

export default MobileBattery;
