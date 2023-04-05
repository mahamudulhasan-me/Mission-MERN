import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/Logo.svg";

const Header = () => {
  return (
    <header className="bg-[#1C2B35] h-20 px-[10%] flex justify-between items-center">
      <img src={logo} alt="" />
      <nav className="text-white text-lg space-x-8">
        <Link to={"/"}>Shop</Link>
        <Link to={"/order"}>Order</Link>
        <Link to={"/inventory"}>Manage Inventory</Link>
        <Link to={"/login"}>Log in</Link>
      </nav>
    </header>
  );
};

export default Header;
