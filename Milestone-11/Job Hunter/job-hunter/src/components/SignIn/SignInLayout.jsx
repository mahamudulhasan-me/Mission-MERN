import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header";

const SignInLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default SignInLayout;
