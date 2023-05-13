import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { FadeLoader } from "react-spinners";
import { AuthContext } from "../provider/AuthProvider";

const ProtectedRoute = ({ children }) => {
  const { user, loader } = useContext(AuthContext);
  const location = useLocation();
  if (loader) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        {" "}
        <FadeLoader color="#FF3811" />
      </div>
    );
  }
  if (!user) {
    return (
      <Navigate to={"/signIn-signUp"} state={{ from: location }} replace />
    );
  }
  return children;
};

export default ProtectedRoute;
