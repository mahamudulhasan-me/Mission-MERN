import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const ProtectedRoute = ({ children }) => {
  const { user, loader } = useContext(AuthContext);

  if (loader) {
    return <p>Loading...</p>;
  }
  if (!user) {
    return <Navigate to={"/signIn-signUp"} />;
  }
  return children;
};

export default ProtectedRoute;
