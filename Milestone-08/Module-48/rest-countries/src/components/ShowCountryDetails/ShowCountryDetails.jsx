import { useEffect, useState } from "react";
import Country from "./Country";

const ShowCountryDetails = (props) => {
  console.log(props);
  const [country, setCountry] = useState([]);
  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/alpha/usa`)
      .then((response) => response.json())
      .then((data) => setCountry(data));
  }, []);
  return (
    <div>
      {country.map((country) => (
        <Country countryDetails={country}></Country>
      ))}
    </div>
  );
};

export default ShowCountryDetails;
