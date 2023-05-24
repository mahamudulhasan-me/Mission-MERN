import React, { useContext } from "react";
import { AwesomeButton } from "react-awesome-button";
import Headroom from "react-headroom";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import logo from "../../../assets/images/Logo.png";
import { AuthContext } from "../../../provider/AuthProvider";
import ActiveLink from "../ActiveLink/ActiveLink";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  // handle logout
  const handleLogOut = () => {
    logOut()
      .then(() => toast.warning("You are logged out!"))
      .catch((err) => toast.error(err.message));
  };
  const navOption = (
    <>
      <ActiveLink to={"/"}>
        <li>Home</li>{" "}
      </ActiveLink>

      <ActiveLink to={"/blogs"}>
        <li>Blog</li>
      </ActiveLink>

      <ActiveLink to={"/allToys"}>
        <li>All Toys</li>
      </ActiveLink>

      {user && (
        <>
          <ActiveLink to={`/my-toys/${user?.uid}`}>
            <li>My Toys</li>
          </ActiveLink>

          <ActiveLink to={"/add-a-toy"}>
            <li>Add A Toy</li>
          </ActiveLink>
        </>
      )}
    </>
  );
  return (
    <Headroom>
      <div className=" px-[10%] navbar bg-pri text-white font-poppins font-semibold z-50">
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
              className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52 bg-pri space-y-3 bg-opacity-80"
            >
              {navOption}
            </ul>
          </div>
          <Link>
            <img src={logo} alt="toy town" className="w-4/5" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className=" menu-horizontal px-1 nav relative">{navOption}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="flex justify-center items-center gap-2 ">
              <div className=" w-12 h-12 rounded-full ring-2 hover:ring-4 duration-1000 ring-sec">
                <div
                  className="tooltip z-50 hover:tooltip-open tooltip-left"
                  data-tip={user?.displayName && user?.displayName}
                >
                  <img
                    src={user?.photoURL}
                    alt=""
                    className=" w-12 h-12 rounded-full"
                  />
                </div>
              </div>

              <Link onClick={handleLogOut}>
                <AwesomeButton type="secondary">Log Out</AwesomeButton>
              </Link>
            </div>
          ) : (
            <Link to={"/signin"}>
              <AwesomeButton type="secondary">Sign In</AwesomeButton>
            </Link>
          )}
        </div>
      </div>
    </Headroom>
  );
};

export default Header;
