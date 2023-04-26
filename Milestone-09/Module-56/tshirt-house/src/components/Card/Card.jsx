import React from "react";

const Card = (props) => {
  const { picture, price, name } = props.shirt;
  return (
    <div>
      <img src={picture} alt="t-shirt" />
      <p>Name: {name}</p>
      <p>Price: ${price}</p>
    </div>
  );
};

export default Card;
