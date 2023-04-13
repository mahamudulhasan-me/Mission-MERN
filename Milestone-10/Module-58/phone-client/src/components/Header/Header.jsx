import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <p>
        <Link to={"/phones"}>Phones</Link>
      </p>
      <p>
        <Link to={"/phones"}>Phones</Link>
      </p>
      <p>
        <Link to={"/phones"}>Phones</Link>
      </p>
    </div>
  );
};

export default Header;
