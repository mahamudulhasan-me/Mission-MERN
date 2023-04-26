import React, { useEffect, useState } from "react";
import AiCard from "../AI Card/AiCard";
import Button from "../Button/Button";

const AIContainer = () => {
  const [aiResources, setAiResources] = useState([]);
  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/ai/tools")
      .then((response) => response.json())
      .then((data) => setAiResources(data.data.tools));
  }, []);
  return (
    <div className=" my-12 px-[10%]">
      <h1 className="text-3xl font-semibold my-6 text-center">
        AI Universe Hub
      </h1>
      <Button>Sort by Date</Button>
      <div className="grid grid-cols-3 gap-10">
        {aiResources.map((aiResource) => (
          <AiCard aiResource={aiResource} key={aiResource.id} />
        ))}
      </div>
      <Button>See More</Button>
    </div>
  );
};

export default AIContainer;
