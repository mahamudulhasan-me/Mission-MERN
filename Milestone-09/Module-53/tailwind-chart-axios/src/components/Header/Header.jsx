import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import React, { useEffect, useState } from "react";
import NavItem from "../NavItem/NavItem";
const Header = () => {
  const [menu, setMenu] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuOpen = (value) => {
    setIsMenuOpen(value);
  };
  useEffect(() => {
    fetch(`menu.json`)
      .then((response) => response.json())
      .then((menu) => setMenu(menu));
  }, []);
  return (
    <header className="flex px-[10%] justify-between py-3 border-b items-center bg-violet-500">
      <img
        src="https://shorten.world/gRVJa"
        alt=""
        className="w-16 h-16 rounded-full ring"
      />
      <nav>
        <div className="md:hidden">
          {isMenuOpen ? (
            <XMarkIcon
              className="w-10 h-10 text-rose-600 cursor-pointer"
              onClick={() => menuOpen(!isMenuOpen)}
            />
          ) : (
            <Bars3Icon
              className="w-10 h-10 cursor-pointer"
              onClick={() => menuOpen(!isMenuOpen)}
            />
          )}
        </div>
        <div>
          <ul
            className={`${
              isMenuOpen
                ? "right-0 top-20 mt-2 px-5 duration-200"
                : "-right-36 top-20 mt-2 hidden"
            } md:flex md:static absolute  md:space-x-6 md:bg-violet-500 bg-violet-300 text-white text-xl`}
          >
            {menu.map((item) => (
              <NavItem key={item.id} menu={item} />
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
