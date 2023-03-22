import React from "react";
import "./ShowCountry.css";

const ShowCountry = (props) => {
  const { name, capital, region, population, flags, languages } = props.country;
  const language = () => {
    for (const lang in languages) {
      return <span>{languages[lang]}</span>;
    }
  };
  return (
    <div className="country">
      <img src={flags.png} alt="" />
      <h2>{name.common}</h2>
      <p>Capital: {capital}</p>
      <p>Region: {region}</p>
      <p>Population: {population}</p>
      <p>Language: {language()}</p>
    </div>
  );
};

export default ShowCountry;
