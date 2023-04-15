import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <div className="navbar bg-base-200">
        <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
        <Link className="btn btn-ghost normal-case text-xl" to={"/"}>
          Home
        </Link>
        <Link className="btn btn-ghost normal-case text-xl" to={"register"}>
          Register
        </Link>
        <Link className="btn btn-ghost normal-case text-xl" to={"signIn"}>
          SignIn
        </Link>
      </div>
    </nav>
  );
};

export default Header;
