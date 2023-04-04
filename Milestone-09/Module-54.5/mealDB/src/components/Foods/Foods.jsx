import React, { useEffect, useState } from "react";
import { useNavigation } from "react-router-dom";
import Food from "./Food";

const Foods = () => {
  const [foods, setFoods] = useState("");
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${foods}`)
      .then((response) => response.json())
      .then((data) => setMeals(data.meals));
  }, [foods]);
  const navigation = useNavigation();
  return (
    <div>
      <div className="my-8 text-center">
        <input
          type="search"
          onInput={(e) => setFoods(e.target.value)}
          className="border border-violet-500 outline-none p-2 rounded-md"
        />
        <button className="ml-5 bg-violet-500 px-5 py-2 rounded-lg text-white">
          Search
        </button>
      </div>
      <div className="text-center">
        {navigation.state === "loading" ? (
          "loading..."
        ) : (
          <div className="grid grid-cols-4 gap-4 ">
            {meals?.length < 0 ? (
              <p>Not Found</p>
            ) : (
              meals?.map((meal) => <Food meal={meal} key={meal.idMeal} />)
            )}
          </div>
        )}
      </div>
    </div>
  );
};
export default Foods;
