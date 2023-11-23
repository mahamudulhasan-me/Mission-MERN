import React, { useContext, useState } from "react";
import { FaAngleDown, FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import useAdmin from "../../../hooks/useAdmin";
import useCart from "../../../hooks/useCart";
import { AuthContext } from "../../../provider/AuthProvider";
const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart();
  const [isAdmin] = useAdmin();
  console.log(cart);
  console.log({ user });
  const handleLogout = () => {
    logOut()
      .then(() => toast.warning("Logged out"))
      .catch((err) => toast.error(err.message));
  };
  const navItems = (
    <>
      <li>
        <Link>Home</Link>
      </li>
      <Link to={"./our-menu"}>
        <li>Our Menu</li>
      </Link>
      <Link to={"./shop/pizza"}>
        <li
          onMouseOver={() => setOpenMenu(true)}
          className=" group relative flex justify-start items-start"
        >
          <span className="flex group">
            Shop
            <FaAngleDown />
          </span>
          <div
            onClick={() => setOpenMenu(false)}
            onMouseLeave={() => setOpenMenu(false)}
          >
            {openMenu && (
              <ul className="sub-menu">
                <Link to={"./shop/pizza"}>
                  <li>Pizza</li>
                </Link>
                <Link to={"./shop/salad"}>
                  <li>Salad</li>
                </Link>
                <Link to={"./shop/soup"}>
                  <li>Soup</li>
                </Link>
                <Link to={"./shop/dessert"}>
                  <li>Dessert</li>
                </Link>
                <Link to={"./shop/drinks"}>
                  <li>Drinks</li>
                </Link>
              </ul>
            )}
          </div>
        </li>
      </Link>
      <li>
        <Link>Contact Us</Link>
      </li>

      {isAdmin ? (
        <Link to={"/dashboard/admin"}>
          <li>Dashboard</li>
        </Link>
      ) : (
        <Link to={"/dashboard/user"}>
          <li>Dashboard</li>
        </Link>
      )}

      <li>
        <Link>Our Shop</Link>
      </li>
      <Link to={"/dashboard/my-cart"}>
        <div className="indicator mx-2">
          <span className="indicator-item badge badge-primary">
            {cart.length || 0}
          </span>
          <FaCartPlus size={28} className="" />
        </div>
      </Link>

      {user ? (
        <>
          <div className="w-10 h-10 ring rounded-full ring-yell">
            <img
              src={user?.photoURL}
              alt=""
              title={user?.displayName}
              className="w-10 h-10 rounded-full"
            />
          </div>
          <Link onClick={handleLogout}>
            <button className="bg-yell px-3 py-2 rounded-md font-cinzel font-semibold">
              Log out
            </button>
          </Link>
        </>
      ) : (
        <Link to={"./login"}>
          <button className="bg-yell px-3 py-2 rounded-md font-cinzel font-semibold">
            Log in
          </button>
        </Link>
      )}
    </>
  );
  return (
    <div className=" bg-slate-950 bg-opacity-40 text-white fixed z-50 w-full">
      <div className="navbar px-[8%] ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>
          <Link className="font-cinzel">
            <span className="font-semibold uppercase text-2xl">
              BISTRO BOSS
            </span>
            <br />
            <span className="text-xl tracking-[0.3rem]">Restaurant</span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="my-menu menu-horizontal space-x-2 flex items-center">
            {navItems}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
