import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import banner from "../../../assets/shop/banner2.jpg";
import MenuCard from "../MenuCard/MenuCard";
import PagesTopBanner from "../PageTopBanner/PageTopBanner";
const Shop = () => {
  const { menu } = useParams();
  const [menuCategory, setMenuCategory] = useState(menu);
  const [menuByCategory, setMenuByCategory] = useState([]);
  const [loader, setLoader] = useState(false);
  console.log(menu);
  useEffect(() => {
    fetch(`https://bristo-boss-server-psi.vercel.app/menu`)
      .then((response) => response.json())
      .then((data) => {
        setMenuByCategory(
          data.filter((item) => item.category === menuCategory)
        );
        setLoader(true);
      });
  }, [menuCategory]);
  return (
    <div>
      <PagesTopBanner
        image={banner}
        title="Our Shop"
        subtitle="Would you like to try a dish?"
      />
      <div className="mt-16">
        <div>
          <ul className="flex font-semibold justify-center items-center space-x-4 font-cinzel menu-tab mb-10">
            <Link to={"/shop/pizza"} onClick={() => setMenuCategory("pizza")}>
              <li className={`${menuCategory === "pizza" && "active-tab"}`}>
                Pizza
              </li>
            </Link>
            <Link to={"/shop/soup"} onClick={() => setMenuCategory("soup")}>
              <li className={`${menuCategory === "soup" && "active-tab"}`}>
                Soup
              </li>
            </Link>
            <Link
              to={"/shop/dessert"}
              onClick={() => setMenuCategory("dessert")}
            >
              <li className={`${menuCategory === "dessert" && "active-tab"}`}>
                Dessert
              </li>
            </Link>
            <Link to={"/shop/salad"} onClick={() => setMenuCategory("salad")}>
              <li className={`${menuCategory === "salad" && "active-tab"}`}>
                Salad
              </li>
            </Link>
            <Link to={"/shop/drinks"} onClick={() => setMenuCategory("drinks")}>
              <li className={`${menuCategory === "drinks" && "active-tab"}`}>
                Drinks
              </li>
            </Link>
          </ul>
        </div>
        <div className="grid grid-cols-3 justify-between items-stretch w-4/5 mx-auto gap-8">
          {menuByCategory.map((item) => (
            <MenuCard key={item._id} menuDetails={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
