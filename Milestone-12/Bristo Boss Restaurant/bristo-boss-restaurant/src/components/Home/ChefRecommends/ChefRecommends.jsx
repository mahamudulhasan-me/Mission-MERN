import React from "react";
import useMenu from "../../../hooks/useMenu";
import MenuCard from "../../Shared/MenuCard/MenuCard";
import SectionHeader from "../../Shared/SectionHeader/SectionHeader";

const ChefRecommends = () => {
  const [menu] = useMenu();
  const popularMenu = menu.filter((item) => item.category === "popular");
  return (
    <div className="my-20 w-4/5 mx-auto ">
      <SectionHeader title="CHEF RECOMMENDS" subTitle="Should Try" />
      <div className="grid grid-cols-3 gap-10">
        {popularMenu
          .slice(1, 4)
          .reverse()
          .map((item) => (
            <MenuCard key={item._id} menuDetails={item} />
          ))}
      </div>
    </div>
  );
};

export default ChefRecommends;
