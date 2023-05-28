import React from "react";
import { AiTwotoneHome } from "react-icons/ai";
import {
  FaCalendarAlt,
  FaCartPlus,
  FaClipboardCheck,
  FaHome,
  FaShoppingBag,
  FaWallet,
} from "react-icons/fa";
import { MdContactPhone, MdRateReview, MdRestaurantMenu } from "react-icons/md";
import { Link } from "react-router-dom";
import useCart from "../../../hooks/useCart";
const Sidebar = () => {
  const [cart] = useCart();
  return (
    <div className="drawer drawer-mobile">
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
              <li>
                <Link
                  rel="noopener noreferrer"
                  href="#"
                  className="flex items-center p-2  rounded-md"
                >
                  <AiTwotoneHome size={24} />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link className="flex items-center p-2  rounded-md">
                  <FaCalendarAlt size={24} />
                  <span>Reservation</span>
                </Link>
              </li>

              <li>
                <Link className="flex items-center p-2  rounded-md">
                  <FaWallet size={24} />
                  <span>Payment History</span>
                </Link>
              </li>
              <li>
                <Link
                  to={"/dashboard/my-cart"}
                  className="flex items-center p-2  rounded-md "
                >
                  <FaCartPlus size={24} />
                  <span className="relative">
                    My Cart{" "}
                    <span className="absolute -right-6 bottom-2 px-1 rounded-xl text-yell bg-slate-900">
                      {cart?.length}
                    </span>
                  </span>
                </Link>
              </li>
              <li>
                <Link className="flex items-center p-2  rounded-md">
                  <MdRateReview size={24} />
                  <span>Add Review</span>
                </Link>
              </li>
              <li>
                <Link className="flex items-center p-2  rounded-md">
                  <FaClipboardCheck size={24} />
                  <span>My Booking</span>
                </Link>
              </li>
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
