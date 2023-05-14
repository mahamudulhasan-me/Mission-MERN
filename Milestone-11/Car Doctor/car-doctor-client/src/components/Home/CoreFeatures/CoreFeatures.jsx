import React, { useEffect, useState } from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";

const CoreFeatures = () => {
  const [features, setFeatures] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5050/features`)
      .then((res) => res.json())
      .then((data) => setFeatures(data));
  }, []);
  return (
    <div className="mb-20">
      <SectionTitle section="Core Features" title="Why Choose Us" />
      <div className="grid grid-cols-6 justify-between  gap-4 mt-10">
        {features.map((feature) => (
          <>
            <div
              key={feature._id}
              className="text-center border rounded-lg   py-8 hover:bg-primary transition-all duration-500 hover:transition-all hover:duration-300 hover:ease-in ease-out
              group hover:text-white"
            >
              <img
                src={feature.features_image}
                alt=""
                className="w-20 mx-auto"
              />
              <h3 className="transition-all duration-500 hover:transition-all hover:duration-300 hover:ease-in ease-out font-semibold text-xl text-gray-800 mt-5 group-hover:text-white">
                {feature.features_name}
              </h3>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default CoreFeatures;
