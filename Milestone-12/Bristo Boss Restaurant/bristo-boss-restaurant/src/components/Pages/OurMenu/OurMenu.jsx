import React from "react";
import banner from "../../../assets/menu/banner3.jpg";
import useMenu from "../../../hooks/useMenu";
import PageTopBanner from "../../Shared/PageTopBanner/PageTopBanner";
import DessertsMenu from "./DessertsMenu/DessertsMenu";
import OfferMenu from "./OfferMenu/OfferMenu";
import PizzaMenu from "./PizzaMenu/PizzaMenu";
import SaladMenu from "./SaladMenu/SaladMenu";
import SoupMenu from "./SoupMenu/SoupMenu";

const OurMenu = () => {
  const [allMenu] = useMenu();
  const offeredMenu = allMenu.filter((menu) => menu.category === "offered");
  const pizzaMenu = allMenu.filter((menu) => menu.category === "pizza");
  const dessertMenu = allMenu.filter((menu) => menu.category === "dessert");
  const saladMenu = allMenu.filter((menu) => menu.category === "salad");
  const soupMenu = allMenu.filter((menu) => menu.category === "soup");
  return (
    <div>
      <PageTopBanner
        image={banner}
        title="Our Menu"
        subtitle="Would you like to try a dish?"
      />
      <OfferMenu menuItems={offeredMenu} />
      <DessertsMenu menuItems={dessertMenu} />
      <PizzaMenu menuItems={pizzaMenu} />
      <SoupMenu menuItems={soupMenu} />
      <SaladMenu menuItems={saladMenu} />
    </div>
  );
};

export default OurMenu;
