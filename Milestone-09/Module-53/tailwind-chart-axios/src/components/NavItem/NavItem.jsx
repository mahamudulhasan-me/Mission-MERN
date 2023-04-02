import React from "react";

const NavItem = ({ menu }) => {
  return (
    <>
      <li key={menu.id} className="hover:bg-violet-600 transition-all p-2">
        <a href={menu.url}>{menu.name}</a>
      </li>
    </>
  );
};

export default NavItem;
