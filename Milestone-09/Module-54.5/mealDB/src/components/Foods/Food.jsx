import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Food = (props) => {
  const { strMeal, strMealThumb, strArea } = props.meal;
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate(`/food/${strMeal}`);
  };
  return (
    <div>
      <img src={strMealThumb} alt="" />
      <h2>Name: {strMeal}</h2>
      <p>{strArea}</p>
      <Link className="border bg-violet-400" to={`/food/${strMeal}`}>
        See Details
      </Link>
      <button onClick={handleNavigation} className="border">
        See Detail by btn
      </button>
    </div>
  );
};

export default Food;
