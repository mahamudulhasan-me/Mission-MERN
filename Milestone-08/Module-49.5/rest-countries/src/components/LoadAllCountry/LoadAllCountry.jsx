import { useEffect, useState } from "react";
import LoadCountry from "../LoadCountry/LoadCountry";
import OpenModal from "../ShowAllCountry/OpenModal";
import ShowCountry from "../ShowAllCountry/ShowCountry";
import "./LoadAllCountry.css";

const LoadAllCountry = () => {
  const [countries, setCountries] = useState([]);
  const [uniqueId, setUniqueId] = useState(null);
  console.log(uniqueId);
  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/all`)
      .then((response) => response.json())
      .then((data) => setCountries(data));
  }, []);
  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/alpha/${uniqueId}`)
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, [uniqueId]);
  return (
    <div className="w-4/5 mx-auto">
      <LoadCountry cca3={uniqueId} />
      <h2 className="text-3xl font-bold text-center">
        Countries and Regions of the World from A to Z
      </h2>
      <div className="flex justify-between my-10 border-b">
        <div>
          <h3 className="text-2xl font-semibold">World Countries List</h3>
          <p className="text-xl">
            Links in the list lead to the corresponding country profile.
          </p>
        </div>
        <div>
          <input
            type="search"
            name=""
            id=""
            placeholder="Search by Country Name"
            className="px-5 py-2 bg-white rounded-md text-slate-800"
          />
          <button className="px-5 py-2 bg-violet-500 m-3 rounded-md">
            Search
          </button>
        </div>
      </div>
      <div className="flex justify-around text-xl font-semibold text-center text-white items-center sticky">
        <p className="bg-orange-300 w-full py-3">Flag</p>
        <p className="bg-violet-400 w-full py-3">Name</p>
        <p className="bg-rose-500 w-full py-3">Official Name</p>
        <p className="bg-green-400 w-full py-3">Region</p>
      </div>
      <div>
        {countries.map((country) => (
          <ShowCountry
            key={country.cca3}
            country={country}
            uniqueId={setUniqueId}
          ></ShowCountry>
        ))}
      </div>
      <OpenModal />
    </div>
  );
};

export default LoadAllCountry;
