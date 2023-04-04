import React from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";

const FoodDetails = () => {
  const foodDetails = useLoaderData();

  const {
    idMeal,
    strMeal,
    strInstructions,
    strMealThumb,
    strTags,
    strYoutube,
  } = foodDetails.meals[0];
  const navigate = useNavigate();
  const backHandel = () => {
    navigate(-1);
  };
  return (
    <div>
      <p>id: {idMeal}</p>
      <img src={strMealThumb} alt="" />
      <h2 className="text-violet-500">{strMeal}</h2>
      <p>{strTags}</p>
      <p>{strInstructions}</p>
      <Link to={strYoutube}>Youtube</Link>
      <button onClick={backHandel}>Go Back</button>
    </div>
  );
};

export default FoodDetails;
