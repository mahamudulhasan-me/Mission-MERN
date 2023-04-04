import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import ActiveLink from "../ActiveLink/ActiveLink";

const Header = () => {
  const navigation = useNavigation();
  return (
    <div>
      <header className="flex justify-between px-[10%] mx-auto py-5 bg-violet-400 text-white items-center">
        <img
          src="https://shorten.world/gRVJa"
          alt=""
          className="w-12 h-12 rounded-full"
        />
        <nav>
          <ul className="flex space-x-5 font-semibold">
            <li>
              <ActiveLink to={"/"}>Food Item</ActiveLink>
            </li>
            <li>
              <ActiveLink to={"/restaurant"}>Restaurant </ActiveLink>
            </li>
            <li>
              <ActiveLink to={"/about"}>About</ActiveLink>
            </li>
            <li>
              <ActiveLink to={"/services"}>Services</ActiveLink>
            </li>
            <li>
              <ActiveLink to={"/contact"}>Contact</ActiveLink>
            </li>
          </ul>
        </nav>
      </header>
      <p>{navigation.state == "loading" ? "loading..." : <Outlet />}</p>
    </div>
  );
};

export default Header;
