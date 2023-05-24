import React from "react";

import bg from "../../../assets/home/chef-service.jpg";
import RecipeBanner from "../../Shared/RecipeBanner/RecipeBanner";
const ChefService = () => {
  return (
    <>
      <RecipeBanner
        image={bg}
        title="Bistro Boss"
        subtitle=" Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Necessitatibus, libero accusamus laborum deserunt ratione dolor
    officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
    nihil iusto ducimus incidunt quibusdam nemo."
      />
    </>
  );
};

export default ChefService;
