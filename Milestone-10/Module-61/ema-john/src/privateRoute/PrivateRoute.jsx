import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthProviderContext } from "../components/AuthProvider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loader } = useContext(AuthProviderContext);
  const location = useLocation();
  if (loader) {
    return <div className="w-5 h-5 rounded-full border-2 animate-spin"></div>;
  }
  if (user) {
    return children;
  }
  return <Navigate to={"/login"} state={location.pathname} replace />;
};
export default PrivateRoute;
