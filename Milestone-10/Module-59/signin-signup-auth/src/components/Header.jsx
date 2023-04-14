import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Link to={"/signin"}>Sign In</Link>
      <Link to={"/signup"}>Sign Up</Link>
    </div>
  );
};

export default Header;
