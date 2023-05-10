import React, { useEffect, useState } from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5050/services`)
      .then((response) => response.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="mt-40 mb-20">
      <SectionTitle section="Service" title="Our Service Area" />
      <div className="grid grid-cols-3 mt-10 gap-6">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>
      <div className="mx-auto w-52 mt-12">
        <button className="myOutline-btn ">More Service</button>
      </div>
    </div>
  );
};

export default Services;
