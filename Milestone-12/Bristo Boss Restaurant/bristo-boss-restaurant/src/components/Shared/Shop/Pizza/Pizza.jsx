import React from "react";
import useMenu from "../../../../hooks/useMenu";
import MenuItem from "../../MenuItem/MenuItem";

const Pizza = () => {
  const [allItem] = useMenu();
  const pizza = allItem.filter((item) => item.category === "pizza");
  return (
    <div>
      {pizza.map((item) => (
        <MenuItem key={item._id} menuDetails={item} />
      ))}
    </div>
  );
};

export default Pizza;
