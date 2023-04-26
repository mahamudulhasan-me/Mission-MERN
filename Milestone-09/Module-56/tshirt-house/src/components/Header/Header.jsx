import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="px-[10%] flex justify-between border-b py-5">
      <h1>Logo</h1>
      <nav className="space-x-10">
        <Link to={"/"}>Shop</Link>
        <Link to={"/checkout"}>Checkout</Link>
        <Link to={"/contact"}>Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
