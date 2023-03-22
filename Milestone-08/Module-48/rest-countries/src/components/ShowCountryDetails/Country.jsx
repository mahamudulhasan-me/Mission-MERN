import React from "react";

const Country = (props) => {
  console.log(props);

  return (
    <div>
      <p>{props.countryDetails.name.common}</p>
    </div>
  );
};

export default Country;
