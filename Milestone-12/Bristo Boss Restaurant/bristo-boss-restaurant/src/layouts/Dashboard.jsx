import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Pages/Dashboard/Sidebar";
const Dashboard = () => {
  return (
    <div className="w-4/5 mx-auto grid grid-cols-12 bg-[#F6F6F6]">
      <div className="col-span-3">
        <Sidebar />
      </div>
      <div className="col-span-9 p-5">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
