import React, { useEffect, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/all`)
      .then((response) => response.json())
      .then((data) => setCountries(data));
  }, []);
  return (
    <div>
      <h1>Hello From {countries.length} Country</h1>
      <div className="countryContainer">
        {countries.map((country) => (
          <Country
            name={country.name.common}
            capital={country.capital}
            flag={country.flags.png}
            area={country.area}
            population={country.population}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
