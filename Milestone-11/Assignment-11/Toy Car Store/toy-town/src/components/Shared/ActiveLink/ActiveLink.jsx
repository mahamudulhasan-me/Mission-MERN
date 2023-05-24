import React from "react";
import { NavLink } from "react-router-dom";

const ActiveLink = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? "bg-sec duration-200 ease-in rounded-md relative " : ""
      }
    >
      {children}
    </NavLink>
  );
};

export default ActiveLink;
