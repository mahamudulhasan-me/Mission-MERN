import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import ActiveLink from "../ActiveLink/ActiveLink";
import "./Header.css";

const Header = () => {
  const navigation = useNavigation();
  return (
    <div>
      <nav>
        <ul>
          <li>
            <ActiveLink to="/">Home</ActiveLink>
          </li>
          <li>
            <ActiveLink to="./about">About</ActiveLink>
          </li>
          <li>
            <ActiveLink to="./posts">Posts</ActiveLink>
          </li>
          <li>
            <ActiveLink to="./friends">Friends</ActiveLink>
          </li>
          <li>
            <ActiveLink to="./services">Services</ActiveLink>
          </li>
          <li>
            <ActiveLink to="./contact">Contact</ActiveLink>
          </li>
        </ul>
      </nav>
      <p>{navigation.state === "loading" ? "Loading...." : ""}</p>
      <Outlet />
    </div>
  );
};

export default Header;
