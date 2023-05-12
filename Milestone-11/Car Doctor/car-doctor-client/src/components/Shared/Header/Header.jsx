import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import logo from "../../../assets/logo.svg";
import { AuthContext } from "../../../provider/AuthProvider";
const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {
        localStorage.removeItem("car-access-token");
        toast.warning("User Logged Out");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  const navItems = (
    <>
      <li>
        <Link>Home</Link>
      </li>
      <li>
        <Link>About</Link>
      </li>
      <li>
        <Link>Services</Link>
      </li>
      <li>
        <Link>Blog</Link>
      </li>
      <li>
        <Link>Contact</Link>
      </li>
    </>
  );
  return (
    <>
      <div className="navbar bg-base-100 mt-5">
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
              {navItems}
            </ul>
          </div>
          <Link>
            <img src={logo} alt="" className="w-20" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-semibold">
            {navItems}
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full border-2 border-primary">
                  <img src={user.photoURL} />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <Link to={"/appointment-info"}>Appointment</Link>
                </li>
                <li>
                  <Link onClick={handleLogOut}>Logout</Link>
                </li>
              </ul>
            </div>
          ) : (
            <Link to={"/signIn-signUP"} className="myOutline-btn">
              Sign In
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
