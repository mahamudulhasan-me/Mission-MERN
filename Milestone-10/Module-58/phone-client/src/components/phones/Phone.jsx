import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Phone = () => {
  const phones = useLoaderData();
  return (
    <div>
      THis is phone page
      {phones.map((phone) => (
        <>
          <h3>
            <Link to={`/phone/${phone.id}`}>{phone.name}</Link>
          </h3>
        </>
      ))}
    </div>
  );
};

export default Phone;
