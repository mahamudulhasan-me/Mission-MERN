import React from "react";
import "./Country.css";

const Country = (props) => {
  return (
    <div className="countryContainer">
      <div className="country">
        <img src={props.flag} alt="" />
        <h2>Name: {props.name}</h2>
        <h3>Capital: {props.capital}</h3>
        <p>Area: {props.area}</p>
        <p>Population: {props.population}</p>
      </div>
    </div>
  );
};

export default Country;
