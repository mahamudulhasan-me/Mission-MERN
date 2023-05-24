import React from "react";
import banner from "../../../../assets/menu/dessert-bg.jpeg";
import MenuItem from "../../../Shared/MenuItem/MenuItem";
import PrimaryBtn from "../../../Shared/PrimaryBtn/PrimaryBtn";
import RecipeBanner from "../../../Shared/RecipeBanner/RecipeBanner";
const DessertsMenu = ({ menuItems }) => {
  return (
    <div>
      <RecipeBanner
        image={banner}
        title="DESSERTS"
        subtitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      />
      <div className="w-4/5 mx-auto grid grid-cols-2 gap-10">
        {menuItems.map((menu) => (
          <MenuItem key={menu._id} menuDetails={menu} />
        ))}

        <PrimaryBtn>ORDER YOUR FAVORITE FOOD</PrimaryBtn>
      </div>
    </div>
  );
};

export default DessertsMenu;
