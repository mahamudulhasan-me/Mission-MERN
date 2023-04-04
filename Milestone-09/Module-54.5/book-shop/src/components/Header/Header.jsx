import React from "react";
import { Link } from "react-router-dom";
import ActiveLink from "../ActiveLink/ActiveLink";

const Header = () => {
  return (
    <div className="px-[10%] py-3 bg-violet-500 flex justify-between items-center text-white">
      <Link to={"./"} className="flex">
        <p>icon</p>
        <p>Logo</p>
      </Link>
      <nav>
        <ul className="flex space-x-3">
          <li>
            <ActiveLink to={"/"}>Home</ActiveLink>
          </li>
          <li>
            <ActiveLink to={"/books"}>Books</ActiveLink>
          </li>
          <li>
            <ActiveLink to={"/about-us"}>About us</ActiveLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
