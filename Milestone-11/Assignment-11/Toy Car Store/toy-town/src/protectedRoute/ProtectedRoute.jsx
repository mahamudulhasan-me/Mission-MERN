import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import Preloader from "../components/Shared/Preloader/Preloader";
import { AuthContext } from "../provider/AuthProvider";

const ProtectedRoute = ({ children }) => {
  const { user, isLoading } = useContext(AuthContext);
  const location = useLocation();

  if (isLoading) {
    return <Preloader />;
  }
  if (!user) {
    return <Navigate to={"/signin"} state={location.pathname} replace />;
  }
  return children;
};

export default ProtectedRoute;
