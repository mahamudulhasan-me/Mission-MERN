import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import React, { useEffect, useState } from "react";
const Header = () => {
  const [menu, setMenu] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const menuOpen = (value) => {
    setIsMenuOpen(value);
    console.log(isMenuOpen);
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
            <Bars3Icon
              className="w-10 h-10 cursor-pointer"
              onClick={() => menuOpen(!isMenuOpen)}
            />
          ) : (
            <XMarkIcon
              className="w-10 h-10 cursor-pointer"
              onClick={() => menuOpen(!isMenuOpen)}
            />
          )}
          {/* <XMarkIcon /> */}
        </div>
        <div>
          <ul
            className={`md:flex md:static justify-center absolute  duration-150 space-x-8 text-white bg-violet-400  text-lg ${
              isMenuOpen ? "-top-48" : "top-20"
            }`}
          >
            {menu.map((item) => (
              <li key={item.id}>
                <a href={item.url}>{item.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
