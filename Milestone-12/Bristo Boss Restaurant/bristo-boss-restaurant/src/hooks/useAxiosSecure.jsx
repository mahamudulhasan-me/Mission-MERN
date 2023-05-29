import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const useAxiosSecure = () => {
  const { lotOut } = useContext(AuthContext);
  return <div></div>;
};

export default useAxiosSecure;
