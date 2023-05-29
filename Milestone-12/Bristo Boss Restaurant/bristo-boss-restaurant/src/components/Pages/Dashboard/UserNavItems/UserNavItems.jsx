import React from "react";
import { AiTwotoneHome } from "react-icons/ai";
import {
  FaCalendarAlt,
  FaCartPlus,
  FaClipboardCheck,
  FaWallet,
} from "react-icons/fa";
import { MdRateReview } from "react-icons/md";
import useCart from "../../../../hooks/useCart";
import DashboardNavItem from "../../../Shared/DashboardNavItem/DashboardNavItem";

const UserNavItems = () => {
  const [cart] = useCart();
  return (
    <>
      <DashboardNavItem to={"/dashboard"} icon={AiTwotoneHome} name="Home" />
      <DashboardNavItem
        to={"/dashboard"}
        icon={FaCalendarAlt}
        name="Reservation"
      />
      <DashboardNavItem
        to={"/dashboard"}
        icon={FaWallet}
        name="Payment History"
      />
      <DashboardNavItem
        to={"/dashboard/my-cart"}
        icon={FaCartPlus}
        name={
          <span className="relative">
            My Cart{" "}
            <span className="absolute -right-6 bottom-2 px-1 rounded-xl text-yell bg-slate-900">
              {cart?.length}
            </span>
          </span>
        }
      />
      <DashboardNavItem
        to={"/dashboard"}
        icon={MdRateReview}
        name="Add Review"
      />
      <DashboardNavItem
        to={"/dashboard"}
        icon={FaClipboardCheck}
        name="My Booking"
      />
    </>
  );
};

export default UserNavItems;
