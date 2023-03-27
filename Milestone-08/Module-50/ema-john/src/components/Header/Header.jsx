import React from "react";
import logo from "../../assets/images/Logo.svg";

const Header = () => {
  return (
    <header className="bg-[#1C2B35] h-20 px-[10%] flex justify-between items-center">
      <img src={logo} alt="" />
      <nav className="text-white text-lg space-x-8">
        <a href="./order">Order</a>
        <a href="./review">Order Review</a>
        <a href="./inventory">Manage Inventory</a>
        <a href="./login">Log in</a>
      </nav>
    </header>
  );
};

export default Header;
