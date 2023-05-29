import React from "react";
import { Link } from "react-router-dom";

const DashboardNavItem = ({ to, icon: Icon, name }) => {
  return (
    <li>
      <Link
        to={to}
        rel="noopener noreferrer"
        href="#"
        className="flex items-center p-2  rounded-md"
      >
        <Icon size={24} />
        <span>{name}</span>
      </Link>
    </li>
  );
};

export default DashboardNavItem;
