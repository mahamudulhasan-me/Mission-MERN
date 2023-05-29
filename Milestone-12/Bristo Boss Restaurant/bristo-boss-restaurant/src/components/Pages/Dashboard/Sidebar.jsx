import React from "react";
import { FaHome, FaShoppingBag } from "react-icons/fa";
import { MdContactPhone, MdRestaurantMenu } from "react-icons/md";
import { Link } from "react-router-dom";
import AdminNavItems from "./AdminNavItems/AdminNavItems";
import UserNavItems from "./UserNavItems/UserNavItems";
const Sidebar = () => {
  const admin = true;
  return (
    <div className="drawer drawer-mobile fixed">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* <!-- Page content here --> */}
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

        {/* <!-- Sidebar content here --> */}
        <div className="h-full p-3 space-y-2 w-60 text-gray-900 font-cinzel bg-yell font-semibold">
          <div className=" p-2">
            <Link className="font-cinzel">
              <span className="font-semibold uppercase text-2xl">
                BISTRO BOSS
              </span>
              <br />
              <span className="text-xl tracking-[0.3rem]">Restaurant</span>
            </Link>
          </div>
          <div className="dashboard-item menu divide-y divide-gray-700">
            <ul className="pt-2 pb-4 space-y-1">
              {admin ? <AdminNavItems /> : <UserNavItems />}
            </ul>
            <ul className="pt-4 pb-2 space-y-1 text-sm">
              <li>
                <Link to={"/"} className="flex items-center p-2  rounded-md">
                  <FaHome size={24} />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link
                  to={"/our-menu"}
                  className="flex items-center p-2  rounded-md"
                >
                  <MdRestaurantMenu size={24} />
                  <span>Menu</span>
                </Link>
              </li>
              <li>
                <Link
                  to={"/shop/pizza"}
                  className="flex items-center p-2  rounded-md"
                >
                  <FaShoppingBag size={24} />
                  <span>Shop</span>
                </Link>
              </li>
              <li>
                <Link className="flex items-center p-2  rounded-md">
                  <MdContactPhone size={24} />
                  <span>Contact</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
