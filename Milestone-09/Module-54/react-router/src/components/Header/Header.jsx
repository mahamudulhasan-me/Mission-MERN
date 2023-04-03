import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="./about">About</Link>
        </li>
        <li>
          <Link to="./posts">Posts</Link>
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
    </nav>
  );
};

export default Header;
