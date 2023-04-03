import React from "react";
import { Link, Outlet } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="./about">About</Link>
        </li>
        <li>
          <Link to="./friends">Friends</Link>
        </li>
        <li>
          <Link to="./services">Services</Link>
        </li>
        <li>
          <Link to="./contact">Contact</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default Header;
