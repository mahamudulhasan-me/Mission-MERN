import React from "react";
import { useLoaderData } from "react-router-dom";
import Card from "../Card/Card";

const CardContainer = () => {
  const shirt = useLoaderData();

  return (
    <div className="grid grid-cols-12">
      <div className="col-span-8">
        <h2>Special T-Shirt House</h2>
        <div className="grid grid-cols-3">
          {shirt.map((s) => (
            <Card key={s._id} shirt={s} />
          ))}
        </div>
      </div>
      <div className="col-span-5">
        <h2>Add to cart</h2>
      </div>
    </div>
  );
};

export default CardContainer;
