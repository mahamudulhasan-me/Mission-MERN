import React from "react";
import { useLoaderData } from "react-router-dom";

const FriendDetails = () => {
  const { id, name } = useLoaderData();
  // console.log(friend);
  return (
    <div>
      <h2>Friend id: {id}</h2>
      <h2>Name:{name}</h2>
    </div>
  );
};

export default FriendDetails;
