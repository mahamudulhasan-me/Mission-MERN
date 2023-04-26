import {
  faArrowCircleRight,
  faCalendarDays,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
const AiCard = (props) => {
  const { description, features, image, name, published_in } = props.aiResource;
  return (
    <div className="border p-5 rounded-lg">
      <img src={image} alt="" className="rounded-lg" />
      <div className="border-b">
        <h2 className="font-semibold text-2xl">Features</h2>
        {features.map((feature, index) => (
          <p>
            {index + 1}. {feature}
          </p>
        ))}
      </div>
      <div>
        <div className="flex justify-between items-center">
          <div>
            <h2 className="font-semibold text-2xl">{name}</h2>
            <div className="flex gap-2 items-center">
              <FontAwesomeIcon icon={faCalendarDays} />
              <p>{published_in}</p>
            </div>
          </div>
          <FontAwesomeIcon
            icon={faArrowCircleRight}
            className="text-4xl cursor-pointer text-rose-500"
          />
        </div>
      </div>
    </div>
  );
};

export default AiCard;
