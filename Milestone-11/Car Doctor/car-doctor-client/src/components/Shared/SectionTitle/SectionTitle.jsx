import React from "react";

const SectionTitle = ({ section, title }) => {
  return (
    <div className="w-1/2 mx-auto text-center">
      <p className="font-bold text-xl text-primary">{section}</p>
      <h2 className="font-bold text-4xl">{title}</h2>
      <p>
        The majority have suffered alteration in some form, by injected humour,
        or randomised words which don&apos;t look even slightly believable.{" "}
      </p>
    </div>
  );
};

export default SectionTitle;
