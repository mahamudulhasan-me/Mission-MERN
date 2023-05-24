import React from "react";
import MenuItem from "../../../Shared/MenuItem/MenuItem";
import PrimaryBtn from "../../../Shared/PrimaryBtn/PrimaryBtn";
import SectionHeader from "../../../Shared/SectionHeader/SectionHeader";

const OfferMenu = ({ menuItems }) => {
  return (
    <div className="w-4/5 mx-auto">
      <SectionHeader title="TODAY'S OFFER" subTitle="Don't Miss" />
      <div className="grid grid-cols-2 gap-10">
        {menuItems.map((menu) => (
          <MenuItem key={menu._id} menuDetails={menu} />
        ))}

        <PrimaryBtn>ORDER YOUR FAVORITE FOOD</PrimaryBtn>
      </div>
    </div>
  );
};

export default OfferMenu;
