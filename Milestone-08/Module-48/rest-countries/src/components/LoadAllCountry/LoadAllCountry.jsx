import React, { useEffect, useState } from "react";
import ShowCountry from "../ShowAllCountry/ShowCountry";
import "./LoadAllCountry.css";

const LoadAllCountry = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/all`)
      .then((response) => response.json())
      .then((data) => setCountries(data));
  }, []);
  return (
    <div>
      <h2 className="text-3xl text-center  font-bold">
        There Are All County of The World
      </h2>
      <h3 className="text-center">Total Country: {countries.length}</h3>
      <div className="grid grid-cols-3">
        {countries.map((country) => (
          <ShowCountry key={country.cca3} country={country}></ShowCountry>
        ))}
      </div>
    </div>
  );
};

export default LoadAllCountry;
