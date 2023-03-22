import React from "react";
import "./ShowCountry.css";

const ShowCountry = (props) => {
  const { name, capital, region, flags, languages } = props.country;
  const language = () => {
    for (const lang in languages) {
      return <span>{languages[lang]}</span>;
    }
  };
  const OpenModal = () => {
    return (
      <>
        <input type="checkbox" id="my-modal" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">
              Congratulations random Internet user!
            </h3>
            <p className="py-4">
              You've been selected for a chance to get one year of subscription
              to use Wikipedia for free!
            </p>
            <div className="modal-action">
              <label htmlFor="my-modal" className="btn">
                Yay!
              </label>
            </div>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="country">
      <img src={flags.png} alt="" />
      <h2 className="text-2xl font-bold">{name.common}</h2>
      <p>Capital: {capital}</p>
      <p>Region: {region}</p>
      <label htmlFor="my-modal" className="btn" onClick={OpenModal}>
        See Details
      </label>
    </div>
  );
};

export default ShowCountry;
