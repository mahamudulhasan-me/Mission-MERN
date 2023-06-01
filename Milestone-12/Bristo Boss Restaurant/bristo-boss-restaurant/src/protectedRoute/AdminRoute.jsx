import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import { AuthContext } from "../provider/AuthProvider";

const AdminRoute = ({ children }) => {
  const { user, loader } = useContext(AuthContext);
  const [isAdmin, isAdminLoading] = useAdmin();
  const location = useLocation();
  if (loader || isAdminLoading) {
    return <p>Loading..</p>;
  }
  if (user && isAdmin) {
    return children;
  }
  return <Navigate to={"/"} state={{ from: location }} replace />;
};

export default AdminRoute;
