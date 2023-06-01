import React from "react";
import { AiTwotoneHome } from "react-icons/ai";
import { BsJournalBookmarkFill } from "react-icons/bs";
import { FaUsers, FaUtensils } from "react-icons/fa";
import { TfiMenuAlt } from "react-icons/tfi";

import useCart from "../../../../hooks/useCart";
import DashboardNavItem from "../../../Shared/DashboardNavItem/DashboardNavItem";

const AdminNavItems = () => {
  const [cart] = useCart();
  return (
    <>
      <DashboardNavItem
        to={"/dashboard"}
        icon={AiTwotoneHome}
        name="Admin Home"
      />
      <DashboardNavItem
        to={"/dashboard/add-item"}
        icon={FaUtensils}
        name="Add Item"
      />
      <DashboardNavItem
        to={"/dashboard/manage-items"}
        icon={TfiMenuAlt}
        name="Manage Items"
      />
      <DashboardNavItem
        to={"/dashboard"}
        icon={BsJournalBookmarkFill}
        name="Manage Booking"
      />
      <DashboardNavItem
        to={"/dashboard/all-user"}
        icon={FaUsers}
        name="All Users"
      />
    </>
  );
};

export default AdminNavItems;
