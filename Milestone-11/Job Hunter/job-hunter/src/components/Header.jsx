import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => alert("Logged out"))
      .catch((err) => console.log(err));
  };
  const navOptions = (
    <>
      <li>
        <Link to={"/"}>Job Post</Link>
      </li>
      <li>
        <Link to={"/alljobs"}>All Jobs</Link>
      </li>
      <li>
        <Link to={`/myjobs/${user.uid}`}>My Job</Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 font-semibold">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navOptions}
          </ul>
        </div>
        <Link to={"/"} className="btn btn-ghost normal-case text-xl">
          Job Hunter
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navOptions}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <Link onClick={handleLogout} to={"/signin"} className="btn">
            Log Out
          </Link>
        ) : (
          <Link to={"/signin"} className="btn">
            Sign In
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
