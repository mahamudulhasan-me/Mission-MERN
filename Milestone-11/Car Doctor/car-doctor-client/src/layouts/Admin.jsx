import React from "react";
import { Outlet } from "react-router-dom";
import AdminHeader from "../admin/Header/AdminHeader";

const Admin = () => {
  return (
    <div>
      <AdminHeader />

      <Outlet />
    </div>
  );
};

export default Admin;
