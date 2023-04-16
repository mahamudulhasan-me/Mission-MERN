import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../providers/UserProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(UserContext);
  if (loading) {
    return "Loading...";
  }
  if (user) {
    return children;
  }
  return <Navigate to={"/signIn"} replace={true} />;
};

export default PrivateRoute;
